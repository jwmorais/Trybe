let pecaXadrez = "CaValo"

switch (pecaXadrez.toLowerCase()){
    case "rei":
        console.log("pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    case "rainha":
        console.log("move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "bispo":
        console.log("move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "cavalo":
        console.log("única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "torre":
        console.log("movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case "peão":
        console.log("movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    default:
        console.log("Peça inválida")
}