const valores = [7.7, 8.9, 6.3, 9.2] // múltiplos valores
console.log(valores[0], valores[3])

valores[4] = 10 
console.log(valores)
console.log(valores.length) // quantos valores tem dentro de determinada array

valores.push({id: 3}, false, null, 'teste') // adiciona 
console.log(valores)

console.log(valores.pop()) // tira o último
delete valores[0]
console.log(valores)

console.log(typeof valores)

// [] representa um array