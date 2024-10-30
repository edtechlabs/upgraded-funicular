function checkAnswers() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'a', // 8/15
        q2: 'b', // 5/8
        q3: 'b', // 1/3
        q4: 'b', // 1/3
        q5: 'b', // 2
        q6: 'b', // 2/3
        q7: 'c', // 2/3
        q8: 'b', // 1/4
        q9: 'd', // 1 1/4
        q10: 'a' // 3/4
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
