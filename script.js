// Definido as variáves das jogadas

const jogadaComputador = document.getElementById("computador")
const jogadaJogador = document.getElementById("jogador")

let resultado = document.getElementById("resultado")

let jj
let jc

//Função para computador jogar aleatório

function computadorAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1

    if (numeroAleatorio == 1) {
        jogadaComputador.innerHTML = "<img class='bg-button' src='pedra.png'></img>"
        jc = "Pedra"
    }
    if (numeroAleatorio == 2) {
        jogadaComputador.innerHTML = "<img class='bg-button' src='papel.png'></img>"
        jc = "Papel"
    }
    if (numeroAleatorio == 3) {
        jogadaComputador.innerHTML = "<img class='bg-button' src='tesoura.png'></img>"
        jc = "Tesoura"
    }
    console.log(numeroAleatorio)
}

//Funções dos botões para jogador

function jogadaPedra() {
    jj = "Pedra"
    jogadaJogador.innerHTML = "<img class='bg-button' src='pedra.png'></img>"
    computadorAleatorio()

    if (jc == "Papel") {
        resultado.innerHTML = "Voce Perdeu!"
    }
    else if (jc == "Tesoura") {
        resultado.innerHTML = "Voce Venceu!"
    }
    else {
        resultado.innerHTML = "Empate"
    }
    console.log("Jogador: " + jj)
    console.log("Computador: " + jc)
    console.log("Resultado: " + resultado.innerHTML)
}

function jogadaPapel() {
    jj = "Papel"
    jogadaJogador.innerHTML = "<img class='bg-button' src='papel.png'></img>"
    computadorAleatorio()

    if (jc == "Tesoura") {
        resultado.innerHTML = "Voce Perdeu!"
    }
    else if (jc == "Pedra") {
        resultado.innerHTML = "Voce Venceu!"
    }
    else {
        resultado.innerHTML = "Empate"
    }
    console.log("Jogador: " + jj)
    console.log("Computador: " + jc)
    console.log("Resultado: " + resultado.innerHTML)
}

function jogadaTesoura() {
    jj = "Tesoura"
    jogadaJogador.innerHTML = "<img class='bg-button' src='tesoura.png'></img>"
    computadorAleatorio()

    if (jc == "Pedra") {
        resultado.innerHTML = "Voce perdeu!"
    }
    else if (jc == "Papel") {
        resultado.innerHTML = "Voce Venceu!"
    }
    else {
        resultado.innerHTML = "Empate"
    }
    console.log("Jogador: " + jj)
    console.log("Computador: " + jc)
    console.log("Resultado: " + resultado.innerHTML)
}