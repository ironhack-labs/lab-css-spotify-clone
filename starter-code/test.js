let shoes = [{price: 1200, color: "blue", inStock: 200 }, {price: 10, color: "black", inStock: 3000 }]

let mapFunction = function(shoe) { return shoe.price * shoe.inStock }

console.log(shoes.map(mapFunction))
