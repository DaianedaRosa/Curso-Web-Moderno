const escola = "Cod3r"

console.log(escola.charAt(4)) // índice (pegar um determinado caractere na string)
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // pegar o código da caractere através da unicode
console.log(escola.indexOf('3')) // pegar apartir de 1 caractere pegar o índice dele, que faz parte da string

console.log(escola.substring(1)) // passando índice ínicial e o final
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // uma string concatenando com uma variável 
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) 
