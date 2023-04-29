// Задание 1
// Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода 
// alert()
// . Затем запишите в нее значение 20, выведите его на экран.

let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
// Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.

let firstIphone = 2007;
alert(firstIphone);

// Задание 3
// Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.

let jsCreator = `Брендан Эйх`;
alert(jsCreator);

// Задание 4
// Создайте две переменные 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления).

let n1 = 10, n2 = 2;
alert(`${n1} + ${n2} = ${n1 + n2}
${n1} - ${n2} = ${n1 - n2}
${n1} * ${n2} = ${n1 * n2}
${n1} / ${n2} = ${n1 / n2}`)

// Задание 5
// Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert().

let b = 2;
let result = b**5;
alert(`${b}^5 = ${result}`);


// Задание 6
// Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert().

let a = 9, b = 2;
alert(`${a} % ${b} = ${a % b}`)

// Задание 7
// Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):
// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);

let num = 1;
num += 5;
num -=3;
num *=7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
// Создайте переменную age, присвойте значение с помощью метода prompt() "Сколько вам лет?". Результат вывести с помощью alert().

let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
// Создайте объект user, у которого есть следующие свойства: name, age, isAdmin. Значения для свойств придумайте произвольные. Обратите внимание, что для свойства name
// значение должно быть строковым, для age – числовым, а для isAdmin – булевым.
let user = {
    name: `Anastasia`,
    age: 20,
    isAdmin: true
}
// Задание 9.1
// Добавьте объекту user свойство city of residence. Обратите внимание на то, как правильно добавлять такие методы: через точку или с помощью квадратных скобок.

user[`city of residence`] = `Moscow`;

// Задание 9.2
// Измените у объекта user свойство age на любое другое новое значение.

user.age = 17;

// Задание 9.3
// Удалите у объекта user свойство "city of residence".

delete user[`city of residence`];

// Задание 9.4
// Создайте переменную info, присвойте ей значение с помощью метода prompt() "Какую информацию хотите узнать о пользователе?".
// Далее обращайтесь к свойствам объекта user через переменную info. Выведите результат с помощью alert.

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
// С помощью метода prompt() спросите у пользователя его имя и сохраните в переменную. С помощью метода alert() выведите на экран шаблонную строку: 
// Привет, ИМЯ!
// Подсказка: вставить ! можно через кавычки

let name = prompt(`What's your name?`);
alert(`Привет, ${name}!`)