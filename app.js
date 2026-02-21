  const quizData = [
        {
            question: "What is the capital of Pakistan?",
            options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
            correct: 2
        },
        {
            question: "Which language is used for web styling?",
            options: ["HTML", "CSS", "Python", "C++"],
            correct: 1
        },
        {
            question: "Which company developed JavaScript?",
            options: ["Microsoft", "Netscape", "Google", "IBM"],
            correct: 1
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionData = quizData[currentQuestion];
        document.getElementById("question").innerText = questionData.question;

        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        questionData.options.forEach((option, index) => {
            optionsDiv.innerHTML += `
                <label class="option">
                    <input type="radio" name="answer" value="${index}">
                    ${option}
                </label>
            `;
        });
    }

    function nextQuestion() {
        const selected = document.querySelector('input[name="answer"]:checked');

        if (!selected) {
            alert("Please select an answer!");
            return;
        }

        if (parseInt(selected.value) === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.querySelector(".quiz-container").innerHTML = `
                <h2>Quiz Completed 🎉</h2>
                <h3>Your Score: ${score} / ${quizData.length}</h3>
                <button onclick="location.reload()">Restart</button>
            `;
        }
    }

    loadQuestion();