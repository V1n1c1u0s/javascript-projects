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
//Cria outro array com todos os elementos que cumprirem com a condição que você establece

const filteredItems = items.filter((item)=>{
    return item.price <= 100
})

console.log(filteredItems)

const filteredItems2 = items.filter((item)=>{
    return item.price >= 100
})

console.log(filteredItems2)