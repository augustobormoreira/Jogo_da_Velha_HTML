var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
    
    if( vencedor!==null) return;

    let quadrado = document.getElementById(id);
    if(previneMudancaSeJaSelecionado(quadrado)) return;

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    trocaJogadorDepoisDeMovimento();
    
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){

    if(verificaVencedor(0, 1, 2)) return true;

    if(verificaVencedor(3, 4, 5)) return true;
   
    if(verificaVencedor(6, 7, 8)) return true;
    
    if(verificaVencedor(0, 3, 6)) return true;
    
    if(verificaVencedor(1, 4, 7)) return true;
    
    if(verificaVencedor(2, 5, 8)) return true;

    if(verificaVencedor(0, 4, 8)) return true;

    if(verificaVencedor(2, 4, 6)) return true;

    return false;

}

function verificaVencedor(num1, num2, num3){
    if(checaSequencia(quadrados[num1], quadrados[num2], quadrados[num3])){
        mudaCorQuadrado(quadrados[num1], quadrados[num2], quadrados[num3]);
        mudarVencedor(quadrados[num1]);
        return true;
    }
    return false;
}

function mudarVencedor(quadradoVencedor){
    vencedor = quadradoVencedor.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = "#0f0";
    quadrado2.style.background = "#0f0";
    quadrado3.style.background = "#0f0";
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var ehIgual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado3.innerHTML === quadrado2.innerHTML){
        ehIgual = true;
    }

    return ehIgual;
}

function previneMudancaSeJaSelecionado(quadrado){
    if(quadrado.innerHTML!== '-'){
        return true;
    }

    return false;
}

function trocaJogadorDepoisDeMovimento(){
    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }

    mudarJogador(jogador);
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for(let item of quadrados){
        limparQuadrado(item);
    }

    mudarJogador('X');

}

function limparQuadrado(item){
    item.style.background = '#eee';
    item.style.color = '#eee';
    item.innerHTML = '-';

}