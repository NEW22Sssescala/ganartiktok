/**
 * Quiz questions and logic
 */

// Quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "¿Cómo valoras tu experiencia general en TikTok?",
    options: [
      { emoji: "😍", text: "Excelente" },
      { emoji: "😊", text: "Buena" },
      { emoji: "😐", text: "Regular" },
      { emoji: "😒", text: "Mala" }
    ]
  },
  {
    id: 2,
    question: "¿Cuál es tu formato de vídeo favorito en TikTok?",
    options: [
      { emoji: "🎥", text: "Vídeo corto" },
      { emoji: "📹", text: "Vídeo medio" },
      { emoji: "⏳", text: "Vídeo largo" },
      { emoji: "📺", text: "Directo" }
    ]
  },
  {
    id: 3,
    question: "¿Cómo descubres nuevos vídeos en TikTok?",
    options: [
      { emoji: "🎯", text: "Feed \"Para ti\"" },
      { emoji: "👤", text: "Siguiendo a creadores" },
      { emoji: "🔍", text: "A través de hashtags" },
      { emoji: "📜", text: "Feed \"Siguiendo\"" },
      { emoji: "💡", text: "Recomendaciones" }
    ]
  },
  {
    id: 4,
    question: "¿Cuántas horas al día pasas en TikTok?",
    options: [
      { emoji: "⏳", text: "Menos de 1 hora" },
      { emoji: "⏳", text: "1 a 2 horas" },
      { emoji: "⏳", text: "2 a 4 horas" },
      { emoji: "⏳", text: "4 a 6 horas" },
      { emoji: "⏳", text: "Más de 6 horas" }
    ]
  },
  {
    id: 5,
    question: "¿Qué te hace seguir a un creador en TikTok?",
    options: [
      { emoji: "🎉", text: "Contenido divertido" },
      { emoji: "📚", text: "Contenido educativo" },
      { emoji: "🤝", text: "Conexión personal" },
      { emoji: "🔥", text: "Participación en retos" },
      { emoji: "📅", text: "Frecuencia de publicaciones" }
    ]
  },
  {
    id: 6,
    question: "¿Cuál de estos temas de contenido te gusta más ver en TikTok?",
    options: [
      { emoji: "😂", text: "Comedia" },
      { emoji: "💃", text: "Baile" },
      { emoji: "ℹ️", text: "Tutoriales y consejos" },
      { emoji: "📹", text: "Vlogs diarios" },
      { emoji: "💄", text: "Moda y belleza" }
    ]
  },
  {
    id: 7,
    question: "¿En qué momento del día usas más TikTok?",
    options: [
      { emoji: "🌅", text: "Mañana" },
      { emoji: "🌞", text: "Tarde" },
      { emoji: "🌜", text: "Noche" },
      { emoji: "🌙", text: "Madrugada" }
    ]
  },
  {
    id: 8,
    question: "¿Qué sección de TikTok visitas más?",
    options: [
      { emoji: "🎯", text: "Para ti" },
      { emoji: "👥", text: "Siguiendo" },
      { emoji: "📺", text: "TikTok Live" },
      { emoji: "🔍", text: "Explorar" },
      { emoji: "➕", text: "Otro" }
    ]
  },
  {
    id: 9,
    question: "¿Con qué frecuencia comentas en vídeos de TikTok?",
    options: [
      { emoji: "🔄", text: "Siempre" },
      { emoji: "📆", text: "Frecuentemente" },
      { emoji: "⏳", text: "A veces" },
      { emoji: "🌧️", text: "Raramente" },
      { emoji: "🚫", text: "Nunca" }
    ]
  },
  {
    id: 10,
    question: "¿Qué tipo de interacción haces más en los vídeos de TikTok?",
    options: [
      { emoji: "👍", text: "Dar me gusta" },
      { emoji: "💬", text: "Comentar" },
      { emoji: "🔄", text: "Compartir" },
      { emoji: "📌", text: "Guardar" },
      { emoji: "🚫", text: "Ninguna" }
    ]
  },
  {
    id: 11,
    question: "¿Cuál es tu rango de edad?",
    options: [
      { emoji: "🧑‍🎓", text: "13-17 años" },
      { emoji: "🎉", text: "18-24 años" },
      { emoji: "👩‍💼", text: "25-34 años" },
      { emoji: "👵", text: "35 años o más" }
    ]
  }
];

// Quiz state
let currentQuestionIndex = 0;
let selectedOption = null;
const quizContainer = document.getElementById('quiz-container');

// Render a question
function renderQuestion(questionIndex) {
  const question = quizQuestions[questionIndex];
  
  // Update progress
  updateProgressBar(questionIndex, quizQuestions.length);
  
  // Create the question HTML
  const questionHTML = `
    <div class="quiz-title">${question.question}</div>
    <div class="quiz-subtitle">Selecciona una opción para continuar:</div>
    <div class="options-container">
      ${question.options.map((option, index) => `
        <div class="option" data-index="${index}">
          <div class="option-content">
            <div class="option-emoji">${option.emoji}</div>
            <div class="option-text">${option.text}</div>
          </div>
          <div class="custom-checkbox"></div>
        </div>
      `).join('')}
    </div>
    <button id="continue-btn" class="continue-btn" disabled>Continuar</button>
    <div class="bonus-text">Participa en un bono adicional</div>
    <div class="divider"></div>
  `;
  
  // Set the HTML
  quizContainer.innerHTML = questionHTML;
  
  // Add event listeners to options
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Remove selection from all options
      options.forEach(opt => opt.classList.remove('selected'));
      
      // Select this option
      option.classList.add('selected');
      
      // Enable the continue button
      document.getElementById('continue-btn').disabled = false;
      
      // Store the selected option
      selectedOption = parseInt(option.dataset.index);
      
      // Rastrear interação (Contact event)
      if (typeof trackContact === 'function') {
        trackContact();
      }
    });
  });
  
  // Add event listener to continue button
  document.getElementById('continue-btn').addEventListener('click', () => {
    if (selectedOption !== null) {
      // Notificar resposta da pergunta
      const selectedAnswer = question.options[selectedOption].text;
      if (typeof notifyQuestionAnswered === 'function') {
        notifyQuestionAnswered(questionIndex + 1, selectedAnswer);
      }
      
      // Show reward
      showReward(currentQuestionIndex);
    }
  });
  
  // Animate the new question in
  animateElement(quizContainer, 'fade-in');
}

// Move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  selectedOption = null;
  
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    // Show final reward
    showFinalReward();
  }
}

// Reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  selectedOption = null;
  totalEarned = 0;
  rewards = generateRewards();
  currentBalance.textContent = "0";
  renderQuestion(currentQuestionIndex);
}