//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let numero = 5

for (let indice=1; indice<=numero; indice+=1){
    console.log("*".repeat(numero))
}