// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// const frutNames = fruts.map(frut => frut.name);
// console.log(frutNames);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0){
//         console.log(i)
//     } 
// }
//2, 4, 6, 8, 10

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` );
// }
// let number = 0;

// while (number < 5) {
//     console.log(`number: ${number}!`);
//     number++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let number;

// do {
//     number = prompt("Введіть число більше за 100:");
//     number = Number(number); 
// } while (number <= 100);

// if (number > 100) {
//     console.log("Ви ввели число більше за 100: " + number);
// } else {
//     console.log("Ви ввели неправильне значення або скасували ввід.");
// }

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// let averageAge = girls.reduce((sum, item) => sum + item.age, 0) / girls.length;
// console.log(averageAge); // 20.5