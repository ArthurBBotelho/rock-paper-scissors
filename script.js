// Definido as variáves das jogadas

const jogadaComputador = document.getElementById("computador")
const jogadaJogador = document.getElementById("jogador")

let resultado = document.getElementById("resultado")

//Função para computador jogar aleatório

function computadorAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1

    if (numeroAleatorio == 1) {
        jogadaComputador.innerHTML = "Pedra"
    }
    if (numeroAleatorio == 2) {
        jogadaComputador.innerHTML = "Papel"
    }
    if (numeroAleatorio == 3) {
        jogadaComputador.innerHTML = "Tesoura"
    }
    console.log(numeroAleatorio)
}

//Funções dos botões para jogador

function jogadaPedra() {
    jogadaJogador.innerHTML = "Pedra"
    computadorAleatorio()

    if (jogadaComputador.innerHTML == "Papel") {
        resultado.innerHTML = "Voce Perdeu!"
    }
    else if (jogadaComputador.innerHTML == "Tesoura") {
        resultado.innerHTML = "Voce Venceu!"
    }
    else {
        resultado.innerHTML = "Empate"
    }
    console.log("Jogador: " + jogadaJogador.innerHTML)
    console.log("Computador: " + jogadaComputador.innerHTML)
    console.log("Resultado: " + resultado.innerHTML)
}

function jogadaPapel() {
    jogadaJogador.innerHTML = "Papel"
    computadorAleatorio()

    if (jogadaComputador.innerHTML == "Tesoura") {
        resultado.innerHTML = "Voce Perdeu!"
    }
    else if (jogadaComputador.innerHTML == "Pedra") {
        resultado.innerHTML = "Voce Venceu!"
    }
    else {
        resultado.innerHTML = "Empate"
    }
    console.log("Jogador: " + jogadaJogador.innerHTML)
    console.log("Computador: " + jogadaComputador.innerHTML)
    console.log("Resultado: " + resultado.innerHTML)
}

function jogadaTesoura() {
    jogadaJogador.innerHTML = "Tesoura"
    computadorAleatorio()

    if (jogadaComputador.innerHTML == "Pedra") {
        resultado.innerHTML = "Voce perdeu!"
    }
    else if (jogadaComputador.innerHTML == "Papel") {
        resultado.innerHTML = "Voce Venceu!"
    }
    else {
        resultado.innerHTML = "Empate"
    }
    console.log("Jogador: " + jogadaJogador.innerHTML)
    console.log("Computador: " + jogadaComputador.innerHTML)
    console.log("Resultado: " + resultado.innerHTML)
}