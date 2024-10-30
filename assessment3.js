function checkAnswers() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'b', // Hundredths
        q2: 'c', // 0.75
        q3: 'a', // 0.5
        q4: 'c', // Both a and b
        q5: 'b', // 0.79
        q6: 'b', // 0.7
        q7: 'a', // 0.89, 0.899, 0.9
        q8: 'a', // 0.125
        q9: 'd', // 1/20
        q10: 'b' // 0.4
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
