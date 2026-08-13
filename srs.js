/**
 * SuperMemo SM-2 Spaced Repetition Algorithm
 * 
 * Ratings map as follows:
 * 1 - AGAIN: Incorrect, needs to be reviewed immediately/very soon.
 * 2 - HARD: Correct, but with significant effort. Short interval.
 * 3 - GOOD: Correct, average response time/effort. Medium interval.
 * 4 - EASY: Correct, instant recall. Long interval.
 */

function scheduleCard(currentSrs, rating) {
  // Deep copy/initialize default state
  const srs = {
    interval: currentSrs?.interval || 0,
    reps: currentSrs?.reps || 0,
    ease: currentSrs?.ease || 2.5,
    dueDate: currentSrs?.dueDate || null
  };

  // Ensure ease is at least 1.3 (standard SM-2 minimum)
  if (srs.ease < 1.3) srs.ease = 1.3;

  let score; // Map our 1-4 scale to standard 0-5 SM-2 scale
  switch (rating) {
    case 1: // Again
      score = 1;
      break;
    case 2: // Hard
      score = 3;
      break;
    case 3: // Good
      score = 4;
      break;
    case 4: // Easy
      score = 5;
      break;
    default:
      score = 3;
  }

  // Calculate new Ease Factor
  // EF' = EF + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02))
  srs.ease = srs.ease + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
  if (srs.ease < 1.3) {
    srs.ease = 1.3;
  }

  // Calculate new interval and repetitions count
  if (score < 3) {
    // Incorrect answer (Again)
    srs.reps = 0;
    srs.interval = 1; // Repeat tomorrow (or keep in today's active session)
  } else {
    // Correct answer
    if (srs.reps === 0) {
      srs.interval = 1; // 1 day
    } else if (srs.reps === 1) {
      srs.interval = 4; // 4 days (slightly more aggressive than SM-2's 6 days to speed up initial learning)
    } else {
      srs.interval = Math.round(srs.interval * srs.ease);
    }
    srs.reps += 1;
  }

  // Set new due date
  const now = new Date();
  // For 'Again' (score < 3), we'll also mark it as needing immediate review in the current session
  // But the official next scheduled date will be set by adding 'interval' days.
  const due = new Date(now.getTime() + srs.interval * 24 * 60 * 60 * 1000);
  srs.dueDate = due.toISOString();

  return srs;
}

/**
 * Check if a card is currently due.
 * A card is due if it has no due date, or if the due date is in the past.
 */
function isDue(card) {
  if (!card.srs || !card.srs.dueDate) return true;
  const now = new Date();
  const due = new Date(card.srs.dueDate);
  return due <= now;
}
