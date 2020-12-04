'use strict';

function turnCard() {
    const cards = document.querySelectorAll('.card__face--down');
    for (let i = 0; i < cards.length; i += 1) 
    cards[i].addEventListener('click', () => {
        cards[i].classList.add('cards__face--up')
    })
};
turnCard()


