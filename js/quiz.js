const questions = [ //array de objetos
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é a cor do céu em um dia claro?",
        options: ["Verde", "Azul", "Preto", "Branco"],
        answer: "Azul"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "Clarice Lispector", "Jorge Amado", "Monteiro Lobato"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante", "Girafa", "Rinoceronte", "Urso-pardo"],
        answer: "Elefante"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">
            ${question.options.map(option => `
                <div class="option" onclick="checkAnswer('${option}')">${option}</div>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    
    if (selectedOption === question.answer) {
        score++;
    }

    document.getElementById("next-button").style.display = "block"; // Mostrar botão de próxima pergunta
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none"; // Esconder botão até o usuário escolher uma opção
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
}

window.onload = loadQuestion;
