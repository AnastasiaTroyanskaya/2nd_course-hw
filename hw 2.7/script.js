// Задание 1
// Преобразуйте строку js в верхний регистр JS.

let str = `js`;
str = str.toUpperCase();
console.log(str);

// Задание 2
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.
// Пример вызова:
// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

function searchStart(array, string) {
    const newArray = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(string.toLowerCase())) {
            newArray.push(element.toLowerCase());
        }
    });
    return newArray;
}

// Задание 3
// Округлите число 32.58884:
// До меньшего целого
// До большего целого
// До ближайшего целого

let n = 32.58884;
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));

// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log(`Наименьшее число: ${minNumber}`);
console.log(`Наибольшее число: ${maxNumber}`);


// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandom () {
    return Math.round(Math.random() * 9 + 1);
}

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.
// Пример вызова функции
// getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// // от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// // числа, получаем 3
// getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// // от 0 до 12, длина массива 12 / 2 = 6

function getRandomArrNumbers(number) {
    const arrLength = Math.floor(number / 2);
    const resultArr = [];
    for (let i = 0; i < arrLength; i++) {
        resultArr.push(Math.round(Math.random() * number));
    }
    return resultArr;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

function getRandom (minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}
console.log(getRandom(1, 10));

// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

let curDate = new Date();
console.log(currentDate);

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
// Подсказка
// Решить эту задачу вам помогут 2 метода даты: 
// getDate() и setDate(), один из методов должен быть передан в качестве параметра второму.

let currentDate = new Date();
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);  

// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

function formatDate(date) {
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dateString = `Дата: ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} - это ${dayNames[date.getDay()]}.`;
    const timeString = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return `${dateString}\n${timeString}`;
}

console.log(formatDate(new Date()));