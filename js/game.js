'use strict';
let firstCard = false;
let lastCard = false;
let cardOne = -1;
let cardTwo = -1;
let cardLayout ='';



function randomBg() {
    const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n)'));
    cards.forEach((card) => { card.style.order = Math.floor(Math.random() * 10) });
}
randomBg();


// function cardsFaceDown() {
//     const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n)'));

//     for (let i = 0; i < cards.length; i += 1){
//         cards[i].addEventListener('click', () => {
//         cards[i].classList.add('is-flipped')
//         })
//     }
// }
// cardsFaceDown();

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

            for (let i = 0; i < cards.length; i += 1){

            //console.log(cards[i].parentElement.parentElement.classList.value);

            if (cards[i].parentElement.parentElement.classList.value=='flip__card is-flipped' && lastCard==false) {lastCard=false};
            }
            
            if (cardTwo !== -1) {

                if (document.querySelector('.flip__cards :nth-child('+(cardOne+1)+') :nth-child(1) :nth-child(2)  :nth-child(1)').src!==document.querySelector('.flip__cards :nth-child('+(cardTwo+1)+') :nth-child(1) :nth-child(2)  :nth-child(1)').src) {

                setTimeout(turnDownCards,1000,cardOne,cardTwo);
                }
                cardOne = -1;
                cardTwo = -1;

            }

        });
    
}
}
turnUpCards();

function turnDownCards (param1,param2) {
    const cards = Array.from(document.querySelectorAll('.flip__cards :nth-child(n) :nth-child(1) :nth-child(2) '));

    console.log("lefordít",param1, param2);

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
    // if (stopperIsRunning) {
    //     stopperIsRunning = false;
    //     stopperTime = 0;
    // } else {
    //     stopperIsRunning = true;
    // }
});