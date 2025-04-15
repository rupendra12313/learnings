const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which language is used for web apps?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = quizData[current];
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = `
      <div class="question">${q.question}</div>
      <div class="options">
        ${q.options.map(option => `
          <label>
            <input type="radio" name="answer" value="${option}" /> ${option}
          </label>
        `).join('')}
      </div>
    `;
  }
  
  function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected && selected.value === quizData[current].answer) {
      score++;
    }
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById('quiz').innerHTML = `
      <h2>Your Score: ${score} / ${quizData.length}</h2>
    `;
    document.querySelector('button').style.display = 'none';
  }
  
  // Load first question on page load
  window.onload = loadQuestion;
  