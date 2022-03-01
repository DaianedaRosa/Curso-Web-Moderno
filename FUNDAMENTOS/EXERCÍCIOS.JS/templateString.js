const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
  Olá
  ${nome}!` //suporta as quebras de linha.
  console.log(concatenacao, template)

  // expressões...
  console.log(`1 + 1 = ${1+1}`)

  const up = texto => texto.toUpperCase() // deixa a string em letra maiúscula.
console.log(`Ei... ${up('cuidado')}!`)
