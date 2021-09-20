// // Выразительный JavaScript 3-е издание. Глава 3. Задание 3.

let string = 'jBjfBjJb jhB';

function constBs(str, simb) {

    let newString = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == simb) {
            newString += str[i];
        } else {
            return 'Таких символов нет!';
        }
    }

    return newString.length;
}

console.log(constBs(string, 'j'));
