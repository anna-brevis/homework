// JavaScript для начинающих Anton Kholin

function testDateTime(a, b) {

    let date1 = new Date(a),
        date2 = new Date(b);
    let bigDay;
    let newDay;

    if (+date1 >= +date2) {
        bigDay = date1.getDay();
    } else {
        bigDay = date2.getDay();
    }

    switch (bigDay) {
        case 0: 
            newDay = "Воскресенье";
            break;
        case 1: 
            newDay = "Понедельник";
            break;
        case 2: 
            newDay = "Вторник";
            break;
        case 3: 
            newDay = "Среда";
            break;
        case 4: 
            newDay = "Четверг";
            break;
        case 5: 
            newDay = "Пятница";
            break;
        case 6: 
            newDay = "Суббота";
            break;
        default:
            newDay = "День недели некорректен";
    }

    return newDay;
}

console.log(testDateTime("24 October 1909 10:27", "28 March 1909 00:59"));
