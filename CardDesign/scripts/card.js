import {cardInformations} from '../scripts/card-infos.js';

const cardsContainer = document.querySelector('.cards-container');
let cardsHTML = '';
cardInformations.forEach((info) => {
    cardsHTML += `
    <div class="card">
    <div class="card-upper-part">
        <img class="card-image" src="${info.image}" alt="">
        <div class="studio-name"> 
            ${info.studioName}              
        </div>
    </div>
    <hr class="card-line">
    <div class="card-lower-part">
        <div class="card-info">
            Name: <div class="card-answer">${info.name}</div>
        </div>
        <div class="card-info">
            From: <div class="card-answer">${info.from}</div>
        </div>
        <div class="card-info">
            Age: <div class="card-answer">${info.age}</div>
        </div>
        <div class="card-info">
            Job: <div class="card-answer">${info.job}</div>
        </div>
    </div>
</div>  
    `;
});
cardsContainer.innerHTML = cardsHTML;