function checkAnswers() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'b', // 5/6
        q2: 'a', // 5/8
        q3: 'c', // 36
        q4: 'b', // 1/2
        q5: 'a', // 2/7
        q6: 'a', // 1/2
        q7: 'a', // 5/8
        q8: 'a', // 1/10
        q9: 'a', // 13/9
        q10: 'a' // 1/3
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
