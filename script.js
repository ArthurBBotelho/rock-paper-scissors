// Definido as variáves das jogadas

const jogadaComputador = document.getElementById("computador")
const jogadaJogador = document.getElementById("jogador")
const resultadoTela = document.getElementById("resultado")

let resultado

const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")

//Funções dos botões para jogador

function jogadaPedra() {
    jogadaJogador.innerHTML = "Pedra"
}

function jogadaPapel() {
    jogadaJogador.innerHTML = "Papel"
}

function jogadaTesoura() {
    jogadaJogador.innerHTML = "Tesoura"
}

//Função para computador jogar aleatório

function computadorAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1

    if (numeroAleatorio === 1){
    jogadaComputador.innerHTML = "Pedra"
    }
    if (numeroAleatorio === 2){
    jogadaComputador.innerHTML  = "Papel"
    }
    if (numeroAleatorio === 3){
    jogadaComputador.innerHTML = "Tesoura"
    }
    console.log(numeroAleatorio)
    console.log("Computador: " + jogadaComputador.innerHTML)
}

//Resultado

function jogadaResultado() {
    
    computadorAleatorio()

    if (jogadaJogador == "Pedra" && jogadaComputador == "Papel"){
        resultado = "Voce Perdeu!"
    }
    else if (jogadaJogador == "Pedra" && jogadaComputador == "Tesoura"){
        resultado = "Voce Venceu!"
    }
    else if (jogadaJogador == "Papel" && jogadaComputador == "Tesoura"){
        resultado = "Voce Perdeu!"
    }
    else if (jogadaJogador == "Papel" && jogadaComputador == "Pedra"){
        resultado = "Voce Venceu!"
    }
    else if (jogadaJogador == "Tesoura" && jogadaComputador == "Pedra"){
        resultado = "Voce perdeu!"
    }
    else if (jogadaJogador == "Tesoura" && jogadaComputador == "Papel"){
        resultado = "Voce Venceu!"
    }
    else {
        resultado = "Empate"
    }
 
    console.log("Jogador: " + jogadaJogador.innerHTML)
    console.log("Resultado: " + resultado.innerHTML)
}


