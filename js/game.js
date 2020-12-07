'use strict';
let firstCard = false;
let lastCard = false;
let lastCardCheck = false;
let cardOne = -1;
let cardTwo = -1;
let cardLayout ='';



function randomBg() {
    const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n)'));
    cards.forEach((card) => { card.style.order = Math.floor(Math.random() * 10) });
}
randomBg();


function turnUpCards() {
    firstCard = true;

    const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n) :nth-child(1) :nth-child(2) '));

    for (let i = 0; i < cards.length; i += 1){
        cards[i].parentElement.parentElement.addEventListener('click', () => {
            
            cards[i].parentElement.parentElement.classList.add('is-flipped');

        
            if (cardOne == -1) {
                cardOne = i;
            } else {
                cardTwo = i;
            }        

            lastCardCheck=true;
            for (let i = 0; i < cards.length; i += 1){

            if (cards[i].parentElement.parentElement.classList.value=='flip__card') {lastCardCheck=false};
            }
            if (lastCardCheck==true) {lastCard=true;};
            
            if (cardTwo !== -1) {

                if (document.querySelector('.flip__cards :nth-child('+(cardOne+1)+') :nth-child(1) :nth-child(2)  :nth-child(1)').src!==document.querySelector('.flip__cards :nth-child('+(cardTwo+1)+') :nth-child(1) :nth-child(2)  :nth-child(1)').src) {

                setTimeout(turnDownCards,1000,cardOne,cardTwo);
                }
                cardOne = -1;
                cardTwo = -1;
                lastCardCheck=false;

            }

        });
    
}
}
turnUpCards();

function turnDownCards (param1,param2) {
    const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n) :nth-child(1) :nth-child(2) '));

    cards[param1].parentElement.parentElement.classList.remove('is-flipped'),
    cards[param2].parentElement.parentElement.classList.remove('is-flipped');
}


const padNumbers = (num) => {
    return num < 10 ? `0${num}` : num;
}

let stopperTime = 0;
let stopperIsRunning = false;
let gameCounter=setInterval( () => {
    if (!stopperIsRunning) {
        return;
    }

stopperTime++;
const seconds = padNumbers(stopperTime % 60);
const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
const time = `${[minutes, seconds].join(':')}`;

const stopperFace = document.querySelector('.counter');
stopperFace.textContent = time;
}, 1000)

const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n)'));

    for (let i = 0; i < cards.length; i += 1)
        cards[i].addEventListener('click', () => {
            if (lastCard == true) clearInterval(gameCounter);
            if (!stopperIsRunning) {
                stopperIsRunning = true;;
            }
});