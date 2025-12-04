
// 2. LOGIQUE DU QUIZ
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const endScreen = document.getElementById("end-screen");

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const validateBtn = document.getElementById("validate-btn");

  const infoQuestionCount = document.getElementById("info-question-count");
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");
  const questionNumber = document.getElementById("question-number");
  const questionText = document.getElementById("question-text");
  const questionTheme = document.getElementById("question-theme");
  const questionDifficulty = document.getElementById("question-difficulty");
  const answersContainer = document.getElementById("answers");
  const feedback = document.getElementById("feedback");
  const scoreText = document.getElementById("score-text");
  const nextBtnText = document.getElementById("next-btn-text");

  const endScore = document.getElementById("end-score");
  const endMessage = document.getElementById("end-message");
  const endCorrect = document.getElementById("end-correct");
  const endTotal = document.getElementById("end-total");
  const pseudoInput = document.getElementById("pseudo");
  const pseudoError = document.getElementById("pseudo-error");

  // ✅ URL Google Apps Script (mets la tienne complète ici)
  const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKf...ERkyAuNQ-L3YbJqfmcXMOakiD6HXkIaqKiemDFAOeBsIMuhl4E44O9laJ/exec";

  let playerName = "";
  let currentQuestionIndex = 0;
  let score = 0;
  let hasValidated = false;
  let selectedAnswerIndex = null;
  let userAnswers = [];

  // ====== SAUVEGARDE / REPRISE DU QUIZ + CADENAS + CODE FORMATEUR ======
  const QUIZ_STATE_KEY = "quiz_state_marketing_v1";
  const QUIZ_LOCK_KEY = "quiz_lock_marketing_v1"; // change la valeur pour une nouvelle séance
  const TRAINER_CODE = "1234"; // 🔐 code formateur à personnaliser

  function hasQuizLock() {
    try {
      return localStorage.getItem(QUIZ_LOCK_KEY) === "locked";
    } catch (e) {
      return false;
    }
  }

  function lockQuiz() {
    try {
      localStorage.setItem(QUIZ_LOCK_KEY, "locked");
    } catch (e) {
      console.warn("Impossible de verrouiller le quiz :", e);
    }
  }

  function applyLockUI() {
    // On laisse le bouton démarrer cliquable pour le formateur
    if (startBtn) startBtn.disabled = false;
    // Mais l'élève ne peut plus modifier son pseudo
    if (pseudoInput) pseudoInput.disabled = true;
    if (pseudoError) {
      pseudoError.textContent =
        "Ce quiz a déjà été réalisé sur cet appareil. Formateur : entrez le code pour autoriser une nouvelle tentative.";
    }
  }

  function saveQuizState() {
    try {
      const state = {
        playerName,
        currentQuestionIndex,
        userAnswers
      };
      localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Impossible d'enregistrer l'état du quiz :", e);
    }
  }

  function loadQuizState() {
    try {
      const raw = localStorage.getItem(QUIZ_STATE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      console.warn("Impossible de charger l'état du quiz :", e);
      return null;
    }
  }

  function clearQuizState() {
    try {
      localStorage.removeItem(QUIZ_STATE_KEY);
    } catch (e) {
      console.warn("Impossible de supprimer l'état du quiz :", e);
    }
  }

  // 🔓 utilisé par le formateur pour déverrouiller le quiz sur un appareil
  function unlockQuizWithTrainerCode() {
    const code = prompt("Code formateur :");
    if (code === null) return; // annulé

    if (code === TRAINER_CODE) {
      // On efface l'état + le cadenas
      clearQuizState();
      try {
        localStorage.removeItem(QUIZ_LOCK_KEY);
      } catch (e) {
        console.warn("Impossible de supprimer le verrou :", e);
      }

      alert("Quiz déverrouillé pour cet appareil. Tu peux maintenant recommencer le questionnaire.");

      // On réactive les champs de départ
      if (startBtn) startBtn.disabled = false;
      if (pseudoInput) pseudoInput.disabled = false;
      if (pseudoError) pseudoError.textContent = "";
    } else {
      alert("Code formateur incorrect.");
    }
  }

  function tryRestoreQuiz() {
    // Si le quiz est verrouillé, on bloque la reprise automatique
    if (hasQuizLock()) {
      applyLockUI();
      return;
    }

    const state = loadQuizState();
    if (!state) return;

    playerName = state.playerName || "";
    currentQuestionIndex = state.currentQuestionIndex || 0;
    userAnswers = state.userAnswers || [];

    if (pseudoInput && playerName) {
      pseudoInput.value = playerName;
    }

    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    loadQuestion();
    updateProgress();
  }

  // Affiche le nombre de questions sur l’écran de départ
  if (infoQuestionCount) {
    infoQuestionCount.textContent = `${questions.length} question(s)`;
  }

  // ---------- DÉMARRAGE ----------
  function startQuiz() {
    // Sécurité : si le quiz est verrouillé, on ne démarre pas
    if (hasQuizLock()) {
      applyLockUI();
      alert("Ce quiz a déjà été réalisé sur cet appareil, tu ne peux pas le recommencer.");
      return;
    }

    currentQuestionIndex = 0;
    score = 0;
    hasValidated = false;
    selectedAnswerIndex = null;
    userAnswers = [];

    if (scoreText) scoreText.textContent = "-";

    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    loadQuestion();
    updateProgress();

    // Sauvegarde dès le démarrage
    saveQuizState();
  }

  // ---------- CHARGER UNE QUESTION ----------
  function loadQuestion() {
    const q = questions[currentQuestionIndex];

    if (!q) return;

    if (questionNumber) {
      questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    }
    if (questionText) questionText.textContent = q.question;
    if (questionTheme) questionTheme.textContent = q.theme || "";
    if (questionDifficulty) questionDifficulty.textContent = q.difficulty || "";

    if (answersContainer) {
      answersContainer.innerHTML = "";

      q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = answer;

        btn.addEventListener("click", () => {
          if (hasValidated) return;

          selectedAnswerIndex = index;

          const allButtons = answersContainer.querySelectorAll(".answer-btn");
          allButtons.forEach((b) => b.classList.remove("selected"));

          btn.classList.add("selected");

          if (feedback) {
            feedback.textContent = "";
            feedback.className = "feedback";
          }
          if (validateBtn) validateBtn.disabled = false;
        });

        answersContainer.appendChild(btn);
      });
    }

    // Réinitialise l'état de validation pour la nouvelle question
    hasValidated = false;
    selectedAnswerIndex = null;

    if (validateBtn) validateBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;

    if (feedback) {
      feedback.textContent = "Choisis une réponse puis clique sur « Valider ».";
      feedback.className = "feedback";
    }

    if (nextBtnText) {
      if (currentQuestionIndex === questions.length - 1) {
        nextBtnText.textContent = "Voir les résultats";
      } else {
        nextBtnText.textContent = "Question suivante";
      }
    }

    updateProgress();
  }

  // ---------- VALIDATION ----------
  function validateCurrentAnswer() {
    if (selectedAnswerIndex === null) {
      if (feedback) {
        feedback.textContent = "Choisis une réponse avant de valider 🙂";
        feedback.className = "feedback";
      }
      return;
    }

    hasValidated = true;
    userAnswers[currentQuestionIndex] = selectedAnswerIndex;
    saveQuizState();

    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((btn) => {
      btn.classList.add("disabled");
    });

    if (validateBtn) validateBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = false;

    if (feedback) {
      feedback.textContent = "Réponse enregistrée, tu peux passer à la question suivante.";
      feedback.className = "feedback";
    }
  }

  // ---------- PROGRESSION ----------
  function updateProgress() {
    const current = currentQuestionIndex + 1;
    const total = questions.length;
    const percent = (current / total) * 100;

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `${current}/${total}`;
  }

  function goToNext() {
    if (!hasValidated) return;

    currentQuestionIndex++;

    // Sauvegarde après avoir avancé d'une question
    saveQuizState();

    if (currentQuestionIndex >= questions.length) {
      showEndScreen();
    } else {
      loadQuestion();
    }
  }

  // ---------- FIN DU QUIZ ----------
  function showEndScreen() {
    quizScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    // Le quiz est terminé : on efface l'état sauvegardé et on verrouille
    clearQuizState();
    lockQuiz();
    applyLockUI();

    const total = questions.length;

    score = 0;
    for (let i = 0; i < total; i++) {
      if (userAnswers[i] === questions[i].correctIndex) {
        score++;
      }
    }

    const percent = Math.round((score / total) * 100);

    if (playerName && endScore) {
      endScore.textContent = `${playerName}, tu as obtenu ${score} / ${total} (${percent}%).`;
    } else if (endScore) {
      endScore.textContent = `Tu as obtenu ${score} / ${total} (${percent}%).`;
    }

    let msg = "";
    if (percent === 100) {
      msg = "Excellent, tu maîtrises parfaitement le contenu !";
    } else if (percent >= 70) {
      msg = "Très bon résultat, tu as bien compris l’essentiel 👍";
    } else if (percent >= 50) {
      msg = "C’est un bon début, mais tu peux encore progresser.";
    } else {
      msg = "Pas grave, ce quiz est là pour t’aider à repérer ce qu’il faut revoir.";
    }
    if (endMessage) endMessage.textContent = msg;

    if (endCorrect) endCorrect.textContent = `Bonnes réponses : ${score}`;
    if (endTotal) endTotal.textContent = `Nombre total de questions : ${total}`;

    // ✅ Envoi des résultats vers Google Sheets
    sendResultsToSheet({
      pseudo: playerName || "Anonyme",
      score: score,
      totalQuestions: total,
      pourcentage: percent
    });
  }

  // ---------- ENVOI VERS GOOGLE SHEETS ----------
  function sendResultsToSheet({ pseudo, score, totalQuestions, pourcentage }) {
    const payload = { pseudo, score, totalQuestions, pourcentage };

    fetch(SHEET_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).catch((err) => {
      console.error("Erreur envoi résultats Sheets :", err);
    });
  }

  // Tente de reprendre une partie en cours (si la page a été rechargée)
  tryRestoreQuiz();

  // =============================
  // ÉVÉNEMENTS
  // =============================

  // bouton démarrer
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      // Si le quiz est verrouillé, on demande le code formateur
      if (hasQuizLock()) {
        unlockQuizWithTrainerCode();
        return;
      }

      const value = pseudoInput.value.trim();

      if (!value) {
        if (pseudoError) {
          pseudoError.textContent = "Merci d’entrer ton prénom ou un pseudo pour commencer 😊";
        }
        return;
      }

      if (pseudoError) {
        pseudoError.textContent = "";
      }

      playerName = value;
      startQuiz();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", goToNext);
  }

  if (validateBtn) {
    validateBtn.addEventListener("click", validateCurrentAnswer);
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", startQuiz);
  }
});
