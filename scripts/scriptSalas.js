
const adasdas = window.document.querySelectorAll('.blocoSala')
adasdas.forEach((botao) => {
    botao.addEventListener('click', ()=> {
        if(botao.classList.contains('disponivel')) {
            botao.classList.remove('disponivel')
            botao.classList.add('ocupada')
        } else {
            botao.classList.remove('ocupada')
            botao.classList.add('disponivel')
        }
    });
});

/*
    contains é usado para verificar se um elemento HTML possui uma determinada classe. 
    Ele retorna true se a classe estiver presente no elemento e false caso contrário.
*/