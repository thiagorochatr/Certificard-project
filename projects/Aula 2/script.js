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