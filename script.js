// Definido as variáves das jogadas

const jogadaComputador = document.getElementById("computador")
const jogadaJogador = document.getElementById("jogador")
const resultado = document.getElementById("resultado")

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
}

//Resultado

function jogadaResultado() {
    
    computadorAleatorio()

    if (jogadaJogador === jogadaComputador){
        resultado.innerHTML = "Empate"
    }
    if (jogadaJogador === "Pedra" && jogadaComputador === "Papel"){
        resultado.innerHTML = "Voce Perdeu!"
    }
    if (jogadaJogador === "Pedra" && jogadaComputador === "Tesoura"){
        resultado.innerHTML = "Voce Venceu!"
    }
    if (jogadaJogador === "Papel" && jogadaComputador === "Tesoura"){
        resultado.innerHTML = "Voce Perdeu!"
    }
    if (jogadaJogador === "Papel" && jogadaComputador === "Pedra"){
        resultado.innerHTML = "Voce Venceu!"
    }
    if (jogadaJogador === "Tesoura" && jogadaComputador === "Pedra"){
        resultado.innerHTML = "Voce perdeu!"
    }
    if (jogadaJogador === "Tesoura" && jogadaComputador === "Papel"){
        resultado.innerHTML = "Voce Venceu!"
    }
    console.log("Computador: " + jogadaComputador)
    console.log("Jogador: " + jogadaJogador)
    console.log("Resultado: " + resultado)
}


