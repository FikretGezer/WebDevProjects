const arr = [
    "Deneme_1",
    "Deneme_2",
    "Deneme_3"
];

const container = document.querySelector('.items-container');
const result = document.querySelector('.result');
const srchBox = document.querySelector('.search-box');

srchBox.addEventListener('mouseover', () => {
    console.log(srchBox.value);
});

arr.forEach(el => {
    console.log(el);
    container.innerHTML += `<div>${el}</div>`;
});
