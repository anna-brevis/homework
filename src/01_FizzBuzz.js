// Выразительный JavaScript 3-е издание. Глава 2. Задание 2.

let array = []
for (let i = 1; i <= 100; i++) {
    array.push(i);
}

function fizzBuzz(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0) {
            array[i] = 'FizzBuzz';
        }
        else if (array[i] % 3 == 0) {
            array[i] = 'Fizz';
        }
        else if (array[i] % 5 == 0) {
            array[i] = 'Buzz';
        }
    }
    return array;
}

console.log(fizzBuzz(array));
