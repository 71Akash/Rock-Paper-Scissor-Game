const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');

//rules
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modelBtn = document.getElementById('model');


let choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        userChoice = button.getAttribute('data-choice');
        main.style.display = 'none';
        selection.style.display = 'flex';
        checkWinner();
    });
});

reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';

});

openBtn.addEventListener('click', () => {
    modelBtn.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modelBtn.style.display = 'none';

});

function checkWinner(){
    const computerChoice = pickRandomChoice();

    updateSelection(user_select,userChoice);
    updateSelection(computer_select,computerChoice);

    if(userChoice === computerChoice){
        //draw
        updateScore(0);
        win.innerText = 'It\'s a Draw';
    }
    else if(userChoice === 'paper' && computerChoice === 'rock' 
    || userChoice === 'rock' && computerChoice === 'scissors' 
    || userChoice === 'scissors' && computerChoice === 'paper'){
        updateScore(1);
        win.innerText = 'You Won';
    }
    else{
        updateScore(-1);
        win.innerText = 'You Lost';
    }
}

function updateScore(value){
    score += value;
    scoreEl.innerText = score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl,choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    let img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}
