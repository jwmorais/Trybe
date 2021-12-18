function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Cria os dias do calendário e atribui as classes de sexta-feira e feriados;
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysFeriado = [24,25,31];
  const listaDia = document.getElementById("days");
  let contDay = 2;
  let corFeriado = 0;
  let sextou = 0;
  let sextas =[];
  let taskSelected = 0
  
  for (let index=0; index<dezDaysList.length; index+=1){
      const dia = dezDaysList[index];
      const diaLi = document.createElement("li");
        if (contDay == 7){
            diaLi.className="day friday";
            contDay = 0
        }else{
            diaLi.className="day"};
      diaLi.innerHTML = dia;
      listaDia.appendChild(diaLi);
      contDay+=1
    }

  function feriado (dezDaysList){
    let compara = 0;
      for (let id=0; id<dezDaysList.length; id+=1){
          let element = document.querySelectorAll(".day")[id];
          if (element.innerHTML == dezDaysFeriado[compara]){
              element.classList.add("holiday")
              compara+=1
          }           
      }
    }
    feriado(dezDaysList);

// Cria botão Feriados
function btFeriado (Feriados){
    const divBotao = document.querySelector(".buttons-container")
    const botao = document.createElement("button");
    //botao.type("button");
    botao.innerText="Feriados";
    botao.id="btn-holiday";
    divBotao.appendChild(botao);
}
btFeriado();

// Destacar Feriados
function destacarFeriados (){
  const dFeriados = document.getElementsByClassName("holiday");
  if (corFeriado == 0){
      for (let i in dFeriados){
          dFeriados[i].style.backgroundColor="rgb(152,251,152)";
          corFeriado = 1
      }
  }else{
      for (let i in dFeriados){
          dFeriados[i].style.backgroundColor="rgb(238,238,238)";
          corFeriado = 0
      }
  }
}
document.getElementById("btn-holiday").addEventListener("click",destacarFeriados);


// Cria botão Sexta-Feira
function btSextaFeira (sextaFeira){
  const divBt = document.querySelector(".buttons-container");
  const btsexta = document.createElement("button");
  btsexta.innerText="Sexta-feira";
  btsexta.id="btn-friday";
  divBt.appendChild(btsexta);
}
btSextaFeira();

//Alterna sexta-feira com emoji
function emojiSextou (){
  const listFriday = document.getElementsByClassName("friday");
  if (sextou==0){
      for (let i in listFriday){
          listFriday[i].innerHTML="&#128526";
          sextou = 1;
      }
  }else{
      for (let i in listFriday){
          sextasArray();
          for (let i in listFriday){
            listFriday[i].innerHTML=sextas[i];
          sextou = 0;
          }
          sextas = [];
      }
  }

}
document.getElementById("btn-friday").addEventListener("click",emojiSextou);

//Cria um array com os dias de Sexta-Feira
function sextasArray (){
    for (let index=5;index<dezDaysList.length;index+=7){
        sextas.push(dezDaysList[index]);
    }
}

//Função que dá um efeito zoom quando o mause passa por cima dos dias.
function aplicaZoom (event){
    event.target.style.fontSize="35px"
}

//Função que retira o efeito zomm quando o mouse sai de cima dos dias
function retiraZoom (event){
    event.target.style.fontSize=""
}
listaDia.addEventListener("mouseover",aplicaZoom);
listaDia.addEventListener("mouseout",retiraZoom);

//Função que cria tarefa personalizada
function tarefa (tarefa){
  const divTarefa = document.querySelector(".my-tasks");
  const spTarefa = document.createElement("span");
  spTarefa.innerText=tarefa;
  divTarefa.appendChild(spTarefa);
}
tarefa("Estudar")

//Função que cria uma cor para a tarefa criada.
function corTarefa (cor){
  const divTarefa = document.querySelector(".my-tasks");
  const divCor = document.createElement("div");
  divCor.style.backgroundColor=cor;
  divCor.className="task"
  divTarefa.appendChild(divCor);
}
corTarefa("red");

//Adiciona a classe selected a div com a cor da tarefa
function corSelected (event){
  if (taskSelected==0){
      event.target.classList.add("selected");
      taskSelected = 1
    }else{
      event.target.classList.remove("selected");
      taskSelected = 0
  }  
}
document.querySelector(".task").addEventListener("click",corSelected);

//altera a cor dos dias clicados conforme a cor da tarefa selecionada
function addCorDia (event){
  const queryCor = document.querySelector(".selected").style.backgroundColor
  const queryCorDia = event.target.style.color;
  if (taskSelected == 1){
    if (queryCor == queryCorDia){
      event.target.style.color="";
    }else{
      event.target.style.color=queryCor 
    }
  }
}
document.querySelector("#days").addEventListener("click", addCorDia);

//Função que adiciona compromissos
function addCompromissos (event){
  const vlInput = document.getElementById("task-input").value
  const listaTarefas = document.querySelector(".task-list");
  const addLista = document.createElement("li");
  //let tecla = event.key
    if (vlInput.length == 0){
      alert("Campo vazio")
    }else{
      addLista.innerHTML=vlInput
      listaTarefas.appendChild(addLista);
      document.getElementById("task-input").value=""
  }
}
document.querySelector("#btn-add").addEventListener("click", addCompromissos);
