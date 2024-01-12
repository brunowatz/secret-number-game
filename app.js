//let listaDeNumerosSorteados = [];
//let NumeroLimite ;
let numeroSecreto = gerarNumeroAleatorio();  //identifica a variavel 
let tentativas = 1 ;


function exibirTextoNaTela(tag, texto) {     //função para exibir texto na tela TAG= h1, p etc.... TEXTO= o que eu escrevo
    let campo = document.querySelector(tag);  // seleciona a tag que quero exibir 
    campo.innerHTML = texto; 
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}) ;                
}
 
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');        //linhas 9, 10 exibe na tela o que eu quero que apareça 
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial()

function verificarChute() {  
    let chute = document.querySelector('input').value;
    //console.log (chute==numeroSecreto); //aparece no console se foi clicado a palavra verificar 
    if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Acertou!');
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



function gerarNumeroAleatorio() {          //função para gerar o numero aleatorio 
    let NumeroEscolhido =  parseInt(Math.random() * 10 + 1);    //return usado quando é retornado o numero gerado
    //let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   // if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = [];
   // }
    // (listaDeNumerosSorteados.includes(numeroSecreto)) {
        return gerarNumeroAleatorio();
//} else 
    //listaDeNumerosSorteados.push(NumeroEscolhido);
    //return NumeroEscolhido; 
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