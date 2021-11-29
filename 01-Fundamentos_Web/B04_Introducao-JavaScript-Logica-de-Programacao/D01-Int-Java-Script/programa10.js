const custoProduto = 12
const vendaProduto = 20
let lucroBruto = vendaProduto-custoProduto
let imposto = (custoProduto*0,2)

if (custoProduto<0 || vendaProduto<0){
    console.log("Entre com valores maior que 0")
}else{
    console.log("Lucro R$: " + (vendaProduto-(custoProduto+imposto))
}