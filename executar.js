let produtos = require ("./produtos")

//função para filtrar os produtos e armazenar no carrinho
const carrinho = produtos.filter(produto => produto.preco >= 482 && produto.preco <= 1600 && produto.qualidade > 6 && produto.status === true)

//função para mostrar os produtos selecinados e seu total
function printInfoCarrinho(){
    console.log('Produtos no carrinho:\n');

    carrinho.forEach(produto=>{
        console.log(`Produto: ${produto.nome}`)
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}\n`)
    });
    console.log(`Total: RS ${carrinho.reduce((acum,produto)=>acum+produto.preco,0).toFixed(2)}\n`);
}

console.table(carrinho);
printInfoCarrinho();