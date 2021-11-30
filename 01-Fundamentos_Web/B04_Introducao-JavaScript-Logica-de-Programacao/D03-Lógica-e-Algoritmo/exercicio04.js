// 4- Depois, faça uma pirâmide com n asteriscos de base:

let numero = 5
let centro = (numero-1)/2

for (let indice=1; indice<=numero; indice+=2){
    console.log(" ".repeat(centro) + "*".repeat(indice) + " ".repeat(centro))
    centro = centro-1
}