const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25}
]

//map
//Utilizará outro array como referência
//Cria outro array com os elementos de apenas uma parte do array que foi utilizado como referência

const mapItems = items.map((item)=>{
    return item.name
})

console.log(mapItems)

const mapItems2 = items.map((item)=>{
    return item.price
})

console.log(mapItems2)