// Desafio normal

// var notaPrimeiroBimestre = 9
// var notaSegundoBimestre = 7
// var notaTerceiroBimestre = 4
// var notaQuartoBimestre = 2

// var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

// var notaArredondada = notaFinal.toFixed(1)

// alert(notaArredondada)


// Desafio: conta inteira dentro do alert()

// var notaPrimeiroBimestre = 9
// var notaSegundoBimestre = 7
// var notaTerceiroBimestre = 4
// var notaQuartoBimestre = 2

// alert(((notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre)/4).toFixed(1))


// Desafio: avançado

var notaPriBi = parseInt(prompt("Digite a sua nota no primeiro bimestre"))
var notaSegBi = parseInt(prompt("Digite a sua nota no segundo bimestre"))
var notaTerBi = parseInt(prompt("Digite a sua nota no terceiro bimestre"))
var notaQuaBi = parseInt(prompt("Digite a sua nota no quarto bimestre"))

var notaFinal = (notaPriBi+notaSegBi+notaTerBi+notaQuaBi)/4
var notaArredondada = notaFinal.toFixed(1)

if (notaArredondada >= 6) {
    alert("Parabéns, você passou de ano! Sua média foi " + notaArredondada)
} else {
    alert("Você não passou de ano :( sua média foi " + notaArredondada)
}