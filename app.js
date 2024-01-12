let listaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();  //identifica a variavel 
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
 
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');        //linhas 9, 10 exibe na tela o que eu quero que apareça 
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial()

function verificarChute() {  
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Até que enfim acertou burrão!');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Parabéns! você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1','Errou!.');
            exibirTextoNaTela('p','O número secreto é menor.');
        } else {
            exibirTextoNaTela('h1','Errou!.');
            exibirTextoNaTela('p','O número secreto é maior.');
        } 
        tentativas ++;
        limparCampo();
    }
}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == NumeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}



function limparCampo() {
    chute = document.querySelector ('input'); 
    chute.value = ''; 
}



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 

}