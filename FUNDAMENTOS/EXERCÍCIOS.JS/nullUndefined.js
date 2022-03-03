let valor  // não iniciada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!!

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite
console.log(!!produto.preco)
// delete produto.preco // usa para tirar o atributo de um obj
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)