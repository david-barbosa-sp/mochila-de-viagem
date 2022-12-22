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

    const existe = itens.find(elemento => elemento.nome === nome.value);
    
    if(existe){
        itemAtual.id = existe.id;
        atualizaItem(itemAtual);
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    }
    else{
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0;
        criarElemento(itemAtual);
        itens.push(itemAtual)
    }
    
    localStorage.setItem('itens', JSON.stringify(itens));
    
    
    nome.value = '';
    quantidade.value = '';
}
)

function criarElemento(item){
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id;

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;
    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);    
}

function atualizaItem(item){
    const id = `[data-id="${item.id}"]`;
    const itemAntigo = document.querySelector(id);
    itemAntigo.innerHTML = item.quantidade;
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button");
    elementoBotao.innerHTML = "X";
    elementoBotao.addEventListener('click', (e)=>{
        const itemLista = e.target.parentNode;
        deletaElemento(itemLista, id);
    })

    return elementoBotao;
}

function deletaElemento(item, id){
    item.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    localStorage.setItem('itens', JSON.stringify(itens));
}