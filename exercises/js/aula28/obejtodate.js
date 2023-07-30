let data = new Date();
let weekDay = 2;

function showDat(weekDay){
    let showWeekName;

    switch (weekDay){
        case 0:
            showWeekName = "Domingo";
            return showWeekName;
        case 1:
            showWeekName = "Segunda";
            return showWeekName;
        case 2:
            showWeekName = "Terça";
            return showWeekName;
        case 3:
            showWeekName = "Quarta";
            return showWeekName;
        case 4:
            showWeekName = "Quinta";
            return showWeekName;
        case 5:
            showWeekName = "Sexta";
            return showWeekName;
        case 6: 
            showWeekName = "Sábado";
            return showWeekName;
        default:
            showWeekName = "Valor não encontrado";
            return showWeekName;
    }
}

let weekName = showDat(weekDay);

console.log(weekName);
console.log(weekDay);