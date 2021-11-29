let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let imprimir of numbers){
    console.log(imprimir);
}

// 2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma =0
for (let i=0; i<numbers.length; i+=1){
    soma= soma + numbers[i];
}
console.log("A soma dos valores do array é: " + soma);

// 3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = soma/numbers.length
console.log("A média aritmética do array é: " + mediaAritmetica)

// 4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritmetica>20){
    console.log("valor maior que 20")
}else{
    console.log("valor menor ou igual a 20")
}

// 5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];
for (let i = 1; i<numbers.length; i+=1)
    if (numbers[i]>maiorNumero){
        maiorNumero= numbers[i]
    }
console.log("O maior número do Array é: " + maiorNumero)

// 6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar=[];
for (let i =0; i<numbers.length; i+=1){
    if ((numbers[1])% 2 === 1){
        impar.push(numbers[i])
    }
}
console.log(impar)