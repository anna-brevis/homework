// Выразительный JavaScript 3-е издание. Глава 3. Задание 2.

function isEven(x) {   
    function isNum(num) {
        if (num < 0) {
            num *= -1;
        }   
        if (num == x) { 
            return 'even';
        }
        else if (num == x + 1) {
            return 'odd';
        }
        else {
            return isNum(num - 2);
        }
    }
    return isNum(-10);
}
console.log(isEven(0)); 
