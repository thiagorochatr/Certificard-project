// Desafio básico

// var numeroSecreto = parseInt(Math.random() * 11);

// function Chutar() {
    // var chute = parseInt(document.getElementById("valor").value);

    // if (chute == numeroSecreto) {
    //     document.getElementById("resultado").innerHTML = "Você acertou!"
    // } else if (chute > 10) {
    //     document.getElementById("resultado").innerHTML = "O número precisa ser entre 0 e 10"
    // } else if (chute > numeroSecreto) {
    //     document.getElementById("resultado").innerHTML = "Você errou. O número secreto é menor."
    // } else {
    //     document.getElementById("resultado").innerHTML = "Você errou. O número secreto é maior."
    // }
// }

// Desafio Avançado

var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    
    if (tentativas > 0) {
        if (chute == numeroSecreto) {
            document.getElementById("resultado").innerHTML = "Você acertou!";
            tentativas === 0;
        } else if (chute > 10) {
            document.getElementById("resultado").innerHTML = "O número precisa ser entre 0 e 10";
        } else if (chute > numeroSecreto) {
            document.getElementById("resultado").innerHTML = "Você errou. O número secreto é menor.";
            tentativas = tentativas - 1;
        } else {
            document.getElementById("resultado").innerHTML = "Você errou. O número secreto é maior.";
            tentativas = tentativas - 1;
        }
    }
    if (tentativas === 0) {
        document.getElementById("resultado").innerHTML = "Suas tentativas acabaram. O número secreto era " + numeroSecreto
    }
}

function Reiniciar() {
    var chute = document.getElementById("valor");
    
    chute.value = 0;
    document.getElementById("resultado").innerHTML = '.';
    tentativas = 3;
    numeroSecreto = parseInt(Math.random() * 11);
}