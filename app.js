let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
  let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto,'Brazilian Portuguese Female',
 {rate: 1.2});
}
 
 function exibirMensagemInicial() {
  exibirTextoNatela('h1', 'jogo do número secreto');
  exibirTextoNatela('p', 'Escolha um numero entre 1 e 10');
}
 exibirMensagemInicial();
 
 function verificarChute() {
  
 let chute = document.querySelector('input').value;
    
  if ( chute == numeroSecreto) {
     exibirTextoNatela('h1','Acertou!');
     //sempre que vc for unsar (${}) em um texto utilize crase `` para funcionar.
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativas = `Voçe desobriu o número secreto com
     ${tentativas} ${palavraTentativa}!`;
     exibirTextoNatela('p', mensagemTentativas);
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
     if (chute > numeroSecreto) {
           exibirTextoNatela ('p', 'O número secreto é menor');
      } else { 
            exibirTextoNatela('p', 'O número secreto é maior');
      }  
      tentativas ++;  
      limparCampo();
   } 
}

function gerarNumeroAleatorio() { 
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNalista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  // includes serve para verificar se o elemento esta na lista.
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();

  } else {
    //push serve para adicionar item ao final da lista 
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log (listaDeNumerosSorteados)
     return numeroEscolhido;
  }

  }


function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarjogo() {
  numeroSecreto = gerarNumeroAleatorio
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
  // (nessa frase acima serve para cada vez que reiniciarmos nosso jogo ele desabilite o botão (novo jogo
  
}

