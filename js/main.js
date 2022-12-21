const form = document.querySelector('.adicionar');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento)=>{
    criarElemento(elemento);
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const itemAtual = {'nome': nome.value, 'quantidade': quantidade.value}
    itens.push(itemAtual)
    localStorage.setItem('itens', JSON.stringify(itens));
    
    criarElemento(itemAtual);
    nome.value = '';
    quantidade.value = '';
}
)

function criarElemento(item){
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);    
}