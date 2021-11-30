/*

08 - Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------

*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
    // Desenvolva seu código nessa função

    let nomes=["Marina", "Silvia", "Iza"];
    let idades=[marinaAge, silviaAge, izaAge];
    let nomeMenorIdade = nomes[0];
    let menorIdade = idades[0];
    for (let i=0; i<idades.length; i+=1){
        if(menorIdade>idades[i]){
            menorIdade= idades[i];
            nomeMenorIdade= nomes[i];
        }
    }
            console.log((nomeMenorIdade) + " é a pessoa mais jovem e possui " + (menorIdade) + " anos de idade.")

}

console.log(findYoungerPerson(19, 15, 20))

  module.exports = findYoungerPerson;