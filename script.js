const result = document.getElementById("result");
const displayScore = document.getElementById("score");

const score = JSON.parse(localStorage.getItem('score')) || {
    playerScore: 0,
    computerScore: 0,
    draws: 0
};

let comp = undefined;
showScore();

function reset() {
    score.playerScore = 0;
    score.computerScore = 0;
    score.draws = 0;
    showScore();
    hidePick('', 'P');
    hidePick('', 'C');
    document.getElementById('player').style.display = 'block';
    document.getElementById('computer').style.display = 'block';
    result.innerHTML = 'Choose any one!';
}

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
    let pickC = computerPick();
    const currPick = document.getElementById(`${pickP}P`);
    const compPick = document.getElementById(`${pickC}C`);
    if(pickP === pickC) {
        result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. It's a Tie`;
        score.draws++;
    } else if(pickP === 'rock') {
        if(pickC === 'scissor') {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Win!`;
            score.playerScore++;
        } else {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Lose!`;
            score.computerScore++;
        }
    } else if (pickP === 'paper') {
        if(pickC === 'rock') {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Win!`;
            score.playerScore++;
        } else {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Lose!`;
            score.computerScore++;
        }
    } else {
        if(pickC === 'paper') {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Win!`;
            score.playerScore++;
        } else {
            result.innerHTML = `You chose ${pickP} and Computer chose ${pickC}. You Lose!`;
            score.computerScore++;
        }
    }
    document.getElementById('player').style.display = 'none';
    document.getElementById('computer').style.display = 'none';
    showScore();
    currPick.style.display = 'block';
    compPick.style.display = 'block';

    localStorage.setItem('score', JSON.stringify(score));

    return pickC;
}

function showScore() {
    displayScore.innerHTML = `Score: ${score.playerScore} - ${score.computerScore} (${score.draws})`;
}