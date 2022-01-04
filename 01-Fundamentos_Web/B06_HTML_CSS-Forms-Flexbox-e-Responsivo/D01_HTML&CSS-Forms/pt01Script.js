// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function linkTrybe (event){
    event.preventDefault();
}
HREF_LINK.addEventListener("click",linkTrybe);

function checkbox (event){
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click",checkbox);

function texto (event){
    if (event.key !== "a"){
        event.preventDefault(); 
    }
}
INPUT_TEXT.addEventListener("keypress",texto);