// SloCards Core Application Logic

// Application State
let deck = [];
let activeSession = [];
let currentIndex = 0;
let studyMode = 'flashcard'; // 'flashcard' | 'typing' | 'choice'
let promptLanguage = 'german'; // 'german' (shows German, user guesses Slovak) | 'slovak' (shows Slovak, user guesses German)
let currentCategoryFilter = 'All';
let historyLog = [];
let streak = 0;
let lastStudyDate = '';

// Load data from LocalStorage or fallback to default deck
function initData() {
  const savedDeck = localStorage.getItem('slocards_deck');
  if (savedDeck) {
    try {
      deck = JSON.parse(savedDeck);
    } catch (e) {
      console.error('Error parsing stored deck, falling back to default', e);
      deck = [...DEFAULT_DECK];
    }
  } else {
    deck = [...DEFAULT_DECK];
    saveToStorage();
  }

  const savedHistory = localStorage.getItem('slocards_history');
  if (savedHistory) {
    try {
      historyLog = JSON.parse(savedHistory);
    } catch (e) {
      console.error('Error parsing history log', e);
      historyLog = [];
    }
  }

  const savedStreak = localStorage.getItem('slocards_streak');
  if (savedStreak) streak = parseInt(savedStreak, 10);

  const savedLastDate = localStorage.getItem('slocards_last_date');
  if (savedLastDate) lastStudyDate = savedLastDate;

  checkAndUpdateStreak();
}

function saveToStorage() {
  localStorage.setItem('slocards_deck', JSON.stringify(deck));
  localStorage.setItem('slocards_history', JSON.stringify(historyLog));
  localStorage.setItem('slocards_streak', streak.toString());
  localStorage.setItem('slocards_last_date', lastStudyDate);
}

function checkAndUpdateStreak() {
  const today = new Date().toISOString().split('T')[0];
  if (!lastStudyDate) return;

  const lastDate = new Date(lastStudyDate);
  const currentDate = new Date(today);
  const diffTime = Math.abs(currentDate - lastDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 1) {
    // Streak broken
    streak = 0;
    saveToStorage();
  }
}

function recordStudyEvent() {
  const today = new Date().toISOString().split('T')[0];
  if (lastStudyDate !== today) {
    if (lastStudyDate) {
      const lastDate = new Date(lastStudyDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        streak += 1;
      } else {
        streak = 1;
      }
    } else {
      streak = 1;
    }
    lastStudyDate = today;
    saveToStorage();
  }
}

// UI Tabs management
function setupTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.tab;
      document.getElementById(targetId).classList.add('active');

      if (targetId === 'dashboard') {
        renderDashboard();
      } else if (targetId === 'study') {
        startStudySession();
      } else if (targetId === 'deck') {
        renderDeckViewer();
      }
    });
  });
}

// Render Dashboard
function renderDashboard() {
  // Compute counts
  const totalCards = deck.length;
  const dueCardsCount = deck.filter(isDue).length;
  const masteredCards = deck.filter(c => c.srs && c.srs.reps >= 4).length;

  document.getElementById('stat-total-cards').textContent = totalCards;
  document.getElementById('stat-due-cards').textContent = dueCardsCount;
  document.getElementById('stat-mastered-cards').textContent = masteredCards;
  document.getElementById('dashboard-streak').textContent = `${streak} ${streak === 1 ? 'Tag' : 'Tage'}`;

  // Fill in Category filter in Dashboard/Study setup
  renderCategoryFilters();

  // Render heat map
  renderActivityHeatmap();
}

// Render Activity Heatmap (GitHub style)
function renderActivityHeatmap() {
  const heatmapWrapper = document.getElementById('heatmap-grid');
  if (!heatmapWrapper) return;
  heatmapWrapper.innerHTML = '';

  // Get current date and go back 364 days to start from a Sunday
  const today = new Date();
  const cellsCount = 371; // 53 weeks * 7 days
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - cellsCount + 1);

  // Group historyLog by date
  const studiesByDate = {};
  historyLog.forEach(log => {
    const d = log.date;
    studiesByDate[d] = (studiesByDate[d] || 0) + 1;
  });

  // Align starting date to Sunday
  const startDay = startDate.getDay();
  startDate.setDate(startDate.getDate() - startDay);

  for (let i = 0; i < cellsCount; i++) {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i);
    const dateStr = current.toISOString().split('T')[0];
    const count = studiesByDate[dateStr] || 0;

    let level = '';
    if (count > 0 && count <= 3) level = 'level-1';
    else if (count > 3 && count <= 8) level = 'level-2';
    else if (count > 8 && count <= 15) level = 'level-3';
    else if (count > 15) level = 'level-4';

    const cell = document.createElement('div');
    cell.className = `heatmap-cell ${level}`;
    cell.title = `${dateStr}: ${count} Wiederholungen`;
    heatmapWrapper.appendChild(cell);
  }
}

// Render Category filter tags
function renderCategoryFilters() {
  const filterWrapper = document.getElementById('category-filter-list');
  if (!filterWrapper) return;

  const categories = new Set(deck.map(c => c.category).filter(Boolean));
  
  let html = `<button class="filter-tag ${currentCategoryFilter === 'All' ? 'active' : ''}" data-category="All">Alle</button>`;
  categories.forEach(cat => {
    html += `<button class="filter-tag ${currentCategoryFilter === cat ? 'active' : ''}" data-category="${cat}">${cat}</button>`;
  });

  filterWrapper.innerHTML = html;

  // Add click handlers
  filterWrapper.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      currentCategoryFilter = tag.dataset.category;
      renderCategoryFilters();
      
      // If we are studying, reload active cards
      if (document.getElementById('study').classList.contains('active')) {
        startStudySession();
      }
    });
  });
}

// Text to Speech
function speakText(text, lang = 'sk-SK') {
  if ('speechSynthesis' in window) {
    // Cancel currently playing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    
    // Attempt to locate a native voice
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(v => v.lang.startsWith(lang));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Sprachsynthese wird von Ihrem Browser nicht unterstützt.');
  }
}

// Load voice configurations when speech API loads list of voices
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Warm up the voices list
  };
}

// Study Session logic
function startStudySession() {
  // Filter deck based on selected category
  let filtered = deck;
  if (currentCategoryFilter !== 'All') {
    filtered = deck.filter(c => c.category === currentCategoryFilter);
  }

  // Find due cards. If there are no due cards, we can offer to study new/all cards anyway.
  activeSession = filtered.filter(isDue);
  
  if (activeSession.length === 0) {
    // No due cards, ask if user wants to review all cards from the set
    activeSession = [...filtered];
  }

  // Shuffle active session to enhance active recall
  activeSession.sort(() => Math.random() - 0.5);

  currentIndex = 0;
  updateStudyUI();
}

function updateStudyUI() {
  const cardContainer = document.getElementById('study-card-area');
  const nextSection = document.getElementById('control-area');
  
  if (activeSession.length === 0) {
    cardContainer.innerHTML = `
      <div class="glass-card" style="text-align: center; padding: 3rem 1.5rem;">
        <h2 style="font-size: 2rem; color: var(--color-success); margin-bottom: 1rem;">🎉 Alle Karten wiederholt!</h2>
        <p style="margin-bottom: 2rem;">Sie haben alle fälligen Karten gelernt. Ändern Sie die Kategorie oder importieren Sie mehr Karten.</p>
        <button class="btn-primary" onclick="window.location.reload()">Startseite neu laden</button>
      </div>
    `;
    nextSection.innerHTML = '';
    updateProgressBar(100);
    return;
  }

  const currentCard = activeSession[currentIndex];
  updateProgressBar(((currentIndex) / activeSession.length) * 100);

  // Set card contents depending on prompt language
  const frontLanguageBadge = promptLanguage === 'german' ? 'Deutsch' : 'Slovakisch';
  const backLanguageBadge = promptLanguage === 'german' ? 'Slovakisch' : 'Deutsch';
  
  const frontText = promptLanguage === 'german' ? currentCard.german : currentCard.slovak;
  const backText = promptLanguage === 'german' ? currentCard.slovak : currentCard.german;

  // Let's create the card structures
  cardContainer.innerHTML = `
    <div class="card-perspective">
      <div class="study-card" id="active-study-card">
        <!-- FRONT -->
        <div class="card-face card-face-front">
          <div class="card-top">
            <span class="card-badge">${frontLanguageBadge}</span>
            <span class="card-index">${currentIndex + 1} / ${activeSession.length}</span>
          </div>
          <div class="card-center">
            <div class="term-title">${frontText}</div>
            ${promptLanguage === 'slovak' ? `
              <button class="audio-btn" id="tts-front" title="Aussprache anhören">🔊</button>
            ` : ''}
          </div>
          <div class="card-footer">
            <span>Klicke zum Umdrehen oder drücke <span class="shortcut-hint">Leertaste</span></span>
          </div>
        </div>
        <!-- BACK -->
        <div class="card-face card-face-back">
          <div class="card-top">
            <span class="card-badge">${backLanguageBadge}</span>
            <span class="card-index">${currentIndex + 1} / ${activeSession.length}</span>
          </div>
          <div class="card-center">
            <div class="term-translation">${backText}</div>
            ${promptLanguage === 'german' ? `
              <button class="audio-btn" id="tts-back" title="Aussprache anhören" style="margin-bottom: 1rem;">🔊</button>
            ` : ''}
            
            ${currentCard.sentenceSk ? `
              <div class="context-box">
                <div class="context-label">Beispielsatz:</div>
                <div class="context-sentence">${currentCard.sentenceSk}</div>
                <div class="context-translation">${currentCard.translationDe || ''}</div>
              </div>
            ` : ''}
          </div>
          <div class="card-footer">
            <span style="color: var(--color-secondary);">Kategorie: ${currentCard.category || 'Allgemein'}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind audio clicks
  const ttsFront = document.getElementById('tts-front');
  if (ttsFront) {
    ttsFront.addEventListener('click', (e) => {
      e.stopPropagation();
      speakText(currentCard.slovak);
    });
  }
  const ttsBack = document.getElementById('tts-back');
  if (ttsBack) {
    ttsBack.addEventListener('click', (e) => {
      e.stopPropagation();
      speakText(currentCard.slovak);
    });
  }

  // Setup Study Controls based on studyMode
  setupModeControls(currentCard, backText);
}

function updateProgressBar(percentage) {
  const bar = document.getElementById('session-progress-bar');
  if (bar) {
    bar.style.width = `${percentage}%`;
  }
}

function setupModeControls(currentCard, expectedTranslation) {
  const controlArea = document.getElementById('control-area');
  const studyCard = document.getElementById('active-study-card');

  // Flip action for clicking card
  studyCard.addEventListener('click', () => {
    studyCard.classList.toggle('flipped');
    if (studyCard.classList.contains('flipped') && promptLanguage === 'german') {
      // Auto speech synthesis of Slovak term when revealed
      setTimeout(() => speakText(currentCard.slovak), 300);
    }
  });

  if (studyMode === 'flashcard') {
    controlArea.innerHTML = `
      <div class="control-section">
        <div class="grading-grid" id="grading-controls" style="display: none;">
          <button class="grade-btn btn-again" data-grade="1">
            <span class="grade-name">Wiederholen</span>
            <span class="grade-interval">Sofort</span>
          </button>
          <button class="grade-btn btn-hard" data-grade="2">
            <span class="grade-name">Schwer</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 2)}</span>
          </button>
          <button class="grade-btn btn-good" data-grade="3">
            <span class="grade-name">Gut</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 3)}</span>
          </button>
          <button class="grade-btn btn-easy" data-grade="4">
            <span class="grade-name">Einfach</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 4)}</span>
          </button>
        </div>
        <button class="btn-primary" id="flip-hint-btn" style="padding: 1rem 2.5rem; font-size: 1.1rem; border-radius: 14px;">
          Karte umdrehen
        </button>
      </div>
    `;

    const flipBtn = document.getElementById('flip-hint-btn');
    const gradingControls = document.getElementById('grading-controls');

    flipBtn.addEventListener('click', () => {
      studyCard.classList.add('flipped');
      flipBtn.style.display = 'none';
      gradingControls.style.display = 'grid';
      if (promptLanguage === 'german') {
        speakText(currentCard.slovak);
      }
    });

    // Handle grade selections
    gradingControls.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rating = parseInt(btn.dataset.grade, 10);
        submitSRSFeedback(currentCard, rating);
      });
    });

  } else if (studyMode === 'typing') {
    controlArea.innerHTML = `
      <div class="control-section">
        <div class="typing-box">
          <input type="text" id="typing-input-field" class="typing-input" placeholder="Übersetzung eingeben..." autocomplete="off">
          <button class="submit-btn" id="typing-submit">Antwort prüfen</button>
        </div>
        <div class="comparison-box" id="typing-diff-box"></div>
        <div class="grading-grid" id="grading-controls" style="display: none;">
          <button class="grade-btn btn-again" data-grade="1">
            <span class="grade-name">Falsch</span>
            <span class="grade-interval">Sofort</span>
          </button>
          <button class="grade-btn btn-hard" data-grade="2">
            <span class="grade-name">Schwer</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 2)}</span>
          </button>
          <button class="grade-btn btn-good" data-grade="3">
            <span class="grade-name">Gut</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 3)}</span>
          </button>
          <button class="grade-btn btn-easy" data-grade="4">
            <span class="grade-name">Einfach</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 4)}</span>
          </button>
        </div>
      </div>
    `;

    const typingInput = document.getElementById('typing-input-field');
    const submitBtn = document.getElementById('typing-submit');
    const diffBox = document.getElementById('typing-diff-box');
    const gradingControls = document.getElementById('grading-controls');

    typingInput.focus();

    const verifyAnswer = () => {
      const userInput = typingInput.value.trim();
      if (!userInput) return;

      studyCard.classList.add('flipped');
      if (promptLanguage === 'german') {
        speakText(currentCard.slovak);
      }

      // Compute visual difference
      const diffMarkup = renderDiff(expectedTranslation, userInput);
      diffBox.innerHTML = `
        <div class="comparison-row"><strong>Erwartet:</strong> ${expectedTranslation}</div>
        <div class="comparison-row"><strong>Eingabe:</strong> ${userInput}</div>
        <div class="comparison-row" style="margin-top: 0.5rem; border-top: 1px solid var(--border-glass); padding-top: 0.5rem;">
          <strong>Vergleich:</strong> ${diffMarkup}
        </div>
      `;
      diffBox.style.display = 'block';
      
      // Auto choice logic:
      // If typing is completely correct (ignoring case), default to showing SRS selectors but pre-highlight 'Good'
      submitBtn.style.display = 'none';
      typingInput.disabled = true;
      gradingControls.style.display = 'grid';
    };

    submitBtn.addEventListener('click', verifyAnswer);
    typingInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        verifyAnswer();
      }
    });

    gradingControls.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rating = parseInt(btn.dataset.grade, 10);
        submitSRSFeedback(currentCard, rating);
      });
    });

  } else if (studyMode === 'choice') {
    // Generate multiple choices
    const choices = generateChoices(expectedTranslation);
    
    controlArea.innerHTML = `
      <div class="control-section">
        <div class="choices-grid">
          ${choices.map((choice, idx) => `
            <button class="choice-btn" data-choice="${choice}">${idx + 1}. ${choice}</button>
          `).join('')}
        </div>
        <div class="grading-grid" id="grading-controls" style="display: none;">
          <button class="grade-btn btn-again" data-grade="1">
            <span class="grade-name">Wiederholen</span>
            <span class="grade-interval">Sofort</span>
          </button>
          <button class="grade-btn btn-hard" data-grade="2">
            <span class="grade-name">Schwer</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 2)}</span>
          </button>
          <button class="grade-btn btn-good" data-grade="3">
            <span class="grade-name">Gut</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 3)}</span>
          </button>
          <button class="grade-btn btn-easy" data-grade="4">
            <span class="grade-name">Einfach</span>
            <span class="grade-interval">${calculateNextDays(currentCard, 4)}</span>
          </button>
        </div>
      </div>
    `;

    const choiceBtns = controlArea.querySelectorAll('.choice-btn');
    const gradingControls = document.getElementById('grading-controls');

    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.dataset.choice;
        studyCard.classList.add('flipped');
        if (promptLanguage === 'german') {
          speakText(currentCard.slovak);
        }

        choiceBtns.forEach(b => {
          b.disabled = true;
          if (b.dataset.choice === expectedTranslation) {
            b.classList.add('correct');
          } else if (b.dataset.choice === selected) {
            b.classList.add('wrong');
          }
        });

        gradingControls.style.display = 'grid';
      });
    });

    gradingControls.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rating = parseInt(btn.dataset.grade, 10);
        submitSRSFeedback(currentCard, rating);
      });
    });
  }
}

// Generate multiple choices
function generateChoices(correctAnswer) {
  const choices = [correctAnswer];
  
  // Collect other answers in the deck to act as distractors
  const fieldToPick = promptLanguage === 'german' ? 'slovak' : 'german';
  const distractors = deck
    .map(c => c[fieldToPick])
    .filter(val => val !== correctAnswer);

  // Shuffle distractors and pick 3
  distractors.sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(3, distractors.length); i++) {
    choices.push(distractors[i]);
  }

  // Fill in dummy choices if the deck is too small
  while (choices.length < 4) {
    choices.push(`Platzhalter Option ${choices.length + 1}`);
  }

  // Shuffle option array so correct answer is in a random spot
  return choices.sort(() => Math.random() - 0.5);
}

// Estimate next days in grade buttons
function calculateNextDays(card, rating) {
  const testSrs = scheduleCard(card.srs || {}, rating);
  return `${testSrs.interval} ${testSrs.interval === 1 ? 'Tag' : 'Tage'}`;
}

// character alignment algorithm for Slovak diacritics highlighting
function renderDiff(expected, actual) {
  // Simple LCS alignment
  const dp = Array(expected.length + 1).fill(null).map(() => Array(actual.length + 1).fill(0));
  for (let i = 1; i <= expected.length; i++) {
    for (let j = 1; j <= actual.length; j++) {
      if (expected[i - 1].toLowerCase() === actual[j - 1].toLowerCase()) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  let i = expected.length, j = actual.length;
  const result = [];
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && expected[i - 1].toLowerCase() === actual[j - 1].toLowerCase()) {
      const isPerfect = expected[i - 1] === actual[j - 1];
      result.unshift({ type: 'match', char: expected[i - 1], actualChar: actual[j - 1], isPerfect });
      i--; j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: 'insert', char: actual[j - 1] });
      j--;
    } else {
      result.unshift({ type: 'delete', char: expected[i - 1] });
      i--;
    }
  }

  let htmlMarkup = '';
  result.forEach(item => {
    if (item.type === 'match') {
      if (item.isPerfect) {
        htmlMarkup += `<span class="diff-correct">${escapeHtml(item.char)}</span>`;
      } else {
        // Casing or diacritic difference (yellow warning)
        htmlMarkup += `<span style="color: var(--color-warning); font-weight:600;" title="Diakritisches Zeichen oder Groß-/Kleinschreibung überprüfen">${escapeHtml(item.actualChar)}</span>`;
      }
    } else if (item.type === 'insert') {
      htmlMarkup += `<span class="diff-wrong">${escapeHtml(item.char)}</span>`;
    } else if (item.type === 'delete') {
      htmlMarkup += `<span class="diff-inserted">${escapeHtml(item.char)}</span>`;
    }
  });

  return htmlMarkup;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

// Submit SRS rating & log to history
function submitSRSFeedback(card, rating) {
  // Update card SRS values
  card.srs = scheduleCard(card.srs || {}, rating);

  // Record history log entry
  const today = new Date().toISOString().split('T')[0];
  historyLog.push({
    date: today,
    cardId: card.id,
    grade: rating
  });

  // Track daily streak
  recordStudyEvent();

  // Save changes
  saveToStorage();

  // If rating is "Again" (1), keep it in the current round by appending to the end
  if (rating === 1) {
    activeSession.push(card);
  }

  // Increment index & load next card
  currentIndex += 1;
  updateStudyUI();
}

// Deck management table & modals
function renderDeckViewer() {
  const tbody = document.querySelector('#deck-table tbody');
  const searchInput = document.getElementById('deck-search-input');
  if (!tbody) return;

  const searchQuery = (searchInput?.value || '').toLowerCase().trim();
  
  let filtered = deck;
  if (searchQuery) {
    filtered = deck.filter(c => 
      c.slovak.toLowerCase().includes(searchQuery) ||
      c.german.toLowerCase().includes(searchQuery) ||
      (c.category && c.category.toLowerCase().includes(searchQuery))
    );
  }

  tbody.innerHTML = '';
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Keine Karten gefunden.</td></tr>`;
    return;
  }

  filtered.forEach(card => {
    const row = document.createElement('tr');
    
    // Check next review state
    let scheduleStr = 'Sofort fällig';
    if (card.srs && card.srs.dueDate) {
      const now = new Date();
      const due = new Date(card.srs.dueDate);
      if (due > now) {
        const days = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
        scheduleStr = `In ${days} ${days === 1 ? 'Tag' : 'Tagen'}`;
      }
    }

    row.innerHTML = `
      <td>${escapeHtml(card.category || '')}</td>
      <td style="font-weight:600;">${escapeHtml(card.slovak)}</td>
      <td>${escapeHtml(card.german)}</td>
      <td style="font-size:0.85rem; color:var(--text-muted);">${scheduleStr}</td>
      <td class="td-actions">
        <button class="action-btn btn-edit" data-id="${card.id}">✏️</button>
        <button class="action-btn btn-delete" data-id="${card.id}">🗑️</button>
      </td>
    `;

    // Hook buttons
    row.querySelector('.btn-edit').addEventListener('click', () => openEditModal(card));
    row.querySelector('.btn-delete').addEventListener('click', () => deleteCard(card.id));

    tbody.appendChild(row);
  });
}

// Delete card from deck
function deleteCard(id) {
  if (confirm('Möchten Sie diese Karte wirklich löschen?')) {
    deck = deck.filter(c => c.id !== id);
    saveToStorage();
    renderDeckViewer();
    renderDashboard();
  }
}

// Edit Modal orchestration
let editingCardId = null;

function openAddModal() {
  editingCardId = null;
  document.getElementById('modal-title').textContent = 'Neue Karte hinzufügen';
  document.getElementById('card-form-category').value = '';
  document.getElementById('card-form-slovak').value = '';
  document.getElementById('card-form-german').value = '';
  document.getElementById('card-form-sentence').value = '';
  document.getElementById('card-form-translation').value = '';
  
  document.getElementById('card-modal').classList.add('active');
}

function openEditModal(card) {
  editingCardId = card.id;
  document.getElementById('modal-title').textContent = 'Karte bearbeiten';
  document.getElementById('card-form-category').value = card.category || '';
  document.getElementById('card-form-slovak').value = card.slovak || '';
  document.getElementById('card-form-german').value = card.german || '';
  document.getElementById('card-form-sentence').value = card.sentenceSk || '';
  document.getElementById('card-form-translation').value = card.translationDe || '';
  
  document.getElementById('card-modal').classList.add('active');
}

function closeCardModal() {
  document.getElementById('card-modal').classList.remove('active');
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  
  const category = document.getElementById('card-form-category').value.trim();
  const slovak = document.getElementById('card-form-slovak').value.trim();
  const german = document.getElementById('card-form-german').value.trim();
  const sentenceSk = document.getElementById('card-form-sentence').value.trim();
  const translationDe = document.getElementById('card-form-translation').value.trim();

  if (!slovak || !german) {
    alert('Die Felder "Slovakisch" und "Deutsch" sind Pflichtfelder.');
    return;
  }

  if (editingCardId) {
    // Edit mode
    const idx = deck.findIndex(c => c.id === editingCardId);
    if (idx !== -1) {
      deck[idx] = {
        ...deck[idx],
        category,
        slovak,
        german,
        sentenceSk,
        translationDe
      };
    }
  } else {
    // Create mode
    const newId = deck.length > 0 ? Math.max(...deck.map(c => c.id)) + 1 : 1;
    const nextNr = (deck.length + 1).toString();
    
    deck.push({
      id: newId,
      nr: nextNr,
      category,
      slovak,
      german,
      sentenceSk,
      translationDe,
      srs: {
        interval: 0,
        reps: 0,
        ease: 2.5,
        dueDate: null
      }
    });
  }

  saveToStorage();
  closeCardModal();
  renderDeckViewer();
  renderDashboard();
}

// CSV Parser Engine
// Syntax: Nr.;Kategorie;Slowakisch;Deutsch;Beispielsatz SK;Übersetzung DE
function parseCSV(text) {
  const lines = text.split(/\r?\n/);
  if (lines.length === 0) return [];
  
  const parsedCards = [];
  let startIndex = 0;
  
  // Detect if first line contains header titles
  const firstLine = lines[0].toLowerCase();
  if (firstLine.includes('slowakisch') || firstLine.includes('deutsch') || firstLine.includes('kategorie') || firstLine.includes('nr.')) {
    startIndex = 1; // skip header row
  }

  let nextId = deck.length > 0 ? Math.max(...deck.map(c => c.id)) + 1 : 1;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Semicolon separator split
    const parts = line.split(';');
    
    // We expect 6 columns based on schema:
    // Nr.;Kategorie;Slowakisch;Deutsch;Beispielsatz SK;Übersetzung DE
    // However, let's parse robustly and fill defaults
    const nr = parts[0] ? parts[0].trim() : (parsedCards.length + 1).toString();
    const category = parts[1] ? parts[1].trim() : 'CSV-Import';
    const slovak = parts[2] ? parts[2].trim() : '';
    const german = parts[3] ? parts[3].trim() : '';
    const sentenceSk = parts[4] ? parts[4].trim() : '';
    const translationDe = parts[5] ? parts[5].trim() : '';

    if (!slovak || !german) {
      console.warn(`Spalte "Slowakisch" oder "Deutsch" fehlt in Zeile ${i + 1}. Zeile übersprungen.`);
      continue;
    }

    parsedCards.push({
      id: nextId++,
      nr,
      category,
      slovak,
      german,
      sentenceSk,
      translationDe,
      srs: {
        interval: 0,
        reps: 0,
        ease: 2.5,
        dueDate: null
      }
    });
  }

  return parsedCards;
}

function handleCSVImport() {
  const pasteArea = document.getElementById('csv-paste');
  const fileInput = document.getElementById('csv-file');
  let textToParse = '';

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      textToParse = e.target.result;
      executeImport(textToParse);
    };
    reader.readAsText(file);
  } else if (pasteArea.value.trim()) {
    textToParse = pasteArea.value;
    executeImport(textToParse);
  } else {
    alert('Bitte wählen Sie eine Datei aus oder fügen Sie CSV-Text in das Textfeld ein.');
  }
}

function executeImport(csvText) {
  const imported = parseCSV(csvText);
  if (imported.length === 0) {
    alert('Es wurden keine gültigen Zeilen zum Importieren gefunden. Überprüfen Sie das Dateiformat.');
    return;
  }

  // Merge imported cards into existing deck or ask to overwrite
  if (confirm(`Sollen ${imported.length} Karten importiert und an Ihr bestehendes Deck angehängt werden? (Abbrechen überschreibt das Deck komplett)`)) {
    deck = [...deck, ...imported];
  } else {
    if (confirm('Möchten Sie das bestehende Deck wirklich KOMPLETT mit den neuen Karten überschreiben?')) {
      deck = imported;
    } else {
      return; // cancel operations
    }
  }

  saveToStorage();
  
  // Clear inputs
  document.getElementById('csv-paste').value = '';
  document.getElementById('csv-file').value = '';
  
  alert(`${imported.length} Karten erfolgreich importiert!`);
  
  // Redirect to dashboard
  document.querySelector('[data-tab="dashboard"]').click();
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  initData();
  setupTabs();
  
  // Initial render of Dashboard
  renderDashboard();

  // Mode Selection study buttons
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      studyMode = btn.dataset.mode;
      startStudySession();
    });
  });

  // Prompt Language toggle handler
  const promptSelect = document.getElementById('prompt-lang-select');
  if (promptSelect) {
    promptSelect.addEventListener('change', (e) => {
      promptLanguage = e.target.value;
      startStudySession();
    });
  }

  // Keyboard Shortcuts hook
  document.addEventListener('keydown', (e) => {
    // Only capture keyboard shortcuts when not editing inputs
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    const studyCard = document.getElementById('active-study-card');
    if (!studyCard || activeSession.length === 0) return;

    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      // Handle Flip card
      if (studyMode === 'flashcard') {
        const flipBtn = document.getElementById('flip-hint-btn');
        if (flipBtn && flipBtn.style.display !== 'none') {
          flipBtn.click();
        } else {
          studyCard.classList.toggle('flipped');
        }
      } else {
        studyCard.classList.toggle('flipped');
      }
    }

    // Number keys 1-4 for grading controls
    const gradingControls = document.getElementById('grading-controls');
    if (gradingControls && gradingControls.style.display !== 'none') {
      if (e.key === '1') {
        gradingControls.querySelector('.btn-again').click();
      } else if (e.key === '2') {
        gradingControls.querySelector('.btn-hard').click();
      } else if (e.key === '3') {
        gradingControls.querySelector('.btn-good').click();
      } else if (e.key === '4') {
        gradingControls.querySelector('.btn-easy').click();
      }
    }
  });

  // Deck Management triggers
  const addBtn = document.getElementById('add-card-btn');
  if (addBtn) addBtn.addEventListener('click', openAddModal);

  const searchInput = document.getElementById('deck-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', renderDeckViewer);
  }

  const modalForm = document.getElementById('modal-card-form');
  if (modalForm) modalForm.addEventListener('submit', handleCardFormSubmit);

  const cancelModalBtn = document.getElementById('modal-cancel');
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeCardModal);

  const closeModalBtn = document.querySelector('.modal-close');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeCardModal);

  // Import triggers
  const importBtn = document.getElementById('import-submit-btn');
  if (importBtn) importBtn.addEventListener('click', handleCSVImport);

  const fileInput = document.getElementById('csv-file');
  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const fileNameSpan = document.getElementById('csv-filename');
      if (fileNameSpan && fileInput.files.length > 0) {
        fileNameSpan.textContent = fileInput.files[0].name;
      }
    });
  }
});
