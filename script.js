const result = document.getElementById("result");
const displayScore = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;
let comp = undefined;

displayScore.innerText += ' ' + playerScore + ' - ' + computerScore;
result.innerHTML = 'Choose any one!';

function computerPick() {
    let num = Math.random();

    if(num >=0 && num < 1/3) {
        return 'rock';
    } else if(num >= 1/3 && num < 2/3) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function hidePick(pickP, user) {
    const picks = ['rock', 'paper', 'scissor'];
    let pick;
    for (let i=0; i<3; i++) {
        pick = picks[i];
        if(pick === pickP) {
            continue;
        }
        const pickHide = document.getElementById(`${pick}${user}`);
        pickHide.style.display = 'none';
    }
}

function playerPick(pickP) {
    const currPick = document.getElementById(`${pickP}P`);
    let pickC = computerPick();
    console.log(pickC);
    const compPick = document.getElementById(`${pickC}C`);
    if(pickP === pickC) {
        result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. It's a Tie`;
    } else if(pickP === 'rock') {
        if(pickC === 'scissor') {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Win!`;
            playerScore++;
        } else {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Lose!`;
            computerScore++;
        }
    } else if (pickP === 'paper') {
        if(pickC === 'rock') {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Win!`;
            playerScore++;
        } else {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Lose!`;
            computerScore++;
        }
    } else {
        if(pickC === 'paper') {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Win!`;
            playerScore++;
        } else {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Lose!`;
            computerScore++;
        }
    }
    showScore();
    currPick.style.display = 'block';
    compPick.style.display = 'block';
    return pickC;
}

function showScore() {
    displayScore.innerText = 'Score: ' + playerScore + ' - ' + computerScore;
}