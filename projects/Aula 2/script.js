// Desafio normal

// function Converter() {
//     var valorElemento = document.getElementById("valor");
//     var valor = valorElemento.value;
//     var valorEmDolarNumerico = parseFloat(valor);
//     var valorEmReal = valorEmDolarNumerico*5;
//     document.getElementById("valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal;
// }


// Desafio: código em menos linhas!

// function Converter() {
//     var valorEmDolarNumerico = parseFloat((document.getElementById("valor")).value);

//     var valorEmReal = valorEmDolarNumerico*5;

//     document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + valorEmReal;
// }

// Desafio Avançado!!!! COM BOTÃO, NÃO CONSEGUI FAZER

// function dolares() {
//     var valor = Number(document.querySelector('input').value.replace(',','.'));
//     var resultado = (valor*5.24).toFixed(2);

//     document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
// }

// function libras() {
//     var valor = Number(document.querySelector('input').value.replace(',','.'));
//     var resultado = (valor*7.23).toFixed(2);

//     document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
// }

// function euros() {
//     var valor = Number(document.querySelector('input').value.replace(',','.'));
//     var resultado = (valor*6.19).toFixed(2);

//     document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
// }

// function bitcoins() {
//     var valor = Number(document.querySelector('input').value.replace(',','.'));
//     var resultado = (valor/247733.62).toFixed(8);

//     document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
// }

// function Converter() {
//     dolar.onclick = () => {
//         dolares()
//     }

//     libra.onclick = () => {
//         libras()
//     }

//     euro.onclick = () => {
//         euros()
//     }
    
//     bitcoin.onclick = () => {
//         bitcoins()
//     }
// }



// Desafio Avançado!!!! SEM BOTÃO "CONVERTER"

function dolares() {
    var valor = Number(document.querySelector('input').value.replace(',','.'));
    var resultado = (valor*5.24).toFixed(2);
    
    document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
}

function libras() {
    var valor = Number(document.querySelector('input').value.replace(',','.'));
    var resultado = (valor*7.23).toFixed(2);
    
    document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
}

function euros() {
    var valor = Number(document.querySelector('input').value.replace(',','.'));
    var resultado = (valor*6.19).toFixed(2);
    
    document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
}

function bitcoins() {
    var valor = Number(document.querySelector('input').value.replace(',','.'));
    var resultado = (valor/247733.62).toFixed(8);
    
    document.getElementById("valorConvertido").innerHTML = "O valor em Real é R$" + resultado;
}