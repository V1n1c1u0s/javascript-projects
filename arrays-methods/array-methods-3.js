const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25}
]

//filter
//Utilizará outro array como referência
//Verifica se um valor/valores existe e cria um array com esse(s) valor/valores  
//find -> Você pergunta se existe tal valor em um array e ele criará outro array caso esse valor exista.

const foundItems = items.find((item)=>{
    return item.name === 'Book'
})

console.log(foundItems)

const foundItems2 = items.find((item)=>{
    return item.price === 1000
})

console.log(foundItems2)