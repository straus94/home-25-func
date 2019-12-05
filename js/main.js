//1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// compareNumbers = (a, b) => {
//     if (a == b) {
//         return 0;
//     } else {
//         return a < b ? -1 : 1;
//     }
// }

// let a = +prompt('enter a');
// let b = +prompt('enter b');
// console.log(compareNumbers(a, b));


//2. Написать функцию, которая вычисляет факториал переданного ей числа.
//  factorialNumber = a => {
//      let res = 1;
//      for(let i = 1; i <= a; i++) {
//         res *= i;
//      }
//      return res;
//  }

//  let a = +prompt('enter number');
//  console.log(`factorial = ${factorialNumber(a)}`);


// 3. Написать функцию, которая принимает три отдельные цифры 
//  и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// digitToNum = (a = 0, b = 0, c = 0) => {
//     if (a > 9 || b > 9 || c > 9) return false;
//     return (a * 100) + (b * 10) + c;
// }

// let a = +prompt('enter digit 1');
// let b = +prompt('enter digit 2');
// let c = +prompt('enter digit 3');
// console.log(digitToNum(a, b, c));


// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// rectangleArea = (a, b) => {
//     if (a < 0 || b < 0) return false;
//     if (!b) {
//         return a * a;
//     } else if (!a) {
//         return b * b;
//     } else {
//         return a * b;   
//     }
// }

// let a = +prompt(`enter side`);
// let b = +prompt(`enter side`);
// console.log(rectangleArea(a, b));


// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
// perfectNumber = a => {
//     let res = 0;
//     for (let i = 1; i <= a / 2; i++) {
//         if (a % i == 0) {
//             res += i;
//         }
//     }
//     if (res == a) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let a = +prompt('enter number');
// console.log(perfectNumber(a));

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию,
// чтобы узнавать, совершенное число или нет. 

// perfectNumber = a => {
//     let res = 0;
//     for (let i = 1; i <= a / 2; i++) {
//         if (a % i == 0) {
//             res += i;
//         }
//     }
//     if (res == a) {
//         return true;
//     } else {
//         return false;
//     }
// }

// searchPerfectNumber = (a, b) => {
//     for(let i = a; i <= b; i++) {
//         if (perfectNumber(i)) {
//             console.log(i);
//         }
//     }
// }

// let a = +prompt('enter start number');
// let b = +prompt('enter end number');
// searchPerfectNumber(a, b);



// 7. Написать функцию, которая принимает время (часы, минуты, секунды) 
//и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// funcTime = (hours = '00', minutes = '00', seconds = '00') => {
//     if (!hours) hours = '00';
//     if (!minutes) minutes = '00';
//     if (!seconds) seconds = '00';
//     return console.log(`${hours} : ${minutes} : ${seconds}`);
// }

// let hours = +prompt('enter hours');
// let minutes = +prompt('enter minutes');
// let seconds = +prompt('enter seconds');

// funcTime(hours, minutes, seconds);




// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// timeToSeconds = (hours = 0, minutes = 0, seconds = 0) => {
//     return (3600 * hours) + (60 * minutes) + seconds + ' seconds';
// }

// let hours = +prompt('enter hours');
// let minutes = +prompt('enter minutes');
// let seconds = +prompt('enter seconds');
// console.log(timeToSeconds(hours, minutes, seconds));




// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, 
// минуты и секунды и возвращает в виде строки «чч:мм:сс».
// secondsToTime = seconds => {
//     let hours = Math.trunc(seconds / 3600);
//     let minutes = Math.trunc((seconds - (hours * 3600)) / 60);
//     let sec = seconds - ((hours * 3600) + (minutes * 60));
//     return `${hours} : ${minutes} : ${sec}`;
// }

// let a = +prompt('enter seconds');
// console.log(secondsToTime(a));


// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, 
// которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
//  узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// timeToSeconds = (hours = 0, minutes = 0, seconds = 0) => {
//     return (3600 * hours) + (60 * minutes) + seconds + seconds;
// }

// secondsToTime = seconds => {
//     let hours = Math.trunc(seconds / 3600);
//     let minutes = Math.trunc((seconds - (hours * 3600)) / 60);
//     let sec = seconds - ((hours * 3600) + (minutes * 60));
//     let res;
//     return res = `${hours} : ${minutes} : ${sec}`;
// }

// differenceBeetweenDates = (firstHours, firstMinutes, firstSeconds, secondHours, secondMinutes, secondSeconds) => {
//     if ((firstHours || secondHours) > 24 || (firstMinutes || secondMinutes) > 60 || (firstSeconds || secondSeconds) > 60) return false;
//     let firstTime = timeToSeconds(firstHours, firstMinutes, firstSeconds);
//     let secondTime = timeToSeconds(secondHours, secondMinutes, secondSeconds);
//     let difference = secondsToTime(secondTime - firstTime);

//     return `difference beetween first and second time - ${difference}`;
// }

// let firstHours = +prompt('enter first hours');
// let firstMinutes = +prompt('enter first minutes');
// let firstSeconds = +prompt('enter first seconds');

// let secondHours = +prompt('enter second hours');
// let secondMinutes = +prompt('enter second minutes');
// let secondSeconds = +prompt('enter second seconds');

// console.log(differenceBeetweenDates(firstHours, firstMinutes, firstSeconds, secondHours, secondMinutes, secondSeconds));