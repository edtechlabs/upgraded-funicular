function checkAnswers() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'b', // 15
        q2: 'a', // 3/4
        q3: 'c', // 1/2
        q4: 'b', // 13/20
        q5: 'a', // 11/24
        q6: 'b', // 7/10 mile
        q7: 'a', // 3/8 cup
        q8: 'a', // 2/3
        q9: 'b', // 4/9
        q10: 'b' // 3/8 yard
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
