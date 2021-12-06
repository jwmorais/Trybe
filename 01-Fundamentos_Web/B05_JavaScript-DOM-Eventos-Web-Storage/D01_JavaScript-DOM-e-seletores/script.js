document.getElementById("header-container").style.background = "green"
document.getElementsByClassName("emergency-tasks")[0].style.background = "red"
document.getElementsByClassName("no-emergency-tasks")[0].style.background = "blue"
let titulo = document.querySelectorAll("h3");
for (let tith in titulo){
    document.querySelectorAll("h3")[tith].style.background = "black"
}
document.getElementById("footer-container").style.color = "black"