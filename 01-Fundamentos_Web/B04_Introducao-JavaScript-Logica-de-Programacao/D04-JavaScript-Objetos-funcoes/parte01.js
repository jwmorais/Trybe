let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida
console.log("Resposta da questão 1")
console.log("Bem-vinda, " + info["personagem"])

/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
*/
console.log("Resposta da questão 2")
info.recorrente = "sim"
console.log(info)

/* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
personagem
origem
nota
recorrente
*/
console.log("Resposta da questão 3")
for (let key in info){
    console.log(key)
}

/* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
*/
console.log("Resposta da questão 4")
for (let key in info){
    console.log(info[key])
}

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/
console.log("Resposta da questão 5")
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };
  let compRecorrencia = "";
  if (info.recorrente == info2.recorrente){
      compRecorrencia = "Ambos recorrentes"
  }
  console.log(info.personagem + " e " + info2.personagem);
  console.log(info.origem + " e " + info2.origem);
  console.log(info.nota + " e " + info2.nota)
  console.log(compRecorrencia)