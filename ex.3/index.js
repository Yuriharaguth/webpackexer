
const produto = {
    nome: 'caneta bic',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'caneta vagabunda'

console.log(produto.nome)
console.log(novoProduto.nome)