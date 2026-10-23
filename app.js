const vowels = [
  { spelling: "a", ending: "ാ" },
  { spelling: "e", ending: "െ" },
  { spelling: "i", ending: "ി" },
  { spelling: "o", ending: "ോ" },
  { spelling: "u", ending: "ു" }
];

const letterSounds = [
  { letter: "A", vowelSounds: ["അ", "എ", "ഐ", "ഓ", "ഔ"] },
  { letter: "B", base: "ബ" },
  { letter: "C", base: "ക" },
  { letter: "D", base: "ദ" },
  { letter: "E", vowelSounds: ["എ", "ഈ", "ഐ", "ഒ", "യൂ"] },
  { letter: "F", base: "ഫ" },
  { letter: "G", base: "ഗ" },
  { letter: "H", base: "ഹ" },
  { letter: "I", vowelSounds: ["ഐ", "ഈ", "ഐ", "ഐ", "യു"] },
  { letter: "J", base: "ജ" },
  { letter: "K", base: "ക" },
  { letter: "L", base: "ല" },
  { letter: "M", base: "മ" },
  { letter: "N", base: "ന" },
  { letter: "O", vowelSounds: ["ഒ", "ഓ", "ഐ", "ഓ", "ഔ"] },
  { letter: "P", base: "പ" },
  { letter: "Q", base: "ക്വ" },
  { letter: "R", base: "ര" },
  { letter: "S", base: "സ" },
  { letter: "T", base: "ത" },
  { letter: "U", vowelSounds: ["അ", "എ", "ഇ", "ഒ", "ഉ"] },
  { letter: "V", base: "വ" },
  { letter: "W", base: "വ" },
  { letter: "X", base: "ക്സ" },
  { letter: "Y", base: "യ" },
  { letter: "Z", base: "സ" }
];

const extraBlends = [
  { spelling: "Bl", base: "ബ്ല" },
  { spelling: "Cl", base: "ക്ല" },
  { spelling: "Br", base: "ബ്ര" },
  { spelling: "Cr", base: "ക്ര" },
  { spelling: "Dr", base: "ഡ്ര" },
  { spelling: "Fl", base: "ഫ്ല" },
  { spelling: "Fr", base: "ഫ്ര" },
  { spelling: "Gl", base: "ഗ്ല" },
  { spelling: "Gr", base: "ഗ്ര" },
  { spelling: "Pl", base: "പ്ല" },
  { spelling: "Pr", base: "പ്ര" },
  { spelling: "Sk", base: "സ്ക" },
  { spelling: "Sl", base: "സ്ല" },
  { spelling: "Sp", base: "സ്പ" },
  { spelling: "St", base: "സ്റ്റ" },
  { spelling: "Tr", base: "ട്ര" },
  { spelling: "Vr", base: "വ്ര" },
  { spelling: "Shr", base: "ശ്ര" }
];

const additionalTwoLetterSounds = [
  { spelling: "An", pronunciation: "ആൻ" },
  { spelling: "Am", pronunciation: "ആം" },
  { spelling: "As", pronunciation: "ആസ്" },
  { spelling: "At", pronunciation: "ആറ്റ്" },
  { spelling: "In", pronunciation: "ഇൻ" },
  { spelling: "Is", pronunciation: "ഈസ്" },
  { spelling: "It", pronunciation: "ഇറ്റ്" },
  { spelling: "If", pronunciation: "ഇഫ്" },
  { spelling: "On", pronunciation: "ഓൺ" },
  { spelling: "Of", pronunciation: "ഓഫ്" },
  { spelling: "Or", pronunciation: "ഓർ" },
  { spelling: "Up", pronunciation: "അപ്പ്" },
  { spelling: "Us", pronunciation: "അസ്" },
  { spelling: "By", pronunciation: "ബൈ" },
  { spelling: "My", pronunciation: "മൈ" },
  { spelling: "Go", pronunciation: "ഗോ" },
  { spelling: "No", pronunciation: "നോ" },
  { spelling: "So", pronunciation: "സോ" },
  { spelling: "To", pronunciation: "ടു" },
  { spelling: "Do", pronunciation: "ഡൂ" },
  { spelling: "He", pronunciation: "ഹീ" },
  { spelling: "Me", pronunciation: "മീ" },
  { spelling: "We", pronunciation: "വീ" },
  { spelling: "Be", pronunciation: "ബീ" },
  { spelling: "Hi", pronunciation: "ഹൈ" }
];

const additionalBlends = [
  {
    spelling: "Ch",
    sounds: [
      { spelling: "Cha", pronunciation: "ചാ" },
      { spelling: "Che", pronunciation: "ചെ" },
      { spelling: "Chi", pronunciation: "ചി" },
      { spelling: "Cho", pronunciation: "ചോ" },
      { spelling: "Chu", pronunciation: "ചു" }
    ]
  },
  {
    spelling: "Sh",
    sounds: [
      { spelling: "Sha", pronunciation: "ഷാ" },
      { spelling: "She", pronunciation: "ഷെ" },
      { spelling: "Shi", pronunciation: "ഷി" },
      { spelling: "Sho", pronunciation: "ഷോ" },
      { spelling: "Shu", pronunciation: "ഷു" }
    ]
  }
];

const newBlendFamilies = [
  { spelling: "Sm", base: "സ്മ" },
  { spelling: "Sn", base: "സ്ന" },
  { spelling: "Sw", base: "സ്വ" },
  { spelling: "Tw", base: "ട്വ" },
  { spelling: "Dw", base: "ഡ്വ" },
  { spelling: "Scr", base: "സ്ക്ര" },
  { spelling: "Spl", base: "സ്പ്ല" },
  { spelling: "Spr", base: "സ്പ്ര" },
  { spelling: "Str", base: "സ്ട്ര" },
  { spelling: "Thr", base: "ത്ര" }
];

const endingBlendFamilies = [
  { spelling: "nd", base: "ൻഡ്" },
  { spelling: "nt", base: "ന്റ്" },
  { spelling: "nk", base: "ങ്ക്" },
  { spelling: "ng", base: "ങ്" },
  { spelling: "mp", base: "ംപ്" },
  { spelling: "st", base: "സ്റ്റ്" },
  { spelling: "sk", base: "സ്ക്" },
  { spelling: "sp", base: "സ്പ്" },
  { spelling: "ft", base: "ഫ്റ്റ്" },
  { spelling: "pt", base: "പ്റ്റ്" },
  { spelling: "ct", base: "ക്റ്റ്" },
  { spelling: "ld", base: "ൽഡ്" },
  { spelling: "lt", base: "ൽറ്റ്" },
  { spelling: "lk", base: "ൽക്ക്" },
  { spelling: "lp", base: "ൽപ്പ്" },
  { spelling: "lf", base: "ൽഫ്" },
  { spelling: "rn", base: "ർൺ" },
  { spelling: "rt", base: "ർട്ട്" },
  { spelling: "rd", base: "ർഡ്" },
  { spelling: "rs", base: "ർസ്" }
];

const endingVowels = [
  { spelling: "a", pronunciation: "ആ" },
  { spelling: "e", pronunciation: "എ" },
  { spelling: "i", pronunciation: "ഇ" },
  { spelling: "o", pronunciation: "ഒ" },
  { spelling: "u", pronunciation: "അ" }
];

const cvcFamilies = [
  { ending: "at", vowel: "ാ", coda: "റ്റ്", onsets: ["b", "c", "h", "m", "s"] },
  { ending: "an", vowel: "ാ", coda: "ൻ", onsets: ["c", "f", "m", "p", "r"] },
  { ending: "ap", vowel: "ാ", coda: "പ്പ്", onsets: ["c", "m", "n", "t", "g"] },
  { ending: "ad", vowel: "ാ", coda: "ഡ്", onsets: ["b", "d", "h", "m", "s"] },
  { ending: "ag", vowel: "ാ", coda: "ഗ്", onsets: ["b", "r", "s", "t", "w"] },
  { ending: "et", vowel: "െ", coda: "റ്റ്", onsets: ["b", "g", "l", "m", "p"] },
  { ending: "en", vowel: "െ", coda: "ൻ", onsets: ["d", "h", "m", "p", "t"] },
  { ending: "ed", vowel: "െ", coda: "ഡ്", onsets: ["b", "f", "l", "r", "w"] },
  { ending: "eg", vowel: "െ", coda: "ഗ്", onsets: ["b", "k", "l", "p", "n"] },
  { ending: "it", vowel: "ി", coda: "റ്റ്", onsets: ["b", "f", "h", "k", "s"] },
  { ending: "in", vowel: "ി", coda: "ൻ", onsets: ["b", "f", "p", "s", "t"] },
  { ending: "ip", vowel: "ി", coda: "പ്പ്", onsets: ["d", "h", "l", "r", "s"] },
  { ending: "id", vowel: "ി", coda: "ഡ്", onsets: ["b", "d", "h", "k", "r"] },
  { ending: "ig", vowel: "ി", coda: "ഗ്", onsets: ["b", "d", "f", "p", "w"] },
  { ending: "ot", vowel: "ൊ", coda: "റ്റ്", onsets: ["c", "d", "h", "l", "p"] },
  { ending: "op", vowel: "ൊ", coda: "പ്പ്", onsets: ["c", "h", "m", "p", "t"] },
  { ending: "og", vowel: "ൊ", coda: "ഗ്", onsets: ["d", "f", "h", "j", "l"] },
  { ending: "ub", vowel: "അ", coda: "ബ്", onsets: ["c", "h", "r", "s", "t"] },
  { ending: "un", vowel: "അ", coda: "ൻ", onsets: ["b", "f", "r", "s", "g"] },
  { ending: "ut", vowel: "അ", coda: "റ്റ്", onsets: ["c", "g", "h", "n", "p"] },
  { ending: "ell", vowel: "െ", coda: "ൽ", onsets: ["b", "f", "s", "t", "w"] },
  { ending: "ill", vowel: "ി", coda: "ൽ", onsets: ["b", "f", "h", "k", "m"] },
  { ending: "ack", vowel: "ാ", coda: "ക്ക്", onsets: ["b", "l", "p", "s", "t"] },
  { ending: "ock", vowel: "ൊ", coda: "ക്ക്", onsets: ["d", "l", "r", "s", "p"] },
  { ending: "uck", vowel: "അ", coda: "ക്ക്", onsets: ["b", "d", "l", "p", "t"] },
  { ending: "ump", vowel: "അ", coda: "ംപ്", onsets: ["b", "d", "l", "p", "j"] },
  { ending: "amp", vowel: "ാ", coda: "ംപ്", onsets: ["c", "d", "l", "r", "v"] },
  { ending: "ash", vowel: "ാ", coda: "ഷ്", onsets: ["c", "d", "h", "m", "r"] },
  { ending: "ick", vowel: "ി", coda: "ക്ക്", onsets: ["k", "l", "p", "s", "t"] },
  { ending: "est", vowel: "െ", coda: "സ്റ്റ്", onsets: ["b", "n", "r", "t", "v"] }
];

const cvcOnsetSounds = {
  b: "ബ",
  c: "ക",
  d: "ഡ",
  f: "ഫ",
  g: "ഗ",
  h: "ഹ",
  j: "ജ",
  k: "ക",
  l: "ല",
  m: "മ",
  n: "ന",
  p: "പ",
  r: "ര",
  s: "സ",
  t: "ട",
  v: "വ",
  w: "വ"
};

function makeEndingBlendSounds(blend) {
  return endingVowels.map(({ spelling, pronunciation }) => ({
    spelling: `${spelling}${blend.spelling}`,
    pronunciation: `${pronunciation}${blend.base}`
  }));
}

function makeCvcSounds(family) {
  return family.onsets.map((onset) => ({
    spelling: `${onset}${family.ending}`,
    pronunciation: `${cvcOnsetSounds[onset]}${family.vowel}${family.coda}`
  }));
}

function makeSounds(group) {
  if (group.vowelSounds) {
    return group.vowelSounds.map((sound, index) => ({
      spelling: `${group.letter}${vowels[index].spelling}`,
      pronunciation: sound
    }));
  }

  return vowels.map(({ spelling, ending }) => ({
    spelling: `${group.letter}${spelling}`,
    pronunciation: `${group.base}${ending}`
  }));
}

function makeBlendSounds(blend) {
  return vowels.map(({ spelling, ending }) => ({
    spelling: `${blend.spelling}${spelling}`,
    pronunciation: `${blend.base}${ending}`
  }));
}

function createGroup(title, sounds, type) {
  const section = document.createElement("section");
  section.className = "sound-group";
  section.dataset.type = type;

  const heading = document.createElement("div");
  heading.className = "group-heading";

  const titleElement = document.createElement("h3");
  titleElement.className = "group-title";
  titleElement.textContent = title;

  const count = document.createElement("span");
  count.className = "group-count";
  count.textContent = `${sounds.length} sounds`;
  heading.append(titleElement, count);

  const cards = document.createElement("div");
  cards.className = "sound-cards";

  for (const sound of sounds) {
    const card = document.createElement("div");
    card.className = "sound-card";
    card.setAttribute("aria-label", `${sound.spelling}: ${sound.pronunciation}`);

    const spelling = document.createElement("span");
    spelling.className = "sound-spelling";
    spelling.textContent = sound.spelling;

    const pronunciation = document.createElement("span");
    pronunciation.className = "sound-malayalam";
    pronunciation.lang = "ml";
    pronunciation.textContent = sound.pronunciation;

    card.append(spelling, pronunciation);
    cards.append(card);
  }

  section.append(heading, cards);
  return section;
}

const groups = [
  ...letterSounds.map((letter) => ({
    title: `${letter.letter} sound family`,
    type: "letters",
    sounds: makeSounds(letter)
  })),
  ...extraBlends.map((blend) => ({
    title: `${blend.spelling} blend`,
    type: "blends",
    sounds: makeBlendSounds(blend)
  }))
];

const existingSpellings = new Set(groups.flatMap((group) => (
  group.sounds.map((sound) => sound.spelling.toLocaleLowerCase())
)));
const missingTwoLetterSounds = additionalTwoLetterSounds.filter((sound) => (
  !existingSpellings.has(sound.spelling.toLocaleLowerCase())
));

if (missingTwoLetterSounds.length > 0) {
  groups.push({
    title: "Extra two-letter sounds",
    type: "letters",
    sounds: missingTwoLetterSounds
  });
  for (const sound of missingTwoLetterSounds) {
    existingSpellings.add(sound.spelling.toLocaleLowerCase());
  }
}

for (const blend of additionalBlends) {
  const missingSounds = blend.sounds.filter((sound) => (
    !existingSpellings.has(sound.spelling.toLocaleLowerCase())
  ));
  if (missingSounds.length > 0) {
    groups.push({
      title: `${blend.spelling} blend`,
      type: "blends",
      sounds: missingSounds
    });
    for (const sound of missingSounds) {
      existingSpellings.add(sound.spelling.toLocaleLowerCase());
    }
  }
}

for (const blend of newBlendFamilies) {
  const missingSounds = makeBlendSounds(blend).filter((sound) => (
    !existingSpellings.has(sound.spelling.toLocaleLowerCase())
  ));
  if (missingSounds.length > 0) {
    groups.push({
      title: `${blend.spelling} blend`,
      type: "blends",
      sounds: missingSounds
    });
    for (const sound of missingSounds) {
      existingSpellings.add(sound.spelling.toLocaleLowerCase());
    }
  }
}

for (const blend of endingBlendFamilies) {
  const missingSounds = makeEndingBlendSounds(blend).filter((sound) => (
    !existingSpellings.has(sound.spelling.toLocaleLowerCase())
  ));
  if (missingSounds.length > 0) {
    groups.push({
      title: `-${blend.spelling} ending blend`,
      type: "blends",
      sounds: missingSounds
    });
    for (const sound of missingSounds) {
      existingSpellings.add(sound.spelling.toLocaleLowerCase());
    }
  }
}

for (const family of cvcFamilies) {
  const missingSounds = makeCvcSounds(family).filter((sound) => (
    !existingSpellings.has(sound.spelling.toLocaleLowerCase())
  ));
  if (missingSounds.length > 0) {
    groups.push({
      title: `-${family.ending} word family`,
      type: "letters",
      sounds: missingSounds
    });
    for (const sound of missingSounds) {
      existingSpellings.add(sound.spelling.toLocaleLowerCase());
    }
  }
}

const groupContainer = document.querySelector("#sound-groups");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#sound-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let activeFilter = "all";
const quizToggle = document.querySelector("#quiz-toggle");
const quizPanel = document.querySelector("#quiz-panel");
const quizClose = document.querySelector("#quiz-close");
const practiceSection = document.querySelector(".practice");
const quizIntro = document.querySelector("#quiz-intro");
const quizPlay = document.querySelector("#quiz-play");
const quizResult = document.querySelector("#quiz-result");
const quizError = document.querySelector("#quiz-error");
const quizProgressLabel = document.querySelector("#quiz-progress-label");
const quizScoreLabel = document.querySelector("#quiz-score-label");
const quizProgressTrack = document.querySelector(".quiz-progress-track");
const quizProgressFill = document.querySelector("#quiz-progress-fill");
const quizPrompt = document.querySelector("#quiz-prompt");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");
const quizFinalScore = document.querySelector("#quiz-final-score");
const quizFinalMessage = document.querySelector("#quiz-final-message");
const quizQuestionCount = 100;
let quizQuestions = [];
let quizQuestionIndex = 0;
let quizScore = 0;
let hasAnswered = false;

function renderGroups() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  const visibleGroups = groups.filter((group) => {
    const matchesFilter = activeFilter === "all" || group.type === activeFilter;
    const matchesSearch = !searchTerm || group.title.toLocaleLowerCase().includes(searchTerm)
      || group.sounds.some((sound) => (
        sound.spelling.toLocaleLowerCase().includes(searchTerm)
        || sound.pronunciation.includes(searchTerm)
      ));
    return matchesFilter && matchesSearch;
  });

  groupContainer.replaceChildren(
    ...visibleGroups.map((group) => createGroup(group.title, group.sounds, group.type))
  );
  emptyState.hidden = visibleGroups.length > 0;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function makeQuizQuestions() {
  const uniqueSounds = [...new Map(
    groups.flatMap((group) => group.sounds)
      .map((sound) => [sound.spelling.toLocaleLowerCase(), sound])
  ).values()];
  const eligibleSounds = uniqueSounds.filter((sound) => {
    const distinctDistractors = new Set(uniqueSounds
      .filter((candidate) => (
        candidate.spelling !== sound.spelling
        && candidate.pronunciation !== sound.pronunciation
      ))
      .map((candidate) => candidate.spelling.toLocaleLowerCase()));
    return distinctDistractors.size >= 3;
  });

  if (eligibleSounds.length < quizQuestionCount) {
    return null;
  }

  return shuffle(eligibleSounds).slice(0, quizQuestionCount).map((sound) => {
    const distractors = shuffle(uniqueSounds.filter((candidate) => (
      candidate.spelling !== sound.spelling
      && candidate.pronunciation !== sound.pronunciation
    ))).slice(0, 3);
    return {
      answer: sound,
      choices: shuffle([sound, ...distractors])
    };
  });
}

function renderQuizQuestion() {
  const question = quizQuestions[quizQuestionIndex];
  hasAnswered = false;
  quizProgressLabel.textContent = `Question ${quizQuestionIndex + 1} of ${quizQuestionCount}`;
  quizScoreLabel.textContent = `Score: ${quizScore}`;
  quizProgressTrack.setAttribute("aria-valuenow", String(quizQuestionIndex));
  quizProgressFill.style.width = `${(quizQuestionIndex / quizQuestionCount) * 100}%`;
  quizPrompt.textContent = question.answer.pronunciation;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  quizNext.hidden = true;

  quizOptions.replaceChildren(...question.choices.map((choice) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "quiz-option";
    option.textContent = choice.spelling;
    option.addEventListener("click", () => chooseQuizAnswer(option, choice));
    return option;
  }));
  quizOptions.querySelector(".quiz-option").focus();
}

function chooseQuizAnswer(selectedButton, selectedSound) {
  if (hasAnswered) {
    return;
  }

  hasAnswered = true;
  const question = quizQuestions[quizQuestionIndex];
  const isCorrect = selectedSound.spelling === question.answer.spelling;
  const optionButtons = [...quizOptions.querySelectorAll(".quiz-option")];

  for (const optionButton of optionButtons) {
    optionButton.disabled = true;
    if (optionButton.textContent === question.answer.spelling) {
      optionButton.classList.add("is-correct");
    }
  }

  if (isCorrect) {
    quizScore += 1;
    selectedButton.classList.add("is-correct");
    quizFeedback.textContent = "ശരിയാണ്! Correct!";
    quizFeedback.className = "quiz-feedback is-correct";
  } else {
    selectedButton.classList.add("is-wrong");
    quizFeedback.textContent = `തെറ്റി. ശരിയുത്തരം: ${question.answer.spelling}`;
    quizFeedback.className = "quiz-feedback is-wrong";
  }

  quizScoreLabel.textContent = `Score: ${quizScore}`;
  quizNext.textContent = quizQuestionIndex === quizQuestionCount - 1
    ? "See your score"
    : "Next question";
  quizNext.hidden = false;
  quizNext.focus();
}

function showQuizResult() {
  quizPlay.hidden = true;
  quizResult.hidden = false;
  quizProgressTrack.setAttribute("aria-valuenow", "100");
  quizProgressFill.style.width = "100%";
  quizFinalScore.textContent = `${quizScore} / ${quizQuestionCount}`;
  quizFinalMessage.textContent = quizScore === quizQuestionCount
    ? "മികച്ച പ്രകടനം! You got every question right."
    : `You answered ${quizScore} out of ${quizQuestionCount} correctly. Keep practising and try again!`;
  document.querySelector("#quiz-restart").focus();
}

function startQuiz() {
  quizError.hidden = true;
  quizQuestions = makeQuizQuestions();
  if (!quizQuestions) {
    quizError.textContent = "There are not enough unique sound choices to make a 100-question quiz.";
    quizError.hidden = false;
    return;
  }

  quizQuestionIndex = 0;
  quizScore = 0;
  quizIntro.hidden = true;
  quizResult.hidden = true;
  quizPlay.hidden = false;
  renderQuizQuestion();
}

quizToggle.addEventListener("click", () => {
  const isOpening = quizPanel.hidden;
  quizPanel.hidden = !isOpening;
  practiceSection.hidden = isOpening;
  quizToggle.setAttribute("aria-expanded", String(isOpening));

  if (isOpening) {
    quizToggle.textContent = "← Back to sound cards";
    quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    quizClose.focus({ preventScroll: true });
  } else {
    quizToggle.textContent = "പരിശോധിക്കാം / Quiz Test";
    quizToggle.focus();
  }
});

quizClose.addEventListener("click", () => {
  quizPanel.hidden = true;
  practiceSection.hidden = false;
  quizToggle.setAttribute("aria-expanded", "false");
  quizToggle.textContent = "പരിശോധിക്കാം / Quiz Test";
  quizToggle.focus();
});

document.querySelector("#quiz-start").addEventListener("click", startQuiz);
document.querySelector("#quiz-restart").addEventListener("click", startQuiz);
quizNext.addEventListener("click", () => {
  if (quizQuestionIndex === quizQuestionCount - 1) {
    showQuizResult();
    return;
  }

  quizQuestionIndex += 1;
  renderQuizQuestion();
});

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    for (const filterButton of filterButtons) {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    }
    renderGroups();
  });
}

searchInput.addEventListener("input", renderGroups);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderGroups();
