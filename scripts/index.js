import { items } from "./items.js";

let html = '';

items.forEach((item) => {
    html += `
        <div class="container js-container-${item.id}" data-question-id=${item.id}>
            <p class="question js-question-${item.id}">
                ${item.question}
            </p>
            <img src="images/icon-arrow-down.svg" class="arrow-down" data-arrow-id=${item.id}>
            <p class="answer js-answer-${item.id}">
                ${item.answer}
            </p>
        </div>
    `
});
document.querySelector('.que-ans-container').innerHTML = html;


// let arrowDown = document.querySelectorAll('.arrow-down');
// arrowDown.forEach((arrow) => {
//     arrow.addEventListener('click', () => {
//         let { arrowId } = arrow.dataset;

//         alert(arrowId);
//     })
// })

let isShowing = true;

document.querySelectorAll('.container').forEach((element) => {
    element.addEventListener('click', () => {
        let { questionId } = element.dataset;

        let answer = document.querySelector(`.js-answer-${questionId}`);

        if (isShowing) {
            answer.style.opacity = '1';
            answer.style.paddingBottom = '40px';
    
            document.querySelector(`.js-question-${questionId}`).classList.add('current-question')

            isShowing = false;
        } else {
            answer.style.opacity = '0';
            answer.style.paddingBottom = '0';
    
            document.querySelector(`.js-question-${questionId}`).classList.remove('current-question')

            isShowing = true;
        }
    })
})