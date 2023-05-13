function game1() {

    let monthNumber = prompt('Напишите номер месяца');

    if (monthNumber >=  1 && monthNumber <= 2 || monthNumber == 12) {
        alert('* Зима! *');

    } else if (monthNumber >=  3 && monthNumber <= 5) {
        alert('❀✿ Весна! ❀✿');

    } else if (monthNumber >=  6 && monthNumber <= 8) {
        alert('εїз Лето εїз');

    } else if (monthNumber >=  9 && monthNumber <= 11) {
        alert('☼ Осень ☼');

    } else if (monthNumber <=  0 || monthNumber >=  13) {
        alert('Такого месяца не существует!');
    }       
}
