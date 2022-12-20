const form = document.querySelector('.adicionar');
const lista = document.getElementById('lista');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = e.target.elements['nome'].value;
    const quantidade = e.target.elements['quantidade'].value;
    
    criarElemento(nome, quantidade);
}
)

function criarElemento(nome, quantidade){
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}