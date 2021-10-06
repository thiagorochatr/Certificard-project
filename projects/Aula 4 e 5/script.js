var listaFilmes = [
    "https://cdn.fstatic.com/media/movies/covers/2021/04/MMV25078142F3EE931C7643E14A80BDB7FFF_gVR2gnP.jpeg",
    "https://br.web.img2.acsta.net/pictures/21/04/07/21/13/5564614.jpg",
    "https://br.web.img3.acsta.net/pictures/20/10/09/10/12/0923276.jpg"
];

var elementoLista = document.getElementById("lista-de-filmes");

for (var i = 0; i < listaFilmes.length; i++) {
    elementoLista.innerHTML += `<img src= ${listaFilmes[i]}>`;
}

function AdicionarFilme() {
    var newLink = document.getElementById("new-film").value;

    if (newLink.endsWith(".jpg")) {
        listarFilmesNaTela(newLink);
    } else if (newLink.endsWith(".jpeg")) {
        listarFilmesNaTela(newLink);
    } else if (newLink.endsWith(".png")) {
        listarFilmesNaTela(newLink);
    } else {
        alert("Endereço da imagem inválida")
    }

    document.getElementById("new-film").value = "";
}

function listarFilmesNaTela(newLink) {
    for (var x = 0; x < listaFilmes.length; x++) {
        if (newLink == listaFilmes[x]) {
            alert("Esse filme já foi adicionado")
            newLink = "";
        }
    }

    listaFilmes.push(newLink);
    elementoLista.innerHTML += "<img src=" + newLink + ">";
}


// PARA CONTINUAR... FAZER OS DESAFIOS: 
//                                     Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
//                                     Criar um botão para remover um filme na tela (pelo nome do filme)
// Usar esse projeto para ajudar: https://codepen.io/pedrocarioca21/pen/ZEyrOxx?editors=0011
//                                https://codepen.io/pedrocarioca21/full/ZEyrOxx
//                                https://codepen.io/altairpa/pen/xxrYVeY
//                                https://codepen.io/razz-code/pen/GREQOWK?editors=0010
//                                https://codepen.io/natcardozo/full/qBjxqJx