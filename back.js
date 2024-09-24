let inventario = [
{ nome: 'brinco', preco: 50., emEstoque: true },
{ nome: 'colar', preco: 80, emEstoque: false },
{ nome: 'pulseiral', preco: 60, emEstoque: true },
{ nome: 'bracelete', preco: 70, emEstoque: true },
{ nome: 'aliança', preco: 150., emEstoque: true },
{ nome: 'anel', preco: 60, emEstoque: false },
{ nome: 'argola', preco: 30, emEstoque: true },
{ nome: 'caneleira', preco: 80, emEstoque: false },
{ nome: 'berloque', preco: 60, emEstoque: true },
{ nome: 'relogio', preco: 200, emEstoque: true },
{ nome: 'gargantilha', preco: 50., emEstoque: true },
{ nome: 'choker', preco: 80, emEstoque: false },
{ nome: 'piercing', preco: 50, emEstoque: true },
{ nome: 'tiara', preco: 30, emEstoque: true },
{ nome: 'pingente', preco: 30, emEstoque: true }
]

for (let i = 0; i < inventario.length; i++) {
if (inventario[i].emEstoque) {
console.log(inventario[i].nome + ' está em estoque.');
}
}
let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);