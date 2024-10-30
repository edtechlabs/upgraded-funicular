function checkAnswers() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'b', // 26 cm
        q2: 'c', // 36 m²
        q3: 'a', // 25 cm²
        q4: 'b', // 27 inches
        q5: 'a', // 8 cm
        q6: 'b', // 5 m
        q7: 'a', // 21 cm²
        q8: 'b', // 32 ft
        q9: 'a', // 30 cm
        q10: 'a' // 20 m²
    };

    const totalQuestions = Object.keys(answers).length;

    // Loop through each question
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        const options = quiz.elements[questionName];
        let selectedValue = null;

        // Find the selected option
        for (const option of options) {
            if (option.checked) {
                selectedValue = option.value;
                break;
            }
        }

        // Check if the answer is correct
        if (selectedValue === answers[questionName]) {
            score++;
        }
    }

    // Display results
    results.textContent = `You scored ${score} out of ${totalQuestions}.`;
}
