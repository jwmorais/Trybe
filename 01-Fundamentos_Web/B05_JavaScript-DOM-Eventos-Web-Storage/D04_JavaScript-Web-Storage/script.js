let corBackgraund = ["black","white","darkgray","grey"];
let corTexto = ["rgb(29, 49, 49", "rgb(208, 208, 208)"];
let tamanhoFonte = 15;
let entrelinhas = 1

setPreferencias ()

// Aplica as cores de fundo que serão selecionadas
function setBackground(){
    for (let index=0; index<corBackgraund.length; index+=1){
        document.getElementsByClassName("cor-backgraund")[index].style.backgroundColor=corBackgraund[index];
    }
}
setBackground();

// Aplica as cores do texto que serão selecionadas
function setCorTexto(){
    for (let index=0; index<corTexto.length; index+=1){
        document.getElementsByClassName("cor-texto")[index].style.backgroundColor=corTexto[index];
    }
}
setCorTexto();

//Função altera cor do Background
function aplicaBackground(event){
    let elemento = event.target
    document.body.style.backgroundColor=elemento.style.backgroundColor;
    localStorage.setItem("corBackground",elemento.style.backgroundColor);
}
document.getElementById("corFundo").addEventListener("click",aplicaBackground);

//Função altera cor do texto
function aplicaCorTexto(event){
    let elemento = event.target
    document.body.style.color=elemento.style.backgroundColor;
    localStorage.setItem("corTexto", elemento.style.backgroundColor);
}
document.getElementById("corTexto").addEventListener("click",aplicaCorTexto);

//Função que altera tamanho da fonte
function setTamanhoFonte (event){
    let elemento = event.target;
        if (elemento.id == "txMaior"){
            tamanhoFonte+=2;
            document.body.style.fontSize=tamanhoFonte+"px";
        } else if (elemento.id == "txMenor"){
            tamanhoFonte-=2;
            document.body.style.fontSize=tamanhoFonte+"px";
        }
    localStorage.setItem("tamanhoFonte",tamanhoFonte);
}
document.getElementById("txMaior").addEventListener("click",setTamanhoFonte)
document.getElementById("txMenor").addEventListener("click",setTamanhoFonte)

//Função que altera espaçamento entrelinhas da fonte
function setEntrelinhasFonte (event){
    let elemento = event.target;
        if (elemento.id == "lnMaior"){
            entrelinhas+=0.1
            document.body.style.lineHeight=entrelinhas
        } else if (elemento.id == "lnMenor"){
            entrelinhas-=0.1
            document.body.style.lineHeight=entrelinhas
        }
    localStorage.setItem("entrelinhas", entrelinhas);
}
document.getElementById("lnMaior").addEventListener("click",setEntrelinhasFonte)
document.getElementById("lnMenor").addEventListener("click",setEntrelinhasFonte)

//Funções qua alteram familia da fonte
function setSerif (){
    document.body.style.fontFamily="serif"
    localStorage.setItem("fontFamily", "serif");
}
function setSansSerif (){
    document.body.style.fontFamily="sans-serif"
    localStorage.setItem("fontFamily", "sans-serif");
}
document.getElementById("serif").addEventListener("click",setSerif)
document.getElementById("sans-serif").addEventListener("click",setSansSerif)

//Função que verifica se existe preferências salvas e aplica
function setPreferencias (){
    if (localStorage.getItem("corBackground") !== null){
        document.body.style.backgroundColor=localStorage.getItem("corBackground");
    }
    if (localStorage.getItem("corTexto") !== null){
        document.body.style.color=localStorage.getItem("corTexto");
    }
    if (localStorage.getItem("tamanhoFonte") !== null){
        document.body.style.fontSize=localStorage.getItem("tamanhoFonte")+"px";
    }
    if (localStorage.getItem("entrelinhas") !== null){
        document.body.style.lineHeight=localStorage.getItem("entrelinhas");
    }
    if (localStorage.getItem("fontFamily") !== null){
        document.body.style.fontFamily=localStorage.getItem("fontFamily");
    }
}