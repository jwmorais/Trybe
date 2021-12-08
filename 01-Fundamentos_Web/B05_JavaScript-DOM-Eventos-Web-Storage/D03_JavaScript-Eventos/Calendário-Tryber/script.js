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
  let contDay = 2
  
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
    const divBotao = document.getElementsByClassName("buttons-container");
    const botao = document.createElement("input");
    botao.type("button");
    botao.value("Feriados");
    botao.id="btn-holiday";
    divBotao.appendChild(botao);
}

