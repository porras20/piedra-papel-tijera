const ROCK = 'rock';
const PAPER = 'paper';
const SCISSOR = 'scissors';
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissor = document.getElementById('scissor');
const template = document.getElementById('template-result').content;
const flex = document.querySelector('.resultado');

const tie = 'Empate!';
const win = 'Ganaste!';
const lost = 'Perdiste!';
btnRock.addEventListener('click', () => {
    play(ROCK);
});

btnPaper.addEventListener('click', () => {
    play(PAPER);
});

btnScissor.addEventListener('click', () => {
    play(SCISSOR);
});

function play(userOption){
    let opciones = ['rock','paper','scissors'];
    const machineOption = opciones[Math.floor(Math.random() * opciones.length)];
    const logica = calcResult( userOption, machineOption);

    switch (logica) {
        case tie:
            result(userOption, machineOption, logica);
            break;
        case lost:
            result(userOption, machineOption, logica);
            break;
        case win:
            result(userOption, machineOption, logica);
        break;
        default:
            break;
    }
}

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return tie;
    }else if(userOption === ROCK){
        if(machineOption === PAPER) return lost
        if(machineOption === SCISSOR) return win;
    }else if(userOption === PAPER){
        if(machineOption === ROCK) return win;
        if(machineOption === SCISSOR) return lost;
    }
    else if(userOption === SCISSOR){
        if(machineOption === PAPER) return win;
        if(machineOption === ROCK) return lost;
    }
}

function result(user, machine, text) {
    limpiarHTML();
    const spinner = document.querySelector('#cargador');
    spinner.classList.add('spinner');
    setTimeout(() => {
        spinner.classList.remove('spinner')
        const clone = template.cloneNode(true);
        const fragment = document.createDocumentFragment();
        clone.querySelector('.img-result-user').setAttribute('src', `/img/${user}.svg`);
        clone.querySelector('.img-result-machine').setAttribute('src', `/img/${machine}.svg`);
        clone.querySelector('.text').textContent = text;
        fragment.appendChild(clone);
        flex.appendChild(fragment);
    }, 1000);
}

function limpiarHTML(){
    const matches = document.querySelectorAll("div.container-result");
    if (matches.length > 0) {
        const containerResult = document.querySelector('.container-result');
        flex.removeChild(containerResult);
    }
}