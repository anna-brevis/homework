// https://learn.javascript.ru/logical-operators

let login = prompt("Кто там?", "");

if (login == "Админ") {
    
    let pass = prompt("Пароль?", "");
    
    if (pass == "Я Главный") {
        alert("Здравствуйте!");
    } else if (pass == null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }

} 
else if (login == null) {
    alert("Отменено");
} 
else {
    alert("Я вас не знаю");
}
