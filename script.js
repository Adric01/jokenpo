var jogadorNome;
var jogadorEscolha = 0;
var jogadorPontos = 0;

var computadorEscolha = 0;
var computadorPontos = 0;

function mensagem(texto) {
  document.getElementById("mensagem").innerHTML = texto
}

function definirNome(nome) {
 document.getElementById("jogador-nome").innerHTML = nome 
}

//sorteando o numero para o computador 
function sortear(min, max) {
   return Math.floor(Math.random() *  (max - min +1)) + min;
} 

function calcularEscolha(jog, comp){
  if(jog == 1 && comp == 1) {
    return 0;
  }
  else if (jog == 1 && comp == 2) {
    return 2;
  }
  else if (jog == 1 && comp == 3) {
    return 1;
  }
  else if (jog == 2 && comp == 1) {
    return 1;
  }
  else if (jog == 2 && comp == 2) {
    return 0;
  }
  else if (jog == 2 && comp == 3) {
    return 2;
  }
  else if (jog == 3 && comp == 1) {
    return 2;
  }
  else if (jog == 3 && comp == 2) {
    return 1;
  }
  else if (jog == 3 && comp == 3) {
    return 3;
  }
}

function somarPontosJogador () {
  jogadorPontos ++;
  document.getElementById("jogador-pontos").innerHTML = jogadorPontos;
}

function somarPontosComputador () {
  computadorPontos ++;
  document.getElementById("computador-pontos").innerHTML = computadorPontos;
}

function selecionar (tipo, escolha) {
document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function deselecionar (tipo, escolha){
  document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

// Escolhendo a jogada do usario 
function jogar(escolha) {
  jogadorEscolha = escolha;
  selecionar('jogador', jogadorEscolha);

 //sorteando o numero do computador 
  computadorEscolha = sortear(1, 3);
  selecionar('computador', computadorEscolha);


  var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

  if (ganhador == 1) {
    mensagem("Ponto para " + jogadorNome);
    somarPontosJogador ();
  }
  else if (ganhador == 2) {
    mensagem("Ponto para o computador");
    somarPontosComputador ();
  }
  else if (ganhador == 0) {
    mensagem("Empate");
  }

    setTimeout (function () {
      deselecionar('jogador', jogadorEscolha);
      deselecionar('computador', computadorEscolha);

      mensagem(jogadorNome + " escolha uma opção acima...");
    }, 2500);

}
   
document.getElementById("jogador-escolha-1").onclick = function () { jogar(1) };
document.getElementById("jogador-escolha-2").onclick = function () { jogar(2) };
document.getElementById("jogador-escolha-3").onclick = function () { jogar(3) };




jogadorNome = prompt ('Qual é o seu nome ?');

definirNome(jogadorNome);

mensagem ("Bem vindo, " + jogadorNome + " está preparado ? Escolha uma opção acima...");