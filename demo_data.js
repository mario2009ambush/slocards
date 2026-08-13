const DEFAULT_DECK = [
  {
    id: 1,
    nr: "1",
    category: "01 Grundlagen",
    slovak: "áno",
    german: "ja",
    sentenceSk: "Áno, mám čas.",
    translationDe: "Ja, ich habe Zeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 2,
    nr: "2",
    category: "01 Grundlagen",
    slovak: "nie",
    german: "nein",
    sentenceSk: "Nie, dnes nemôžem.",
    translationDe: "Nein, heute kann ich nicht.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 3,
    nr: "3",
    category: "01 Grundlagen",
    slovak: "prosím",
    german: "bitte",
    sentenceSk: "Jednu kávu, prosím.",
    translationDe: "Einen Kaffee, bitte.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 4,
    nr: "4",
    category: "01 Grundlagen",
    slovak: "ďakujem",
    german: "danke",
    sentenceSk: "Ďakujem za pomoc.",
    translationDe: "Danke für die Hilfe.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 5,
    nr: "5",
    category: "01 Grundlagen",
    slovak: "ahoj",
    german: "hallo",
    sentenceSk: "Ahoj, ako sa máš?",
    translationDe: "Hallo, wie geht es dir?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 6,
    nr: "6",
    category: "01 Grundlagen",
    slovak: "dobrý",
    german: "gut",
    sentenceSk: "Dnes si zapamätám slovo „dobrý“.",
    translationDe: "Heute merke ich mir das Wort „gut“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 7,
    nr: "7",
    category: "01 Grundlagen",
    slovak: "zle",
    german: "schlecht",
    sentenceSk: "Dnes si zapamätám slovo „zle“.",
    translationDe: "Heute merke ich mir das Wort „schlecht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 8,
    nr: "8",
    category: "01 Grundlagen",
    slovak: "dobre",
    german: "gut",
    sentenceSk: "Dnes si zapamätám slovo „dobre“.",
    translationDe: "Heute merke ich mir das Wort „gut“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 9,
    nr: "9",
    category: "01 Grundlagen",
    slovak: "tu",
    german: "hier",
    sentenceSk: "Som tu.",
    translationDe: "Ich bin hier.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 10,
    nr: "10",
    category: "01 Grundlagen",
    slovak: "tam",
    german: "dort",
    sentenceSk: "Auto je tam.",
    translationDe: "Das Auto ist dort.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 11,
    nr: "11",
    category: "01 Grundlagen",
    slovak: "kde",
    german: "wo",
    sentenceSk: "Kde je stanica?",
    translationDe: "Wo ist der Bahnhof?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 12,
    nr: "12",
    category: "01 Grundlagen",
    slovak: "kedy",
    german: "wann",
    sentenceSk: "Kedy prídeš?",
    translationDe: "Wann kommst du?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 13,
    nr: "13",
    category: "01 Grundlagen",
    slovak: "ako",
    german: "wie",
    sentenceSk: "Ako sa máš?",
    translationDe: "Wie geht es dir?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 14,
    nr: "14",
    category: "01 Grundlagen",
    slovak: "čo",
    german: "was",
    sentenceSk: "Čo robíš?",
    translationDe: "Was machst du?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 15,
    nr: "15",
    category: "01 Grundlagen",
    slovak: "kto",
    german: "wer",
    sentenceSk: "Kto je to?",
    translationDe: "Wer ist das?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 16,
    nr: "16",
    category: "01 Grundlagen",
    slovak: "prečo",
    german: "warum",
    sentenceSk: "Prečo sa smeješ?",
    translationDe: "Warum lachst du?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 17,
    nr: "17",
    category: "01 Grundlagen",
    slovak: "preto",
    german: "deshalb",
    sentenceSk: "Dnes si zapamätám slovo „preto“.",
    translationDe: "Heute merke ich mir das Wort „deshalb“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 18,
    nr: "18",
    category: "01 Grundlagen",
    slovak: "koľko",
    german: "wie viel",
    sentenceSk: "Koľko to stojí?",
    translationDe: "Wie viel kostet das?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 19,
    nr: "19",
    category: "01 Grundlagen",
    slovak: "ktorý",
    german: "welcher",
    sentenceSk: "Dnes si zapamätám slovo „ktorý“.",
    translationDe: "Heute merke ich mir das Wort „welcher“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 20,
    nr: "20",
    category: "01 Grundlagen",
    slovak: "aký",
    german: "was für ein",
    sentenceSk: "Dnes si zapamätám slovo „aký“.",
    translationDe: "Heute merke ich mir das Wort „was für ein“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 21,
    nr: "21",
    category: "01 Grundlagen",
    slovak: "tento",
    german: "dieser",
    sentenceSk: "Dnes si zapamätám slovo „tento“.",
    translationDe: "Heute merke ich mir das Wort „dieser“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 22,
    nr: "22",
    category: "01 Grundlagen",
    slovak: "ten",
    german: "jener/der",
    sentenceSk: "Dnes si zapamätám slovo „ten“.",
    translationDe: "Heute merke ich mir das Wort „jener/der“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 23,
    nr: "23",
    category: "01 Grundlagen",
    slovak: "to",
    german: "das",
    sentenceSk: "Dnes si zapamätám slovo „to“.",
    translationDe: "Heute merke ich mir das Wort „das“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 24,
    nr: "24",
    category: "01 Grundlagen",
    slovak: "tá",
    german: "die",
    sentenceSk: "Dnes si zapamätám slovo „tá“.",
    translationDe: "Heute merke ich mir das Wort „die“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 25,
    nr: "25",
    category: "01 Grundlagen",
    slovak: "toto",
    german: "dies",
    sentenceSk: "Dnes si zapamätám slovo „toto“.",
    translationDe: "Heute merke ich mir das Wort „dies“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 26,
    nr: "26",
    category: "01 Grundlagen",
    slovak: "nič",
    german: "nichts",
    sentenceSk: "Nič nepotrebujem.",
    translationDe: "Ich brauche nichts.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 27,
    nr: "27",
    category: "01 Grundlagen",
    slovak: "niečo",
    german: "etwas",
    sentenceSk: "Chcem niečo jesť.",
    translationDe: "Ich möchte etwas essen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 28,
    nr: "28",
    category: "01 Grundlagen",
    slovak: "všetko",
    german: "alles",
    sentenceSk: "Všetko je v poriadku.",
    translationDe: "Alles ist in Ordnung.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 29,
    nr: "29",
    category: "01 Grundlagen",
    slovak: "každý",
    german: "jeder",
    sentenceSk: "Dnes si zapamätám slovo „každý“.",
    translationDe: "Heute merke ich mir das Wort „jeder“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 30,
    nr: "30",
    category: "01 Grundlagen",
    slovak: "niekto",
    german: "jemand",
    sentenceSk: "Dnes si zapamätám slovo „niekto“.",
    translationDe: "Heute merke ich mir das Wort „jemand“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 31,
    nr: "31",
    category: "01 Grundlagen",
    slovak: "nikto",
    german: "niemand",
    sentenceSk: "Dnes si zapamätám slovo „nikto“.",
    translationDe: "Heute merke ich mir das Wort „niemand“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 32,
    nr: "32",
    category: "01 Grundlagen",
    slovak: "veľa",
    german: "viel",
    sentenceSk: "Mám veľa práce.",
    translationDe: "Ich habe viel Arbeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 33,
    nr: "33",
    category: "01 Grundlagen",
    slovak: "málo",
    german: "wenig",
    sentenceSk: "Mám málo času.",
    translationDe: "Ich habe wenig Zeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 34,
    nr: "34",
    category: "01 Grundlagen",
    slovak: "viac",
    german: "mehr",
    sentenceSk: "Dnes si zapamätám slovo „viac“.",
    translationDe: "Heute merke ich mir das Wort „mehr“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 35,
    nr: "35",
    category: "01 Grundlagen",
    slovak: "menej",
    german: "weniger",
    sentenceSk: "Dnes si zapamätám slovo „menej“.",
    translationDe: "Heute merke ich mir das Wort „weniger“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 36,
    nr: "36",
    category: "01 Grundlagen",
    slovak: "dosť",
    german: "genug",
    sentenceSk: "To je dosť.",
    translationDe: "Das ist genug.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 37,
    nr: "37",
    category: "01 Grundlagen",
    slovak: "príliš",
    german: "zu/sehr",
    sentenceSk: "Dnes si zapamätám slovo „príliš“.",
    translationDe: "Heute merke ich mir das Wort „zu/sehr“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 38,
    nr: "38",
    category: "01 Grundlagen",
    slovak: "veľmi",
    german: "sehr",
    sentenceSk: "Je to veľmi dobré.",
    translationDe: "Es ist sehr gut.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 39,
    nr: "39",
    category: "01 Grundlagen",
    slovak: "trochu",
    german: "ein bisschen",
    sentenceSk: "Hovorím trochu po slovensky.",
    translationDe: "Ich spreche ein bisschen Slowakisch.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 40,
    nr: "40",
    category: "01 Grundlagen",
    slovak: "iba",
    german: "nur",
    sentenceSk: "Dnes si zapamätám slovo „iba“.",
    translationDe: "Heute merke ich mir das Wort „nur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 41,
    nr: "41",
    category: "01 Grundlagen",
    slovak: "len",
    german: "nur",
    sentenceSk: "Dnes si zapamätám slovo „len“.",
    translationDe: "Heute merke ich mir das Wort „nur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 42,
    nr: "42",
    category: "01 Grundlagen",
    slovak: "aj",
    german: "auch",
    sentenceSk: "Aj ja.",
    translationDe: "Ich auch.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 43,
    nr: "43",
    category: "01 Grundlagen",
    slovak: "ešte",
    german: "noch",
    sentenceSk: "Ešte jednu kávu, prosím.",
    translationDe: "Noch einen Kaffee, bitte.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 44,
    nr: "44",
    category: "01 Grundlagen",
    slovak: "už",
    german: "schon",
    sentenceSk: "Už som doma.",
    translationDe: "Ich bin schon zu Hause.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 45,
    nr: "45",
    category: "01 Grundlagen",
    slovak: "zase",
    german: "wieder",
    sentenceSk: "Dnes si zapamätám slovo „zase“.",
    translationDe: "Heute merke ich mir das Wort „wieder“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 46,
    nr: "46",
    category: "01 Grundlagen",
    slovak: "vždy",
    german: "immer",
    sentenceSk: "Vždy prídem načas.",
    translationDe: "Ich komme immer pünktlich.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 47,
    nr: "47",
    category: "01 Grundlagen",
    slovak: "nikdy",
    german: "nie",
    sentenceSk: "Nikdy tam nechodím.",
    translationDe: "Ich gehe nie dorthin.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 48,
    nr: "48",
    category: "01 Grundlagen",
    slovak: "často",
    german: "oft",
    sentenceSk: "Často počúvam hudbu.",
    translationDe: "Ich höre oft Musik.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 49,
    nr: "49",
    category: "01 Grundlagen",
    slovak: "niekedy",
    german: "manchmal",
    sentenceSk: "Niekedy chodím pešo.",
    translationDe: "Manchmal gehe ich zu Fuß.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 50,
    nr: "50",
    category: "01 Grundlagen",
    slovak: "teraz",
    german: "jetzt",
    sentenceSk: "Teraz nemám čas.",
    translationDe: "Jetzt habe ich keine Zeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 51,
    nr: "51",
    category: "01 Grundlagen",
    slovak: "potom",
    german: "danach",
    sentenceSk: "Potom pôjdeme domov.",
    translationDe: "Danach gehen wir nach Hause.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 52,
    nr: "52",
    category: "01 Grundlagen",
    slovak: "dnes",
    german: "heute",
    sentenceSk: "Dnes pracujem.",
    translationDe: "Heute arbeite ich.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 53,
    nr: "53",
    category: "01 Grundlagen",
    slovak: "zajtra",
    german: "morgen",
    sentenceSk: "Zajtra mám voľno.",
    translationDe: "Morgen habe ich frei.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 54,
    nr: "54",
    category: "01 Grundlagen",
    slovak: "včera",
    german: "gestern",
    sentenceSk: "Včera som bol doma.",
    translationDe: "Gestern war ich zu Hause.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 55,
    nr: "55",
    category: "01 Grundlagen",
    slovak: "ráno",
    german: "morgens",
    sentenceSk: "Ráno pijem kávu.",
    translationDe: "Morgens trinke ich Kaffee.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 56,
    nr: "56",
    category: "01 Grundlagen",
    slovak: "večer",
    german: "abends",
    sentenceSk: "Večer pozeráme film.",
    translationDe: "Abends schauen wir einen Film.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 57,
    nr: "57",
    category: "01 Grundlagen",
    slovak: "noc",
    german: "Nacht",
    sentenceSk: "Dnes si zapamätám slovo „noc“.",
    translationDe: "Heute merke ich mir das Wort „Nacht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 58,
    nr: "58",
    category: "01 Grundlagen",
    slovak: "deň",
    german: "Tag",
    sentenceSk: "Dnes je pekný deň.",
    translationDe: "Heute ist ein schöner Tag.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 59,
    nr: "59",
    category: "01 Grundlagen",
    slovak: "týždeň",
    german: "Woche",
    sentenceSk: "Tento týždeň mám veľa práce.",
    translationDe: "Diese Woche habe ich viel Arbeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 60,
    nr: "60",
    category: "01 Grundlagen",
    slovak: "mesiac",
    german: "Monat",
    sentenceSk: "Dnes si zapamätám slovo „mesiac“.",
    translationDe: "Heute merke ich mir das Wort „Monat“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 61,
    nr: "61",
    category: "01 Grundlagen",
    slovak: "rok",
    german: "Jahr",
    sentenceSk: "Tento rok študujem v Linzi.",
    translationDe: "Dieses Jahr studiere ich in Linz.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 62,
    nr: "62",
    category: "01 Grundlagen",
    slovak: "a",
    german: "und",
    sentenceSk: "Káva a voda, prosím.",
    translationDe: "Kaffee und Wasser, bitte.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 63,
    nr: "63",
    category: "01 Grundlagen",
    slovak: "alebo",
    german: "oder",
    sentenceSk: "Kávu alebo čaj?",
    translationDe: "Kaffee oder Tee?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 64,
    nr: "64",
    category: "01 Grundlagen",
    slovak: "ale",
    german: "aber",
    sentenceSk: "Chcem ísť, ale nemám čas.",
    translationDe: "Ich möchte gehen, aber ich habe keine Zeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 65,
    nr: "65",
    category: "01 Grundlagen",
    slovak: "lebo",
    german: "weil",
    sentenceSk: "Som doma, lebo som unavený.",
    translationDe: "Ich bin zu Hause, weil ich müde bin.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 66,
    nr: "66",
    category: "01 Grundlagen",
    slovak: "že",
    german: "dass",
    sentenceSk: "Myslím, že je to dobré.",
    translationDe: "Ich denke, dass es gut ist.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 67,
    nr: "67",
    category: "01 Grundlagen",
    slovak: "ak",
    german: "wenn/falls",
    sentenceSk: "Dnes si zapamätám slovo „ak“.",
    translationDe: "Heute merke ich mir das Wort „wenn/falls“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 68,
    nr: "68",
    category: "01 Grundlagen",
    slovak: "keď",
    german: "wenn/als",
    sentenceSk: "Zavolám ti, keď prídem.",
    translationDe: "Ich rufe dich an, wenn ich ankomme.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 69,
    nr: "69",
    category: "01 Grundlagen",
    slovak: "tak",
    german: "so/dann",
    sentenceSk: "Dnes si zapamätám slovo „tak“.",
    translationDe: "Heute merke ich mir das Wort „so/dann“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 70,
    nr: "70",
    category: "01 Grundlagen",
    slovak: "takže",
    german: "also",
    sentenceSk: "Som unavený, takže idem spať.",
    translationDe: "Ich bin müde, also gehe ich schlafen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 71,
    nr: "71",
    category: "01 Grundlagen",
    slovak: "pre",
    german: "für",
    sentenceSk: "Dnes si zapamätám slovo „pre“.",
    translationDe: "Heute merke ich mir das Wort „für“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 72,
    nr: "72",
    category: "01 Grundlagen",
    slovak: "bez",
    german: "ohne",
    sentenceSk: "Kávu bez cukru, prosím.",
    translationDe: "Kaffee ohne Zucker, bitte.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 73,
    nr: "73",
    category: "01 Grundlagen",
    slovak: "s",
    german: "mit",
    sentenceSk: "Idem s kamarátom.",
    translationDe: "Ich gehe mit einem Freund.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 74,
    nr: "74",
    category: "01 Grundlagen",
    slovak: "do",
    german: "in/nach",
    sentenceSk: "Idem do mesta.",
    translationDe: "Ich gehe in die Stadt.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 75,
    nr: "75",
    category: "01 Grundlagen",
    slovak: "z",
    german: "aus/von",
    sentenceSk: "Som z Rakúska.",
    translationDe: "Ich komme aus Österreich.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 76,
    nr: "76",
    category: "01 Grundlagen",
    slovak: "od",
    german: "von/seit",
    sentenceSk: "Dnes si zapamätám slovo „od“.",
    translationDe: "Heute merke ich mir das Wort „von/seit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 77,
    nr: "77",
    category: "01 Grundlagen",
    slovak: "na",
    german: "auf/an/für",
    sentenceSk: "Idem na kávu.",
    translationDe: "Ich gehe auf einen Kaffee.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 78,
    nr: "78",
    category: "01 Grundlagen",
    slovak: "v",
    german: "in",
    sentenceSk: "Bývam v Rakúsku.",
    translationDe: "Ich wohne in Österreich.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 79,
    nr: "79",
    category: "01 Grundlagen",
    slovak: "pri",
    german: "bei",
    sentenceSk: "Dnes si zapamätám slovo „pri“.",
    translationDe: "Heute merke ich mir das Wort „bei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 80,
    nr: "80",
    category: "01 Grundlagen",
    slovak: "pod",
    german: "unter",
    sentenceSk: "Taška je pod stolom.",
    translationDe: "Die Tasche ist unter dem Tisch.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 81,
    nr: "81",
    category: "01 Grundlagen",
    slovak: "nad",
    german: "über",
    sentenceSk: "Dnes si zapamätám slovo „nad“.",
    translationDe: "Heute merke ich mir das Wort „über“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 82,
    nr: "82",
    category: "01 Grundlagen",
    slovak: "pred",
    german: "vor",
    sentenceSk: "Čakám pred domom.",
    translationDe: "Ich warte vor dem Haus.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 83,
    nr: "83",
    category: "01 Grundlagen",
    slovak: "za",
    german: "hinter/für",
    sentenceSk: "Dnes si zapamätám slovo „za“.",
    translationDe: "Heute merke ich mir das Wort „hinter/für“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 84,
    nr: "84",
    category: "01 Grundlagen",
    slovak: "medzi",
    german: "zwischen",
    sentenceSk: "Sedím medzi dvoma kamarátmi.",
    translationDe: "Ich sitze zwischen zwei Freunden.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 85,
    nr: "85",
    category: "01 Grundlagen",
    slovak: "okolo",
    german: "um/herum",
    sentenceSk: "Dnes si zapamätám slovo „okolo“.",
    translationDe: "Heute merke ich mir das Wort „um/herum“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 86,
    nr: "86",
    category: "01 Grundlagen",
    slovak: "cez",
    german: "durch/über",
    sentenceSk: "Dnes si zapamätám slovo „cez“.",
    translationDe: "Heute merke ich mir das Wort „durch/über“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 87,
    nr: "87",
    category: "01 Grundlagen",
    slovak: "proti",
    german: "gegen",
    sentenceSk: "Dnes si zapamätám slovo „proti“.",
    translationDe: "Heute merke ich mir das Wort „gegen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 88,
    nr: "88",
    category: "01 Grundlagen",
    slovak: "po",
    german: "nach",
    sentenceSk: "Dnes si zapamätám slovo „po“.",
    translationDe: "Heute merke ich mir das Wort „nach“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 89,
    nr: "89",
    category: "01 Grundlagen",
    slovak: "u",
    german: "bei",
    sentenceSk: "Dnes si zapamätám slovo „u“.",
    translationDe: "Heute merke ich mir das Wort „bei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 90,
    nr: "90",
    category: "01 Grundlagen",
    slovak: "blízko",
    german: "nah",
    sentenceSk: "Bývam blízko centra.",
    translationDe: "Ich wohne nahe dem Zentrum.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 91,
    nr: "91",
    category: "01 Grundlagen",
    slovak: "ďaleko",
    german: "weit",
    sentenceSk: "Je to ďaleko?",
    translationDe: "Ist es weit?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 92,
    nr: "92",
    category: "01 Grundlagen",
    slovak: "hore",
    german: "oben",
    sentenceSk: "Dnes si zapamätám slovo „hore“.",
    translationDe: "Heute merke ich mir das Wort „oben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 93,
    nr: "93",
    category: "01 Grundlagen",
    slovak: "dole",
    german: "unten",
    sentenceSk: "Dnes si zapamätám slovo „dole“.",
    translationDe: "Heute merke ich mir das Wort „unten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 94,
    nr: "94",
    category: "01 Grundlagen",
    slovak: "vľavo",
    german: "links",
    sentenceSk: "Odboč vľavo.",
    translationDe: "Bieg links ab.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 95,
    nr: "95",
    category: "01 Grundlagen",
    slovak: "vpravo",
    german: "rechts",
    sentenceSk: "Odboč vpravo.",
    translationDe: "Bieg rechts ab.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 96,
    nr: "96",
    category: "01 Grundlagen",
    slovak: "rovno",
    german: "geradeaus",
    sentenceSk: "Choď rovno.",
    translationDe: "Geh geradeaus.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 97,
    nr: "97",
    category: "01 Grundlagen",
    slovak: "spolu",
    german: "zusammen",
    sentenceSk: "Ideme tam spolu.",
    translationDe: "Wir gehen zusammen dorthin.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 98,
    nr: "98",
    category: "01 Grundlagen",
    slovak: "sám",
    german: "allein",
    sentenceSk: "Dnes si zapamätám slovo „sám“.",
    translationDe: "Heute merke ich mir das Wort „allein“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 99,
    nr: "99",
    category: "01 Grundlagen",
    slovak: "možno",
    german: "vielleicht",
    sentenceSk: "Možno prídem zajtra.",
    translationDe: "Vielleicht komme ich morgen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 100,
    nr: "100",
    category: "01 Grundlagen",
    slovak: "určite",
    german: "sicher/bestimmt",
    sentenceSk: "Určite prídem.",
    translationDe: "Ich komme bestimmt.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 101,
    nr: "101",
    category: "01 Grundlagen",
    slovak: "asi",
    german: "wahrscheinlich/etwa",
    sentenceSk: "Dnes si zapamätám slovo „asi“.",
    translationDe: "Heute merke ich mir das Wort „wahrscheinlich/etwa“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 102,
    nr: "102",
    category: "01 Grundlagen",
    slovak: "naozaj",
    german: "wirklich",
    sentenceSk: "Je to naozaj dobré.",
    translationDe: "Es ist wirklich gut.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 103,
    nr: "103",
    category: "02 Verben I",
    slovak: "byť",
    german: "sein",
    sentenceSk: "Chcem byť doma.",
    translationDe: "Ich möchte zu Hause sein.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 104,
    nr: "104",
    category: "02 Verben I",
    slovak: "mať",
    german: "haben",
    sentenceSk: "Chcem mať viac času.",
    translationDe: "Ich möchte mehr Zeit haben.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 105,
    nr: "105",
    category: "02 Verben I",
    slovak: "robiť",
    german: "machen",
    sentenceSk: "Čo chceš robiť?",
    translationDe: "Was möchtest du machen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 106,
    nr: "106",
    category: "02 Verben I",
    slovak: "ísť",
    german: "gehen",
    sentenceSk: "Chcem ísť domov.",
    translationDe: "Ich möchte nach Hause gehen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 107,
    nr: "107",
    category: "02 Verben I",
    slovak: "prísť",
    german: "kommen",
    sentenceSk: "Môžeš prísť zajtra?",
    translationDe: "Kannst du morgen kommen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 108,
    nr: "108",
    category: "02 Verben I",
    slovak: "chcieť",
    german: "wollen",
    sentenceSk: "Chcem kávu.",
    translationDe: "Ich möchte Kaffee.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 109,
    nr: "109",
    category: "02 Verben I",
    slovak: "môcť",
    german: "können/dürfen",
    sentenceSk: "Môžem si sadnúť?",
    translationDe: "Kann ich mich setzen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 110,
    nr: "110",
    category: "02 Verben I",
    slovak: "musieť",
    german: "müssen",
    sentenceSk: "Musím ísť.",
    translationDe: "Ich muss gehen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 111,
    nr: "111",
    category: "02 Verben I",
    slovak: "vedieť",
    german: "wissen/können",
    sentenceSk: "Neviem, kde je.",
    translationDe: "Ich weiß nicht, wo es ist.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 112,
    nr: "112",
    category: "02 Verben I",
    slovak: "poznať",
    german: "kennen",
    sentenceSk: "Poznáš Bratislavu?",
    translationDe: "Kennst du Bratislava?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 113,
    nr: "113",
    category: "02 Verben I",
    slovak: "myslieť",
    german: "denken",
    sentenceSk: "Čo si myslíš?",
    translationDe: "Was denkst du?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 114,
    nr: "114",
    category: "02 Verben I",
    slovak: "hovoriť",
    german: "sprechen",
    sentenceSk: "Hovorím trochu po slovensky.",
    translationDe: "Ich spreche ein bisschen Slowakisch.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 115,
    nr: "115",
    category: "02 Verben I",
    slovak: "povedať",
    german: "sagen",
    sentenceSk: "Môžeš mi to povedať?",
    translationDe: "Kannst du mir das sagen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 116,
    nr: "116",
    category: "02 Verben I",
    slovak: "rozprávať",
    german: "erzählen/sprechen",
    sentenceSk: "Dnes si precvičujem sloveso „rozprávať“.",
    translationDe: "Heute übe ich das Verb „erzählen/sprechen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 117,
    nr: "117",
    category: "02 Verben I",
    slovak: "počúvať",
    german: "zuhören",
    sentenceSk: "Rád počúvam hudbu.",
    translationDe: "Ich höre gern Musik.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 118,
    nr: "118",
    category: "02 Verben I",
    slovak: "počuť",
    german: "hören",
    sentenceSk: "Nepočujem ťa dobre.",
    translationDe: "Ich höre dich nicht gut.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 119,
    nr: "119",
    category: "02 Verben I",
    slovak: "vidieť",
    german: "sehen",
    sentenceSk: "Vidím ho každý deň.",
    translationDe: "Ich sehe ihn jeden Tag.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 120,
    nr: "120",
    category: "02 Verben I",
    slovak: "pozerať",
    german: "schauen",
    sentenceSk: "Večer pozerám film.",
    translationDe: "Abends schaue ich einen Film.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 121,
    nr: "121",
    category: "02 Verben I",
    slovak: "čítať",
    german: "lesen",
    sentenceSk: "Rád čítam knihy.",
    translationDe: "Ich lese gern Bücher.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 122,
    nr: "122",
    category: "02 Verben I",
    slovak: "písať",
    german: "schreiben",
    sentenceSk: "Píšem správu.",
    translationDe: "Ich schreibe eine Nachricht.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 123,
    nr: "123",
    category: "02 Verben I",
    slovak: "učiť sa",
    german: "lernen",
    sentenceSk: "Učím sa po slovensky.",
    translationDe: "Ich lerne Slowakisch.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 124,
    nr: "124",
    category: "02 Verben I",
    slovak: "rozumieť",
    german: "verstehen",
    sentenceSk: "Rozumiem trochu.",
    translationDe: "Ich verstehe ein bisschen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 125,
    nr: "125",
    category: "02 Verben I",
    slovak: "pamätať si",
    german: "sich erinnern",
    sentenceSk: "Dnes si precvičujem sloveso „pamätať si“.",
    translationDe: "Heute übe ich das Verb „sich erinnern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 126,
    nr: "126",
    category: "02 Verben I",
    slovak: "zabudnúť",
    german: "vergessen",
    sentenceSk: "Nechcem na to zabudnúť.",
    translationDe: "Ich möchte das nicht vergessen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 127,
    nr: "127",
    category: "02 Verben I",
    slovak: "pýtať sa",
    german: "fragen",
    sentenceSk: "Chcem sa niečo opýtať.",
    translationDe: "Ich möchte etwas fragen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 128,
    nr: "128",
    category: "02 Verben I",
    slovak: "odpovedať",
    german: "antworten",
    sentenceSk: "Neviem odpovedať.",
    translationDe: "Ich kann nicht antworten.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 129,
    nr: "129",
    category: "02 Verben I",
    slovak: "volať",
    german: "anrufen/nennen",
    sentenceSk: "Zavolám ti večer.",
    translationDe: "Ich rufe dich am Abend an.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 130,
    nr: "130",
    category: "02 Verben I",
    slovak: "stretnúť",
    german: "treffen",
    sentenceSk: "Dnes si precvičujem sloveso „stretnúť“.",
    translationDe: "Heute übe ich das Verb „treffen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 131,
    nr: "131",
    category: "02 Verben I",
    slovak: "čakať",
    german: "warten",
    sentenceSk: "Čakám na autobus.",
    translationDe: "Ich warte auf den Bus.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 132,
    nr: "132",
    category: "02 Verben I",
    slovak: "hľadať",
    german: "suchen",
    sentenceSk: "Hľadám stanicu.",
    translationDe: "Ich suche den Bahnhof.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 133,
    nr: "133",
    category: "02 Verben I",
    slovak: "nájsť",
    german: "finden",
    sentenceSk: "Nemôžem nájsť kľúče.",
    translationDe: "Ich kann die Schlüssel nicht finden.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 134,
    nr: "134",
    category: "02 Verben I",
    slovak: "stratiť",
    german: "verlieren",
    sentenceSk: "Dnes si precvičujem sloveso „stratiť“.",
    translationDe: "Heute übe ich das Verb „verlieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 135,
    nr: "135",
    category: "02 Verben I",
    slovak: "dať",
    german: "geben",
    sentenceSk: "Dáš si kávu?",
    translationDe: "Möchtest du einen Kaffee?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 136,
    nr: "136",
    category: "02 Verben I",
    slovak: "dostať",
    german: "bekommen",
    sentenceSk: "Môžem dostať vodu?",
    translationDe: "Kann ich Wasser bekommen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 137,
    nr: "137",
    category: "02 Verben I",
    slovak: "brať",
    german: "nehmen",
    sentenceSk: "Dnes si precvičujem sloveso „brať“.",
    translationDe: "Heute übe ich das Verb „nehmen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 138,
    nr: "138",
    category: "02 Verben I",
    slovak: "priniesť",
    german: "bringen",
    sentenceSk: "Dnes si precvičujem sloveso „priniesť“.",
    translationDe: "Heute übe ich das Verb „bringen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 139,
    nr: "139",
    category: "02 Verben I",
    slovak: "niesť",
    german: "tragen",
    sentenceSk: "Dnes si precvičujem sloveso „niesť“.",
    translationDe: "Heute übe ich das Verb „tragen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 140,
    nr: "140",
    category: "02 Verben I",
    slovak: "kúpiť",
    german: "kaufen",
    sentenceSk: "Chcem kúpiť lístok.",
    translationDe: "Ich möchte ein Ticket kaufen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 141,
    nr: "141",
    category: "02 Verben I",
    slovak: "predať",
    german: "verkaufen",
    sentenceSk: "Dnes si precvičujem sloveso „predať“.",
    translationDe: "Heute übe ich das Verb „verkaufen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 142,
    nr: "142",
    category: "02 Verben I",
    slovak: "platiť",
    german: "bezahlen",
    sentenceSk: "Môžem platiť kartou?",
    translationDe: "Kann ich mit Karte bezahlen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 143,
    nr: "143",
    category: "02 Verben I",
    slovak: "stáť",
    german: "kosten/stehen",
    sentenceSk: "Dnes si precvičujem sloveso „stáť“.",
    translationDe: "Heute übe ich das Verb „kosten/stehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 144,
    nr: "144",
    category: "02 Verben I",
    slovak: "potrebovať",
    german: "brauchen",
    sentenceSk: "Potrebujem pomoc.",
    translationDe: "Ich brauche Hilfe.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 145,
    nr: "145",
    category: "02 Verben I",
    slovak: "používať",
    german: "benutzen",
    sentenceSk: "Dnes si precvičujem sloveso „používať“.",
    translationDe: "Heute übe ich das Verb „benutzen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 146,
    nr: "146",
    category: "02 Verben I",
    slovak: "skúsiť",
    german: "versuchen",
    sentenceSk: "Dnes si precvičujem sloveso „skúsiť“.",
    translationDe: "Heute übe ich das Verb „versuchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 147,
    nr: "147",
    category: "02 Verben I",
    slovak: "začať",
    german: "anfangen",
    sentenceSk: "Môžeme začať.",
    translationDe: "Wir können anfangen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 148,
    nr: "148",
    category: "02 Verben I",
    slovak: "skončiť",
    german: "beenden",
    sentenceSk: "Kedy skončíme?",
    translationDe: "Wann sind wir fertig?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 149,
    nr: "149",
    category: "02 Verben I",
    slovak: "pokračovať",
    german: "weitermachen",
    sentenceSk: "Dnes si precvičujem sloveso „pokračovať“.",
    translationDe: "Heute übe ich das Verb „weitermachen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 150,
    nr: "150",
    category: "02 Verben I",
    slovak: "zmeniť",
    german: "ändern",
    sentenceSk: "Dnes si precvičujem sloveso „zmeniť“.",
    translationDe: "Heute übe ich das Verb „ändern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 151,
    nr: "151",
    category: "02 Verben I",
    slovak: "vybrať",
    german: "wählen/auswählen",
    sentenceSk: "Dnes si precvičujem sloveso „vybrať“.",
    translationDe: "Heute übe ich das Verb „wählen/auswählen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 152,
    nr: "152",
    category: "02 Verben I",
    slovak: "otvoriť",
    german: "öffnen",
    sentenceSk: "Môžeš otvoriť okno?",
    translationDe: "Kannst du das Fenster öffnen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 153,
    nr: "153",
    category: "02 Verben I",
    slovak: "zatvoriť",
    german: "schließen",
    sentenceSk: "Prosím, zatvor dvere.",
    translationDe: "Bitte schließ die Tür.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 154,
    nr: "154",
    category: "02 Verben I",
    slovak: "zapnúť",
    german: "einschalten",
    sentenceSk: "Dnes si precvičujem sloveso „zapnúť“.",
    translationDe: "Heute übe ich das Verb „einschalten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 155,
    nr: "155",
    category: "02 Verben I",
    slovak: "vypnúť",
    german: "ausschalten",
    sentenceSk: "Dnes si precvičujem sloveso „vypnúť“.",
    translationDe: "Heute übe ich das Verb „ausschalten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 156,
    nr: "156",
    category: "02 Verben I",
    slovak: "sedieť",
    german: "sitzen",
    sentenceSk: "Môžeme sedieť tu.",
    translationDe: "Wir können hier sitzen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 157,
    nr: "157",
    category: "02 Verben I",
    slovak: "ležať",
    german: "liegen",
    sentenceSk: "Dnes si precvičujem sloveso „ležať“.",
    translationDe: "Heute übe ich das Verb „liegen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 158,
    nr: "158",
    category: "02 Verben I",
    slovak: "spať",
    german: "schlafen",
    sentenceSk: "Chcem spať.",
    translationDe: "Ich möchte schlafen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 159,
    nr: "159",
    category: "02 Verben I",
    slovak: "zobudiť sa",
    german: "aufwachen",
    sentenceSk: "Dnes si precvičujem sloveso „zobudiť sa“.",
    translationDe: "Heute übe ich das Verb „aufwachen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 160,
    nr: "160",
    category: "02 Verben I",
    slovak: "vstať",
    german: "aufstehen",
    sentenceSk: "Dnes si precvičujem sloveso „vstať“.",
    translationDe: "Heute übe ich das Verb „aufstehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 161,
    nr: "161",
    category: "02 Verben I",
    slovak: "žiť",
    german: "leben",
    sentenceSk: "Dnes si precvičujem sloveso „žiť“.",
    translationDe: "Heute übe ich das Verb „leben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 162,
    nr: "162",
    category: "02 Verben I",
    slovak: "bývať",
    german: "wohnen",
    sentenceSk: "Bývam v Rakúsku.",
    translationDe: "Ich wohne in Österreich.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 163,
    nr: "163",
    category: "02 Verben I",
    slovak: "pracovať",
    german: "arbeiten",
    sentenceSk: "Dnes pracujem doma.",
    translationDe: "Heute arbeite ich zu Hause.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 164,
    nr: "164",
    category: "02 Verben I",
    slovak: "oddychovať",
    german: "sich ausruhen",
    sentenceSk: "Dnes si precvičujem sloveso „oddychovať“.",
    translationDe: "Heute übe ich das Verb „sich ausruhen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 165,
    nr: "165",
    category: "02 Verben I",
    slovak: "pomáhať",
    german: "helfen",
    sentenceSk: "Môžeš mi pomôcť?",
    translationDe: "Kannst du mir helfen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 166,
    nr: "166",
    category: "02 Verben I",
    slovak: "chýbať",
    german: "fehlen",
    sentenceSk: "Dnes si precvičujem sloveso „chýbať“.",
    translationDe: "Heute übe ich das Verb „fehlen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 167,
    nr: "167",
    category: "02 Verben I",
    slovak: "fungovať",
    german: "funktionieren",
    sentenceSk: "Dnes si precvičujem sloveso „fungovať“.",
    translationDe: "Heute übe ich das Verb „funktionieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 168,
    nr: "168",
    category: "02 Verben I",
    slovak: "znamenať",
    german: "bedeuten",
    sentenceSk: "Čo to znamená?",
    translationDe: "Was bedeutet das?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 169,
    nr: "169",
    category: "02 Verben I",
    slovak: "ukázať",
    german: "zeigen",
    sentenceSk: "Môžeš mi to ukázať?",
    translationDe: "Kannst du mir das zeigen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 170,
    nr: "170",
    category: "02 Verben I",
    slovak: "vysvetliť",
    german: "erklären",
    sentenceSk: "Môžeš mi to vysvetliť?",
    translationDe: "Kannst du mir das erklären?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 171,
    nr: "171",
    category: "02 Verben I",
    slovak: "opakovať",
    german: "wiederholen",
    sentenceSk: "Môžeš to zopakovať?",
    translationDe: "Kannst du das wiederholen?",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 172,
    nr: "172",
    category: "02 Verben I",
    slovak: "preložiť",
    german: "übersetzen",
    sentenceSk: "Dnes si precvičujem sloveso „preložiť“.",
    translationDe: "Heute übe ich das Verb „übersetzen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 173,
    nr: "173",
    category: "02 Verben I",
    slovak: "pamätať",
    german: "sich merken",
    sentenceSk: "Dnes si precvičujem sloveso „pamätať“.",
    translationDe: "Heute übe ich das Verb „sich merken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 174,
    nr: "174",
    category: "02 Verben I",
    slovak: "veriť",
    german: "glauben",
    sentenceSk: "Verím ti.",
    translationDe: "Ich glaube dir.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 175,
    nr: "175",
    category: "02 Verben I",
    slovak: "dúfať",
    german: "hoffen",
    sentenceSk: "Dnes si precvičujem sloveso „dúfať“.",
    translationDe: "Heute übe ich das Verb „hoffen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 176,
    nr: "176",
    category: "02 Verben I",
    slovak: "cítiť",
    german: "fühlen",
    sentenceSk: "Cítim sa dobre.",
    translationDe: "Ich fühle mich gut.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 177,
    nr: "177",
    category: "02 Verben I",
    slovak: "milovať",
    german: "lieben",
    sentenceSk: "Dnes si precvičujem sloveso „milovať“.",
    translationDe: "Heute übe ich das Verb „lieben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 178,
    nr: "178",
    category: "02 Verben I",
    slovak: "mať rád",
    german: "mögen",
    sentenceSk: "Mám rád hudbu.",
    translationDe: "Ich mag Musik.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 179,
    nr: "179",
    category: "02 Verben I",
    slovak: "nenávidieť",
    german: "hassen",
    sentenceSk: "Dnes si precvičujem sloveso „nenávidieť“.",
    translationDe: "Heute übe ich das Verb „hassen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 180,
    nr: "180",
    category: "02 Verben I",
    slovak: "báť sa",
    german: "Angst haben",
    sentenceSk: "Dnes si precvičujem sloveso „báť sa“.",
    translationDe: "Heute übe ich das Verb „Angst haben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 181,
    nr: "181",
    category: "02 Verben I",
    slovak: "smiať sa",
    german: "lachen",
    sentenceSk: "Dnes si precvičujem sloveso „smiať sa“.",
    translationDe: "Heute übe ich das Verb „lachen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 182,
    nr: "182",
    category: "02 Verben I",
    slovak: "plakať",
    german: "weinen",
    sentenceSk: "Dnes si precvičujem sloveso „plakať“.",
    translationDe: "Heute übe ich das Verb „weinen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 183,
    nr: "183",
    category: "02 Verben I",
    slovak: "usmievať sa",
    german: "lächeln",
    sentenceSk: "Dnes si precvičujem sloveso „usmievať sa“.",
    translationDe: "Heute übe ich das Verb „lächeln“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 184,
    nr: "184",
    category: "02 Verben I",
    slovak: "tešiť sa",
    german: "sich freuen",
    sentenceSk: "Teším sa na víkend.",
    translationDe: "Ich freue mich auf das Wochenende.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 185,
    nr: "185",
    category: "02 Verben I",
    slovak: "hnevať sa",
    german: "sich ärgern",
    sentenceSk: "Dnes si precvičujem sloveso „hnevať sa“.",
    translationDe: "Heute übe ich das Verb „sich ärgern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 186,
    nr: "186",
    category: "02 Verben I",
    slovak: "súhlasiť",
    german: "zustimmen",
    sentenceSk: "Súhlasím s tebou.",
    translationDe: "Ich stimme dir zu.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 187,
    nr: "187",
    category: "02 Verben I",
    slovak: "nesúhlasiť",
    german: "nicht zustimmen",
    sentenceSk: "Dnes si precvičujem sloveso „nesúhlasiť“.",
    translationDe: "Heute übe ich das Verb „nicht zustimmen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 188,
    nr: "188",
    category: "02 Verben I",
    slovak: "rozhodnúť sa",
    german: "sich entscheiden",
    sentenceSk: "Dnes si precvičujem sloveso „rozhodnúť sa“.",
    translationDe: "Heute übe ich das Verb „sich entscheiden“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 189,
    nr: "189",
    category: "02 Verben I",
    slovak: "plánovať",
    german: "planen",
    sentenceSk: "Dnes si precvičujem sloveso „plánovať“.",
    translationDe: "Heute übe ich das Verb „planen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 190,
    nr: "190",
    category: "02 Verben I",
    slovak: "zaujímať sa",
    german: "sich interessieren",
    sentenceSk: "Dnes si precvičujem sloveso „zaujímať sa“.",
    translationDe: "Heute übe ich das Verb „sich interessieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 191,
    nr: "191",
    category: "02 Verben I",
    slovak: "zdáť sa",
    german: "scheinen",
    sentenceSk: "Dnes si precvičujem sloveso „zdáť sa“.",
    translationDe: "Heute übe ich das Verb „scheinen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 192,
    nr: "192",
    category: "02 Verben I",
    slovak: "vyzerať",
    german: "aussehen",
    sentenceSk: "Dnes si precvičujem sloveso „vyzerať“.",
    translationDe: "Heute übe ich das Verb „aussehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 193,
    nr: "193",
    category: "02 Verben I",
    slovak: "stať sa",
    german: "werden/geschehen",
    sentenceSk: "Dnes si precvičujem sloveso „stať sa“.",
    translationDe: "Heute übe ich das Verb „werden/geschehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 194,
    nr: "194",
    category: "02 Verben I",
    slovak: "zostať",
    german: "bleiben",
    sentenceSk: "Chcem zostať doma.",
    translationDe: "Ich möchte zu Hause bleiben.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 195,
    nr: "195",
    category: "02 Verben I",
    slovak: "vrátiť sa",
    german: "zurückkehren",
    sentenceSk: "Večer sa vrátim.",
    translationDe: "Am Abend komme ich zurück.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 196,
    nr: "196",
    category: "02 Verben I",
    slovak: "odísť",
    german: "weggehen",
    sentenceSk: "Musím odísť.",
    translationDe: "Ich muss gehen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 197,
    nr: "197",
    category: "02 Verben I",
    slovak: "prichádzať",
    german: "ankommen/kommen",
    sentenceSk: "Dnes si precvičujem sloveso „prichádzať“.",
    translationDe: "Heute übe ich das Verb „ankommen/kommen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 198,
    nr: "198",
    category: "02 Verben I",
    slovak: "odchádzať",
    german: "weggehen/abfahren",
    sentenceSk: "Dnes si precvičujem sloveso „odchádzať“.",
    translationDe: "Heute übe ich das Verb „weggehen/abfahren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 199,
    nr: "199",
    category: "03 Verben II",
    slovak: "jesť",
    german: "essen",
    sentenceSk: "Chcem niečo jesť.",
    translationDe: "Ich möchte etwas essen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 200,
    nr: "200",
    category: "03 Verben II",
    slovak: "piť",
    german: "trinken",
    sentenceSk: "Chcem niečo piť.",
    translationDe: "Ich möchte etwas trinken.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 201,
    nr: "201",
    category: "03 Verben II",
    slovak: "variť",
    german: "kochen",
    sentenceSk: "Dnes večer varím.",
    translationDe: "Heute Abend koche ich.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 202,
    nr: "202",
    category: "03 Verben II",
    slovak: "piecť",
    german: "backen",
    sentenceSk: "Dnes si precvičujem sloveso „piecť“.",
    translationDe: "Heute übe ich das Verb „backen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 203,
    nr: "203",
    category: "03 Verben II",
    slovak: "objednať",
    german: "bestellen",
    sentenceSk: "Chcem si objednať jedlo.",
    translationDe: "Ich möchte Essen bestellen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 204,
    nr: "204",
    category: "03 Verben II",
    slovak: "ochutnať",
    german: "probieren/kosten",
    sentenceSk: "Dnes si precvičujem sloveso „ochutnať“.",
    translationDe: "Heute übe ich das Verb „probieren/kosten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 205,
    nr: "205",
    category: "03 Verben II",
    slovak: "krájať",
    german: "schneiden",
    sentenceSk: "Dnes si precvičujem sloveso „krájať“.",
    translationDe: "Heute übe ich das Verb „schneiden“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 206,
    nr: "206",
    category: "03 Verben II",
    slovak: "umývať",
    german: "waschen",
    sentenceSk: "Dnes si precvičujem sloveso „umývať“.",
    translationDe: "Heute übe ich das Verb „waschen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 207,
    nr: "207",
    category: "03 Verben II",
    slovak: "čistiť",
    german: "reinigen",
    sentenceSk: "Dnes si precvičujem sloveso „čistiť“.",
    translationDe: "Heute übe ich das Verb „reinigen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 208,
    nr: "208",
    category: "03 Verben II",
    slovak: "upratovať",
    german: "aufräumen",
    sentenceSk: "Dnes si precvičujem sloveso „upratovať“.",
    translationDe: "Heute übe ich das Verb „aufräumen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 209,
    nr: "209",
    category: "03 Verben II",
    slovak: "obliecť sa",
    german: "sich anziehen",
    sentenceSk: "Dnes si precvičujem sloveso „obliecť sa“.",
    translationDe: "Heute übe ich das Verb „sich anziehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 210,
    nr: "210",
    category: "03 Verben II",
    slovak: "vyzliecť sa",
    german: "sich ausziehen",
    sentenceSk: "Dnes si precvičujem sloveso „vyzliecť sa“.",
    translationDe: "Heute übe ich das Verb „sich ausziehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 211,
    nr: "211",
    category: "03 Verben II",
    slovak: "obuť sa",
    german: "Schuhe anziehen",
    sentenceSk: "Dnes si precvičujem sloveso „obuť sa“.",
    translationDe: "Heute übe ich das Verb „Schuhe anziehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 212,
    nr: "212",
    category: "03 Verben II",
    slovak: "sprchovať sa",
    german: "duschen",
    sentenceSk: "Dnes si precvičujem sloveso „sprchovať sa“.",
    translationDe: "Heute übe ich das Verb „duschen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 213,
    nr: "213",
    category: "03 Verben II",
    slovak: "cestovať",
    german: "reisen",
    sentenceSk: "Rád cestujem.",
    translationDe: "Ich reise gern.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 214,
    nr: "214",
    category: "03 Verben II",
    slovak: "jazdiť",
    german: "fahren",
    sentenceSk: "Do práce jazdím bicyklom.",
    translationDe: "Ich fahre mit dem Fahrrad zur Arbeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 215,
    nr: "215",
    category: "03 Verben II",
    slovak: "šoférovať",
    german: "Auto fahren",
    sentenceSk: "Dnes si precvičujem sloveso „šoférovať“.",
    translationDe: "Heute übe ich das Verb „Auto fahren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 216,
    nr: "216",
    category: "03 Verben II",
    slovak: "letieť",
    german: "fliegen",
    sentenceSk: "Dnes si precvičujem sloveso „letieť“.",
    translationDe: "Heute übe ich das Verb „fliegen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 217,
    nr: "217",
    category: "03 Verben II",
    slovak: "plávať",
    german: "schwimmen",
    sentenceSk: "V lete rád plávam.",
    translationDe: "Im Sommer schwimme ich gern.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 218,
    nr: "218",
    category: "03 Verben II",
    slovak: "bežať",
    german: "laufen",
    sentenceSk: "Ráno rád behám.",
    translationDe: "Morgens laufe ich gern.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 219,
    nr: "219",
    category: "03 Verben II",
    slovak: "kráčať",
    german: "gehen/laufen",
    sentenceSk: "Dnes si precvičujem sloveso „kráčať“.",
    translationDe: "Heute übe ich das Verb „gehen/laufen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 220,
    nr: "220",
    category: "03 Verben II",
    slovak: "prechádzať sa",
    german: "spazieren",
    sentenceSk: "Dnes si precvičujem sloveso „prechádzať sa“.",
    translationDe: "Heute übe ich das Verb „spazieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 221,
    nr: "221",
    category: "03 Verben II",
    slovak: "zastaviť",
    german: "anhalten",
    sentenceSk: "Dnes si precvičujem sloveso „zastaviť“.",
    translationDe: "Heute übe ich das Verb „anhalten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 222,
    nr: "222",
    category: "03 Verben II",
    slovak: "nastúpiť",
    german: "einsteigen",
    sentenceSk: "Dnes si precvičujem sloveso „nastúpiť“.",
    translationDe: "Heute übe ich das Verb „einsteigen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 223,
    nr: "223",
    category: "03 Verben II",
    slovak: "vystúpiť",
    german: "aussteigen",
    sentenceSk: "Dnes si precvičujem sloveso „vystúpiť“.",
    translationDe: "Heute übe ich das Verb „aussteigen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 224,
    nr: "224",
    category: "03 Verben II",
    slovak: "prejsť",
    german: "überqueren/durchgehen",
    sentenceSk: "Dnes si precvičujem sloveso „prejsť“.",
    translationDe: "Heute übe ich das Verb „überqueren/durchgehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 225,
    nr: "225",
    category: "03 Verben II",
    slovak: "otočiť sa",
    german: "sich umdrehen",
    sentenceSk: "Dnes si precvičujem sloveso „otočiť sa“.",
    translationDe: "Heute übe ich das Verb „sich umdrehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 226,
    nr: "226",
    category: "03 Verben II",
    slovak: "vrátiť",
    german: "zurückgeben",
    sentenceSk: "Dnes si precvičujem sloveso „vrátiť“.",
    translationDe: "Heute übe ich das Verb „zurückgeben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 227,
    nr: "227",
    category: "03 Verben II",
    slovak: "navštíviť",
    german: "besuchen",
    sentenceSk: "Dnes si precvičujem sloveso „navštíviť“.",
    translationDe: "Heute übe ich das Verb „besuchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 228,
    nr: "228",
    category: "03 Verben II",
    slovak: "rezervovať",
    german: "reservieren",
    sentenceSk: "Dnes si precvičujem sloveso „rezervovať“.",
    translationDe: "Heute übe ich das Verb „reservieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 229,
    nr: "229",
    category: "03 Verben II",
    slovak: "baliť",
    german: "packen",
    sentenceSk: "Dnes si precvičujem sloveso „baliť“.",
    translationDe: "Heute übe ich das Verb „packen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 230,
    nr: "230",
    category: "03 Verben II",
    slovak: "fotiť",
    german: "fotografieren",
    sentenceSk: "Rád fotím ľudí.",
    translationDe: "Ich fotografiere gern Menschen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 231,
    nr: "231",
    category: "03 Verben II",
    slovak: "filmovať",
    german: "filmen",
    sentenceSk: "Dnes si precvičujem sloveso „filmovať“.",
    translationDe: "Heute übe ich das Verb „filmen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 232,
    nr: "232",
    category: "03 Verben II",
    slovak: "kresliť",
    german: "zeichnen",
    sentenceSk: "Každý deň trochu kreslím.",
    translationDe: "Jeden Tag zeichne ich ein bisschen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 233,
    nr: "233",
    category: "03 Verben II",
    slovak: "maľovať",
    german: "malen",
    sentenceSk: "Dnes si precvičujem sloveso „maľovať“.",
    translationDe: "Heute übe ich das Verb „malen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 234,
    nr: "234",
    category: "03 Verben II",
    slovak: "navrhovať",
    german: "entwerfen",
    sentenceSk: "Dnes si precvičujem sloveso „navrhovať“.",
    translationDe: "Heute übe ich das Verb „entwerfen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 235,
    nr: "235",
    category: "03 Verben II",
    slovak: "tvoriť",
    german: "erschaffen",
    sentenceSk: "Chcem niečo tvoriť.",
    translationDe: "Ich möchte etwas erschaffen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 236,
    nr: "236",
    category: "03 Verben II",
    slovak: "hrať",
    german: "spielen",
    sentenceSk: "Rád hrám hudbu.",
    translationDe: "Ich mache/spiele gern Musik.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 237,
    nr: "237",
    category: "03 Verben II",
    slovak: "spievať",
    german: "singen",
    sentenceSk: "Dnes si precvičujem sloveso „spievať“.",
    translationDe: "Heute übe ich das Verb „singen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 238,
    nr: "238",
    category: "03 Verben II",
    slovak: "tancovať",
    german: "tanzen",
    sentenceSk: "Dnes si precvičujem sloveso „tancovať“.",
    translationDe: "Heute übe ich das Verb „tanzen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 239,
    nr: "239",
    category: "03 Verben II",
    slovak: "cvičiť",
    german: "trainieren",
    sentenceSk: "Dnes idem cvičiť.",
    translationDe: "Heute gehe ich trainieren.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 240,
    nr: "240",
    category: "03 Verben II",
    slovak: "liezť",
    german: "klettern",
    sentenceSk: "Dnes si precvičujem sloveso „liezť“.",
    translationDe: "Heute übe ich das Verb „klettern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 241,
    nr: "241",
    category: "03 Verben II",
    slovak: "bicyklovať",
    german: "Rad fahren",
    sentenceSk: "Dnes si precvičujem sloveso „bicyklovať“.",
    translationDe: "Heute übe ich das Verb „Rad fahren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 242,
    nr: "242",
    category: "03 Verben II",
    slovak: "lyžovať",
    german: "Ski fahren",
    sentenceSk: "Dnes si precvičujem sloveso „lyžovať“.",
    translationDe: "Heute übe ich das Verb „Ski fahren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 243,
    nr: "243",
    category: "03 Verben II",
    slovak: "pozvať",
    german: "einladen",
    sentenceSk: "Chcem ťa pozvať na kávu.",
    translationDe: "Ich möchte dich auf einen Kaffee einladen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 244,
    nr: "244",
    category: "03 Verben II",
    slovak: "oslavovať",
    german: "feiern",
    sentenceSk: "Dnes si precvičujem sloveso „oslavovať“.",
    translationDe: "Heute übe ich das Verb „feiern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 245,
    nr: "245",
    category: "03 Verben II",
    slovak: "darovať",
    german: "schenken",
    sentenceSk: "Dnes si precvičujem sloveso „darovať“.",
    translationDe: "Heute übe ich das Verb „schenken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 246,
    nr: "246",
    category: "03 Verben II",
    slovak: "poslať",
    german: "senden",
    sentenceSk: "Pošlem ti správu.",
    translationDe: "Ich schicke dir eine Nachricht.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 247,
    nr: "247",
    category: "03 Verben II",
    slovak: "prijať",
    german: "annehmen/empfangen",
    sentenceSk: "Dnes si precvičujem sloveso „prijať“.",
    translationDe: "Heute übe ich das Verb „annehmen/empfangen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 248,
    nr: "248",
    category: "03 Verben II",
    slovak: "zdieľať",
    german: "teilen",
    sentenceSk: "Dnes si precvičujem sloveso „zdieľať“.",
    translationDe: "Heute übe ich das Verb „teilen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 249,
    nr: "249",
    category: "03 Verben II",
    slovak: "stiahnuť",
    german: "herunterladen",
    sentenceSk: "Dnes si precvičujem sloveso „stiahnuť“.",
    translationDe: "Heute übe ich das Verb „herunterladen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 250,
    nr: "250",
    category: "03 Verben II",
    slovak: "nahrať",
    german: "hochladen/aufnehmen",
    sentenceSk: "Dnes si precvičujem sloveso „nahrať“.",
    translationDe: "Heute übe ich das Verb „hochladen/aufnehmen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 251,
    nr: "251",
    category: "03 Verben II",
    slovak: "uložiť",
    german: "speichern",
    sentenceSk: "Nezabudni súbor uložiť.",
    translationDe: "Vergiss nicht, die Datei zu speichern.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 252,
    nr: "252",
    category: "03 Verben II",
    slovak: "vymazať",
    german: "löschen",
    sentenceSk: "Dnes si precvičujem sloveso „vymazať“.",
    translationDe: "Heute übe ich das Verb „löschen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 253,
    nr: "253",
    category: "03 Verben II",
    slovak: "kliknúť",
    german: "klicken",
    sentenceSk: "Dnes si precvičujem sloveso „kliknúť“.",
    translationDe: "Heute übe ich das Verb „klicken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 254,
    nr: "254",
    category: "03 Verben II",
    slovak: "tlačiť",
    german: "drücken/drucken",
    sentenceSk: "Dnes si precvičujem sloveso „tlačiť“.",
    translationDe: "Heute übe ich das Verb „drücken/drucken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 255,
    nr: "255",
    category: "03 Verben II",
    slovak: "ťahať",
    german: "ziehen",
    sentenceSk: "Dnes si precvičujem sloveso „ťahať“.",
    translationDe: "Heute übe ich das Verb „ziehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 256,
    nr: "256",
    category: "03 Verben II",
    slovak: "držať",
    german: "halten",
    sentenceSk: "Dnes si precvičujem sloveso „držať“.",
    translationDe: "Heute übe ich das Verb „halten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 257,
    nr: "257",
    category: "03 Verben II",
    slovak: "pustiť",
    german: "loslassen",
    sentenceSk: "Dnes si precvičujem sloveso „pustiť“.",
    translationDe: "Heute übe ich das Verb „loslassen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 258,
    nr: "258",
    category: "03 Verben II",
    slovak: "zlomiť",
    german: "brechen",
    sentenceSk: "Dnes si precvičujem sloveso „zlomiť“.",
    translationDe: "Heute übe ich das Verb „brechen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 259,
    nr: "259",
    category: "03 Verben II",
    slovak: "opraviť",
    german: "reparieren",
    sentenceSk: "Musím to opraviť.",
    translationDe: "Ich muss das reparieren.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 260,
    nr: "260",
    category: "03 Verben II",
    slovak: "postaviť",
    german: "bauen/aufstellen",
    sentenceSk: "Dnes si precvičujem sloveso „postaviť“.",
    translationDe: "Heute übe ich das Verb „bauen/aufstellen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 261,
    nr: "261",
    category: "03 Verben II",
    slovak: "vytvoriť",
    german: "erstellen",
    sentenceSk: "Dnes si precvičujem sloveso „vytvoriť“.",
    translationDe: "Heute übe ich das Verb „erstellen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 262,
    nr: "262",
    category: "03 Verben II",
    slovak: "merať",
    german: "messen",
    sentenceSk: "Dnes si precvičujem sloveso „merať“.",
    translationDe: "Heute übe ich das Verb „messen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 263,
    nr: "263",
    category: "03 Verben II",
    slovak: "vážiť",
    german: "wiegen",
    sentenceSk: "Dnes si precvičujem sloveso „vážiť“.",
    translationDe: "Heute übe ich das Verb „wiegen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 264,
    nr: "264",
    category: "03 Verben II",
    slovak: "rásť",
    german: "wachsen",
    sentenceSk: "Dnes si precvičujem sloveso „rásť“.",
    translationDe: "Heute übe ich das Verb „wachsen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 265,
    nr: "265",
    category: "03 Verben II",
    slovak: "klesať",
    german: "sinken",
    sentenceSk: "Dnes si precvičujem sloveso „klesať“.",
    translationDe: "Heute übe ich das Verb „sinken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 266,
    nr: "266",
    category: "03 Verben II",
    slovak: "zvýšiť",
    german: "erhöhen",
    sentenceSk: "Dnes si precvičujem sloveso „zvýšiť“.",
    translationDe: "Heute übe ich das Verb „erhöhen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 267,
    nr: "267",
    category: "03 Verben II",
    slovak: "znížiť",
    german: "senken",
    sentenceSk: "Dnes si precvičujem sloveso „znížiť“.",
    translationDe: "Heute übe ich das Verb „senken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 268,
    nr: "268",
    category: "03 Verben II",
    slovak: "vyhrať",
    german: "gewinnen",
    sentenceSk: "Dnes si precvičujem sloveso „vyhrať“.",
    translationDe: "Heute übe ich das Verb „gewinnen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 269,
    nr: "269",
    category: "03 Verben II",
    slovak: "prehrať",
    german: "verlieren",
    sentenceSk: "Dnes si precvičujem sloveso „prehrať“.",
    translationDe: "Heute übe ich das Verb „verlieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 270,
    nr: "270",
    category: "03 Verben II",
    slovak: "zaplatiť",
    german: "bezahlen",
    sentenceSk: "Dnes si precvičujem sloveso „zaplatiť“.",
    translationDe: "Heute übe ich das Verb „bezahlen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 271,
    nr: "271",
    category: "03 Verben II",
    slovak: "požičať",
    german: "leihen",
    sentenceSk: "Dnes si precvičujem sloveso „požičať“.",
    translationDe: "Heute übe ich das Verb „leihen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 272,
    nr: "272",
    category: "03 Verben II",
    slovak: "ušetriť",
    german: "sparen",
    sentenceSk: "Dnes si precvičujem sloveso „ušetriť“.",
    translationDe: "Heute übe ich das Verb „sparen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 273,
    nr: "273",
    category: "03 Verben II",
    slovak: "minúť",
    german: "ausgeben/verbrauchen",
    sentenceSk: "Dnes si precvičujem sloveso „minúť“.",
    translationDe: "Heute übe ich das Verb „ausgeben/verbrauchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 274,
    nr: "274",
    category: "03 Verben II",
    slovak: "zarobiť",
    german: "verdienen",
    sentenceSk: "Dnes si precvičujem sloveso „zarobiť“.",
    translationDe: "Heute übe ich das Verb „verdienen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 275,
    nr: "275",
    category: "03 Verben II",
    slovak: "študovať",
    german: "studieren",
    sentenceSk: "Študujem dizajn.",
    translationDe: "Ich studiere Design.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 276,
    nr: "276",
    category: "03 Verben II",
    slovak: "trénovať",
    german: "trainieren",
    sentenceSk: "Dnes si precvičujem sloveso „trénovať“.",
    translationDe: "Heute übe ich das Verb „trainieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 277,
    nr: "277",
    category: "03 Verben II",
    slovak: "precvičovať",
    german: "üben",
    sentenceSk: "Dnes si precvičujem sloveso „precvičovať“.",
    translationDe: "Heute übe ich das Verb „üben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 278,
    nr: "278",
    category: "03 Verben II",
    slovak: "skontrolovať",
    german: "kontrollieren",
    sentenceSk: "Dnes si precvičujem sloveso „skontrolovať“.",
    translationDe: "Heute übe ich das Verb „kontrollieren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 279,
    nr: "279",
    category: "03 Verben II",
    slovak: "porovnať",
    german: "vergleichen",
    sentenceSk: "Chcem porovnať dve možnosti.",
    translationDe: "Ich möchte zwei Möglichkeiten vergleichen.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 280,
    nr: "280",
    category: "03 Verben II",
    slovak: "vybrať si",
    german: "sich aussuchen",
    sentenceSk: "Dnes si precvičujem sloveso „vybrať si“.",
    translationDe: "Heute übe ich das Verb „sich aussuchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 281,
    nr: "281",
    category: "03 Verben II",
    slovak: "pripraviť",
    german: "vorbereiten",
    sentenceSk: "Musím sa pripraviť.",
    translationDe: "Ich muss mich vorbereiten.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 282,
    nr: "282",
    category: "03 Verben II",
    slovak: "dokončiť",
    german: "fertigstellen",
    sentenceSk: "Dnes si precvičujem sloveso „dokončiť“.",
    translationDe: "Heute übe ich das Verb „fertigstellen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 283,
    nr: "283",
    category: "03 Verben II",
    slovak: "zlepšiť",
    german: "verbessern",
    sentenceSk: "Chcem zlepšiť svoju slovenčinu.",
    translationDe: "Ich möchte mein Slowakisch verbessern.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 284,
    nr: "284",
    category: "03 Verben II",
    slovak: "zhoršiť",
    german: "verschlechtern",
    sentenceSk: "Dnes si precvičujem sloveso „zhoršiť“.",
    translationDe: "Heute übe ich das Verb „verschlechtern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 285,
    nr: "285",
    category: "03 Verben II",
    slovak: "rasti",
    german: "wachsen",
    sentenceSk: "Dnes si precvičujem sloveso „rasti“.",
    translationDe: "Heute übe ich das Verb „wachsen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 286,
    nr: "286",
    category: "03 Verben II",
    slovak: "klesnúť",
    german: "sinken",
    sentenceSk: "Dnes si precvičujem sloveso „klesnúť“.",
    translationDe: "Heute übe ich das Verb „sinken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 287,
    nr: "287",
    category: "03 Verben II",
    slovak: "meniť",
    german: "ändern",
    sentenceSk: "Dnes si precvičujem sloveso „meniť“.",
    translationDe: "Heute übe ich das Verb „ändern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 288,
    nr: "288",
    category: "03 Verben II",
    slovak: "spojiť",
    german: "verbinden",
    sentenceSk: "Dnes si precvičujem sloveso „spojiť“.",
    translationDe: "Heute übe ich das Verb „verbinden“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 289,
    nr: "289",
    category: "03 Verben II",
    slovak: "oddeliť",
    german: "trennen",
    sentenceSk: "Dnes si precvičujem sloveso „oddeliť“.",
    translationDe: "Heute übe ich das Verb „trennen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 290,
    nr: "290",
    category: "03 Verben II",
    slovak: "zapamätať si",
    german: "sich merken",
    sentenceSk: "Dnes si precvičujem sloveso „zapamätať si“.",
    translationDe: "Heute übe ich das Verb „sich merken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 291,
    nr: "291",
    category: "03 Verben II",
    slovak: "zabávať sa",
    german: "Spaß haben",
    sentenceSk: "Dnes si precvičujem sloveso „zabávať sa“.",
    translationDe: "Heute übe ich das Verb „Spaß haben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 292,
    nr: "292",
    category: "03 Verben II",
    slovak: "ponáhľať sa",
    german: "sich beeilen",
    sentenceSk: "Ponáhľam sa do práce.",
    translationDe: "Ich beeile mich zur Arbeit.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 293,
    nr: "293",
    category: "03 Verben II",
    slovak: "meškať",
    german: "zu spät sein",
    sentenceSk: "Prepáč, meškám.",
    translationDe: "Entschuldige, ich bin spät dran.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 294,
    nr: "294",
    category: "03 Verben II",
    slovak: "stihnúť",
    german: "rechtzeitig schaffen",
    sentenceSk: "Dnes si precvičujem sloveso „stihnúť“.",
    translationDe: "Heute übe ich das Verb „rechtzeitig schaffen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 295,
    nr: "295",
    category: "04 Menschen & Familie",
    slovak: "človek",
    german: "Mensch",
    sentenceSk: "Dnes si zapamätám slovo „človek“.",
    translationDe: "Heute merke ich mir das Wort „Mensch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 296,
    nr: "296",
    category: "04 Menschen & Familie",
    slovak: "ľudia",
    german: "Menschen",
    sentenceSk: "Dnes si zapamätám slovo „ľudia“.",
    translationDe: "Heute merke ich mir das Wort „Menschen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 297,
    nr: "297",
    category: "04 Menschen & Familie",
    slovak: "muž",
    german: "Mann",
    sentenceSk: "Dnes si zapamätám slovo „muž“.",
    translationDe: "Heute merke ich mir das Wort „Mann“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 298,
    nr: "298",
    category: "04 Menschen & Familie",
    slovak: "žena",
    german: "Frau",
    sentenceSk: "Dnes si zapamätám slovo „žena“.",
    translationDe: "Heute merke ich mir das Wort „Frau“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 299,
    nr: "299",
    category: "04 Menschen & Familie",
    slovak: "chlapec",
    german: "Junge",
    sentenceSk: "Dnes si zapamätám slovo „chlapec“.",
    translationDe: "Heute merke ich mir das Wort „Junge“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 300,
    nr: "300",
    category: "04 Menschen & Familie",
    slovak: "dievča",
    german: "Mädchen",
    sentenceSk: "Dnes si zapamätám slovo „dievča“.",
    translationDe: "Heute merke ich mir das Wort „Mädchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 301,
    nr: "301",
    category: "04 Menschen & Familie",
    slovak: "dieťa",
    german: "Kind",
    sentenceSk: "Dnes si zapamätám slovo „dieťa“.",
    translationDe: "Heute merke ich mir das Wort „Kind“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 302,
    nr: "302",
    category: "04 Menschen & Familie",
    slovak: "deti",
    german: "Kinder",
    sentenceSk: "Dnes si zapamätám slovo „deti“.",
    translationDe: "Heute merke ich mir das Wort „Kinder“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 303,
    nr: "303",
    category: "04 Menschen & Familie",
    slovak: "rodina",
    german: "Familie",
    sentenceSk: "Dnes si zapamätám slovo „rodina“.",
    translationDe: "Heute merke ich mir das Wort „Familie“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 304,
    nr: "304",
    category: "04 Menschen & Familie",
    slovak: "rodičia",
    german: "Eltern",
    sentenceSk: "Dnes si zapamätám slovo „rodičia“.",
    translationDe: "Heute merke ich mir das Wort „Eltern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 305,
    nr: "305",
    category: "04 Menschen & Familie",
    slovak: "mama",
    german: "Mama",
    sentenceSk: "Dnes si zapamätám slovo „mama“.",
    translationDe: "Heute merke ich mir das Wort „Mama“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 306,
    nr: "306",
    category: "04 Menschen & Familie",
    slovak: "matka",
    german: "Mutter",
    sentenceSk: "Dnes si zapamätám slovo „matka“.",
    translationDe: "Heute merke ich mir das Wort „Mutter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 307,
    nr: "307",
    category: "04 Menschen & Familie",
    slovak: "otec",
    german: "Vater",
    sentenceSk: "Dnes si zapamätám slovo „otec“.",
    translationDe: "Heute merke ich mir das Wort „Vater“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 308,
    nr: "308",
    category: "04 Menschen & Familie",
    slovak: "tato",
    german: "Papa",
    sentenceSk: "Dnes si zapamätám slovo „tato“.",
    translationDe: "Heute merke ich mir das Wort „Papa“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 309,
    nr: "309",
    category: "04 Menschen & Familie",
    slovak: "syn",
    german: "Sohn",
    sentenceSk: "Dnes si zapamätám slovo „syn“.",
    translationDe: "Heute merke ich mir das Wort „Sohn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 310,
    nr: "310",
    category: "04 Menschen & Familie",
    slovak: "dcéra",
    german: "Tochter",
    sentenceSk: "Dnes si zapamätám slovo „dcéra“.",
    translationDe: "Heute merke ich mir das Wort „Tochter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 311,
    nr: "311",
    category: "04 Menschen & Familie",
    slovak: "brat",
    german: "Bruder",
    sentenceSk: "Dnes si zapamätám slovo „brat“.",
    translationDe: "Heute merke ich mir das Wort „Bruder“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 312,
    nr: "312",
    category: "04 Menschen & Familie",
    slovak: "sestra",
    german: "Schwester",
    sentenceSk: "Dnes si zapamätám slovo „sestra“.",
    translationDe: "Heute merke ich mir das Wort „Schwester“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 313,
    nr: "313",
    category: "04 Menschen & Familie",
    slovak: "starý otec",
    german: "Großvater",
    sentenceSk: "Dnes si zapamätám slovo „starý otec“.",
    translationDe: "Heute merke ich mir das Wort „Großvater“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 314,
    nr: "314",
    category: "04 Menschen & Familie",
    slovak: "stará mama",
    german: "Großmutter",
    sentenceSk: "Dnes si zapamätám slovo „stará mama“.",
    translationDe: "Heute merke ich mir das Wort „Großmutter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 315,
    nr: "315",
    category: "04 Menschen & Familie",
    slovak: "dedko",
    german: "Opa",
    sentenceSk: "Dnes si zapamätám slovo „dedko“.",
    translationDe: "Heute merke ich mir das Wort „Opa“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 316,
    nr: "316",
    category: "04 Menschen & Familie",
    slovak: "babka",
    german: "Oma",
    sentenceSk: "Dnes si zapamätám slovo „babka“.",
    translationDe: "Heute merke ich mir das Wort „Oma“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 317,
    nr: "317",
    category: "04 Menschen & Familie",
    slovak: "strýko",
    german: "Onkel",
    sentenceSk: "Dnes si zapamätám slovo „strýko“.",
    translationDe: "Heute merke ich mir das Wort „Onkel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 318,
    nr: "318",
    category: "04 Menschen & Familie",
    slovak: "teta",
    german: "Tante",
    sentenceSk: "Dnes si zapamätám slovo „teta“.",
    translationDe: "Heute merke ich mir das Wort „Tante“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 319,
    nr: "319",
    category: "04 Menschen & Familie",
    slovak: "bratranec",
    german: "Cousin",
    sentenceSk: "Dnes si zapamätám slovo „bratranec“.",
    translationDe: "Heute merke ich mir das Wort „Cousin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 320,
    nr: "320",
    category: "04 Menschen & Familie",
    slovak: "sesternica",
    german: "Cousine",
    sentenceSk: "Dnes si zapamätám slovo „sesternica“.",
    translationDe: "Heute merke ich mir das Wort „Cousine“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 321,
    nr: "321",
    category: "04 Menschen & Familie",
    slovak: "partner",
    german: "Partner",
    sentenceSk: "Dnes si zapamätám slovo „partner“.",
    translationDe: "Heute merke ich mir das Wort „Partner“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 322,
    nr: "322",
    category: "04 Menschen & Familie",
    slovak: "partnerka",
    german: "Partnerin",
    sentenceSk: "Dnes si zapamätám slovo „partnerka“.",
    translationDe: "Heute merke ich mir das Wort „Partnerin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 323,
    nr: "323",
    category: "04 Menschen & Familie",
    slovak: "priateľ",
    german: "Freund",
    sentenceSk: "Dnes si zapamätám slovo „priateľ“.",
    translationDe: "Heute merke ich mir das Wort „Freund“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 324,
    nr: "324",
    category: "04 Menschen & Familie",
    slovak: "priateľka",
    german: "Freundin",
    sentenceSk: "Dnes si zapamätám slovo „priateľka“.",
    translationDe: "Heute merke ich mir das Wort „Freundin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 325,
    nr: "325",
    category: "04 Menschen & Familie",
    slovak: "kamarát",
    german: "Freund/Kumpel",
    sentenceSk: "Dnes si zapamätám slovo „kamarát“.",
    translationDe: "Heute merke ich mir das Wort „Freund/Kumpel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 326,
    nr: "326",
    category: "04 Menschen & Familie",
    slovak: "kamarátka",
    german: "Freundin",
    sentenceSk: "Dnes si zapamätám slovo „kamarátka“.",
    translationDe: "Heute merke ich mir das Wort „Freundin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 327,
    nr: "327",
    category: "04 Menschen & Familie",
    slovak: "sused",
    german: "Nachbar",
    sentenceSk: "Dnes si zapamätám slovo „sused“.",
    translationDe: "Heute merke ich mir das Wort „Nachbar“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 328,
    nr: "328",
    category: "04 Menschen & Familie",
    slovak: "suseda",
    german: "Nachbarin",
    sentenceSk: "Dnes si zapamätám slovo „suseda“.",
    translationDe: "Heute merke ich mir das Wort „Nachbarin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 329,
    nr: "329",
    category: "04 Menschen & Familie",
    slovak: "kolega",
    german: "Kollege",
    sentenceSk: "Dnes si zapamätám slovo „kolega“.",
    translationDe: "Heute merke ich mir das Wort „Kollege“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 330,
    nr: "330",
    category: "04 Menschen & Familie",
    slovak: "kolegyňa",
    german: "Kollegin",
    sentenceSk: "Dnes si zapamätám slovo „kolegyňa“.",
    translationDe: "Heute merke ich mir das Wort „Kollegin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 331,
    nr: "331",
    category: "04 Menschen & Familie",
    slovak: "šéf",
    german: "Chef",
    sentenceSk: "Dnes si zapamätám slovo „šéf“.",
    translationDe: "Heute merke ich mir das Wort „Chef“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 332,
    nr: "332",
    category: "04 Menschen & Familie",
    slovak: "šéfka",
    german: "Chefin",
    sentenceSk: "Dnes si zapamätám slovo „šéfka“.",
    translationDe: "Heute merke ich mir das Wort „Chefin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 333,
    nr: "333",
    category: "04 Menschen & Familie",
    slovak: "učiteľ",
    german: "Lehrer",
    sentenceSk: "Dnes si zapamätám slovo „učiteľ“.",
    translationDe: "Heute merke ich mir das Wort „Lehrer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 334,
    nr: "334",
    category: "04 Menschen & Familie",
    slovak: "učiteľka",
    german: "Lehrerin",
    sentenceSk: "Dnes si zapamätám slovo „učiteľka“.",
    translationDe: "Heute merke ich mir das Wort „Lehrerin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 335,
    nr: "335",
    category: "04 Menschen & Familie",
    slovak: "študent",
    german: "Student",
    sentenceSk: "Dnes si zapamätám slovo „študent“.",
    translationDe: "Heute merke ich mir das Wort „Student“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 336,
    nr: "336",
    category: "04 Menschen & Familie",
    slovak: "študentka",
    german: "Studentin",
    sentenceSk: "Dnes si zapamätám slovo „študentka“.",
    translationDe: "Heute merke ich mir das Wort „Studentin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 337,
    nr: "337",
    category: "04 Menschen & Familie",
    slovak: "zákazník",
    german: "Kunde",
    sentenceSk: "Dnes si zapamätám slovo „zákazník“.",
    translationDe: "Heute merke ich mir das Wort „Kunde“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 338,
    nr: "338",
    category: "04 Menschen & Familie",
    slovak: "hosť",
    german: "Gast",
    sentenceSk: "Dnes si zapamätám slovo „hosť“.",
    translationDe: "Heute merke ich mir das Wort „Gast“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 339,
    nr: "339",
    category: "04 Menschen & Familie",
    slovak: "cudzinec",
    german: "Ausländer/Fremder",
    sentenceSk: "Dnes si zapamätám slovo „cudzinec“.",
    translationDe: "Heute merke ich mir das Wort „Ausländer/Fremder“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 340,
    nr: "340",
    category: "04 Menschen & Familie",
    slovak: "Slovák",
    german: "Slowake",
    sentenceSk: "Dnes si zapamätám slovo „Slovák“.",
    translationDe: "Heute merke ich mir das Wort „Slowake“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 341,
    nr: "341",
    category: "04 Menschen & Familie",
    slovak: "Slovenka",
    german: "Slowakin",
    sentenceSk: "Dnes si zapamätám slovo „Slovenka“.",
    translationDe: "Heute merke ich mir das Wort „Slowakin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 342,
    nr: "342",
    category: "04 Menschen & Familie",
    slovak: "Nemec",
    german: "Deutscher",
    sentenceSk: "Dnes si zapamätám slovo „Nemec“.",
    translationDe: "Heute merke ich mir das Wort „Deutscher“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 343,
    nr: "343",
    category: "04 Menschen & Familie",
    slovak: "Nemka",
    german: "Deutsche",
    sentenceSk: "Dnes si zapamätám slovo „Nemka“.",
    translationDe: "Heute merke ich mir das Wort „Deutsche“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 344,
    nr: "344",
    category: "04 Menschen & Familie",
    slovak: "Rakúšan",
    german: "Österreicher",
    sentenceSk: "Dnes si zapamätám slovo „Rakúšan“.",
    translationDe: "Heute merke ich mir das Wort „Österreicher“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 345,
    nr: "345",
    category: "04 Menschen & Familie",
    slovak: "Rakúšanka",
    german: "Österreicherin",
    sentenceSk: "Dnes si zapamätám slovo „Rakúšanka“.",
    translationDe: "Heute merke ich mir das Wort „Österreicherin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 346,
    nr: "346",
    category: "04 Menschen & Familie",
    slovak: "meno",
    german: "Name",
    sentenceSk: "Dnes si zapamätám slovo „meno“.",
    translationDe: "Heute merke ich mir das Wort „Name“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 347,
    nr: "347",
    category: "04 Menschen & Familie",
    slovak: "priezvisko",
    german: "Nachname",
    sentenceSk: "Dnes si zapamätám slovo „priezvisko“.",
    translationDe: "Heute merke ich mir das Wort „Nachname“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 348,
    nr: "348",
    category: "04 Menschen & Familie",
    slovak: "vek",
    german: "Alter",
    sentenceSk: "Dnes si zapamätám slovo „vek“.",
    translationDe: "Heute merke ich mir das Wort „Alter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 349,
    nr: "349",
    category: "04 Menschen & Familie",
    slovak: "narodeniny",
    german: "Geburtstag",
    sentenceSk: "Dnes si zapamätám slovo „narodeniny“.",
    translationDe: "Heute merke ich mir das Wort „Geburtstag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 350,
    nr: "350",
    category: "04 Menschen & Familie",
    slovak: "svadba",
    german: "Hochzeit",
    sentenceSk: "Dnes si zapamätám slovo „svadba“.",
    translationDe: "Heute merke ich mir das Wort „Hochzeit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 351,
    nr: "351",
    category: "04 Menschen & Familie",
    slovak: "manžel",
    german: "Ehemann",
    sentenceSk: "Dnes si zapamätám slovo „manžel“.",
    translationDe: "Heute merke ich mir das Wort „Ehemann“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 352,
    nr: "352",
    category: "04 Menschen & Familie",
    slovak: "manželka",
    german: "Ehefrau",
    sentenceSk: "Dnes si zapamätám slovo „manželka“.",
    translationDe: "Heute merke ich mir das Wort „Ehefrau“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 353,
    nr: "353",
    category: "04 Menschen & Familie",
    slovak: "pár",
    german: "Paar",
    sentenceSk: "Dnes si zapamätám slovo „pár“.",
    translationDe: "Heute merke ich mir das Wort „Paar“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 354,
    nr: "354",
    category: "04 Menschen & Familie",
    slovak: "vzťah",
    german: "Beziehung",
    sentenceSk: "Dnes si zapamätám slovo „vzťah“.",
    translationDe: "Heute merke ich mir das Wort „Beziehung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 355,
    nr: "355",
    category: "04 Menschen & Familie",
    slovak: "láska",
    german: "Liebe",
    sentenceSk: "Dnes si zapamätám slovo „láska“.",
    translationDe: "Heute merke ich mir das Wort „Liebe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 356,
    nr: "356",
    category: "04 Menschen & Familie",
    slovak: "priateľstvo",
    german: "Freundschaft",
    sentenceSk: "Dnes si zapamätám slovo „priateľstvo“.",
    translationDe: "Heute merke ich mir das Wort „Freundschaft“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 357,
    nr: "357",
    category: "04 Menschen & Familie",
    slovak: "návšteva",
    german: "Besuch",
    sentenceSk: "Dnes si zapamätám slovo „návšteva“.",
    translationDe: "Heute merke ich mir das Wort „Besuch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 358,
    nr: "358",
    category: "04 Menschen & Familie",
    slovak: "stretnutie",
    german: "Treffen",
    sentenceSk: "Dnes si zapamätám slovo „stretnutie“.",
    translationDe: "Heute merke ich mir das Wort „Treffen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 359,
    nr: "359",
    category: "04 Menschen & Familie",
    slovak: "rozhovor",
    german: "Gespräch",
    sentenceSk: "Dnes si zapamätám slovo „rozhovor“.",
    translationDe: "Heute merke ich mir das Wort „Gespräch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 360,
    nr: "360",
    category: "04 Menschen & Familie",
    slovak: "otázka",
    german: "Frage",
    sentenceSk: "Dnes si zapamätám slovo „otázka“.",
    translationDe: "Heute merke ich mir das Wort „Frage“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 361,
    nr: "361",
    category: "04 Menschen & Familie",
    slovak: "odpoveď",
    german: "Antwort",
    sentenceSk: "Dnes si zapamätám slovo „odpoveď“.",
    translationDe: "Heute merke ich mir das Wort „Antwort“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 362,
    nr: "362",
    category: "04 Menschen & Familie",
    slovak: "názor",
    german: "Meinung",
    sentenceSk: "Dnes si zapamätám slovo „názor“.",
    translationDe: "Heute merke ich mir das Wort „Meinung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 363,
    nr: "363",
    category: "04 Menschen & Familie",
    slovak: "problém",
    german: "Problem",
    sentenceSk: "Dnes si zapamätám slovo „problém“.",
    translationDe: "Heute merke ich mir das Wort „Problem“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 364,
    nr: "364",
    category: "04 Menschen & Familie",
    slovak: "pomoc",
    german: "Hilfe",
    sentenceSk: "Dnes si zapamätám slovo „pomoc“.",
    translationDe: "Heute merke ich mir das Wort „Hilfe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 365,
    nr: "365",
    category: "04 Menschen & Familie",
    slovak: "nápad",
    german: "Idee",
    sentenceSk: "Dnes si zapamätám slovo „nápad“.",
    translationDe: "Heute merke ich mir das Wort „Idee“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 366,
    nr: "366",
    category: "04 Menschen & Familie",
    slovak: "príbeh",
    german: "Geschichte",
    sentenceSk: "Dnes si zapamätám slovo „príbeh“.",
    translationDe: "Heute merke ich mir das Wort „Geschichte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 367,
    nr: "367",
    category: "04 Menschen & Familie",
    slovak: "správa",
    german: "Nachricht",
    sentenceSk: "Dnes si zapamätám slovo „správa“.",
    translationDe: "Heute merke ich mir das Wort „Nachricht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 368,
    nr: "368",
    category: "04 Menschen & Familie",
    slovak: "vtip",
    german: "Witz",
    sentenceSk: "Dnes si zapamätám slovo „vtip“.",
    translationDe: "Heute merke ich mir das Wort „Witz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 369,
    nr: "369",
    category: "04 Menschen & Familie",
    slovak: "hlas",
    german: "Stimme",
    sentenceSk: "Dnes si zapamätám slovo „hlas“.",
    translationDe: "Heute merke ich mir das Wort „Stimme“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 370,
    nr: "370",
    category: "04 Menschen & Familie",
    slovak: "tvár",
    german: "Gesicht",
    sentenceSk: "Dnes si zapamätám slovo „tvár“.",
    translationDe: "Heute merke ich mir das Wort „Gesicht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 371,
    nr: "371",
    category: "04 Menschen & Familie",
    slovak: "oko",
    german: "Auge",
    sentenceSk: "Dnes si zapamätám slovo „oko“.",
    translationDe: "Heute merke ich mir das Wort „Auge“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 372,
    nr: "372",
    category: "04 Menschen & Familie",
    slovak: "oči",
    german: "Augen",
    sentenceSk: "Dnes si zapamätám slovo „oči“.",
    translationDe: "Heute merke ich mir das Wort „Augen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 373,
    nr: "373",
    category: "04 Menschen & Familie",
    slovak: "ucho",
    german: "Ohr",
    sentenceSk: "Dnes si zapamätám slovo „ucho“.",
    translationDe: "Heute merke ich mir das Wort „Ohr“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 374,
    nr: "374",
    category: "04 Menschen & Familie",
    slovak: "nos",
    german: "Nase",
    sentenceSk: "Dnes si zapamätám slovo „nos“.",
    translationDe: "Heute merke ich mir das Wort „Nase“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 375,
    nr: "375",
    category: "04 Menschen & Familie",
    slovak: "ústa",
    german: "Mund",
    sentenceSk: "Dnes si zapamätám slovo „ústa“.",
    translationDe: "Heute merke ich mir das Wort „Mund“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 376,
    nr: "376",
    category: "04 Menschen & Familie",
    slovak: "zub",
    german: "Zahn",
    sentenceSk: "Dnes si zapamätám slovo „zub“.",
    translationDe: "Heute merke ich mir das Wort „Zahn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 377,
    nr: "377",
    category: "04 Menschen & Familie",
    slovak: "vlasy",
    german: "Haare",
    sentenceSk: "Dnes si zapamätám slovo „vlasy“.",
    translationDe: "Heute merke ich mir das Wort „Haare“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 378,
    nr: "378",
    category: "04 Menschen & Familie",
    slovak: "hlava",
    german: "Kopf",
    sentenceSk: "Dnes si zapamätám slovo „hlava“.",
    translationDe: "Heute merke ich mir das Wort „Kopf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 379,
    nr: "379",
    category: "04 Menschen & Familie",
    slovak: "ruka",
    german: "Hand/Arm",
    sentenceSk: "Dnes si zapamätám slovo „ruka“.",
    translationDe: "Heute merke ich mir das Wort „Hand/Arm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 380,
    nr: "380",
    category: "04 Menschen & Familie",
    slovak: "prst",
    german: "Finger",
    sentenceSk: "Dnes si zapamätám slovo „prst“.",
    translationDe: "Heute merke ich mir das Wort „Finger“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 381,
    nr: "381",
    category: "04 Menschen & Familie",
    slovak: "noha",
    german: "Bein/Fuß",
    sentenceSk: "Dnes si zapamätám slovo „noha“.",
    translationDe: "Heute merke ich mir das Wort „Bein/Fuß“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 382,
    nr: "382",
    category: "04 Menschen & Familie",
    slovak: "srdce",
    german: "Herz",
    sentenceSk: "Dnes si zapamätám slovo „srdce“.",
    translationDe: "Heute merke ich mir das Wort „Herz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 383,
    nr: "383",
    category: "04 Menschen & Familie",
    slovak: "telo",
    german: "Körper",
    sentenceSk: "Dnes si zapamätám slovo „telo“.",
    translationDe: "Heute merke ich mir das Wort „Körper“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 384,
    nr: "384",
    category: "04 Menschen & Familie",
    slovak: "zdravie",
    german: "Gesundheit",
    sentenceSk: "Dnes si zapamätám slovo „zdravie“.",
    translationDe: "Heute merke ich mir das Wort „Gesundheit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 385,
    nr: "385",
    category: "04 Menschen & Familie",
    slovak: "život",
    german: "Leben",
    sentenceSk: "Dnes si zapamätám slovo „život“.",
    translationDe: "Heute merke ich mir das Wort „Leben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 386,
    nr: "386",
    category: "04 Menschen & Familie",
    slovak: "smrť",
    german: "Tod",
    sentenceSk: "Dnes si zapamätám slovo „smrť“.",
    translationDe: "Heute merke ich mir das Wort „Tod“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 387,
    nr: "387",
    category: "04 Menschen & Familie",
    slovak: "adresa",
    german: "Adresse",
    sentenceSk: "Dnes si zapamätám slovo „adresa“.",
    translationDe: "Heute merke ich mir das Wort „Adresse“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 388,
    nr: "388",
    category: "04 Menschen & Familie",
    slovak: "telefón",
    german: "Telefon",
    sentenceSk: "Dnes si zapamätám slovo „telefón“.",
    translationDe: "Heute merke ich mir das Wort „Telefon“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 389,
    nr: "389",
    category: "04 Menschen & Familie",
    slovak: "kontakt",
    german: "Kontakt",
    sentenceSk: "Dnes si zapamätám slovo „kontakt“.",
    translationDe: "Heute merke ich mir das Wort „Kontakt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 390,
    nr: "390",
    category: "04 Menschen & Familie",
    slovak: "skupina",
    german: "Gruppe",
    sentenceSk: "Dnes si zapamätám slovo „skupina“.",
    translationDe: "Heute merke ich mir das Wort „Gruppe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 391,
    nr: "391",
    category: "04 Menschen & Familie",
    slovak: "tím",
    german: "Team",
    sentenceSk: "Dnes si zapamätám slovo „tím“.",
    translationDe: "Heute merke ich mir das Wort „Team“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 392,
    nr: "392",
    category: "05 Essen & Trinken",
    slovak: "jedlo",
    german: "Essen",
    sentenceSk: "Dnes si zapamätám slovo „jedlo“.",
    translationDe: "Heute merke ich mir das Wort „Essen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 393,
    nr: "393",
    category: "05 Essen & Trinken",
    slovak: "nápoj",
    german: "Getränk",
    sentenceSk: "Dnes si zapamätám slovo „nápoj“.",
    translationDe: "Heute merke ich mir das Wort „Getränk“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 394,
    nr: "394",
    category: "05 Essen & Trinken",
    slovak: "voda",
    german: "Wasser",
    sentenceSk: "Dnes si zapamätám slovo „voda“.",
    translationDe: "Heute merke ich mir das Wort „Wasser“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 395,
    nr: "395",
    category: "05 Essen & Trinken",
    slovak: "káva",
    german: "Kaffee",
    sentenceSk: "Dnes si zapamätám slovo „káva“.",
    translationDe: "Heute merke ich mir das Wort „Kaffee“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 396,
    nr: "396",
    category: "05 Essen & Trinken",
    slovak: "čaj",
    german: "Tee",
    sentenceSk: "Dnes si zapamätám slovo „čaj“.",
    translationDe: "Heute merke ich mir das Wort „Tee“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 397,
    nr: "397",
    category: "05 Essen & Trinken",
    slovak: "mlieko",
    german: "Milch",
    sentenceSk: "Dnes si zapamätám slovo „mlieko“.",
    translationDe: "Heute merke ich mir das Wort „Milch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 398,
    nr: "398",
    category: "05 Essen & Trinken",
    slovak: "džús",
    german: "Saft",
    sentenceSk: "Dnes si zapamätám slovo „džús“.",
    translationDe: "Heute merke ich mir das Wort „Saft“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 399,
    nr: "399",
    category: "05 Essen & Trinken",
    slovak: "pivo",
    german: "Bier",
    sentenceSk: "Dnes si zapamätám slovo „pivo“.",
    translationDe: "Heute merke ich mir das Wort „Bier“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 400,
    nr: "400",
    category: "05 Essen & Trinken",
    slovak: "víno",
    german: "Wein",
    sentenceSk: "Dnes si zapamätám slovo „víno“.",
    translationDe: "Heute merke ich mir das Wort „Wein“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 401,
    nr: "401",
    category: "05 Essen & Trinken",
    slovak: "raňajky",
    german: "Frühstück",
    sentenceSk: "Dnes si zapamätám slovo „raňajky“.",
    translationDe: "Heute merke ich mir das Wort „Frühstück“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 402,
    nr: "402",
    category: "05 Essen & Trinken",
    slovak: "obed",
    german: "Mittagessen",
    sentenceSk: "Dnes si zapamätám slovo „obed“.",
    translationDe: "Heute merke ich mir das Wort „Mittagessen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 403,
    nr: "403",
    category: "05 Essen & Trinken",
    slovak: "večera",
    german: "Abendessen",
    sentenceSk: "Dnes si zapamätám slovo „večera“.",
    translationDe: "Heute merke ich mir das Wort „Abendessen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 404,
    nr: "404",
    category: "05 Essen & Trinken",
    slovak: "chlieb",
    german: "Brot",
    sentenceSk: "Dnes si zapamätám slovo „chlieb“.",
    translationDe: "Heute merke ich mir das Wort „Brot“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 405,
    nr: "405",
    category: "05 Essen & Trinken",
    slovak: "rožok",
    german: "Brötchen",
    sentenceSk: "Dnes si zapamätám slovo „rožok“.",
    translationDe: "Heute merke ich mir das Wort „Brötchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 406,
    nr: "406",
    category: "05 Essen & Trinken",
    slovak: "maslo",
    german: "Butter",
    sentenceSk: "Dnes si zapamätám slovo „maslo“.",
    translationDe: "Heute merke ich mir das Wort „Butter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 407,
    nr: "407",
    category: "05 Essen & Trinken",
    slovak: "syr",
    german: "Käse",
    sentenceSk: "Dnes si zapamätám slovo „syr“.",
    translationDe: "Heute merke ich mir das Wort „Käse“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 408,
    nr: "408",
    category: "05 Essen & Trinken",
    slovak: "vajce",
    german: "Ei",
    sentenceSk: "Dnes si zapamätám slovo „vajce“.",
    translationDe: "Heute merke ich mir das Wort „Ei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 409,
    nr: "409",
    category: "05 Essen & Trinken",
    slovak: "mäso",
    german: "Fleisch",
    sentenceSk: "Dnes si zapamätám slovo „mäso“.",
    translationDe: "Heute merke ich mir das Wort „Fleisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 410,
    nr: "410",
    category: "05 Essen & Trinken",
    slovak: "kurča",
    german: "Huhn",
    sentenceSk: "Dnes si zapamätám slovo „kurča“.",
    translationDe: "Heute merke ich mir das Wort „Huhn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 411,
    nr: "411",
    category: "05 Essen & Trinken",
    slovak: "kura",
    german: "Hähnchen",
    sentenceSk: "Dnes si zapamätám slovo „kura“.",
    translationDe: "Heute merke ich mir das Wort „Hähnchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 412,
    nr: "412",
    category: "05 Essen & Trinken",
    slovak: "hovädzie",
    german: "Rindfleisch",
    sentenceSk: "Dnes si zapamätám slovo „hovädzie“.",
    translationDe: "Heute merke ich mir das Wort „Rindfleisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 413,
    nr: "413",
    category: "05 Essen & Trinken",
    slovak: "bravčové",
    german: "Schweinefleisch",
    sentenceSk: "Dnes si zapamätám slovo „bravčové“.",
    translationDe: "Heute merke ich mir das Wort „Schweinefleisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 414,
    nr: "414",
    category: "05 Essen & Trinken",
    slovak: "ryba",
    german: "Fisch",
    sentenceSk: "Dnes si zapamätám slovo „ryba“.",
    translationDe: "Heute merke ich mir das Wort „Fisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 415,
    nr: "415",
    category: "05 Essen & Trinken",
    slovak: "šunka",
    german: "Schinken",
    sentenceSk: "Dnes si zapamätám slovo „šunka“.",
    translationDe: "Heute merke ich mir das Wort „Schinken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 416,
    nr: "416",
    category: "05 Essen & Trinken",
    slovak: "klobása",
    german: "Wurst",
    sentenceSk: "Dnes si zapamätám slovo „klobása“.",
    translationDe: "Heute merke ich mir das Wort „Wurst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 417,
    nr: "417",
    category: "05 Essen & Trinken",
    slovak: "ryža",
    german: "Reis",
    sentenceSk: "Dnes si zapamätám slovo „ryža“.",
    translationDe: "Heute merke ich mir das Wort „Reis“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 418,
    nr: "418",
    category: "05 Essen & Trinken",
    slovak: "cestoviny",
    german: "Nudeln",
    sentenceSk: "Dnes si zapamätám slovo „cestoviny“.",
    translationDe: "Heute merke ich mir das Wort „Nudeln“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 419,
    nr: "419",
    category: "05 Essen & Trinken",
    slovak: "zemiak",
    german: "Kartoffel",
    sentenceSk: "Dnes si zapamätám slovo „zemiak“.",
    translationDe: "Heute merke ich mir das Wort „Kartoffel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 420,
    nr: "420",
    category: "05 Essen & Trinken",
    slovak: "polievka",
    german: "Suppe",
    sentenceSk: "Dnes si zapamätám slovo „polievka“.",
    translationDe: "Heute merke ich mir das Wort „Suppe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 421,
    nr: "421",
    category: "05 Essen & Trinken",
    slovak: "šalát",
    german: "Salat",
    sentenceSk: "Dnes si zapamätám slovo „šalát“.",
    translationDe: "Heute merke ich mir das Wort „Salat“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 422,
    nr: "422",
    category: "05 Essen & Trinken",
    slovak: "zelenina",
    german: "Gemüse",
    sentenceSk: "Dnes si zapamätám slovo „zelenina“.",
    translationDe: "Heute merke ich mir das Wort „Gemüse“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 423,
    nr: "423",
    category: "05 Essen & Trinken",
    slovak: "ovocie",
    german: "Obst",
    sentenceSk: "Dnes si zapamätám slovo „ovocie“.",
    translationDe: "Heute merke ich mir das Wort „Obst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 424,
    nr: "424",
    category: "05 Essen & Trinken",
    slovak: "jablko",
    german: "Apfel",
    sentenceSk: "Dnes si zapamätám slovo „jablko“.",
    translationDe: "Heute merke ich mir das Wort „Apfel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 425,
    nr: "425",
    category: "05 Essen & Trinken",
    slovak: "hruška",
    german: "Birne",
    sentenceSk: "Dnes si zapamätám slovo „hruška“.",
    translationDe: "Heute merke ich mir das Wort „Birne“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 426,
    nr: "426",
    category: "05 Essen & Trinken",
    slovak: "banán",
    german: "Banane",
    sentenceSk: "Dnes si zapamätám slovo „banán“.",
    translationDe: "Heute merke ich mir das Wort „Banane“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 427,
    nr: "427",
    category: "05 Essen & Trinken",
    slovak: "pomaranč",
    german: "Orange",
    sentenceSk: "Dnes si zapamätám slovo „pomaranč“.",
    translationDe: "Heute merke ich mir das Wort „Orange“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 428,
    nr: "428",
    category: "05 Essen & Trinken",
    slovak: "citrón",
    german: "Zitrone",
    sentenceSk: "Dnes si zapamätám slovo „citrón“.",
    translationDe: "Heute merke ich mir das Wort „Zitrone“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 429,
    nr: "429",
    category: "05 Essen & Trinken",
    slovak: "jahoda",
    german: "Erdbeere",
    sentenceSk: "Dnes si zapamätám slovo „jahoda“.",
    translationDe: "Heute merke ich mir das Wort „Erdbeere“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 430,
    nr: "430",
    category: "05 Essen & Trinken",
    slovak: "hrozno",
    german: "Trauben",
    sentenceSk: "Dnes si zapamätám slovo „hrozno“.",
    translationDe: "Heute merke ich mir das Wort „Trauben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 431,
    nr: "431",
    category: "05 Essen & Trinken",
    slovak: "paradajka",
    german: "Tomate",
    sentenceSk: "Dnes si zapamätám slovo „paradajka“.",
    translationDe: "Heute merke ich mir das Wort „Tomate“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 432,
    nr: "432",
    category: "05 Essen & Trinken",
    slovak: "uhorka",
    german: "Gurke",
    sentenceSk: "Dnes si zapamätám slovo „uhorka“.",
    translationDe: "Heute merke ich mir das Wort „Gurke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 433,
    nr: "433",
    category: "05 Essen & Trinken",
    slovak: "paprika",
    german: "Paprika",
    sentenceSk: "Dnes si zapamätám slovo „paprika“.",
    translationDe: "Heute merke ich mir das Wort „Paprika“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 434,
    nr: "434",
    category: "05 Essen & Trinken",
    slovak: "cibuľa",
    german: "Zwiebel",
    sentenceSk: "Dnes si zapamätám slovo „cibuľa“.",
    translationDe: "Heute merke ich mir das Wort „Zwiebel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 435,
    nr: "435",
    category: "05 Essen & Trinken",
    slovak: "cesnak",
    german: "Knoblauch",
    sentenceSk: "Dnes si zapamätám slovo „cesnak“.",
    translationDe: "Heute merke ich mir das Wort „Knoblauch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 436,
    nr: "436",
    category: "05 Essen & Trinken",
    slovak: "mrkva",
    german: "Karotte",
    sentenceSk: "Dnes si zapamätám slovo „mrkva“.",
    translationDe: "Heute merke ich mir das Wort „Karotte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 437,
    nr: "437",
    category: "05 Essen & Trinken",
    slovak: "kapusta",
    german: "Kohl",
    sentenceSk: "Dnes si zapamätám slovo „kapusta“.",
    translationDe: "Heute merke ich mir das Wort „Kohl“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 438,
    nr: "438",
    category: "05 Essen & Trinken",
    slovak: "huba",
    german: "Pilz",
    sentenceSk: "Dnes si zapamätám slovo „huba“.",
    translationDe: "Heute merke ich mir das Wort „Pilz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 439,
    nr: "439",
    category: "05 Essen & Trinken",
    slovak: "cukor",
    german: "Zucker",
    sentenceSk: "Dnes si zapamätám slovo „cukor“.",
    translationDe: "Heute merke ich mir das Wort „Zucker“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 440,
    nr: "440",
    category: "05 Essen & Trinken",
    slovak: "soľ",
    german: "Salz",
    sentenceSk: "Dnes si zapamätám slovo „soľ“.",
    translationDe: "Heute merke ich mir das Wort „Salz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 441,
    nr: "441",
    category: "05 Essen & Trinken",
    slovak: "korenie",
    german: "Gewürz/Pfeffer",
    sentenceSk: "Dnes si zapamätám slovo „korenie“.",
    translationDe: "Heute merke ich mir das Wort „Gewürz/Pfeffer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 442,
    nr: "442",
    category: "05 Essen & Trinken",
    slovak: "olej",
    german: "Öl",
    sentenceSk: "Dnes si zapamätám slovo „olej“.",
    translationDe: "Heute merke ich mir das Wort „Öl“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 443,
    nr: "443",
    category: "05 Essen & Trinken",
    slovak: "ocot",
    german: "Essig",
    sentenceSk: "Dnes si zapamätám slovo „ocot“.",
    translationDe: "Heute merke ich mir das Wort „Essig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 444,
    nr: "444",
    category: "05 Essen & Trinken",
    slovak: "múka",
    german: "Mehl",
    sentenceSk: "Dnes si zapamätám slovo „múka“.",
    translationDe: "Heute merke ich mir das Wort „Mehl“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 445,
    nr: "445",
    category: "05 Essen & Trinken",
    slovak: "koláč",
    german: "Kuchen",
    sentenceSk: "Dnes si zapamätám slovo „koláč“.",
    translationDe: "Heute merke ich mir das Wort „Kuchen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 446,
    nr: "446",
    category: "05 Essen & Trinken",
    slovak: "čokoláda",
    german: "Schokolade",
    sentenceSk: "Dnes si zapamätám slovo „čokoláda“.",
    translationDe: "Heute merke ich mir das Wort „Schokolade“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 447,
    nr: "447",
    category: "05 Essen & Trinken",
    slovak: "zmrzlina",
    german: "Eis",
    sentenceSk: "Dnes si zapamätám slovo „zmrzlina“.",
    translationDe: "Heute merke ich mir das Wort „Eis“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 448,
    nr: "448",
    category: "05 Essen & Trinken",
    slovak: "dezert",
    german: "Dessert",
    sentenceSk: "Dnes si zapamätám slovo „dezert“.",
    translationDe: "Heute merke ich mir das Wort „Dessert“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 449,
    nr: "449",
    category: "05 Essen & Trinken",
    slovak: "porcia",
    german: "Portion",
    sentenceSk: "Dnes si zapamätám slovo „porcia“.",
    translationDe: "Heute merke ich mir das Wort „Portion“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 450,
    nr: "450",
    category: "05 Essen & Trinken",
    slovak: "tanier",
    german: "Teller",
    sentenceSk: "Dnes si zapamätám slovo „tanier“.",
    translationDe: "Heute merke ich mir das Wort „Teller“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 451,
    nr: "451",
    category: "05 Essen & Trinken",
    slovak: "miska",
    german: "Schüssel",
    sentenceSk: "Dnes si zapamätám slovo „miska“.",
    translationDe: "Heute merke ich mir das Wort „Schüssel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 452,
    nr: "452",
    category: "05 Essen & Trinken",
    slovak: "pohár",
    german: "Glas",
    sentenceSk: "Dnes si zapamätám slovo „pohár“.",
    translationDe: "Heute merke ich mir das Wort „Glas“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 453,
    nr: "453",
    category: "05 Essen & Trinken",
    slovak: "šálka",
    german: "Tasse",
    sentenceSk: "Dnes si zapamätám slovo „šálka“.",
    translationDe: "Heute merke ich mir das Wort „Tasse“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 454,
    nr: "454",
    category: "05 Essen & Trinken",
    slovak: "fľaša",
    german: "Flasche",
    sentenceSk: "Dnes si zapamätám slovo „fľaša“.",
    translationDe: "Heute merke ich mir das Wort „Flasche“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 455,
    nr: "455",
    category: "05 Essen & Trinken",
    slovak: "lyžica",
    german: "Löffel",
    sentenceSk: "Dnes si zapamätám slovo „lyžica“.",
    translationDe: "Heute merke ich mir das Wort „Löffel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 456,
    nr: "456",
    category: "05 Essen & Trinken",
    slovak: "vidlička",
    german: "Gabel",
    sentenceSk: "Dnes si zapamätám slovo „vidlička“.",
    translationDe: "Heute merke ich mir das Wort „Gabel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 457,
    nr: "457",
    category: "05 Essen & Trinken",
    slovak: "nôž",
    german: "Messer",
    sentenceSk: "Dnes si zapamätám slovo „nôž“.",
    translationDe: "Heute merke ich mir das Wort „Messer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 458,
    nr: "458",
    category: "05 Essen & Trinken",
    slovak: "obrúsok",
    german: "Serviette",
    sentenceSk: "Dnes si zapamätám slovo „obrúsok“.",
    translationDe: "Heute merke ich mir das Wort „Serviette“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 459,
    nr: "459",
    category: "05 Essen & Trinken",
    slovak: "stôl",
    german: "Tisch",
    sentenceSk: "Dnes si zapamätám slovo „stôl“.",
    translationDe: "Heute merke ich mir das Wort „Tisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 460,
    nr: "460",
    category: "05 Essen & Trinken",
    slovak: "menu",
    german: "Speisekarte",
    sentenceSk: "Dnes si zapamätám slovo „menu“.",
    translationDe: "Heute merke ich mir das Wort „Speisekarte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 461,
    nr: "461",
    category: "05 Essen & Trinken",
    slovak: "účet",
    german: "Rechnung",
    sentenceSk: "Dnes si zapamätám slovo „účet“.",
    translationDe: "Heute merke ich mir das Wort „Rechnung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 462,
    nr: "462",
    category: "05 Essen & Trinken",
    slovak: "reštaurácia",
    german: "Restaurant",
    sentenceSk: "Dnes si zapamätám slovo „reštaurácia“.",
    translationDe: "Heute merke ich mir das Wort „Restaurant“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 463,
    nr: "463",
    category: "05 Essen & Trinken",
    slovak: "kaviareň",
    german: "Café",
    sentenceSk: "Dnes si zapamätám slovo „kaviareň“.",
    translationDe: "Heute merke ich mir das Wort „Café“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 464,
    nr: "464",
    category: "05 Essen & Trinken",
    slovak: "bar",
    german: "Bar",
    sentenceSk: "Dnes si zapamätám slovo „bar“.",
    translationDe: "Heute merke ich mir das Wort „Bar“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 465,
    nr: "465",
    category: "05 Essen & Trinken",
    slovak: "pekáreň",
    german: "Bäckerei",
    sentenceSk: "Dnes si zapamätám slovo „pekáreň“.",
    translationDe: "Heute merke ich mir das Wort „Bäckerei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 466,
    nr: "466",
    category: "05 Essen & Trinken",
    slovak: "obchod",
    german: "Geschäft",
    sentenceSk: "Dnes si zapamätám slovo „obchod“.",
    translationDe: "Heute merke ich mir das Wort „Geschäft“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 467,
    nr: "467",
    category: "05 Essen & Trinken",
    slovak: "trh",
    german: "Markt",
    sentenceSk: "Dnes si zapamätám slovo „trh“.",
    translationDe: "Heute merke ich mir das Wort „Markt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 468,
    nr: "468",
    category: "05 Essen & Trinken",
    slovak: "hlad",
    german: "Hunger",
    sentenceSk: "Dnes si zapamätám slovo „hlad“.",
    translationDe: "Heute merke ich mir das Wort „Hunger“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 469,
    nr: "469",
    category: "05 Essen & Trinken",
    slovak: "smäd",
    german: "Durst",
    sentenceSk: "Dnes si zapamätám slovo „smäd“.",
    translationDe: "Heute merke ich mir das Wort „Durst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 470,
    nr: "470",
    category: "05 Essen & Trinken",
    slovak: "chuť",
    german: "Geschmack/Appetit",
    sentenceSk: "Dnes si zapamätám slovo „chuť“.",
    translationDe: "Heute merke ich mir das Wort „Geschmack/Appetit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 471,
    nr: "471",
    category: "05 Essen & Trinken",
    slovak: "sladký",
    german: "süß",
    sentenceSk: "Dnes si zapamätám slovo „sladký“.",
    translationDe: "Heute merke ich mir das Wort „süß“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 472,
    nr: "472",
    category: "05 Essen & Trinken",
    slovak: "slaný",
    german: "salzig",
    sentenceSk: "Dnes si zapamätám slovo „slaný“.",
    translationDe: "Heute merke ich mir das Wort „salzig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 473,
    nr: "473",
    category: "05 Essen & Trinken",
    slovak: "kyslý",
    german: "sauer",
    sentenceSk: "Dnes si zapamätám slovo „kyslý“.",
    translationDe: "Heute merke ich mir das Wort „sauer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 474,
    nr: "474",
    category: "05 Essen & Trinken",
    slovak: "horký",
    german: "bitter",
    sentenceSk: "Dnes si zapamätám slovo „horký“.",
    translationDe: "Heute merke ich mir das Wort „bitter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 475,
    nr: "475",
    category: "05 Essen & Trinken",
    slovak: "pikantný",
    german: "scharf",
    sentenceSk: "Dnes si zapamätám slovo „pikantný“.",
    translationDe: "Heute merke ich mir das Wort „scharf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 476,
    nr: "476",
    category: "05 Essen & Trinken",
    slovak: "čerstvý",
    german: "frisch",
    sentenceSk: "Dnes si zapamätám slovo „čerstvý“.",
    translationDe: "Heute merke ich mir das Wort „frisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 477,
    nr: "477",
    category: "05 Essen & Trinken",
    slovak: "teplý",
    german: "warm",
    sentenceSk: "Dnes si zapamätám slovo „teplý“.",
    translationDe: "Heute merke ich mir das Wort „warm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 478,
    nr: "478",
    category: "05 Essen & Trinken",
    slovak: "studený",
    german: "kalt",
    sentenceSk: "Dnes si zapamätám slovo „studený“.",
    translationDe: "Heute merke ich mir das Wort „kalt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 479,
    nr: "479",
    category: "05 Essen & Trinken",
    slovak: "horúci",
    german: "heiß",
    sentenceSk: "Dnes si zapamätám slovo „horúci“.",
    translationDe: "Heute merke ich mir das Wort „heiß“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 480,
    nr: "480",
    category: "05 Essen & Trinken",
    slovak: "chutný",
    german: "lecker",
    sentenceSk: "Dnes si zapamätám slovo „chutný“.",
    translationDe: "Heute merke ich mir das Wort „lecker“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 481,
    nr: "481",
    category: "05 Essen & Trinken",
    slovak: "hladný",
    german: "hungrig",
    sentenceSk: "Dnes si zapamätám slovo „hladný“.",
    translationDe: "Heute merke ich mir das Wort „hungrig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 482,
    nr: "482",
    category: "05 Essen & Trinken",
    slovak: "smädný",
    german: "durstig",
    sentenceSk: "Dnes si zapamätám slovo „smädný“.",
    translationDe: "Heute merke ich mir das Wort „durstig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 483,
    nr: "483",
    category: "05 Essen & Trinken",
    slovak: "plný",
    german: "voll",
    sentenceSk: "Dnes si zapamätám slovo „plný“.",
    translationDe: "Heute merke ich mir das Wort „voll“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 484,
    nr: "484",
    category: "05 Essen & Trinken",
    slovak: "prázdny",
    german: "leer",
    sentenceSk: "Dnes si zapamätám slovo „prázdny“.",
    translationDe: "Heute merke ich mir das Wort „leer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 485,
    nr: "485",
    category: "05 Essen & Trinken",
    slovak: "vegetariánsky",
    german: "vegetarisch",
    sentenceSk: "Dnes si zapamätám slovo „vegetariánsky“.",
    translationDe: "Heute merke ich mir das Wort „vegetarisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 486,
    nr: "486",
    category: "05 Essen & Trinken",
    slovak: "raňajkovať",
    german: "frühstücken",
    sentenceSk: "Dnes si zapamätám slovo „raňajkovať“.",
    translationDe: "Heute merke ich mir das Wort „frühstücken“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 487,
    nr: "487",
    category: "05 Essen & Trinken",
    slovak: "obedovať",
    german: "zu Mittag essen",
    sentenceSk: "Dnes si zapamätám slovo „obedovať“.",
    translationDe: "Heute merke ich mir das Wort „zu Mittag essen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 488,
    nr: "488",
    category: "05 Essen & Trinken",
    slovak: "večerať",
    german: "zu Abend essen",
    sentenceSk: "Dnes si zapamätám slovo „večerať“.",
    translationDe: "Heute merke ich mir das Wort „zu Abend essen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 489,
    nr: "489",
    category: "06 Zuhause",
    slovak: "dom",
    german: "Haus",
    sentenceSk: "Dnes si zapamätám slovo „dom“.",
    translationDe: "Heute merke ich mir das Wort „Haus“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 490,
    nr: "490",
    category: "06 Zuhause",
    slovak: "byt",
    german: "Wohnung",
    sentenceSk: "Dnes si zapamätám slovo „byt“.",
    translationDe: "Heute merke ich mir das Wort „Wohnung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 491,
    nr: "491",
    category: "06 Zuhause",
    slovak: "izba",
    german: "Zimmer",
    sentenceSk: "Dnes si zapamätám slovo „izba“.",
    translationDe: "Heute merke ich mir das Wort „Zimmer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 492,
    nr: "492",
    category: "06 Zuhause",
    slovak: "kuchyňa",
    german: "Küche",
    sentenceSk: "Dnes si zapamätám slovo „kuchyňa“.",
    translationDe: "Heute merke ich mir das Wort „Küche“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 493,
    nr: "493",
    category: "06 Zuhause",
    slovak: "kúpeľňa",
    german: "Badezimmer",
    sentenceSk: "Dnes si zapamätám slovo „kúpeľňa“.",
    translationDe: "Heute merke ich mir das Wort „Badezimmer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 494,
    nr: "494",
    category: "06 Zuhause",
    slovak: "spálňa",
    german: "Schlafzimmer",
    sentenceSk: "Dnes si zapamätám slovo „spálňa“.",
    translationDe: "Heute merke ich mir das Wort „Schlafzimmer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 495,
    nr: "495",
    category: "06 Zuhause",
    slovak: "obývačka",
    german: "Wohnzimmer",
    sentenceSk: "Dnes si zapamätám slovo „obývačka“.",
    translationDe: "Heute merke ich mir das Wort „Wohnzimmer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 496,
    nr: "496",
    category: "06 Zuhause",
    slovak: "chodba",
    german: "Flur",
    sentenceSk: "Dnes si zapamätám slovo „chodba“.",
    translationDe: "Heute merke ich mir das Wort „Flur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 497,
    nr: "497",
    category: "06 Zuhause",
    slovak: "balkón",
    german: "Balkon",
    sentenceSk: "Dnes si zapamätám slovo „balkón“.",
    translationDe: "Heute merke ich mir das Wort „Balkon“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 498,
    nr: "498",
    category: "06 Zuhause",
    slovak: "záhrada",
    german: "Garten",
    sentenceSk: "Dnes si zapamätám slovo „záhrada“.",
    translationDe: "Heute merke ich mir das Wort „Garten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 499,
    nr: "499",
    category: "06 Zuhause",
    slovak: "garáž",
    german: "Garage",
    sentenceSk: "Dnes si zapamätám slovo „garáž“.",
    translationDe: "Heute merke ich mir das Wort „Garage“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 500,
    nr: "500",
    category: "06 Zuhause",
    slovak: "dvere",
    german: "Tür",
    sentenceSk: "Dnes si zapamätám slovo „dvere“.",
    translationDe: "Heute merke ich mir das Wort „Tür“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 501,
    nr: "501",
    category: "06 Zuhause",
    slovak: "okno",
    german: "Fenster",
    sentenceSk: "Dnes si zapamätám slovo „okno“.",
    translationDe: "Heute merke ich mir das Wort „Fenster“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 502,
    nr: "502",
    category: "06 Zuhause",
    slovak: "stena",
    german: "Wand",
    sentenceSk: "Dnes si zapamätám slovo „stena“.",
    translationDe: "Heute merke ich mir das Wort „Wand“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 503,
    nr: "503",
    category: "06 Zuhause",
    slovak: "podlaha",
    german: "Boden",
    sentenceSk: "Dnes si zapamätám slovo „podlaha“.",
    translationDe: "Heute merke ich mir das Wort „Boden“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 504,
    nr: "504",
    category: "06 Zuhause",
    slovak: "strop",
    german: "Decke",
    sentenceSk: "Dnes si zapamätám slovo „strop“.",
    translationDe: "Heute merke ich mir das Wort „Decke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 505,
    nr: "505",
    category: "06 Zuhause",
    slovak: "strecha",
    german: "Dach",
    sentenceSk: "Dnes si zapamätám slovo „strecha“.",
    translationDe: "Heute merke ich mir das Wort „Dach“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 506,
    nr: "506",
    category: "06 Zuhause",
    slovak: "schody",
    german: "Treppe",
    sentenceSk: "Dnes si zapamätám slovo „schody“.",
    translationDe: "Heute merke ich mir das Wort „Treppe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 507,
    nr: "507",
    category: "06 Zuhause",
    slovak: "výťah",
    german: "Aufzug",
    sentenceSk: "Dnes si zapamätám slovo „výťah“.",
    translationDe: "Heute merke ich mir das Wort „Aufzug“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 508,
    nr: "508",
    category: "06 Zuhause",
    slovak: "kľúč",
    german: "Schlüssel",
    sentenceSk: "Dnes si zapamätám slovo „kľúč“.",
    translationDe: "Heute merke ich mir das Wort „Schlüssel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 509,
    nr: "509",
    category: "06 Zuhause",
    slovak: "zámok",
    german: "Schloss",
    sentenceSk: "Dnes si zapamätám slovo „zámok“.",
    translationDe: "Heute merke ich mir das Wort „Schloss“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 510,
    nr: "510",
    category: "06 Zuhause",
    slovak: "posteľ",
    german: "Bett",
    sentenceSk: "Dnes si zapamätám slovo „posteľ“.",
    translationDe: "Heute merke ich mir das Wort „Bett“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 511,
    nr: "511",
    category: "06 Zuhause",
    slovak: "stolička",
    german: "Stuhl",
    sentenceSk: "Dnes si zapamätám slovo „stolička“.",
    translationDe: "Heute merke ich mir das Wort „Stuhl“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 512,
    nr: "512",
    category: "06 Zuhause",
    slovak: "gauč",
    german: "Sofa",
    sentenceSk: "Dnes si zapamätám slovo „gauč“.",
    translationDe: "Heute merke ich mir das Wort „Sofa“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 513,
    nr: "513",
    category: "06 Zuhause",
    slovak: "skriňa",
    german: "Schrank",
    sentenceSk: "Dnes si zapamätám slovo „skriňa“.",
    translationDe: "Heute merke ich mir das Wort „Schrank“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 514,
    nr: "514",
    category: "06 Zuhause",
    slovak: "polica",
    german: "Regal",
    sentenceSk: "Dnes si zapamätám slovo „polica“.",
    translationDe: "Heute merke ich mir das Wort „Regal“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 515,
    nr: "515",
    category: "06 Zuhause",
    slovak: "lampa",
    german: "Lampe",
    sentenceSk: "Dnes si zapamätám slovo „lampa“.",
    translationDe: "Heute merke ich mir das Wort „Lampe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 516,
    nr: "516",
    category: "06 Zuhause",
    slovak: "svetlo",
    german: "Licht",
    sentenceSk: "Dnes si zapamätám slovo „svetlo“.",
    translationDe: "Heute merke ich mir das Wort „Licht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 517,
    nr: "517",
    category: "06 Zuhause",
    slovak: "zrkadlo",
    german: "Spiegel",
    sentenceSk: "Dnes si zapamätám slovo „zrkadlo“.",
    translationDe: "Heute merke ich mir das Wort „Spiegel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 518,
    nr: "518",
    category: "06 Zuhause",
    slovak: "koberec",
    german: "Teppich",
    sentenceSk: "Dnes si zapamätám slovo „koberec“.",
    translationDe: "Heute merke ich mir das Wort „Teppich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 519,
    nr: "519",
    category: "06 Zuhause",
    slovak: "záves",
    german: "Vorhang",
    sentenceSk: "Dnes si zapamätám slovo „záves“.",
    translationDe: "Heute merke ich mir das Wort „Vorhang“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 520,
    nr: "520",
    category: "06 Zuhause",
    slovak: "vankúš",
    german: "Kissen",
    sentenceSk: "Dnes si zapamätám slovo „vankúš“.",
    translationDe: "Heute merke ich mir das Wort „Kissen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 521,
    nr: "521",
    category: "06 Zuhause",
    slovak: "deka",
    german: "Decke",
    sentenceSk: "Dnes si zapamätám slovo „deka“.",
    translationDe: "Heute merke ich mir das Wort „Decke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 522,
    nr: "522",
    category: "06 Zuhause",
    slovak: "uterák",
    german: "Handtuch",
    sentenceSk: "Dnes si zapamätám slovo „uterák“.",
    translationDe: "Heute merke ich mir das Wort „Handtuch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 523,
    nr: "523",
    category: "06 Zuhause",
    slovak: "mydlo",
    german: "Seife",
    sentenceSk: "Dnes si zapamätám slovo „mydlo“.",
    translationDe: "Heute merke ich mir das Wort „Seife“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 524,
    nr: "524",
    category: "06 Zuhause",
    slovak: "šampón",
    german: "Shampoo",
    sentenceSk: "Dnes si zapamätám slovo „šampón“.",
    translationDe: "Heute merke ich mir das Wort „Shampoo“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 525,
    nr: "525",
    category: "06 Zuhause",
    slovak: "zubná kefka",
    german: "Zahnbürste",
    sentenceSk: "Dnes si zapamätám slovo „zubná kefka“.",
    translationDe: "Heute merke ich mir das Wort „Zahnbürste“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 526,
    nr: "526",
    category: "06 Zuhause",
    slovak: "chladnička",
    german: "Kühlschrank",
    sentenceSk: "Dnes si zapamätám slovo „chladnička“.",
    translationDe: "Heute merke ich mir das Wort „Kühlschrank“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 527,
    nr: "527",
    category: "06 Zuhause",
    slovak: "mraznička",
    german: "Gefrierschrank",
    sentenceSk: "Dnes si zapamätám slovo „mraznička“.",
    translationDe: "Heute merke ich mir das Wort „Gefrierschrank“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 528,
    nr: "528",
    category: "06 Zuhause",
    slovak: "rúra",
    german: "Backofen",
    sentenceSk: "Dnes si zapamätám slovo „rúra“.",
    translationDe: "Heute merke ich mir das Wort „Backofen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 529,
    nr: "529",
    category: "06 Zuhause",
    slovak: "sporák",
    german: "Herd",
    sentenceSk: "Dnes si zapamätám slovo „sporák“.",
    translationDe: "Heute merke ich mir das Wort „Herd“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 530,
    nr: "530",
    category: "06 Zuhause",
    slovak: "mikrovlnka",
    german: "Mikrowelle",
    sentenceSk: "Dnes si zapamätám slovo „mikrovlnka“.",
    translationDe: "Heute merke ich mir das Wort „Mikrowelle“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 531,
    nr: "531",
    category: "06 Zuhause",
    slovak: "umývačka",
    german: "Geschirrspüler",
    sentenceSk: "Dnes si zapamätám slovo „umývačka“.",
    translationDe: "Heute merke ich mir das Wort „Geschirrspüler“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 532,
    nr: "532",
    category: "06 Zuhause",
    slovak: "práčka",
    german: "Waschmaschine",
    sentenceSk: "Dnes si zapamätám slovo „práčka“.",
    translationDe: "Heute merke ich mir das Wort „Waschmaschine“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 533,
    nr: "533",
    category: "06 Zuhause",
    slovak: "vysávač",
    german: "Staubsauger",
    sentenceSk: "Dnes si zapamätám slovo „vysávač“.",
    translationDe: "Heute merke ich mir das Wort „Staubsauger“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 534,
    nr: "534",
    category: "06 Zuhause",
    slovak: "odpad",
    german: "Müll",
    sentenceSk: "Dnes si zapamätám slovo „odpad“.",
    translationDe: "Heute merke ich mir das Wort „Müll“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 535,
    nr: "535",
    category: "06 Zuhause",
    slovak: "kôš",
    german: "Mülleimer/Korb",
    sentenceSk: "Dnes si zapamätám slovo „kôš“.",
    translationDe: "Heute merke ich mir das Wort „Mülleimer/Korb“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 536,
    nr: "536",
    category: "06 Zuhause",
    slovak: "elektrina",
    german: "Strom",
    sentenceSk: "Dnes si zapamätám slovo „elektrina“.",
    translationDe: "Heute merke ich mir das Wort „Strom“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 537,
    nr: "537",
    category: "06 Zuhause",
    slovak: "kúrenie",
    german: "Heizung",
    sentenceSk: "Dnes si zapamätám slovo „kúrenie“.",
    translationDe: "Heute merke ich mir das Wort „Heizung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 538,
    nr: "538",
    category: "06 Zuhause",
    slovak: "internet",
    german: "Internet",
    sentenceSk: "Dnes si zapamätám slovo „internet“.",
    translationDe: "Heute merke ich mir das Wort „Internet“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 539,
    nr: "539",
    category: "06 Zuhause",
    slovak: "zásuvka",
    german: "Steckdose",
    sentenceSk: "Dnes si zapamätám slovo „zásuvka“.",
    translationDe: "Heute merke ich mir das Wort „Steckdose“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 540,
    nr: "540",
    category: "06 Zuhause",
    slovak: "kábel",
    german: "Kabel",
    sentenceSk: "Dnes si zapamätám slovo „kábel“.",
    translationDe: "Heute merke ich mir das Wort „Kabel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 541,
    nr: "541",
    category: "06 Zuhause",
    slovak: "nabíjačka",
    german: "Ladegerät",
    sentenceSk: "Dnes si zapamätám slovo „nabíjačka“.",
    translationDe: "Heute merke ich mir das Wort „Ladegerät“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 542,
    nr: "542",
    category: "06 Zuhause",
    slovak: "batéria",
    german: "Batterie",
    sentenceSk: "Dnes si zapamätám slovo „batéria“.",
    translationDe: "Heute merke ich mir das Wort „Batterie“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 543,
    nr: "543",
    category: "06 Zuhause",
    slovak: "vec",
    german: "Sache",
    sentenceSk: "Dnes si zapamätám slovo „vec“.",
    translationDe: "Heute merke ich mir das Wort „Sache“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 544,
    nr: "544",
    category: "06 Zuhause",
    slovak: "krabica",
    german: "Schachtel",
    sentenceSk: "Dnes si zapamätám slovo „krabica“.",
    translationDe: "Heute merke ich mir das Wort „Schachtel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 545,
    nr: "545",
    category: "06 Zuhause",
    slovak: "taška",
    german: "Tasche",
    sentenceSk: "Dnes si zapamätám slovo „taška“.",
    translationDe: "Heute merke ich mir das Wort „Tasche“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 546,
    nr: "546",
    category: "06 Zuhause",
    slovak: "batoh",
    german: "Rucksack",
    sentenceSk: "Dnes si zapamätám slovo „batoh“.",
    translationDe: "Heute merke ich mir das Wort „Rucksack“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 547,
    nr: "547",
    category: "06 Zuhause",
    slovak: "oblečenie",
    german: "Kleidung",
    sentenceSk: "Dnes si zapamätám slovo „oblečenie“.",
    translationDe: "Heute merke ich mir das Wort „Kleidung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 548,
    nr: "548",
    category: "06 Zuhause",
    slovak: "tričko",
    german: "T-Shirt",
    sentenceSk: "Dnes si zapamätám slovo „tričko“.",
    translationDe: "Heute merke ich mir das Wort „T-Shirt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 549,
    nr: "549",
    category: "06 Zuhause",
    slovak: "košeľa",
    german: "Hemd",
    sentenceSk: "Dnes si zapamätám slovo „košeľa“.",
    translationDe: "Heute merke ich mir das Wort „Hemd“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 550,
    nr: "550",
    category: "06 Zuhause",
    slovak: "nohavice",
    german: "Hose",
    sentenceSk: "Dnes si zapamätám slovo „nohavice“.",
    translationDe: "Heute merke ich mir das Wort „Hose“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 551,
    nr: "551",
    category: "06 Zuhause",
    slovak: "džínsy",
    german: "Jeans",
    sentenceSk: "Dnes si zapamätám slovo „džínsy“.",
    translationDe: "Heute merke ich mir das Wort „Jeans“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 552,
    nr: "552",
    category: "06 Zuhause",
    slovak: "šortky",
    german: "Shorts",
    sentenceSk: "Dnes si zapamätám slovo „šortky“.",
    translationDe: "Heute merke ich mir das Wort „Shorts“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 553,
    nr: "553",
    category: "06 Zuhause",
    slovak: "sukňa",
    german: "Rock",
    sentenceSk: "Dnes si zapamätám slovo „sukňa“.",
    translationDe: "Heute merke ich mir das Wort „Rock“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 554,
    nr: "554",
    category: "06 Zuhause",
    slovak: "šaty",
    german: "Kleid",
    sentenceSk: "Dnes si zapamätám slovo „šaty“.",
    translationDe: "Heute merke ich mir das Wort „Kleid“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 555,
    nr: "555",
    category: "06 Zuhause",
    slovak: "sveter",
    german: "Pullover",
    sentenceSk: "Dnes si zapamätám slovo „sveter“.",
    translationDe: "Heute merke ich mir das Wort „Pullover“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 556,
    nr: "556",
    category: "06 Zuhause",
    slovak: "bunda",
    german: "Jacke",
    sentenceSk: "Dnes si zapamätám slovo „bunda“.",
    translationDe: "Heute merke ich mir das Wort „Jacke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 557,
    nr: "557",
    category: "06 Zuhause",
    slovak: "kabát",
    german: "Mantel",
    sentenceSk: "Dnes si zapamätám slovo „kabát“.",
    translationDe: "Heute merke ich mir das Wort „Mantel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 558,
    nr: "558",
    category: "06 Zuhause",
    slovak: "topánka",
    german: "Schuh",
    sentenceSk: "Dnes si zapamätám slovo „topánka“.",
    translationDe: "Heute merke ich mir das Wort „Schuh“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 559,
    nr: "559",
    category: "06 Zuhause",
    slovak: "ponožka",
    german: "Socke",
    sentenceSk: "Dnes si zapamätám slovo „ponožka“.",
    translationDe: "Heute merke ich mir das Wort „Socke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 560,
    nr: "560",
    category: "06 Zuhause",
    slovak: "čiapka",
    german: "Mütze",
    sentenceSk: "Dnes si zapamätám slovo „čiapka“.",
    translationDe: "Heute merke ich mir das Wort „Mütze“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 561,
    nr: "561",
    category: "06 Zuhause",
    slovak: "okuliare",
    german: "Brille",
    sentenceSk: "Dnes si zapamätám slovo „okuliare“.",
    translationDe: "Heute merke ich mir das Wort „Brille“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 562,
    nr: "562",
    category: "06 Zuhause",
    slovak: "hodinky",
    german: "Armbanduhr",
    sentenceSk: "Dnes si zapamätám slovo „hodinky“.",
    translationDe: "Heute merke ich mir das Wort „Armbanduhr“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 563,
    nr: "563",
    category: "06 Zuhause",
    slovak: "peňaženka",
    german: "Geldbörse",
    sentenceSk: "Dnes si zapamätám slovo „peňaženka“.",
    translationDe: "Heute merke ich mir das Wort „Geldbörse“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 564,
    nr: "564",
    category: "06 Zuhause",
    slovak: "dáždnik",
    german: "Regenschirm",
    sentenceSk: "Dnes si zapamätám slovo „dáždnik“.",
    translationDe: "Heute merke ich mir das Wort „Regenschirm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 565,
    nr: "565",
    category: "06 Zuhause",
    slovak: "poriadok",
    german: "Ordnung",
    sentenceSk: "Dnes si zapamätám slovo „poriadok“.",
    translationDe: "Heute merke ich mir das Wort „Ordnung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 566,
    nr: "566",
    category: "06 Zuhause",
    slovak: "neporiadok",
    german: "Unordnung",
    sentenceSk: "Dnes si zapamätám slovo „neporiadok“.",
    translationDe: "Heute merke ich mir das Wort „Unordnung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 567,
    nr: "567",
    category: "06 Zuhause",
    slovak: "nájom",
    german: "Miete",
    sentenceSk: "Dnes si zapamätám slovo „nájom“.",
    translationDe: "Heute merke ich mir das Wort „Miete“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 568,
    nr: "568",
    category: "06 Zuhause",
    slovak: "susedstvo",
    german: "Nachbarschaft",
    sentenceSk: "Dnes si zapamätám slovo „susedstvo“.",
    translationDe: "Heute merke ich mir das Wort „Nachbarschaft“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 569,
    nr: "569",
    category: "06 Zuhause",
    slovak: "poschodie",
    german: "Stockwerk",
    sentenceSk: "Dnes si zapamätám slovo „poschodie“.",
    translationDe: "Heute merke ich mir das Wort „Stockwerk“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 570,
    nr: "570",
    category: "06 Zuhause",
    slovak: "vchod",
    german: "Eingang",
    sentenceSk: "Dnes si zapamätám slovo „vchod“.",
    translationDe: "Heute merke ich mir das Wort „Eingang“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 571,
    nr: "571",
    category: "06 Zuhause",
    slovak: "východ",
    german: "Ausgang",
    sentenceSk: "Dnes si zapamätám slovo „východ“.",
    translationDe: "Heute merke ich mir das Wort „Ausgang“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 572,
    nr: "572",
    category: "06 Zuhause",
    slovak: "zvonček",
    german: "Klingel",
    sentenceSk: "Dnes si zapamätám slovo „zvonček“.",
    translationDe: "Heute merke ich mir das Wort „Klingel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 573,
    nr: "573",
    category: "06 Zuhause",
    slovak: "pošta",
    german: "Post",
    sentenceSk: "Dnes si zapamätám slovo „pošta“.",
    translationDe: "Heute merke ich mir das Wort „Post“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 574,
    nr: "574",
    category: "06 Zuhause",
    slovak: "balík",
    german: "Paket",
    sentenceSk: "Dnes si zapamätám slovo „balík“.",
    translationDe: "Heute merke ich mir das Wort „Paket“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 575,
    nr: "575",
    category: "06 Zuhause",
    slovak: "list",
    german: "Brief",
    sentenceSk: "Dnes si zapamätám slovo „list“.",
    translationDe: "Heute merke ich mir das Wort „Brief“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 576,
    nr: "576",
    category: "06 Zuhause",
    slovak: "papier",
    german: "Papier",
    sentenceSk: "Dnes si zapamätám slovo „papier“.",
    translationDe: "Heute merke ich mir das Wort „Papier“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 577,
    nr: "577",
    category: "06 Zuhause",
    slovak: "pero",
    german: "Stift",
    sentenceSk: "Dnes si zapamätám slovo „pero“.",
    translationDe: "Heute merke ich mir das Wort „Stift“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 578,
    nr: "578",
    category: "06 Zuhause",
    slovak: "ceruzka",
    german: "Bleistift",
    sentenceSk: "Dnes si zapamätám slovo „ceruzka“.",
    translationDe: "Heute merke ich mir das Wort „Bleistift“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 579,
    nr: "579",
    category: "06 Zuhause",
    slovak: "nožnice",
    german: "Schere",
    sentenceSk: "Dnes si zapamätám slovo „nožnice“.",
    translationDe: "Heute merke ich mir das Wort „Schere“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 580,
    nr: "580",
    category: "06 Zuhause",
    slovak: "lepidlo",
    german: "Kleber",
    sentenceSk: "Dnes si zapamätám slovo „lepidlo“.",
    translationDe: "Heute merke ich mir das Wort „Kleber“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 581,
    nr: "581",
    category: "06 Zuhause",
    slovak: "náradie",
    german: "Werkzeug",
    sentenceSk: "Dnes si zapamätám slovo „náradie“.",
    translationDe: "Heute merke ich mir das Wort „Werkzeug“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 582,
    nr: "582",
    category: "06 Zuhause",
    slovak: "kladivo",
    german: "Hammer",
    sentenceSk: "Dnes si zapamätám slovo „kladivo“.",
    translationDe: "Heute merke ich mir das Wort „Hammer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 583,
    nr: "583",
    category: "06 Zuhause",
    slovak: "skrutka",
    german: "Schraube",
    sentenceSk: "Dnes si zapamätám slovo „skrutka“.",
    translationDe: "Heute merke ich mir das Wort „Schraube“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 584,
    nr: "584",
    category: "06 Zuhause",
    slovak: "drevo",
    german: "Holz",
    sentenceSk: "Dnes si zapamätám slovo „drevo“.",
    translationDe: "Heute merke ich mir das Wort „Holz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 585,
    nr: "585",
    category: "06 Zuhause",
    slovak: "kov",
    german: "Metall",
    sentenceSk: "Dnes si zapamätám slovo „kov“.",
    translationDe: "Heute merke ich mir das Wort „Metall“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 586,
    nr: "586",
    category: "06 Zuhause",
    slovak: "plast",
    german: "Kunststoff",
    sentenceSk: "Dnes si zapamätám slovo „plast“.",
    translationDe: "Heute merke ich mir das Wort „Kunststoff“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 587,
    nr: "587",
    category: "06 Zuhause",
    slovak: "sklo",
    german: "Glas",
    sentenceSk: "Dnes si zapamätám slovo „sklo“.",
    translationDe: "Heute merke ich mir das Wort „Glas“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 588,
    nr: "588",
    category: "07 Stadt & Reisen",
    slovak: "mesto",
    german: "Stadt",
    sentenceSk: "Dnes si zapamätám slovo „mesto“.",
    translationDe: "Heute merke ich mir das Wort „Stadt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 589,
    nr: "589",
    category: "07 Stadt & Reisen",
    slovak: "dedina",
    german: "Dorf",
    sentenceSk: "Dnes si zapamätám slovo „dedina“.",
    translationDe: "Heute merke ich mir das Wort „Dorf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 590,
    nr: "590",
    category: "07 Stadt & Reisen",
    slovak: "ulica",
    german: "Straße",
    sentenceSk: "Dnes si zapamätám slovo „ulica“.",
    translationDe: "Heute merke ich mir das Wort „Straße“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 591,
    nr: "591",
    category: "07 Stadt & Reisen",
    slovak: "cesta",
    german: "Weg/Straße",
    sentenceSk: "Dnes si zapamätám slovo „cesta“.",
    translationDe: "Heute merke ich mir das Wort „Weg/Straße“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 592,
    nr: "592",
    category: "07 Stadt & Reisen",
    slovak: "námestie",
    german: "Platz",
    sentenceSk: "Dnes si zapamätám slovo „námestie“.",
    translationDe: "Heute merke ich mir das Wort „Platz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 593,
    nr: "593",
    category: "07 Stadt & Reisen",
    slovak: "centrum",
    german: "Zentrum",
    sentenceSk: "Dnes si zapamätám slovo „centrum“.",
    translationDe: "Heute merke ich mir das Wort „Zentrum“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 594,
    nr: "594",
    category: "07 Stadt & Reisen",
    slovak: "park",
    german: "Park",
    sentenceSk: "Dnes si zapamätám slovo „park“.",
    translationDe: "Heute merke ich mir das Wort „Park“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 595,
    nr: "595",
    category: "07 Stadt & Reisen",
    slovak: "stanica",
    german: "Bahnhof/Station",
    sentenceSk: "Dnes si zapamätám slovo „stanica“.",
    translationDe: "Heute merke ich mir das Wort „Bahnhof/Station“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 596,
    nr: "596",
    category: "07 Stadt & Reisen",
    slovak: "zastávka",
    german: "Haltestelle",
    sentenceSk: "Dnes si zapamätám slovo „zastávka“.",
    translationDe: "Heute merke ich mir das Wort „Haltestelle“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 597,
    nr: "597",
    category: "07 Stadt & Reisen",
    slovak: "letisko",
    german: "Flughafen",
    sentenceSk: "Dnes si zapamätám slovo „letisko“.",
    translationDe: "Heute merke ich mir das Wort „Flughafen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 598,
    nr: "598",
    category: "07 Stadt & Reisen",
    slovak: "vlak",
    german: "Zug",
    sentenceSk: "Dnes si zapamätám slovo „vlak“.",
    translationDe: "Heute merke ich mir das Wort „Zug“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 599,
    nr: "599",
    category: "07 Stadt & Reisen",
    slovak: "autobus",
    german: "Bus",
    sentenceSk: "Dnes si zapamätám slovo „autobus“.",
    translationDe: "Heute merke ich mir das Wort „Bus“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 600,
    nr: "600",
    category: "07 Stadt & Reisen",
    slovak: "električka",
    german: "Straßenbahn",
    sentenceSk: "Dnes si zapamätám slovo „električka“.",
    translationDe: "Heute merke ich mir das Wort „Straßenbahn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 601,
    nr: "601",
    category: "07 Stadt & Reisen",
    slovak: "metro",
    german: "U-Bahn",
    sentenceSk: "Dnes si zapamätám slovo „metro“.",
    translationDe: "Heute merke ich mir das Wort „U-Bahn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 602,
    nr: "602",
    category: "07 Stadt & Reisen",
    slovak: "auto",
    german: "Auto",
    sentenceSk: "Dnes si zapamätám slovo „auto“.",
    translationDe: "Heute merke ich mir das Wort „Auto“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 603,
    nr: "603",
    category: "07 Stadt & Reisen",
    slovak: "taxík",
    german: "Taxi",
    sentenceSk: "Dnes si zapamätám slovo „taxík“.",
    translationDe: "Heute merke ich mir das Wort „Taxi“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 604,
    nr: "604",
    category: "07 Stadt & Reisen",
    slovak: "bicykel",
    german: "Fahrrad",
    sentenceSk: "Dnes si zapamätám slovo „bicykel“.",
    translationDe: "Heute merke ich mir das Wort „Fahrrad“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 605,
    nr: "605",
    category: "07 Stadt & Reisen",
    slovak: "motorka",
    german: "Motorrad",
    sentenceSk: "Dnes si zapamätám slovo „motorka“.",
    translationDe: "Heute merke ich mir das Wort „Motorrad“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 606,
    nr: "606",
    category: "07 Stadt & Reisen",
    slovak: "lietadlo",
    german: "Flugzeug",
    sentenceSk: "Dnes si zapamätám slovo „lietadlo“.",
    translationDe: "Heute merke ich mir das Wort „Flugzeug“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 607,
    nr: "607",
    category: "07 Stadt & Reisen",
    slovak: "loď",
    german: "Schiff",
    sentenceSk: "Dnes si zapamätám slovo „loď“.",
    translationDe: "Heute merke ich mir das Wort „Schiff“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 608,
    nr: "608",
    category: "07 Stadt & Reisen",
    slovak: "lístok",
    german: "Fahrkarte/Ticket",
    sentenceSk: "Dnes si zapamätám slovo „lístok“.",
    translationDe: "Heute merke ich mir das Wort „Fahrkarte/Ticket“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 609,
    nr: "609",
    category: "07 Stadt & Reisen",
    slovak: "cestovný lístok",
    german: "Fahrkarte",
    sentenceSk: "Dnes si zapamätám slovo „cestovný lístok“.",
    translationDe: "Heute merke ich mir das Wort „Fahrkarte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 610,
    nr: "610",
    category: "07 Stadt & Reisen",
    slovak: "nástupište",
    german: "Bahnsteig",
    sentenceSk: "Dnes si zapamätám slovo „nástupište“.",
    translationDe: "Heute merke ich mir das Wort „Bahnsteig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 611,
    nr: "611",
    category: "07 Stadt & Reisen",
    slovak: "koľaj",
    german: "Gleis",
    sentenceSk: "Dnes si zapamätám slovo „koľaj“.",
    translationDe: "Heute merke ich mir das Wort „Gleis“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 612,
    nr: "612",
    category: "07 Stadt & Reisen",
    slovak: "smer",
    german: "Richtung",
    sentenceSk: "Dnes si zapamätám slovo „smer“.",
    translationDe: "Heute merke ich mir das Wort „Richtung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 613,
    nr: "613",
    category: "07 Stadt & Reisen",
    slovak: "mapa",
    german: "Karte",
    sentenceSk: "Dnes si zapamätám slovo „mapa“.",
    translationDe: "Heute merke ich mir das Wort „Karte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 614,
    nr: "614",
    category: "07 Stadt & Reisen",
    slovak: "hotel",
    german: "Hotel",
    sentenceSk: "Dnes si zapamätám slovo „hotel“.",
    translationDe: "Heute merke ich mir das Wort „Hotel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 615,
    nr: "615",
    category: "07 Stadt & Reisen",
    slovak: "recepcia",
    german: "Rezeption",
    sentenceSk: "Dnes si zapamätám slovo „recepcia“.",
    translationDe: "Heute merke ich mir das Wort „Rezeption“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 616,
    nr: "616",
    category: "07 Stadt & Reisen",
    slovak: "rezervácia",
    german: "Reservierung",
    sentenceSk: "Dnes si zapamätám slovo „rezervácia“.",
    translationDe: "Heute merke ich mir das Wort „Reservierung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 617,
    nr: "617",
    category: "07 Stadt & Reisen",
    slovak: "pas",
    german: "Reisepass",
    sentenceSk: "Dnes si zapamätám slovo „pas“.",
    translationDe: "Heute merke ich mir das Wort „Reisepass“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 618,
    nr: "618",
    category: "07 Stadt & Reisen",
    slovak: "doklad",
    german: "Ausweis/Dokument",
    sentenceSk: "Dnes si zapamätám slovo „doklad“.",
    translationDe: "Heute merke ich mir das Wort „Ausweis/Dokument“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 619,
    nr: "619",
    category: "07 Stadt & Reisen",
    slovak: "batožina",
    german: "Gepäck",
    sentenceSk: "Dnes si zapamätám slovo „batožina“.",
    translationDe: "Heute merke ich mir das Wort „Gepäck“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 620,
    nr: "620",
    category: "07 Stadt & Reisen",
    slovak: "kufor",
    german: "Koffer",
    sentenceSk: "Dnes si zapamätám slovo „kufor“.",
    translationDe: "Heute merke ich mir das Wort „Koffer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 621,
    nr: "621",
    category: "07 Stadt & Reisen",
    slovak: "výlet",
    german: "Ausflug",
    sentenceSk: "Dnes si zapamätám slovo „výlet“.",
    translationDe: "Heute merke ich mir das Wort „Ausflug“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 622,
    nr: "622",
    category: "07 Stadt & Reisen",
    slovak: "dovolenka",
    german: "Urlaub",
    sentenceSk: "Dnes si zapamätám slovo „dovolenka“.",
    translationDe: "Heute merke ich mir das Wort „Urlaub“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 623,
    nr: "623",
    category: "07 Stadt & Reisen",
    slovak: "hranica",
    german: "Grenze",
    sentenceSk: "Dnes si zapamätám slovo „hranica“.",
    translationDe: "Heute merke ich mir das Wort „Grenze“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 624,
    nr: "624",
    category: "07 Stadt & Reisen",
    slovak: "krajina",
    german: "Land",
    sentenceSk: "Dnes si zapamätám slovo „krajina“.",
    translationDe: "Heute merke ich mir das Wort „Land“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 625,
    nr: "625",
    category: "07 Stadt & Reisen",
    slovak: "Slovensko",
    german: "Slowakei",
    sentenceSk: "Dnes si zapamätám slovo „Slovensko“.",
    translationDe: "Heute merke ich mir das Wort „Slowakei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 626,
    nr: "626",
    category: "07 Stadt & Reisen",
    slovak: "Rakúsko",
    german: "Österreich",
    sentenceSk: "Dnes si zapamätám slovo „Rakúsko“.",
    translationDe: "Heute merke ich mir das Wort „Österreich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 627,
    nr: "627",
    category: "07 Stadt & Reisen",
    slovak: "Nemecko",
    german: "Deutschland",
    sentenceSk: "Dnes si zapamätám slovo „Nemecko“.",
    translationDe: "Heute merke ich mir das Wort „Deutschland“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 628,
    nr: "628",
    category: "07 Stadt & Reisen",
    slovak: "Európa",
    german: "Europa",
    sentenceSk: "Dnes si zapamätám slovo „Európa“.",
    translationDe: "Heute merke ich mir das Wort „Europa“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 629,
    nr: "629",
    category: "07 Stadt & Reisen",
    slovak: "hory",
    german: "Berge",
    sentenceSk: "Dnes si zapamätám slovo „hory“.",
    translationDe: "Heute merke ich mir das Wort „Berge“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 630,
    nr: "630",
    category: "07 Stadt & Reisen",
    slovak: "hora",
    german: "Berg",
    sentenceSk: "Dnes si zapamätám slovo „hora“.",
    translationDe: "Heute merke ich mir das Wort „Berg“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 631,
    nr: "631",
    category: "07 Stadt & Reisen",
    slovak: "les",
    german: "Wald",
    sentenceSk: "Dnes si zapamätám slovo „les“.",
    translationDe: "Heute merke ich mir das Wort „Wald“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 632,
    nr: "632",
    category: "07 Stadt & Reisen",
    slovak: "jazero",
    german: "See",
    sentenceSk: "Dnes si zapamätám slovo „jazero“.",
    translationDe: "Heute merke ich mir das Wort „See“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 633,
    nr: "633",
    category: "07 Stadt & Reisen",
    slovak: "rieka",
    german: "Fluss",
    sentenceSk: "Dnes si zapamätám slovo „rieka“.",
    translationDe: "Heute merke ich mir das Wort „Fluss“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 634,
    nr: "634",
    category: "07 Stadt & Reisen",
    slovak: "more",
    german: "Meer",
    sentenceSk: "Dnes si zapamätám slovo „more“.",
    translationDe: "Heute merke ich mir das Wort „Meer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 635,
    nr: "635",
    category: "07 Stadt & Reisen",
    slovak: "pláž",
    german: "Strand",
    sentenceSk: "Dnes si zapamätám slovo „pláž“.",
    translationDe: "Heute merke ich mir das Wort „Strand“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 636,
    nr: "636",
    category: "07 Stadt & Reisen",
    slovak: "ostrov",
    german: "Insel",
    sentenceSk: "Dnes si zapamätám slovo „ostrov“.",
    translationDe: "Heute merke ich mir das Wort „Insel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 637,
    nr: "637",
    category: "07 Stadt & Reisen",
    slovak: "príroda",
    german: "Natur",
    sentenceSk: "Dnes si zapamätám slovo „príroda“.",
    translationDe: "Heute merke ich mir das Wort „Natur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 638,
    nr: "638",
    category: "07 Stadt & Reisen",
    slovak: "chodník",
    german: "Pfad/Gehweg",
    sentenceSk: "Dnes si zapamätám slovo „chodník“.",
    translationDe: "Heute merke ich mir das Wort „Pfad/Gehweg“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 639,
    nr: "639",
    category: "07 Stadt & Reisen",
    slovak: "most",
    german: "Brücke",
    sentenceSk: "Dnes si zapamätám slovo „most“.",
    translationDe: "Heute merke ich mir das Wort „Brücke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 640,
    nr: "640",
    category: "07 Stadt & Reisen",
    slovak: "križovatka",
    german: "Kreuzung",
    sentenceSk: "Dnes si zapamätám slovo „križovatka“.",
    translationDe: "Heute merke ich mir das Wort „Kreuzung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 641,
    nr: "641",
    category: "07 Stadt & Reisen",
    slovak: "semafor",
    german: "Ampel",
    sentenceSk: "Dnes si zapamätám slovo „semafor“.",
    translationDe: "Heute merke ich mir das Wort „Ampel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 642,
    nr: "642",
    category: "07 Stadt & Reisen",
    slovak: "parkovisko",
    german: "Parkplatz",
    sentenceSk: "Dnes si zapamätám slovo „parkovisko“.",
    translationDe: "Heute merke ich mir das Wort „Parkplatz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 643,
    nr: "643",
    category: "07 Stadt & Reisen",
    slovak: "benzín",
    german: "Benzin",
    sentenceSk: "Dnes si zapamätám slovo „benzín“.",
    translationDe: "Heute merke ich mir das Wort „Benzin“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 644,
    nr: "644",
    category: "07 Stadt & Reisen",
    slovak: "čerpačka",
    german: "Tankstelle",
    sentenceSk: "Dnes si zapamätám slovo „čerpačka“.",
    translationDe: "Heute merke ich mir das Wort „Tankstelle“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 645,
    nr: "645",
    category: "07 Stadt & Reisen",
    slovak: "diaľnica",
    german: "Autobahn",
    sentenceSk: "Dnes si zapamätám slovo „diaľnica“.",
    translationDe: "Heute merke ich mir das Wort „Autobahn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 646,
    nr: "646",
    category: "07 Stadt & Reisen",
    slovak: "premávka",
    german: "Verkehr",
    sentenceSk: "Dnes si zapamätám slovo „premávka“.",
    translationDe: "Heute merke ich mir das Wort „Verkehr“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 647,
    nr: "647",
    category: "07 Stadt & Reisen",
    slovak: "zápcha",
    german: "Stau",
    sentenceSk: "Dnes si zapamätám slovo „zápcha“.",
    translationDe: "Heute merke ich mir das Wort „Stau“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 648,
    nr: "648",
    category: "07 Stadt & Reisen",
    slovak: "nehoda",
    german: "Unfall",
    sentenceSk: "Dnes si zapamätám slovo „nehoda“.",
    translationDe: "Heute merke ich mir das Wort „Unfall“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 649,
    nr: "649",
    category: "07 Stadt & Reisen",
    slovak: "rýchlosť",
    german: "Geschwindigkeit",
    sentenceSk: "Dnes si zapamätám slovo „rýchlosť“.",
    translationDe: "Heute merke ich mir das Wort „Geschwindigkeit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 650,
    nr: "650",
    category: "07 Stadt & Reisen",
    slovak: "kilometer",
    german: "Kilometer",
    sentenceSk: "Dnes si zapamätám slovo „kilometer“.",
    translationDe: "Heute merke ich mir das Wort „Kilometer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 651,
    nr: "651",
    category: "07 Stadt & Reisen",
    slovak: "vzdialenosť",
    german: "Entfernung",
    sentenceSk: "Dnes si zapamätám slovo „vzdialenosť“.",
    translationDe: "Heute merke ich mir das Wort „Entfernung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 652,
    nr: "652",
    category: "07 Stadt & Reisen",
    slovak: "vstup",
    german: "Eintritt/Eingang",
    sentenceSk: "Dnes si zapamätám slovo „vstup“.",
    translationDe: "Heute merke ich mir das Wort „Eintritt/Eingang“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 653,
    nr: "653",
    category: "07 Stadt & Reisen",
    slovak: "výstup",
    german: "Ausgang/Ausstieg",
    sentenceSk: "Dnes si zapamätám slovo „výstup“.",
    translationDe: "Heute merke ich mir das Wort „Ausgang/Ausstieg“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 654,
    nr: "654",
    category: "07 Stadt & Reisen",
    slovak: "otvorené",
    german: "geöffnet",
    sentenceSk: "Dnes si zapamätám slovo „otvorené“.",
    translationDe: "Heute merke ich mir das Wort „geöffnet“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 655,
    nr: "655",
    category: "07 Stadt & Reisen",
    slovak: "zatvorené",
    german: "geschlossen",
    sentenceSk: "Dnes si zapamätám slovo „zatvorené“.",
    translationDe: "Heute merke ich mir das Wort „geschlossen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 656,
    nr: "656",
    category: "07 Stadt & Reisen",
    slovak: "voľné",
    german: "frei",
    sentenceSk: "Dnes si zapamätám slovo „voľné“.",
    translationDe: "Heute merke ich mir das Wort „frei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 657,
    nr: "657",
    category: "07 Stadt & Reisen",
    slovak: "obsadené",
    german: "besetzt",
    sentenceSk: "Dnes si zapamätám slovo „obsadené“.",
    translationDe: "Heute merke ich mir das Wort „besetzt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 658,
    nr: "658",
    category: "07 Stadt & Reisen",
    slovak: "meškanie",
    german: "Verspätung",
    sentenceSk: "Dnes si zapamätám slovo „meškanie“.",
    translationDe: "Heute merke ich mir das Wort „Verspätung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 659,
    nr: "659",
    category: "07 Stadt & Reisen",
    slovak: "odchod",
    german: "Abfahrt",
    sentenceSk: "Dnes si zapamätám slovo „odchod“.",
    translationDe: "Heute merke ich mir das Wort „Abfahrt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 660,
    nr: "660",
    category: "07 Stadt & Reisen",
    slovak: "príchod",
    german: "Ankunft",
    sentenceSk: "Dnes si zapamätám slovo „príchod“.",
    translationDe: "Heute merke ich mir das Wort „Ankunft“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 661,
    nr: "661",
    category: "07 Stadt & Reisen",
    slovak: "spiatočný",
    german: "hin und zurück",
    sentenceSk: "Dnes si zapamätám slovo „spiatočný“.",
    translationDe: "Heute merke ich mir das Wort „hin und zurück“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 662,
    nr: "662",
    category: "07 Stadt & Reisen",
    slovak: "jednosmerný",
    german: "einfach/eine Richtung",
    sentenceSk: "Dnes si zapamätám slovo „jednosmerný“.",
    translationDe: "Heute merke ich mir das Wort „einfach/eine Richtung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 663,
    nr: "663",
    category: "07 Stadt & Reisen",
    slovak: "turista",
    german: "Tourist",
    sentenceSk: "Dnes si zapamätám slovo „turista“.",
    translationDe: "Heute merke ich mir das Wort „Tourist“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 664,
    nr: "664",
    category: "07 Stadt & Reisen",
    slovak: "sprievodca",
    german: "Reiseführer",
    sentenceSk: "Dnes si zapamätám slovo „sprievodca“.",
    translationDe: "Heute merke ich mir das Wort „Reiseführer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 665,
    nr: "665",
    category: "07 Stadt & Reisen",
    slovak: "pamiatka",
    german: "Sehenswürdigkeit/Denkmal",
    sentenceSk: "Dnes si zapamätám slovo „pamiatka“.",
    translationDe: "Heute merke ich mir das Wort „Sehenswürdigkeit/Denkmal“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 666,
    nr: "666",
    category: "07 Stadt & Reisen",
    slovak: "múzeum",
    german: "Museum",
    sentenceSk: "Dnes si zapamätám slovo „múzeum“.",
    translationDe: "Heute merke ich mir das Wort „Museum“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 667,
    nr: "667",
    category: "07 Stadt & Reisen",
    slovak: "galéria",
    german: "Galerie",
    sentenceSk: "Dnes si zapamätám slovo „galéria“.",
    translationDe: "Heute merke ich mir das Wort „Galerie“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 668,
    nr: "668",
    category: "07 Stadt & Reisen",
    slovak: "kino",
    german: "Kino",
    sentenceSk: "Dnes si zapamätám slovo „kino“.",
    translationDe: "Heute merke ich mir das Wort „Kino“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 669,
    nr: "669",
    category: "07 Stadt & Reisen",
    slovak: "divadlo",
    german: "Theater",
    sentenceSk: "Dnes si zapamätám slovo „divadlo“.",
    translationDe: "Heute merke ich mir das Wort „Theater“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 670,
    nr: "670",
    category: "07 Stadt & Reisen",
    slovak: "koncert",
    german: "Konzert",
    sentenceSk: "Dnes si zapamätám slovo „koncert“.",
    translationDe: "Heute merke ich mir das Wort „Konzert“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 671,
    nr: "671",
    category: "07 Stadt & Reisen",
    slovak: "festival",
    german: "Festival",
    sentenceSk: "Dnes si zapamätám slovo „festival“.",
    translationDe: "Heute merke ich mir das Wort „Festival“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 672,
    nr: "672",
    category: "07 Stadt & Reisen",
    slovak: "kostol",
    german: "Kirche",
    sentenceSk: "Dnes si zapamätám slovo „kostol“.",
    translationDe: "Heute merke ich mir das Wort „Kirche“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 673,
    nr: "673",
    category: "07 Stadt & Reisen",
    slovak: "hrad",
    german: "Burg",
    sentenceSk: "Dnes si zapamätám slovo „hrad“.",
    translationDe: "Heute merke ich mir das Wort „Burg“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 674,
    nr: "674",
    category: "07 Stadt & Reisen",
    slovak: "nemocnica",
    german: "Krankenhaus",
    sentenceSk: "Dnes si zapamätám slovo „nemocnica“.",
    translationDe: "Heute merke ich mir das Wort „Krankenhaus“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 675,
    nr: "675",
    category: "07 Stadt & Reisen",
    slovak: "lekáreň",
    german: "Apotheke",
    sentenceSk: "Dnes si zapamätám slovo „lekáreň“.",
    translationDe: "Heute merke ich mir das Wort „Apotheke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 676,
    nr: "676",
    category: "07 Stadt & Reisen",
    slovak: "polícia",
    german: "Polizei",
    sentenceSk: "Dnes si zapamätám slovo „polícia“.",
    translationDe: "Heute merke ich mir das Wort „Polizei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 677,
    nr: "677",
    category: "07 Stadt & Reisen",
    slovak: "banka",
    german: "Bank",
    sentenceSk: "Dnes si zapamätám slovo „banka“.",
    translationDe: "Heute merke ich mir das Wort „Bank“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 678,
    nr: "678",
    category: "07 Stadt & Reisen",
    slovak: "bankomat",
    german: "Geldautomat",
    sentenceSk: "Dnes si zapamätám slovo „bankomat“.",
    translationDe: "Heute merke ich mir das Wort „Geldautomat“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 679,
    nr: "679",
    category: "07 Stadt & Reisen",
    slovak: "toaleta",
    german: "Toilette",
    sentenceSk: "Dnes si zapamätám slovo „toaleta“.",
    translationDe: "Heute merke ich mir das Wort „Toilette“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 680,
    nr: "680",
    category: "07 Stadt & Reisen",
    slovak: "informácie",
    german: "Informationen",
    sentenceSk: "Dnes si zapamätám slovo „informácie“.",
    translationDe: "Heute merke ich mir das Wort „Informationen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 681,
    nr: "681",
    category: "07 Stadt & Reisen",
    slovak: "vstupenka",
    german: "Eintrittskarte",
    sentenceSk: "Dnes si zapamätám slovo „vstupenka“.",
    translationDe: "Heute merke ich mir das Wort „Eintrittskarte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 682,
    nr: "682",
    category: "07 Stadt & Reisen",
    slovak: "cestujúci",
    german: "Reisender",
    sentenceSk: "Dnes si zapamätám slovo „cestujúci“.",
    translationDe: "Heute merke ich mir das Wort „Reisender“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 683,
    nr: "683",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "čas",
    german: "Zeit",
    sentenceSk: "Dnes si zapamätám slovo „čas“.",
    translationDe: "Heute merke ich mir das Wort „Zeit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 684,
    nr: "684",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "hodina",
    german: "Stunde",
    sentenceSk: "Dnes si zapamätám slovo „hodina“.",
    translationDe: "Heute merke ich mir das Wort „Stunde“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 685,
    nr: "685",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "minúta",
    german: "Minute",
    sentenceSk: "Dnes si zapamätám slovo „minúta“.",
    translationDe: "Heute merke ich mir das Wort „Minute“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 686,
    nr: "686",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "sekunda",
    german: "Sekunde",
    sentenceSk: "Dnes si zapamätám slovo „sekunda“.",
    translationDe: "Heute merke ich mir das Wort „Sekunde“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 687,
    nr: "687",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "poludnie",
    german: "Mittag",
    sentenceSk: "Dnes si zapamätám slovo „poludnie“.",
    translationDe: "Heute merke ich mir das Wort „Mittag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 688,
    nr: "688",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "polnoc",
    german: "Mitternacht",
    sentenceSk: "Dnes si zapamätám slovo „polnoc“.",
    translationDe: "Heute merke ich mir das Wort „Mitternacht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 689,
    nr: "689",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "pondelok",
    german: "Montag",
    sentenceSk: "Dnes si zapamätám slovo „pondelok“.",
    translationDe: "Heute merke ich mir das Wort „Montag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 690,
    nr: "690",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "utorok",
    german: "Dienstag",
    sentenceSk: "Dnes si zapamätám slovo „utorok“.",
    translationDe: "Heute merke ich mir das Wort „Dienstag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 691,
    nr: "691",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "streda",
    german: "Mittwoch",
    sentenceSk: "Dnes si zapamätám slovo „streda“.",
    translationDe: "Heute merke ich mir das Wort „Mittwoch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 692,
    nr: "692",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "štvrtok",
    german: "Donnerstag",
    sentenceSk: "Dnes si zapamätám slovo „štvrtok“.",
    translationDe: "Heute merke ich mir das Wort „Donnerstag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 693,
    nr: "693",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "piatok",
    german: "Freitag",
    sentenceSk: "Dnes si zapamätám slovo „piatok“.",
    translationDe: "Heute merke ich mir das Wort „Freitag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 694,
    nr: "694",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "sobota",
    german: "Samstag",
    sentenceSk: "Dnes si zapamätám slovo „sobota“.",
    translationDe: "Heute merke ich mir das Wort „Samstag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 695,
    nr: "695",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "nedeľa",
    german: "Sonntag",
    sentenceSk: "Dnes si zapamätám slovo „nedeľa“.",
    translationDe: "Heute merke ich mir das Wort „Sonntag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 696,
    nr: "696",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "január",
    german: "Januar",
    sentenceSk: "Dnes si zapamätám slovo „január“.",
    translationDe: "Heute merke ich mir das Wort „Januar“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 697,
    nr: "697",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "február",
    german: "Februar",
    sentenceSk: "Dnes si zapamätám slovo „február“.",
    translationDe: "Heute merke ich mir das Wort „Februar“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 698,
    nr: "698",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "marec",
    german: "März",
    sentenceSk: "Dnes si zapamätám slovo „marec“.",
    translationDe: "Heute merke ich mir das Wort „März“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 699,
    nr: "699",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "apríl",
    german: "April",
    sentenceSk: "Dnes si zapamätám slovo „apríl“.",
    translationDe: "Heute merke ich mir das Wort „April“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 700,
    nr: "700",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "máj",
    german: "Mai",
    sentenceSk: "Dnes si zapamätám slovo „máj“.",
    translationDe: "Heute merke ich mir das Wort „Mai“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 701,
    nr: "701",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "jún",
    german: "Juni",
    sentenceSk: "Dnes si zapamätám slovo „jún“.",
    translationDe: "Heute merke ich mir das Wort „Juni“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 702,
    nr: "702",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "júl",
    german: "Juli",
    sentenceSk: "Dnes si zapamätám slovo „júl“.",
    translationDe: "Heute merke ich mir das Wort „Juli“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 703,
    nr: "703",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "august",
    german: "August",
    sentenceSk: "Dnes si zapamätám slovo „august“.",
    translationDe: "Heute merke ich mir das Wort „August“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 704,
    nr: "704",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "september",
    german: "September",
    sentenceSk: "Dnes si zapamätám slovo „september“.",
    translationDe: "Heute merke ich mir das Wort „September“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 705,
    nr: "705",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "október",
    german: "Oktober",
    sentenceSk: "Dnes si zapamätám slovo „október“.",
    translationDe: "Heute merke ich mir das Wort „Oktober“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 706,
    nr: "706",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "november",
    german: "November",
    sentenceSk: "Dnes si zapamätám slovo „november“.",
    translationDe: "Heute merke ich mir das Wort „November“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 707,
    nr: "707",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "december",
    german: "Dezember",
    sentenceSk: "Dnes si zapamätám slovo „december“.",
    translationDe: "Heute merke ich mir das Wort „Dezember“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 708,
    nr: "708",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "jar",
    german: "Frühling",
    sentenceSk: "Dnes si zapamätám slovo „jar“.",
    translationDe: "Heute merke ich mir das Wort „Frühling“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 709,
    nr: "709",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "leto",
    german: "Sommer",
    sentenceSk: "Dnes si zapamätám slovo „leto“.",
    translationDe: "Heute merke ich mir das Wort „Sommer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 710,
    nr: "710",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "jeseň",
    german: "Herbst",
    sentenceSk: "Dnes si zapamätám slovo „jeseň“.",
    translationDe: "Heute merke ich mir das Wort „Herbst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 711,
    nr: "711",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "zima",
    german: "Winter",
    sentenceSk: "Dnes si zapamätám slovo „zima“.",
    translationDe: "Heute merke ich mir das Wort „Winter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 712,
    nr: "712",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "prvý",
    german: "erste",
    sentenceSk: "Dnes si zapamätám slovo „prvý“.",
    translationDe: "Heute merke ich mir das Wort „erste“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 713,
    nr: "713",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "druhý",
    german: "zweite",
    sentenceSk: "Dnes si zapamätám slovo „druhý“.",
    translationDe: "Heute merke ich mir das Wort „zweite“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 714,
    nr: "714",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "tretí",
    german: "dritte",
    sentenceSk: "Dnes si zapamätám slovo „tretí“.",
    translationDe: "Heute merke ich mir das Wort „dritte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 715,
    nr: "715",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "posledný",
    german: "letzte",
    sentenceSk: "Dnes si zapamätám slovo „posledný“.",
    translationDe: "Heute merke ich mir das Wort „letzte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 716,
    nr: "716",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "jeden",
    german: "eins",
    sentenceSk: "Dnes si zapamätám slovo „jeden“.",
    translationDe: "Heute merke ich mir das Wort „eins“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 717,
    nr: "717",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dva",
    german: "zwei",
    sentenceSk: "Dnes si zapamätám slovo „dva“.",
    translationDe: "Heute merke ich mir das Wort „zwei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 718,
    nr: "718",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "tri",
    german: "drei",
    sentenceSk: "Dnes si zapamätám slovo „tri“.",
    translationDe: "Heute merke ich mir das Wort „drei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 719,
    nr: "719",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "štyri",
    german: "vier",
    sentenceSk: "Dnes si zapamätám slovo „štyri“.",
    translationDe: "Heute merke ich mir das Wort „vier“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 720,
    nr: "720",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "päť",
    german: "fünf",
    sentenceSk: "Dnes si zapamätám slovo „päť“.",
    translationDe: "Heute merke ich mir das Wort „fünf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 721,
    nr: "721",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "šesť",
    german: "sechs",
    sentenceSk: "Dnes si zapamätám slovo „šesť“.",
    translationDe: "Heute merke ich mir das Wort „sechs“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 722,
    nr: "722",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "sedem",
    german: "sieben",
    sentenceSk: "Dnes si zapamätám slovo „sedem“.",
    translationDe: "Heute merke ich mir das Wort „sieben“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 723,
    nr: "723",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "osem",
    german: "acht",
    sentenceSk: "Dnes si zapamätám slovo „osem“.",
    translationDe: "Heute merke ich mir das Wort „acht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 724,
    nr: "724",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "deväť",
    german: "neun",
    sentenceSk: "Dnes si zapamätám slovo „deväť“.",
    translationDe: "Heute merke ich mir das Wort „neun“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 725,
    nr: "725",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "desať",
    german: "zehn",
    sentenceSk: "Dnes si zapamätám slovo „desať“.",
    translationDe: "Heute merke ich mir das Wort „zehn“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 726,
    nr: "726",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "jedenásť",
    german: "elf",
    sentenceSk: "Dnes si zapamätám slovo „jedenásť“.",
    translationDe: "Heute merke ich mir das Wort „elf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 727,
    nr: "727",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dvanásť",
    german: "zwölf",
    sentenceSk: "Dnes si zapamätám slovo „dvanásť“.",
    translationDe: "Heute merke ich mir das Wort „zwölf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 728,
    nr: "728",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dvadsať",
    german: "zwanzig",
    sentenceSk: "Dnes si zapamätám slovo „dvadsať“.",
    translationDe: "Heute merke ich mir das Wort „zwanzig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 729,
    nr: "729",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "tridsať",
    german: "dreißig",
    sentenceSk: "Dnes si zapamätám slovo „tridsať“.",
    translationDe: "Heute merke ich mir das Wort „dreißig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 730,
    nr: "730",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "štyridsať",
    german: "vierzig",
    sentenceSk: "Dnes si zapamätám slovo „štyridsať“.",
    translationDe: "Heute merke ich mir das Wort „vierzig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 731,
    nr: "731",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "päťdesiat",
    german: "fünfzig",
    sentenceSk: "Dnes si zapamätám slovo „päťdesiat“.",
    translationDe: "Heute merke ich mir das Wort „fünfzig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 732,
    nr: "732",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "sto",
    german: "hundert",
    sentenceSk: "Dnes si zapamätám slovo „sto“.",
    translationDe: "Heute merke ich mir das Wort „hundert“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 733,
    nr: "733",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "tisíc",
    german: "tausend",
    sentenceSk: "Dnes si zapamätám slovo „tisíc“.",
    translationDe: "Heute merke ich mir das Wort „tausend“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 734,
    nr: "734",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "počasie",
    german: "Wetter",
    sentenceSk: "Dnes si zapamätám slovo „počasie“.",
    translationDe: "Heute merke ich mir das Wort „Wetter“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 735,
    nr: "735",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "slnko",
    german: "Sonne",
    sentenceSk: "Dnes si zapamätám slovo „slnko“.",
    translationDe: "Heute merke ich mir das Wort „Sonne“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 736,
    nr: "736",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dážď",
    german: "Regen",
    sentenceSk: "Dnes si zapamätám slovo „dážď“.",
    translationDe: "Heute merke ich mir das Wort „Regen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 737,
    nr: "737",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "sneh",
    german: "Schnee",
    sentenceSk: "Dnes si zapamätám slovo „sneh“.",
    translationDe: "Heute merke ich mir das Wort „Schnee“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 738,
    nr: "738",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "vietor",
    german: "Wind",
    sentenceSk: "Dnes si zapamätám slovo „vietor“.",
    translationDe: "Heute merke ich mir das Wort „Wind“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 739,
    nr: "739",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "oblak",
    german: "Wolke",
    sentenceSk: "Dnes si zapamätám slovo „oblak“.",
    translationDe: "Heute merke ich mir das Wort „Wolke“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 740,
    nr: "740",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "hmla",
    german: "Nebel",
    sentenceSk: "Dnes si zapamätám slovo „hmla“.",
    translationDe: "Heute merke ich mir das Wort „Nebel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 741,
    nr: "741",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "búrka",
    german: "Gewitter/Sturm",
    sentenceSk: "Dnes si zapamätám slovo „búrka“.",
    translationDe: "Heute merke ich mir das Wort „Gewitter/Sturm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 742,
    nr: "742",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "teplota",
    german: "Temperatur",
    sentenceSk: "Dnes si zapamätám slovo „teplota“.",
    translationDe: "Heute merke ich mir das Wort „Temperatur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 743,
    nr: "743",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "stupeň",
    german: "Grad",
    sentenceSk: "Dnes si zapamätám slovo „stupeň“.",
    translationDe: "Heute merke ich mir das Wort „Grad“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 744,
    nr: "744",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "teplo",
    german: "warm/Wärme",
    sentenceSk: "Dnes si zapamätám slovo „teplo“.",
    translationDe: "Heute merke ich mir das Wort „warm/Wärme“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 745,
    nr: "745",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "chlad",
    german: "Kälte",
    sentenceSk: "Dnes si zapamätám slovo „chlad“.",
    translationDe: "Heute merke ich mir das Wort „Kälte“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 746,
    nr: "746",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "jasno",
    german: "klar/sonnig",
    sentenceSk: "Dnes si zapamätám slovo „jasno“.",
    translationDe: "Heute merke ich mir das Wort „klar/sonnig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 747,
    nr: "747",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "zamračené",
    german: "bewölkt",
    sentenceSk: "Dnes si zapamätám slovo „zamračené“.",
    translationDe: "Heute merke ich mir das Wort „bewölkt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 748,
    nr: "748",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "pršať",
    german: "regnen",
    sentenceSk: "Dnes si zapamätám slovo „pršať“.",
    translationDe: "Heute merke ich mir das Wort „regnen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 749,
    nr: "749",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "snežiť",
    german: "schneien",
    sentenceSk: "Dnes si zapamätám slovo „snežiť“.",
    translationDe: "Heute merke ich mir das Wort „schneien“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 750,
    nr: "750",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "fúkať",
    german: "wehen",
    sentenceSk: "Dnes si zapamätám slovo „fúkať“.",
    translationDe: "Heute merke ich mir das Wort „wehen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 751,
    nr: "751",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "svietiť",
    german: "scheinen/leuchten",
    sentenceSk: "Dnes si zapamätám slovo „svietiť“.",
    translationDe: "Heute merke ich mir das Wort „scheinen/leuchten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 752,
    nr: "752",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "skoro",
    german: "früh",
    sentenceSk: "Dnes si zapamätám slovo „skoro“.",
    translationDe: "Heute merke ich mir das Wort „früh“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 753,
    nr: "753",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "neskoro",
    german: "spät",
    sentenceSk: "Dnes si zapamätám slovo „neskoro“.",
    translationDe: "Heute merke ich mir das Wort „spät“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 754,
    nr: "754",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "presne",
    german: "genau/pünktlich",
    sentenceSk: "Dnes si zapamätám slovo „presne“.",
    translationDe: "Heute merke ich mir das Wort „genau/pünktlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 755,
    nr: "755",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "hneď",
    german: "sofort",
    sentenceSk: "Dnes si zapamätám slovo „hneď“.",
    translationDe: "Heute merke ich mir das Wort „sofort“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 756,
    nr: "756",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "čoskoro",
    german: "bald",
    sentenceSk: "Dnes si zapamätám slovo „čoskoro“.",
    translationDe: "Heute merke ich mir das Wort „bald“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 757,
    nr: "757",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dlho",
    german: "lange",
    sentenceSk: "Dnes si zapamätám slovo „dlho“.",
    translationDe: "Heute merke ich mir das Wort „lange“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 758,
    nr: "758",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "krátko",
    german: "kurz",
    sentenceSk: "Dnes si zapamätám slovo „krátko“.",
    translationDe: "Heute merke ich mir das Wort „kurz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 759,
    nr: "759",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "minulosť",
    german: "Vergangenheit",
    sentenceSk: "Dnes si zapamätám slovo „minulosť“.",
    translationDe: "Heute merke ich mir das Wort „Vergangenheit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 760,
    nr: "760",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "budúcnosť",
    german: "Zukunft",
    sentenceSk: "Dnes si zapamätám slovo „budúcnosť“.",
    translationDe: "Heute merke ich mir das Wort „Zukunft“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 761,
    nr: "761",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "začiatok",
    german: "Anfang",
    sentenceSk: "Dnes si zapamätám slovo „začiatok“.",
    translationDe: "Heute merke ich mir das Wort „Anfang“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 762,
    nr: "762",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "koniec",
    german: "Ende",
    sentenceSk: "Dnes si zapamätám slovo „koniec“.",
    translationDe: "Heute merke ich mir das Wort „Ende“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 763,
    nr: "763",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "termín",
    german: "Termin/Frist",
    sentenceSk: "Dnes si zapamätám slovo „termín“.",
    translationDe: "Heute merke ich mir das Wort „Termin/Frist“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 764,
    nr: "764",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dátum",
    german: "Datum",
    sentenceSk: "Dnes si zapamätám slovo „dátum“.",
    translationDe: "Heute merke ich mir das Wort „Datum“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 765,
    nr: "765",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "kalendár",
    german: "Kalender",
    sentenceSk: "Dnes si zapamätám slovo „kalendár“.",
    translationDe: "Heute merke ich mir das Wort „Kalender“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 766,
    nr: "766",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "víkend",
    german: "Wochenende",
    sentenceSk: "Dnes si zapamätám slovo „víkend“.",
    translationDe: "Heute merke ich mir das Wort „Wochenende“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 767,
    nr: "767",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "pracovný deň",
    german: "Werktag",
    sentenceSk: "Dnes si zapamätám slovo „pracovný deň“.",
    translationDe: "Heute merke ich mir das Wort „Werktag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 768,
    nr: "768",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "voľno",
    german: "Freizeit/frei",
    sentenceSk: "Dnes si zapamätám slovo „voľno“.",
    translationDe: "Heute merke ich mir das Wort „Freizeit/frei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 769,
    nr: "769",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "prestávka",
    german: "Pause",
    sentenceSk: "Dnes si zapamätám slovo „prestávka“.",
    translationDe: "Heute merke ich mir das Wort „Pause“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 770,
    nr: "770",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "chvíľa",
    german: "Moment",
    sentenceSk: "Dnes si zapamätám slovo „chvíľa“.",
    translationDe: "Heute merke ich mir das Wort „Moment“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 771,
    nr: "771",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "raz",
    german: "einmal",
    sentenceSk: "Dnes si zapamätám slovo „raz“.",
    translationDe: "Heute merke ich mir das Wort „einmal“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 772,
    nr: "772",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "dvakrát",
    german: "zweimal",
    sentenceSk: "Dnes si zapamätám slovo „dvakrát“.",
    translationDe: "Heute merke ich mir das Wort „zweimal“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 773,
    nr: "773",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "pravidelne",
    german: "regelmäßig",
    sentenceSk: "Dnes si zapamätám slovo „pravidelne“.",
    translationDe: "Heute merke ich mir das Wort „regelmäßig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 774,
    nr: "774",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "denne",
    german: "täglich",
    sentenceSk: "Dnes si zapamätám slovo „denne“.",
    translationDe: "Heute merke ich mir das Wort „täglich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 775,
    nr: "775",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "týždenne",
    german: "wöchentlich",
    sentenceSk: "Dnes si zapamätám slovo „týždenne“.",
    translationDe: "Heute merke ich mir das Wort „wöchentlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 776,
    nr: "776",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "mesačne",
    german: "monatlich",
    sentenceSk: "Dnes si zapamätám slovo „mesačne“.",
    translationDe: "Heute merke ich mir das Wort „monatlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 777,
    nr: "777",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "ročne",
    german: "jährlich",
    sentenceSk: "Dnes si zapamätám slovo „ročne“.",
    translationDe: "Heute merke ich mir das Wort „jährlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 778,
    nr: "778",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "predtým",
    german: "vorher",
    sentenceSk: "Dnes si zapamätám slovo „predtým“.",
    translationDe: "Heute merke ich mir das Wort „vorher“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 779,
    nr: "779",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "neskôr",
    german: "später",
    sentenceSk: "Dnes si zapamätám slovo „neskôr“.",
    translationDe: "Heute merke ich mir das Wort „später“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 780,
    nr: "780",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "zatiaľ",
    german: "bisher/vorerst",
    sentenceSk: "Dnes si zapamätám slovo „zatiaľ“.",
    translationDe: "Heute merke ich mir das Wort „bisher/vorerst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 781,
    nr: "781",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "práve",
    german: "gerade",
    sentenceSk: "Dnes si zapamätám slovo „práve“.",
    translationDe: "Heute merke ich mir das Wort „gerade“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 782,
    nr: "782",
    category: "08 Zeit, Zahlen & Wetter",
    slovak: "naraz",
    german: "gleichzeitig/plötzlich",
    sentenceSk: "Dnes si zapamätám slovo „naraz“.",
    translationDe: "Heute merke ich mir das Wort „gleichzeitig/plötzlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 783,
    nr: "783",
    category: "09 Eigenschaften & Gefühle",
    slovak: "veľký",
    german: "groß",
    sentenceSk: "Dnes si zapamätám prídavné meno „veľký“.",
    translationDe: "Heute merke ich mir das Adjektiv „groß“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 784,
    nr: "784",
    category: "09 Eigenschaften & Gefühle",
    slovak: "malý",
    german: "klein",
    sentenceSk: "Dnes si zapamätám prídavné meno „malý“.",
    translationDe: "Heute merke ich mir das Adjektiv „klein“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 785,
    nr: "785",
    category: "09 Eigenschaften & Gefühle",
    slovak: "dlhý",
    german: "lang",
    sentenceSk: "Dnes si zapamätám prídavné meno „dlhý“.",
    translationDe: "Heute merke ich mir das Adjektiv „lang“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 786,
    nr: "786",
    category: "09 Eigenschaften & Gefühle",
    slovak: "krátky",
    german: "kurz",
    sentenceSk: "Dnes si zapamätám prídavné meno „krátky“.",
    translationDe: "Heute merke ich mir das Adjektiv „kurz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 787,
    nr: "787",
    category: "09 Eigenschaften & Gefühle",
    slovak: "vysoký",
    german: "hoch/groß",
    sentenceSk: "Dnes si zapamätám prídavné meno „vysoký“.",
    translationDe: "Heute merke ich mir das Adjektiv „hoch/groß“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 788,
    nr: "788",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nízky",
    german: "niedrig/klein",
    sentenceSk: "Dnes si zapamätám prídavné meno „nízky“.",
    translationDe: "Heute merke ich mir das Adjektiv „niedrig/klein“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 789,
    nr: "789",
    category: "09 Eigenschaften & Gefühle",
    slovak: "široký",
    german: "breit",
    sentenceSk: "Dnes si zapamätám prídavné meno „široký“.",
    translationDe: "Heute merke ich mir das Adjektiv „breit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 790,
    nr: "790",
    category: "09 Eigenschaften & Gefühle",
    slovak: "úzky",
    german: "schmal",
    sentenceSk: "Dnes si zapamätám prídavné meno „úzky“.",
    translationDe: "Heute merke ich mir das Adjektiv „schmal“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 791,
    nr: "791",
    category: "09 Eigenschaften & Gefühle",
    slovak: "ťažký",
    german: "schwer",
    sentenceSk: "Dnes si zapamätám prídavné meno „ťažký“.",
    translationDe: "Heute merke ich mir das Adjektiv „schwer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 792,
    nr: "792",
    category: "09 Eigenschaften & Gefühle",
    slovak: "ľahký",
    german: "leicht",
    sentenceSk: "Dnes si zapamätám prídavné meno „ľahký“.",
    translationDe: "Heute merke ich mir das Adjektiv „leicht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 793,
    nr: "793",
    category: "09 Eigenschaften & Gefühle",
    slovak: "rýchly",
    german: "schnell",
    sentenceSk: "Dnes si zapamätám prídavné meno „rýchly“.",
    translationDe: "Heute merke ich mir das Adjektiv „schnell“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 794,
    nr: "794",
    category: "09 Eigenschaften & Gefühle",
    slovak: "pomalý",
    german: "langsam",
    sentenceSk: "Dnes si zapamätám prídavné meno „pomalý“.",
    translationDe: "Heute merke ich mir das Adjektiv „langsam“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 795,
    nr: "795",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nový",
    german: "neu",
    sentenceSk: "Dnes si zapamätám prídavné meno „nový“.",
    translationDe: "Heute merke ich mir das Adjektiv „neu“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 796,
    nr: "796",
    category: "09 Eigenschaften & Gefühle",
    slovak: "starý",
    german: "alt",
    sentenceSk: "Dnes si zapamätám prídavné meno „starý“.",
    translationDe: "Heute merke ich mir das Adjektiv „alt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 797,
    nr: "797",
    category: "09 Eigenschaften & Gefühle",
    slovak: "mladý",
    german: "jung",
    sentenceSk: "Dnes si zapamätám prídavné meno „mladý“.",
    translationDe: "Heute merke ich mir das Adjektiv „jung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 798,
    nr: "798",
    category: "09 Eigenschaften & Gefühle",
    slovak: "pekný",
    german: "schön",
    sentenceSk: "Dnes si zapamätám prídavné meno „pekný“.",
    translationDe: "Heute merke ich mir das Adjektiv „schön“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 799,
    nr: "799",
    category: "09 Eigenschaften & Gefühle",
    slovak: "škaredý",
    german: "hässlich",
    sentenceSk: "Dnes si zapamätám prídavné meno „škaredý“.",
    translationDe: "Heute merke ich mir das Adjektiv „hässlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 800,
    nr: "800",
    category: "09 Eigenschaften & Gefühle",
    slovak: "čistý",
    german: "sauber",
    sentenceSk: "Dnes si zapamätám prídavné meno „čistý“.",
    translationDe: "Heute merke ich mir das Adjektiv „sauber“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 801,
    nr: "801",
    category: "09 Eigenschaften & Gefühle",
    slovak: "špinavý",
    german: "schmutzig",
    sentenceSk: "Dnes si zapamätám prídavné meno „špinavý“.",
    translationDe: "Heute merke ich mir das Adjektiv „schmutzig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 802,
    nr: "802",
    category: "09 Eigenschaften & Gefühle",
    slovak: "silný",
    german: "stark",
    sentenceSk: "Dnes si zapamätám prídavné meno „silný“.",
    translationDe: "Heute merke ich mir das Adjektiv „stark“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 803,
    nr: "803",
    category: "09 Eigenschaften & Gefühle",
    slovak: "slabý",
    german: "schwach",
    sentenceSk: "Dnes si zapamätám prídavné meno „slabý“.",
    translationDe: "Heute merke ich mir das Adjektiv „schwach“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 804,
    nr: "804",
    category: "09 Eigenschaften & Gefühle",
    slovak: "mäkký",
    german: "weich",
    sentenceSk: "Dnes si zapamätám prídavné meno „mäkký“.",
    translationDe: "Heute merke ich mir das Adjektiv „weich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 805,
    nr: "805",
    category: "09 Eigenschaften & Gefühle",
    slovak: "tvrdý",
    german: "hart",
    sentenceSk: "Dnes si zapamätám prídavné meno „tvrdý“.",
    translationDe: "Heute merke ich mir das Adjektiv „hart“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 806,
    nr: "806",
    category: "09 Eigenschaften & Gefühle",
    slovak: "jednoduchý",
    german: "einfach",
    sentenceSk: "Dnes si zapamätám prídavné meno „jednoduchý“.",
    translationDe: "Heute merke ich mir das Adjektiv „einfach“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 807,
    nr: "807",
    category: "09 Eigenschaften & Gefühle",
    slovak: "dôležitý",
    german: "wichtig",
    sentenceSk: "Dnes si zapamätám prídavné meno „dôležitý“.",
    translationDe: "Heute merke ich mir das Adjektiv „wichtig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 808,
    nr: "808",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zaujímavý",
    german: "interessant",
    sentenceSk: "Dnes si zapamätám prídavné meno „zaujímavý“.",
    translationDe: "Heute merke ich mir das Adjektiv „interessant“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 809,
    nr: "809",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nudný",
    german: "langweilig",
    sentenceSk: "Dnes si zapamätám prídavné meno „nudný“.",
    translationDe: "Heute merke ich mir das Adjektiv „langweilig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 810,
    nr: "810",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zábavný",
    german: "unterhaltsam",
    sentenceSk: "Dnes si zapamätám prídavné meno „zábavný“.",
    translationDe: "Heute merke ich mir das Adjektiv „unterhaltsam“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 811,
    nr: "811",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zvláštny",
    german: "seltsam",
    sentenceSk: "Dnes si zapamätám prídavné meno „zvláštny“.",
    translationDe: "Heute merke ich mir das Adjektiv „seltsam“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 812,
    nr: "812",
    category: "09 Eigenschaften & Gefühle",
    slovak: "normálny",
    german: "normal",
    sentenceSk: "Dnes si zapamätám prídavné meno „normálny“.",
    translationDe: "Heute merke ich mir das Adjektiv „normal“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 813,
    nr: "813",
    category: "09 Eigenschaften & Gefühle",
    slovak: "iný",
    german: "anders",
    sentenceSk: "Dnes si zapamätám prídavné meno „iný“.",
    translationDe: "Heute merke ich mir das Adjektiv „anders“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 814,
    nr: "814",
    category: "09 Eigenschaften & Gefühle",
    slovak: "rovnaký",
    german: "gleich",
    sentenceSk: "Dnes si zapamätám prídavné meno „rovnaký“.",
    translationDe: "Heute merke ich mir das Adjektiv „gleich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 815,
    nr: "815",
    category: "09 Eigenschaften & Gefühle",
    slovak: "správny",
    german: "richtig",
    sentenceSk: "Dnes si zapamätám prídavné meno „správny“.",
    translationDe: "Heute merke ich mir das Adjektiv „richtig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 816,
    nr: "816",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nesprávny",
    german: "falsch",
    sentenceSk: "Dnes si zapamätám prídavné meno „nesprávny“.",
    translationDe: "Heute merke ich mir das Adjektiv „falsch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 817,
    nr: "817",
    category: "09 Eigenschaften & Gefühle",
    slovak: "pravdivý",
    german: "wahr",
    sentenceSk: "Dnes si zapamätám prídavné meno „pravdivý“.",
    translationDe: "Heute merke ich mir das Adjektiv „wahr“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 818,
    nr: "818",
    category: "09 Eigenschaften & Gefühle",
    slovak: "možný",
    german: "möglich",
    sentenceSk: "Dnes si zapamätám prídavné meno „možný“.",
    translationDe: "Heute merke ich mir das Adjektiv „möglich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 819,
    nr: "819",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nemožný",
    german: "unmöglich",
    sentenceSk: "Dnes si zapamätám prídavné meno „nemožný“.",
    translationDe: "Heute merke ich mir das Adjektiv „unmöglich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 820,
    nr: "820",
    category: "09 Eigenschaften & Gefühle",
    slovak: "hotový",
    german: "fertig",
    sentenceSk: "Dnes si zapamätám prídavné meno „hotový“.",
    translationDe: "Heute merke ich mir das Adjektiv „fertig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 821,
    nr: "821",
    category: "09 Eigenschaften & Gefühle",
    slovak: "pripravený",
    german: "bereit",
    sentenceSk: "Dnes si zapamätám prídavné meno „pripravený“.",
    translationDe: "Heute merke ich mir das Adjektiv „bereit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 822,
    nr: "822",
    category: "09 Eigenschaften & Gefühle",
    slovak: "voľný",
    german: "frei",
    sentenceSk: "Dnes si zapamätám prídavné meno „voľný“.",
    translationDe: "Heute merke ich mir das Adjektiv „frei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 823,
    nr: "823",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zaneprázdnený",
    german: "beschäftigt",
    sentenceSk: "Dnes si zapamätám prídavné meno „zaneprázdnený“.",
    translationDe: "Heute merke ich mir das Adjektiv „beschäftigt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 824,
    nr: "824",
    category: "09 Eigenschaften & Gefühle",
    slovak: "šťastný",
    german: "glücklich",
    sentenceSk: "Dnes si zapamätám prídavné meno „šťastný“.",
    translationDe: "Heute merke ich mir das Adjektiv „glücklich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 825,
    nr: "825",
    category: "09 Eigenschaften & Gefühle",
    slovak: "smutný",
    german: "traurig",
    sentenceSk: "Dnes si zapamätám prídavné meno „smutný“.",
    translationDe: "Heute merke ich mir das Adjektiv „traurig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 826,
    nr: "826",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nahnevaný",
    german: "wütend",
    sentenceSk: "Dnes si zapamätám prídavné meno „nahnevaný“.",
    translationDe: "Heute merke ich mir das Adjektiv „wütend“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 827,
    nr: "827",
    category: "09 Eigenschaften & Gefühle",
    slovak: "pokojný",
    german: "ruhig",
    sentenceSk: "Dnes si zapamätám prídavné meno „pokojný“.",
    translationDe: "Heute merke ich mir das Adjektiv „ruhig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 828,
    nr: "828",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nervózny",
    german: "nervös",
    sentenceSk: "Dnes si zapamätám prídavné meno „nervózny“.",
    translationDe: "Heute merke ich mir das Adjektiv „nervös“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 829,
    nr: "829",
    category: "09 Eigenschaften & Gefühle",
    slovak: "unavený",
    german: "müde",
    sentenceSk: "Dnes si zapamätám prídavné meno „unavený“.",
    translationDe: "Heute merke ich mir das Adjektiv „müde“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 830,
    nr: "830",
    category: "09 Eigenschaften & Gefühle",
    slovak: "chorý",
    german: "krank",
    sentenceSk: "Dnes si zapamätám prídavné meno „chorý“.",
    translationDe: "Heute merke ich mir das Adjektiv „krank“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 831,
    nr: "831",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zdravý",
    german: "gesund",
    sentenceSk: "Dnes si zapamätám prídavné meno „zdravý“.",
    translationDe: "Heute merke ich mir das Adjektiv „gesund“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 832,
    nr: "832",
    category: "09 Eigenschaften & Gefühle",
    slovak: "spokojný",
    german: "zufrieden",
    sentenceSk: "Dnes si zapamätám prídavné meno „spokojný“.",
    translationDe: "Heute merke ich mir das Adjektiv „zufrieden“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 833,
    nr: "833",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nespokojný",
    german: "unzufrieden",
    sentenceSk: "Dnes si zapamätám prídavné meno „nespokojný“.",
    translationDe: "Heute merke ich mir das Adjektiv „unzufrieden“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 834,
    nr: "834",
    category: "09 Eigenschaften & Gefühle",
    slovak: "prekvapený",
    german: "überrascht",
    sentenceSk: "Dnes si zapamätám prídavné meno „prekvapený“.",
    translationDe: "Heute merke ich mir das Adjektiv „überrascht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 835,
    nr: "835",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zvedavý",
    german: "neugierig",
    sentenceSk: "Dnes si zapamätám prídavné meno „zvedavý“.",
    translationDe: "Heute merke ich mir das Adjektiv „neugierig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 836,
    nr: "836",
    category: "09 Eigenschaften & Gefühle",
    slovak: "hrdý",
    german: "stolz",
    sentenceSk: "Dnes si zapamätám prídavné meno „hrdý“.",
    translationDe: "Heute merke ich mir das Adjektiv „stolz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 837,
    nr: "837",
    category: "09 Eigenschaften & Gefühle",
    slovak: "milý",
    german: "nett",
    sentenceSk: "Dnes si zapamätám prídavné meno „milý“.",
    translationDe: "Heute merke ich mir das Adjektiv „nett“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 838,
    nr: "838",
    category: "09 Eigenschaften & Gefühle",
    slovak: "priateľský",
    german: "freundlich",
    sentenceSk: "Dnes si zapamätám prídavné meno „priateľský“.",
    translationDe: "Heute merke ich mir das Adjektiv „freundlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 839,
    nr: "839",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nepríjemný",
    german: "unangenehm",
    sentenceSk: "Dnes si zapamätám prídavné meno „nepríjemný“.",
    translationDe: "Heute merke ich mir das Adjektiv „unangenehm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 840,
    nr: "840",
    category: "09 Eigenschaften & Gefühle",
    slovak: "slušný",
    german: "höflich",
    sentenceSk: "Dnes si zapamätám prídavné meno „slušný“.",
    translationDe: "Heute merke ich mir das Adjektiv „höflich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 841,
    nr: "841",
    category: "09 Eigenschaften & Gefühle",
    slovak: "vtipný",
    german: "lustig",
    sentenceSk: "Dnes si zapamätám prídavné meno „vtipný“.",
    translationDe: "Heute merke ich mir das Adjektiv „lustig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 842,
    nr: "842",
    category: "09 Eigenschaften & Gefühle",
    slovak: "vážny",
    german: "ernst",
    sentenceSk: "Dnes si zapamätám prídavné meno „vážny“.",
    translationDe: "Heute merke ich mir das Adjektiv „ernst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 843,
    nr: "843",
    category: "09 Eigenschaften & Gefühle",
    slovak: "tichý",
    german: "leise",
    sentenceSk: "Dnes si zapamätám prídavné meno „tichý“.",
    translationDe: "Heute merke ich mir das Adjektiv „leise“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 844,
    nr: "844",
    category: "09 Eigenschaften & Gefühle",
    slovak: "hlasný",
    german: "laut",
    sentenceSk: "Dnes si zapamätám prídavné meno „hlasný“.",
    translationDe: "Heute merke ich mir das Adjektiv „laut“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 845,
    nr: "845",
    category: "09 Eigenschaften & Gefühle",
    slovak: "múdry",
    german: "klug",
    sentenceSk: "Dnes si zapamätám prídavné meno „múdry“.",
    translationDe: "Heute merke ich mir das Adjektiv „klug“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 846,
    nr: "846",
    category: "09 Eigenschaften & Gefühle",
    slovak: "hlúpy",
    german: "dumm",
    sentenceSk: "Dnes si zapamätám prídavné meno „hlúpy“.",
    translationDe: "Heute merke ich mir das Adjektiv „dumm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 847,
    nr: "847",
    category: "09 Eigenschaften & Gefühle",
    slovak: "šikovný",
    german: "geschickt",
    sentenceSk: "Dnes si zapamätám prídavné meno „šikovný“.",
    translationDe: "Heute merke ich mir das Adjektiv „geschickt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 848,
    nr: "848",
    category: "09 Eigenschaften & Gefühle",
    slovak: "opatrný",
    german: "vorsichtig",
    sentenceSk: "Dnes si zapamätám prídavné meno „opatrný“.",
    translationDe: "Heute merke ich mir das Adjektiv „vorsichtig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 849,
    nr: "849",
    category: "09 Eigenschaften & Gefühle",
    slovak: "bezpečný",
    german: "sicher",
    sentenceSk: "Dnes si zapamätám prídavné meno „bezpečný“.",
    translationDe: "Heute merke ich mir das Adjektiv „sicher“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 850,
    nr: "850",
    category: "09 Eigenschaften & Gefühle",
    slovak: "nebezpečný",
    german: "gefährlich",
    sentenceSk: "Dnes si zapamätám prídavné meno „nebezpečný“.",
    translationDe: "Heute merke ich mir das Adjektiv „gefährlich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 851,
    nr: "851",
    category: "09 Eigenschaften & Gefühle",
    slovak: "lacný",
    german: "billig",
    sentenceSk: "Dnes si zapamätám prídavné meno „lacný“.",
    translationDe: "Heute merke ich mir das Adjektiv „billig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 852,
    nr: "852",
    category: "09 Eigenschaften & Gefühle",
    slovak: "drahý",
    german: "teuer",
    sentenceSk: "Dnes si zapamätám prídavné meno „drahý“.",
    translationDe: "Heute merke ich mir das Adjektiv „teuer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 853,
    nr: "853",
    category: "09 Eigenschaften & Gefühle",
    slovak: "bohatý",
    german: "reich",
    sentenceSk: "Dnes si zapamätám prídavné meno „bohatý“.",
    translationDe: "Heute merke ich mir das Adjektiv „reich“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 854,
    nr: "854",
    category: "09 Eigenschaften & Gefühle",
    slovak: "chudobný",
    german: "arm",
    sentenceSk: "Dnes si zapamätám prídavné meno „chudobný“.",
    translationDe: "Heute merke ich mir das Adjektiv „arm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 855,
    nr: "855",
    category: "09 Eigenschaften & Gefühle",
    slovak: "otvorený",
    german: "offen",
    sentenceSk: "Dnes si zapamätám prídavné meno „otvorený“.",
    translationDe: "Heute merke ich mir das Adjektiv „offen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 856,
    nr: "856",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zatvorený",
    german: "geschlossen",
    sentenceSk: "Dnes si zapamätám prídavné meno „zatvorený“.",
    translationDe: "Heute merke ich mir das Adjektiv „geschlossen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 857,
    nr: "857",
    category: "09 Eigenschaften & Gefühle",
    slovak: "svetlý",
    german: "hell",
    sentenceSk: "Dnes si zapamätám prídavné meno „svetlý“.",
    translationDe: "Heute merke ich mir das Adjektiv „hell“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 858,
    nr: "858",
    category: "09 Eigenschaften & Gefühle",
    slovak: "tmavý",
    german: "dunkel",
    sentenceSk: "Dnes si zapamätám prídavné meno „tmavý“.",
    translationDe: "Heute merke ich mir das Adjektiv „dunkel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 859,
    nr: "859",
    category: "09 Eigenschaften & Gefühle",
    slovak: "farebný",
    german: "bunt",
    sentenceSk: "Dnes si zapamätám prídavné meno „farebný“.",
    translationDe: "Heute merke ich mir das Adjektiv „bunt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 860,
    nr: "860",
    category: "09 Eigenschaften & Gefühle",
    slovak: "biely",
    german: "weiß",
    sentenceSk: "Dnes si zapamätám prídavné meno „biely“.",
    translationDe: "Heute merke ich mir das Adjektiv „weiß“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 861,
    nr: "861",
    category: "09 Eigenschaften & Gefühle",
    slovak: "čierny",
    german: "schwarz",
    sentenceSk: "Dnes si zapamätám prídavné meno „čierny“.",
    translationDe: "Heute merke ich mir das Adjektiv „schwarz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 862,
    nr: "862",
    category: "09 Eigenschaften & Gefühle",
    slovak: "červený",
    german: "rot",
    sentenceSk: "Dnes si zapamätám prídavné meno „červený“.",
    translationDe: "Heute merke ich mir das Adjektiv „rot“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 863,
    nr: "863",
    category: "09 Eigenschaften & Gefühle",
    slovak: "modrý",
    german: "blau",
    sentenceSk: "Dnes si zapamätám prídavné meno „modrý“.",
    translationDe: "Heute merke ich mir das Adjektiv „blau“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 864,
    nr: "864",
    category: "09 Eigenschaften & Gefühle",
    slovak: "zelený",
    german: "grün",
    sentenceSk: "Dnes si zapamätám prídavné meno „zelený“.",
    translationDe: "Heute merke ich mir das Adjektiv „grün“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 865,
    nr: "865",
    category: "09 Eigenschaften & Gefühle",
    slovak: "žltý",
    german: "gelb",
    sentenceSk: "Dnes si zapamätám prídavné meno „žltý“.",
    translationDe: "Heute merke ich mir das Adjektiv „gelb“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 866,
    nr: "866",
    category: "09 Eigenschaften & Gefühle",
    slovak: "oranžový",
    german: "orange",
    sentenceSk: "Dnes si zapamätám prídavné meno „oranžový“.",
    translationDe: "Heute merke ich mir das Adjektiv „orange“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 867,
    nr: "867",
    category: "09 Eigenschaften & Gefühle",
    slovak: "ružový",
    german: "rosa",
    sentenceSk: "Dnes si zapamätám prídavné meno „ružový“.",
    translationDe: "Heute merke ich mir das Adjektiv „rosa“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 868,
    nr: "868",
    category: "09 Eigenschaften & Gefühle",
    slovak: "fialový",
    german: "lila",
    sentenceSk: "Dnes si zapamätám prídavné meno „fialový“.",
    translationDe: "Heute merke ich mir das Adjektiv „lila“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 869,
    nr: "869",
    category: "09 Eigenschaften & Gefühle",
    slovak: "sivý",
    german: "grau",
    sentenceSk: "Dnes si zapamätám prídavné meno „sivý“.",
    translationDe: "Heute merke ich mir das Adjektiv „grau“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 870,
    nr: "870",
    category: "09 Eigenschaften & Gefühle",
    slovak: "hnedý",
    german: "braun",
    sentenceSk: "Dnes si zapamätám prídavné meno „hnedý“.",
    translationDe: "Heute merke ich mir das Adjektiv „braun“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 871,
    nr: "871",
    category: "09 Eigenschaften & Gefühle",
    slovak: "moderný",
    german: "modern",
    sentenceSk: "Dnes si zapamätám prídavné meno „moderný“.",
    translationDe: "Heute merke ich mir das Adjektiv „modern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 872,
    nr: "872",
    category: "09 Eigenschaften & Gefühle",
    slovak: "tradičný",
    german: "traditionell",
    sentenceSk: "Dnes si zapamätám prídavné meno „tradičný“.",
    translationDe: "Heute merke ich mir das Adjektiv „traditionell“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 873,
    nr: "873",
    category: "09 Eigenschaften & Gefühle",
    slovak: "praktický",
    german: "praktisch",
    sentenceSk: "Dnes si zapamätám prídavné meno „praktický“.",
    translationDe: "Heute merke ich mir das Adjektiv „praktisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 874,
    nr: "874",
    category: "09 Eigenschaften & Gefühle",
    slovak: "kvalitný",
    german: "hochwertig",
    sentenceSk: "Dnes si zapamätám prídavné meno „kvalitný“.",
    translationDe: "Heute merke ich mir das Adjektiv „hochwertig“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 875,
    nr: "875",
    category: "09 Eigenschaften & Gefühle",
    slovak: "obľúbený",
    german: "beliebt/Lieblings-",
    sentenceSk: "Dnes si zapamätám prídavné meno „obľúbený“.",
    translationDe: "Heute merke ich mir das Adjektiv „beliebt/Lieblings-“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 876,
    nr: "876",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "práca",
    german: "Arbeit",
    sentenceSk: "Dnes si zapamätám slovo „práca“.",
    translationDe: "Heute merke ich mir das Wort „Arbeit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 877,
    nr: "877",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "škola",
    german: "Schule",
    sentenceSk: "Dnes si zapamätám slovo „škola“.",
    translationDe: "Heute merke ich mir das Wort „Schule“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 878,
    nr: "878",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "univerzita",
    german: "Universität",
    sentenceSk: "Dnes si zapamätám slovo „univerzita“.",
    translationDe: "Heute merke ich mir das Wort „Universität“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 879,
    nr: "879",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "štúdium",
    german: "Studium",
    sentenceSk: "Dnes si zapamätám slovo „štúdium“.",
    translationDe: "Heute merke ich mir das Wort „Studium“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 880,
    nr: "880",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kurz",
    german: "Kurs",
    sentenceSk: "Dnes si zapamätám slovo „kurz“.",
    translationDe: "Heute merke ich mir das Wort „Kurs“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 881,
    nr: "881",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "predmet",
    german: "Fach",
    sentenceSk: "Dnes si zapamätám slovo „predmet“.",
    translationDe: "Heute merke ich mir das Wort „Fach“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 882,
    nr: "882",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "skúška",
    german: "Prüfung",
    sentenceSk: "Dnes si zapamätám slovo „skúška“.",
    translationDe: "Heute merke ich mir das Wort „Prüfung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 883,
    nr: "883",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "úloha",
    german: "Aufgabe",
    sentenceSk: "Dnes si zapamätám slovo „úloha“.",
    translationDe: "Heute merke ich mir das Wort „Aufgabe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 884,
    nr: "884",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "projekt",
    german: "Projekt",
    sentenceSk: "Dnes si zapamätám slovo „projekt“.",
    translationDe: "Heute merke ich mir das Wort „Projekt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 885,
    nr: "885",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "prezentácia",
    german: "Präsentation",
    sentenceSk: "Dnes si zapamätám slovo „prezentácia“.",
    translationDe: "Heute merke ich mir das Wort „Präsentation“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 886,
    nr: "886",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "výsledok",
    german: "Ergebnis",
    sentenceSk: "Dnes si zapamätám slovo „výsledok“.",
    translationDe: "Heute merke ich mir das Wort „Ergebnis“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 887,
    nr: "887",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "cieľ",
    german: "Ziel",
    sentenceSk: "Dnes si zapamätám slovo „cieľ“.",
    translationDe: "Heute merke ich mir das Wort „Ziel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 888,
    nr: "888",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "plán",
    german: "Plan",
    sentenceSk: "Dnes si zapamätám slovo „plán“.",
    translationDe: "Heute merke ich mir das Wort „Plan“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 889,
    nr: "889",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "proces",
    german: "Prozess",
    sentenceSk: "Dnes si zapamätám slovo „proces“.",
    translationDe: "Heute merke ich mir das Wort „Prozess“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 890,
    nr: "890",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "metóda",
    german: "Methode",
    sentenceSk: "Dnes si zapamätám slovo „metóda“.",
    translationDe: "Heute merke ich mir das Wort „Methode“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 891,
    nr: "891",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "systém",
    german: "System",
    sentenceSk: "Dnes si zapamätám slovo „systém“.",
    translationDe: "Heute merke ich mir das Wort „System“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 892,
    nr: "892",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "informácia",
    german: "Information",
    sentenceSk: "Dnes si zapamätám slovo „informácia“.",
    translationDe: "Heute merke ich mir das Wort „Information“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 893,
    nr: "893",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "text",
    german: "Text",
    sentenceSk: "Dnes si zapamätám slovo „text“.",
    translationDe: "Heute merke ich mir das Wort „Text“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 894,
    nr: "894",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "slovo",
    german: "Wort",
    sentenceSk: "Dnes si zapamätám slovo „slovo“.",
    translationDe: "Heute merke ich mir das Wort „Wort“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 895,
    nr: "895",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "veta",
    german: "Satz",
    sentenceSk: "Dnes si zapamätám slovo „veta“.",
    translationDe: "Heute merke ich mir das Wort „Satz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 896,
    nr: "896",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "jazyk",
    german: "Sprache",
    sentenceSk: "Dnes si zapamätám slovo „jazyk“.",
    translationDe: "Heute merke ich mir das Wort „Sprache“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 897,
    nr: "897",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "slovenčina",
    german: "Slowakisch",
    sentenceSk: "Dnes si zapamätám slovo „slovenčina“.",
    translationDe: "Heute merke ich mir das Wort „Slowakisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 898,
    nr: "898",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "nemčina",
    german: "Deutsch",
    sentenceSk: "Dnes si zapamätám slovo „nemčina“.",
    translationDe: "Heute merke ich mir das Wort „Deutsch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 899,
    nr: "899",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "angličtina",
    german: "Englisch",
    sentenceSk: "Dnes si zapamätám slovo „angličtina“.",
    translationDe: "Heute merke ich mir das Wort „Englisch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 900,
    nr: "900",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "preklad",
    german: "Übersetzung",
    sentenceSk: "Dnes si zapamätám slovo „preklad“.",
    translationDe: "Heute merke ich mir das Wort „Übersetzung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 901,
    nr: "901",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "význam",
    german: "Bedeutung",
    sentenceSk: "Dnes si zapamätám slovo „význam“.",
    translationDe: "Heute merke ich mir das Wort „Bedeutung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 902,
    nr: "902",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "chyba",
    german: "Fehler",
    sentenceSk: "Dnes si zapamätám slovo „chyba“.",
    translationDe: "Heute merke ich mir das Wort „Fehler“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 903,
    nr: "903",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "príklad",
    german: "Beispiel",
    sentenceSk: "Dnes si zapamätám slovo „príklad“.",
    translationDe: "Heute merke ich mir das Wort „Beispiel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 904,
    nr: "904",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "cvičenie",
    german: "Übung",
    sentenceSk: "Dnes si zapamätám slovo „cvičenie“.",
    translationDe: "Heute merke ich mir das Wort „Übung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 905,
    nr: "905",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "poznámka",
    german: "Notiz",
    sentenceSk: "Dnes si zapamätám slovo „poznámka“.",
    translationDe: "Heute merke ich mir das Wort „Notiz“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 906,
    nr: "906",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kniha",
    german: "Buch",
    sentenceSk: "Dnes si zapamätám slovo „kniha“.",
    translationDe: "Heute merke ich mir das Wort „Buch“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 907,
    nr: "907",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "strana",
    german: "Seite",
    sentenceSk: "Dnes si zapamätám slovo „strana“.",
    translationDe: "Heute merke ich mir das Wort „Seite“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 908,
    nr: "908",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kapitola",
    german: "Kapitel",
    sentenceSk: "Dnes si zapamätám slovo „kapitola“.",
    translationDe: "Heute merke ich mir das Wort „Kapitel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 909,
    nr: "909",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "počítač",
    german: "Computer",
    sentenceSk: "Dnes si zapamätám slovo „počítač“.",
    translationDe: "Heute merke ich mir das Wort „Computer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 910,
    nr: "910",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "notebook",
    german: "Laptop",
    sentenceSk: "Dnes si zapamätám slovo „notebook“.",
    translationDe: "Heute merke ich mir das Wort „Laptop“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 911,
    nr: "911",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "obrazovka",
    german: "Bildschirm",
    sentenceSk: "Dnes si zapamätám slovo „obrazovka“.",
    translationDe: "Heute merke ich mir das Wort „Bildschirm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 912,
    nr: "912",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "klávesnica",
    german: "Tastatur",
    sentenceSk: "Dnes si zapamätám slovo „klávesnica“.",
    translationDe: "Heute merke ich mir das Wort „Tastatur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 913,
    nr: "913",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "myš",
    german: "Maus",
    sentenceSk: "Dnes si zapamätám slovo „myš“.",
    translationDe: "Heute merke ich mir das Wort „Maus“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 914,
    nr: "914",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "súbor",
    german: "Datei",
    sentenceSk: "Dnes si zapamätám slovo „súbor“.",
    translationDe: "Heute merke ich mir das Wort „Datei“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 915,
    nr: "915",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "priečinok",
    german: "Ordner",
    sentenceSk: "Dnes si zapamätám slovo „priečinok“.",
    translationDe: "Heute merke ich mir das Wort „Ordner“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 916,
    nr: "916",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "program",
    german: "Programm",
    sentenceSk: "Dnes si zapamätám slovo „program“.",
    translationDe: "Heute merke ich mir das Wort „Programm“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 917,
    nr: "917",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "aplikácia",
    german: "App",
    sentenceSk: "Dnes si zapamätám slovo „aplikácia“.",
    translationDe: "Heute merke ich mir das Wort „App“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 918,
    nr: "918",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "web",
    german: "Web",
    sentenceSk: "Dnes si zapamätám slovo „web“.",
    translationDe: "Heute merke ich mir das Wort „Web“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 919,
    nr: "919",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "stránka",
    german: "Webseite/Seite",
    sentenceSk: "Dnes si zapamätám slovo „stránka“.",
    translationDe: "Heute merke ich mir das Wort „Webseite/Seite“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 920,
    nr: "920",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "heslo",
    german: "Passwort",
    sentenceSk: "Dnes si zapamätám slovo „heslo“.",
    translationDe: "Heute merke ich mir das Wort „Passwort“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 921,
    nr: "921",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "email",
    german: "E-Mail",
    sentenceSk: "Dnes si zapamätám slovo „email“.",
    translationDe: "Heute merke ich mir das Wort „E-Mail“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 922,
    nr: "922",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "fotografia",
    german: "Fotografie",
    sentenceSk: "Dnes si zapamätám slovo „fotografia“.",
    translationDe: "Heute merke ich mir das Wort „Fotografie“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 923,
    nr: "923",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "fotka",
    german: "Foto",
    sentenceSk: "Dnes si zapamätám slovo „fotka“.",
    translationDe: "Heute merke ich mir das Wort „Foto“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 924,
    nr: "924",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "fotoaparát",
    german: "Kamera",
    sentenceSk: "Dnes si zapamätám slovo „fotoaparát“.",
    translationDe: "Heute merke ich mir das Wort „Kamera“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 925,
    nr: "925",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "objektív",
    german: "Objektiv",
    sentenceSk: "Dnes si zapamätám slovo „objektív“.",
    translationDe: "Heute merke ich mir das Wort „Objektiv“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 926,
    nr: "926",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "video",
    german: "Video",
    sentenceSk: "Dnes si zapamätám slovo „video“.",
    translationDe: "Heute merke ich mir das Wort „Video“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 927,
    nr: "927",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "film",
    german: "Film",
    sentenceSk: "Dnes si zapamätám slovo „film“.",
    translationDe: "Heute merke ich mir das Wort „Film“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 928,
    nr: "928",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "hudba",
    german: "Musik",
    sentenceSk: "Dnes si zapamätám slovo „hudba“.",
    translationDe: "Heute merke ich mir das Wort „Musik“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 929,
    nr: "929",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "pieseň",
    german: "Lied",
    sentenceSk: "Dnes si zapamätám slovo „pieseň“.",
    translationDe: "Heute merke ich mir das Wort „Lied“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 930,
    nr: "930",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "zvuk",
    german: "Ton",
    sentenceSk: "Dnes si zapamätám slovo „zvuk“.",
    translationDe: "Heute merke ich mir das Wort „Ton“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 931,
    nr: "931",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "farba",
    german: "Farbe",
    sentenceSk: "Dnes si zapamätám slovo „farba“.",
    translationDe: "Heute merke ich mir das Wort „Farbe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 932,
    nr: "932",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "tvar",
    german: "Form",
    sentenceSk: "Dnes si zapamätám slovo „tvar“.",
    translationDe: "Heute merke ich mir das Wort „Form“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 933,
    nr: "933",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "materiál",
    german: "Material",
    sentenceSk: "Dnes si zapamätám slovo „materiál“.",
    translationDe: "Heute merke ich mir das Wort „Material“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 934,
    nr: "934",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "dizajn",
    german: "Design",
    sentenceSk: "Dnes si zapamätám slovo „dizajn“.",
    translationDe: "Heute merke ich mir das Wort „Design“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 935,
    nr: "935",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "návrh",
    german: "Entwurf",
    sentenceSk: "Dnes si zapamätám slovo „návrh“.",
    translationDe: "Heute merke ich mir das Wort „Entwurf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 936,
    nr: "936",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "model",
    german: "Modell",
    sentenceSk: "Dnes si zapamätám slovo „model“.",
    translationDe: "Heute merke ich mir das Wort „Modell“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 937,
    nr: "937",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "prototyp",
    german: "Prototyp",
    sentenceSk: "Dnes si zapamätám slovo „prototyp“.",
    translationDe: "Heute merke ich mir das Wort „Prototyp“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 938,
    nr: "938",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "výrobok",
    german: "Produkt",
    sentenceSk: "Dnes si zapamätám slovo „výrobok“.",
    translationDe: "Heute merke ich mir das Wort „Produkt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 939,
    nr: "939",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "produkt",
    german: "Produkt",
    sentenceSk: "Dnes si zapamätám slovo „produkt“.",
    translationDe: "Heute merke ich mir das Wort „Produkt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 940,
    nr: "940",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "obrázok",
    german: "Bild",
    sentenceSk: "Dnes si zapamätám slovo „obrázok“.",
    translationDe: "Heute merke ich mir das Wort „Bild“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 941,
    nr: "941",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kresba",
    german: "Zeichnung",
    sentenceSk: "Dnes si zapamätám slovo „kresba“.",
    translationDe: "Heute merke ich mir das Wort „Zeichnung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 942,
    nr: "942",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "umenie",
    german: "Kunst",
    sentenceSk: "Dnes si zapamätám slovo „umenie“.",
    translationDe: "Heute merke ich mir das Wort „Kunst“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 943,
    nr: "943",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "umelec",
    german: "Künstler",
    sentenceSk: "Dnes si zapamätám slovo „umelec“.",
    translationDe: "Heute merke ich mir das Wort „Künstler“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 944,
    nr: "944",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "dizajnér",
    german: "Designer",
    sentenceSk: "Dnes si zapamätám slovo „dizajnér“.",
    translationDe: "Heute merke ich mir das Wort „Designer“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 945,
    nr: "945",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "fotograf",
    german: "Fotograf",
    sentenceSk: "Dnes si zapamätám slovo „fotograf“.",
    translationDe: "Heute merke ich mir das Wort „Fotograf“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 946,
    nr: "946",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kamera",
    german: "Kamera",
    sentenceSk: "Dnes si zapamätám slovo „kamera“.",
    translationDe: "Heute merke ich mir das Wort „Kamera“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 947,
    nr: "947",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "tieň",
    german: "Schatten",
    sentenceSk: "Dnes si zapamätám slovo „tieň“.",
    translationDe: "Heute merke ich mir das Wort „Schatten“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 948,
    nr: "948",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kompozícia",
    german: "Komposition",
    sentenceSk: "Dnes si zapamätám slovo „kompozícia“.",
    translationDe: "Heute merke ich mir das Wort „Komposition“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 949,
    nr: "949",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "štruktúra",
    german: "Struktur",
    sentenceSk: "Dnes si zapamätám slovo „štruktúra“.",
    translationDe: "Heute merke ich mir das Wort „Struktur“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 950,
    nr: "950",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "povrch",
    german: "Oberfläche",
    sentenceSk: "Dnes si zapamätám slovo „povrch“.",
    translationDe: "Heute merke ich mir das Wort „Oberfläche“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 951,
    nr: "951",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "detail",
    german: "Detail",
    sentenceSk: "Dnes si zapamätám slovo „detail“.",
    translationDe: "Heute merke ich mir das Wort „Detail“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 952,
    nr: "952",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kvalita",
    german: "Qualität",
    sentenceSk: "Dnes si zapamätám slovo „kvalita“.",
    translationDe: "Heute merke ich mir das Wort „Qualität“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 953,
    nr: "953",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "veľkosť",
    german: "Größe",
    sentenceSk: "Dnes si zapamätám slovo „veľkosť“.",
    translationDe: "Heute merke ich mir das Wort „Größe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 954,
    nr: "954",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "rozmer",
    german: "Maß/Dimension",
    sentenceSk: "Dnes si zapamätám slovo „rozmer“.",
    translationDe: "Heute merke ich mir das Wort „Maß/Dimension“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 955,
    nr: "955",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "šírka",
    german: "Breite",
    sentenceSk: "Dnes si zapamätám slovo „šírka“.",
    translationDe: "Heute merke ich mir das Wort „Breite“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 956,
    nr: "956",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "výška",
    german: "Höhe",
    sentenceSk: "Dnes si zapamätám slovo „výška“.",
    translationDe: "Heute merke ich mir das Wort „Höhe“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 957,
    nr: "957",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "dĺžka",
    german: "Länge",
    sentenceSk: "Dnes si zapamätám slovo „dĺžka“.",
    translationDe: "Heute merke ich mir das Wort „Länge“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 958,
    nr: "958",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "hmotnosť",
    german: "Gewicht",
    sentenceSk: "Dnes si zapamätám slovo „hmotnosť“.",
    translationDe: "Heute merke ich mir das Wort „Gewicht“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 959,
    nr: "959",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "cena",
    german: "Preis",
    sentenceSk: "Dnes si zapamätám slovo „cena“.",
    translationDe: "Heute merke ich mir das Wort „Preis“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 960,
    nr: "960",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "peniaze",
    german: "Geld",
    sentenceSk: "Dnes si zapamätám slovo „peniaze“.",
    translationDe: "Heute merke ich mir das Wort „Geld“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 961,
    nr: "961",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "euro",
    german: "Euro",
    sentenceSk: "Dnes si zapamätám slovo „euro“.",
    translationDe: "Heute merke ich mir das Wort „Euro“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 962,
    nr: "962",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "firma",
    german: "Firma",
    sentenceSk: "Dnes si zapamätám slovo „firma“.",
    translationDe: "Heute merke ich mir das Wort „Firma“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 963,
    nr: "963",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "klient",
    german: "Kunde/Klient",
    sentenceSk: "Dnes si zapamätám slovo „klient“.",
    translationDe: "Heute merke ich mir das Wort „Kunde/Klient“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 964,
    nr: "964",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "zákazka",
    german: "Auftrag",
    sentenceSk: "Dnes si zapamätám slovo „zákazka“.",
    translationDe: "Heute merke ich mir das Wort „Auftrag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 965,
    nr: "965",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "zmluva",
    german: "Vertrag",
    sentenceSk: "Dnes si zapamätám slovo „zmluva“.",
    translationDe: "Heute merke ich mir das Wort „Vertrag“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 966,
    nr: "966",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "ponuka",
    german: "Angebot",
    sentenceSk: "Dnes si zapamätám slovo „ponuka“.",
    translationDe: "Heute merke ich mir das Wort „Angebot“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 967,
    nr: "967",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "faktúra",
    german: "Rechnung",
    sentenceSk: "Dnes si zapamätám slovo „faktúra“.",
    translationDe: "Heute merke ich mir das Wort „Rechnung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 968,
    nr: "968",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "plat",
    german: "Gehalt",
    sentenceSk: "Dnes si zapamätám slovo „plat“.",
    translationDe: "Heute merke ich mir das Wort „Gehalt“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 969,
    nr: "969",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "skúsenosť",
    german: "Erfahrung",
    sentenceSk: "Dnes si zapamätám slovo „skúsenosť“.",
    translationDe: "Heute merke ich mir das Wort „Erfahrung“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 970,
    nr: "970",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "zručnosť",
    german: "Fähigkeit",
    sentenceSk: "Dnes si zapamätám slovo „zručnosť“.",
    translationDe: "Heute merke ich mir das Wort „Fähigkeit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 971,
    nr: "971",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "kariéra",
    german: "Karriere",
    sentenceSk: "Dnes si zapamätám slovo „kariéra“.",
    translationDe: "Heute merke ich mir das Wort „Karriere“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 972,
    nr: "972",
    category: "10 Arbeit, Studium & Kreativität",
    slovak: "úspech",
    german: "Erfolg",
    sentenceSk: "Dnes si zapamätám slovo „úspech“.",
    translationDe: "Heute merke ich mir das Wort „Erfolg“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 973,
    nr: "973",
    category: "11 Freizeit, Natur & Körper",
    slovak: "voľný čas",
    german: "Freizeit",
    sentenceSk: "Dnes si zapamätám slovo „voľný čas“.",
    translationDe: "Heute merke ich mir das Wort „Freizeit“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 974,
    nr: "974",
    category: "11 Freizeit, Natur & Körper",
    slovak: "hobby",
    german: "Hobby",
    sentenceSk: "Dnes si zapamätám slovo „hobby“.",
    translationDe: "Heute merke ich mir das Wort „Hobby“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 975,
    nr: "975",
    category: "11 Freizeit, Natur & Körper",
    slovak: "šport",
    german: "Sport",
    sentenceSk: "Dnes si zapamätám slovo „šport“.",
    translationDe: "Heute merke ich mir das Wort „Sport“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 976,
    nr: "976",
    category: "11 Freizeit, Natur & Körper",
    slovak: "futbal",
    german: "Fußball",
    sentenceSk: "Dnes si zapamätám slovo „futbal“.",
    translationDe: "Heute merke ich mir das Wort „Fußball“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 977,
    nr: "977",
    category: "11 Freizeit, Natur & Körper",
    slovak: "tenis",
    german: "Tennis",
    sentenceSk: "Dnes si zapamätám slovo „tenis“.",
    translationDe: "Heute merke ich mir das Wort „Tennis“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 978,
    nr: "978",
    category: "11 Freizeit, Natur & Körper",
    slovak: "beh",
    german: "Laufen",
    sentenceSk: "Dnes si zapamätám slovo „beh“.",
    translationDe: "Heute merke ich mir das Wort „Laufen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 979,
    nr: "979",
    category: "11 Freizeit, Natur & Körper",
    slovak: "bicyklovanie",
    german: "Radfahren",
    sentenceSk: "Dnes si zapamätám slovo „bicyklovanie“.",
    translationDe: "Heute merke ich mir das Wort „Radfahren“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 980,
    nr: "980",
    category: "11 Freizeit, Natur & Körper",
    slovak: "lezenie",
    german: "Klettern",
    sentenceSk: "Dnes si zapamätám slovo „lezenie“.",
    translationDe: "Heute merke ich mir das Wort „Klettern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 981,
    nr: "981",
    category: "11 Freizeit, Natur & Körper",
    slovak: "turistika",
    german: "Wandern",
    sentenceSk: "Dnes si zapamätám slovo „turistika“.",
    translationDe: "Heute merke ich mir das Wort „Wandern“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 982,
    nr: "982",
    category: "11 Freizeit, Natur & Körper",
    slovak: "plávanie",
    german: "Schwimmen",
    sentenceSk: "Dnes si zapamätám slovo „plávanie“.",
    translationDe: "Heute merke ich mir das Wort „Schwimmen“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 983,
    nr: "983",
    category: "11 Freizeit, Natur & Körper",
    slovak: "posilňovňa",
    german: "Fitnessstudio",
    sentenceSk: "Dnes si zapamätám slovo „posilňovňa“.",
    translationDe: "Heute merke ich mir das Wort „Fitnessstudio“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 984,
    nr: "984",
    category: "11 Freizeit, Natur & Körper",
    slovak: "tréning",
    german: "Training",
    sentenceSk: "Dnes si zapamätám slovo „tréning“.",
    translationDe: "Heute merke ich mir das Wort „Training“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 985,
    nr: "985",
    category: "11 Freizeit, Natur & Körper",
    slovak: "hra",
    german: "Spiel",
    sentenceSk: "Dnes si zapamätám slovo „hra“.",
    translationDe: "Heute merke ich mir das Wort „Spiel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 986,
    nr: "986",
    category: "11 Freizeit, Natur & Körper",
    slovak: "lopta",
    german: "Ball",
    sentenceSk: "Dnes si zapamätám slovo „lopta“.",
    translationDe: "Heute merke ich mir das Wort „Ball“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 987,
    nr: "987",
    category: "11 Freizeit, Natur & Körper",
    slovak: "časopis",
    german: "Zeitschrift",
    sentenceSk: "Dnes si zapamätám slovo „časopis“.",
    translationDe: "Heute merke ich mir das Wort „Zeitschrift“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 988,
    nr: "988",
    category: "11 Freizeit, Natur & Körper",
    slovak: "seriál",
    german: "Serie",
    sentenceSk: "Dnes si zapamätám slovo „seriál“.",
    translationDe: "Heute merke ich mir das Wort „Serie“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 989,
    nr: "989",
    category: "11 Freizeit, Natur & Körper",
    slovak: "epizóda",
    german: "Episode",
    sentenceSk: "Dnes si zapamätám slovo „epizóda“.",
    translationDe: "Heute merke ich mir das Wort „Episode“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 990,
    nr: "990",
    category: "11 Freizeit, Natur & Körper",
    slovak: "hudobník",
    german: "Musiker",
    sentenceSk: "Dnes si zapamätám slovo „hudobník“.",
    translationDe: "Heute merke ich mir das Wort „Musiker“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 991,
    nr: "991",
    category: "11 Freizeit, Natur & Körper",
    slovak: "kapela",
    german: "Band",
    sentenceSk: "Dnes si zapamätám slovo „kapela“.",
    translationDe: "Heute merke ich mir das Wort „Band“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 992,
    nr: "992",
    category: "11 Freizeit, Natur & Körper",
    slovak: "album",
    german: "Album",
    sentenceSk: "Dnes si zapamätám slovo „album“.",
    translationDe: "Heute merke ich mir das Wort „Album“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 993,
    nr: "993",
    category: "11 Freizeit, Natur & Körper",
    slovak: "pes",
    german: "Hund",
    sentenceSk: "Dnes si zapamätám slovo „pes“.",
    translationDe: "Heute merke ich mir das Wort „Hund“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 994,
    nr: "994",
    category: "11 Freizeit, Natur & Körper",
    slovak: "mačka",
    german: "Katze",
    sentenceSk: "Dnes si zapamätám slovo „mačka“.",
    translationDe: "Heute merke ich mir das Wort „Katze“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 995,
    nr: "995",
    category: "11 Freizeit, Natur & Körper",
    slovak: "zviera",
    german: "Tier",
    sentenceSk: "Dnes si zapamätám slovo „zviera“.",
    translationDe: "Heute merke ich mir das Wort „Tier“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 996,
    nr: "996",
    category: "11 Freizeit, Natur & Körper",
    slovak: "vták",
    german: "Vogel",
    sentenceSk: "Dnes si zapamätám slovo „vták“.",
    translationDe: "Heute merke ich mir das Wort „Vogel“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 997,
    nr: "997",
    category: "11 Freizeit, Natur & Körper",
    slovak: "strom",
    german: "Baum",
    sentenceSk: "Dnes si zapamätám slovo „strom“.",
    translationDe: "Heute merke ich mir das Wort „Baum“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 998,
    nr: "998",
    category: "11 Freizeit, Natur & Körper",
    slovak: "kvet",
    german: "Blume",
    sentenceSk: "Dnes si zapamätám slovo „kvet“.",
    translationDe: "Heute merke ich mir das Wort „Blume“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 999,
    nr: "999",
    category: "11 Freizeit, Natur & Körper",
    slovak: "tráva",
    german: "Gras",
    sentenceSk: "Dnes si zapamätám slovo „tráva“.",
    translationDe: "Heute merke ich mir das Wort „Gras“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  },
  {
    id: 1000,
    nr: "1000",
    category: "11 Freizeit, Natur & Körper",
    slovak: "kameň",
    german: "Stein",
    sentenceSk: "Dnes si zapamätám slovo „kameň“.",
    translationDe: "Heute merke ich mir das Wort „Stein“.",
    srs: {
      interval: 0,
      reps: 0,
      ease: 2.5,
      dueDate: null
    }
  }
];
