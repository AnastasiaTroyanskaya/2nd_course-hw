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
function game2() {
let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let answer1 = fruits[0];
let answer2 = fruits[6];
let userAnswer1 = prompt('Введите первое название фрукта из списка');
let userAanswer2 = prompt('Введите последнее название фрукта из списка');
alert((userAnswer1.toLowerCase() == answer1.toLowerCase() && userAanswer2.toLowerCase() == answer2.toLowerCase()) ? "Ура, победа! Вы угадали оба фрукта!!!" :
    (userAnswer1.toLowerCase() == answer1.toLowerCase() || userAanswer2.toLowerCase() == answer2.toLowerCase()) ? 'Вы были близки к победе! Но угадали только один фрукт. Побробуйте еще раз.' :
        `Вы ответили неверно. Правильные ответы - ${fruits[0]} и ${fruits[6]}. Попробуй еще раз.`);

}