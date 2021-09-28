// DESAFIO BÁSICO

// var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
// var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

// function calculaPontos(jogador) {
//     var pontos = (jogador.vitorias * 3) + jogador.empates;
//     return pontos;
// }

// rafa.pontos =calculaPontos(rafa);
// paulo.pontos = calculaPontos(paulo);

// var jogadores = [rafa, paulo];

// function exibeJogadoresNaTela(jogadores) {
//     var elemento = ""
//     for (var i = 0; i < jogadores.length; i++) {
//         elemento += "<tr><td>" + jogadores[i].nome + "</td>"
//         elemento += "<td>" + jogadores[i].vitorias + "</td>"
//         elemento += "<td>" + jogadores[i].empates + "</td>"
//         elemento += "<td>" + jogadores[i].derrotas + "</td>"
//         elemento += "<td>" + jogadores[i].pontos + "</td>"
//         elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
//         elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
//         elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
//         elemento += "</tr>"    
//     }

//     document.getElementById("tabelaJogadores").innerHTML = elemento
// }

// exibeJogadoresNaTela(jogadores);

// function adicionarVitoria(i) {
//     var jogador = jogadores[i]
//     jogador.vitorias++
//     jogador.pontos = calculaPontos(jogador)
//     exibeJogadoresNaTela(jogadores)
// }

// function adicionarEmpate(i) {
//     var jogador = jogadores[i]
//     jogador.empates++
//     jogador.pontos = calculaPontos(jogador)
//     exibeJogadoresNaTela(jogadores)
// }

// function adicionarDerrota(i) {
//     var jogador = jogadores[i]
//     jogador.derrotas++
//     exibeJogadoresNaTela(jogadores)
// }




// ======== DESAFIO AVANÇADO ===========

var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://avatars.githubusercontent.com/u/54322854?v=4"};
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg"};
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1616501197.jpg"};


function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rafa.pontos =calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "<br><img class='avatares' src=" + jogadores[i].avatar + "></td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"    
    }

    document.getElementById("tabelaJogadores").innerHTML = elemento
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}

function zerarPontos(i) {
    for (var i = 0; i <jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = 0
    }
    exibeJogadoresNaTela(jogadores)
}

function adicionarJogador() {
    var nomeNovoJogador = document.getElementById("nomeNovoJogador").value
    var avatarNovoJogador = document.getElementById("avatarNovoJogador").value
    jogadores.push({nome: nomeNovoJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: avatarNovoJogador})
    document.getElementById("nomeNovoJogador").value = ""
    document.getElementById("avatarNovoJogador").value = ""
    exibeJogadoresNaTela(jogadores)
}

function removerJogador() {
    var removerEsteJogador = document.getElementById("removerJogador").value;
    var posicaoRemover = jogadores.findIndex((i) => i.nome === removerEsteJogador);
    if (posicaoRemover >= 0) {
        jogadores.splice(posicaoRemover, 1)
        exibeJogadoresNaTela(jogadores)
        document.getElementById("removerJogador").value = "";
    } else if (posicaoRemover == -1) {
        document.getElementById("removerJogador").value = "";
    }
}

// ===DESAFIOS:
// espaço dos "pontos" do jogador que está ganhando fica brilhando (em destaque) ======= https://www.alura.com.br/artigos/alterando-css-com-javascript ========== https://cursos.alura.com.br/forum/topico-alterar-cor-de-conteudo-de-acordo-com-valores-na-tabela-51585 
// Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo)

// ===DESAFIOS FEITOS:
// Criar um botão para zerar todos os pontos
// Adicionar a imagem de cada jogador
// Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados
// Botão para excluir jogador

// ===Projetos para pegar ideias:
//                  https://codepen.io/rivnatzille/pen/GREdoGj?editors=0010
//                  https://codepen.io/guilpas/pen/jOwxyqO?editors=0010
//                  https://codepen.io/lfernandogcruz/pen/PojeYJe?editors=0010
// 
// 

// FAZER MELHORIAS 
// colocar uma condição de só adicionar um jogador caso tenha nome
// proibir adicionar dois jogadores com o mesmo nome
// fazer um if else na parte de "adicionar avatar". Caso a pessoa não coloque uma foto válida (terminando com jpg, jpeg, png, etc), adicionar uma foto transparente e pequena (para não ficar com aquele símbolo feio sem foto)
// Melhorar o design da página