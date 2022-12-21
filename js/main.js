const form = document.querySelector('.adicionar');
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];
    
    criarElemento(nome.value, quantidade.value);
    nome.value = '';
    quantidade.value = '';
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

    const itemAtual = {'nome': nome, 'quantidade': quantidade}
    itens.push(itemAtual)
    localStorage.setItem('item', JSON.stringify(itens));
    
}