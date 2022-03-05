{
    {
        {
            {
                var sera = 'Será???' // mesmo com os blocos, fica visível.
            } 
        } 
    } 
}
console.log(sera)

function teste () {
    var local = 123
    console.log(local)
}
// var só tem dois escopos possíveis, ou é nível global (visível na aplicação inteira), ou se cria uma var no escopo de funçao
teste()
console.log(local)
// Dará erro pq quando uma váriavel é definida dentro de uma função, o escopo dessa var é dentro da função, apenas.