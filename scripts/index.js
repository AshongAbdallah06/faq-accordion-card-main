import { items } from "./items.js";

let html = '';

items.forEach((item) => {
    html += `
        <div class="container js-container-${item.id}" data-question-id=${item.id}>
            <p class="question js-question-${item.id}">
                ${item.question}
            </p>
            <img src="images/icon-arrow-down.svg" alt="arrow-down" class="arrow-down" data-arrow-id=${item.id}>
            <p class="answer js-answer-${item.id}">
                ${item.answer}
            </p>
        </div>
    `
});
document.querySelector('.que-ans-container').innerHTML = html;

let currentlyOpenQuestionId = null;

document.querySelectorAll('.container').forEach((element) => {
    element.addEventListener('click', () => {
        let { questionId } = element.dataset;

        let answer = document.querySelector(`.js-answer-${questionId}`);
        let currentQuestionElement = document.querySelector(`.js-question-${questionId}`);

        if (currentlyOpenQuestionId === questionId) {
            // Clicking on the currently open FAQ, close it
            answer.style.opacity = '0';
            answer.style.paddingBottom = '0';
            currentQuestionElement.classList.remove('current-question');
            currentlyOpenQuestionId = null;
        } else {
            // Close the currently open FAQ, if any
            if (currentlyOpenQuestionId !== null) {
                let currentAnswer = document.querySelector(`.js-answer-${currentlyOpenQuestionId}`);
                let currentQuestion = document.querySelector(`.js-question-${currentlyOpenQuestionId}`);
                currentAnswer.style.opacity = '0';
                currentAnswer.style.paddingBottom = '0';
                currentQuestion.classList.remove('current-question');
            }

            // Open the clicked FAQ
            answer.style.opacity = '1';
            answer.style.paddingBottom = '40px';
            currentQuestionElement.classList.add('current-question');
            currentlyOpenQuestionId = questionId;
        }
    })
});
