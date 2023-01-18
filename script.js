// let str = `Hello 12 !`; // String
// let int = 5; // Number
// let double = 555555555.1444444444; // Number
// let bool = false; // Boolean
// let und;
// let nul = null;
// // console.log('str ' + typeof str);
// // console.log('int ' + typeof int);
// // console.log('double ' + typeof double);
// // console.log('bool ' + typeof bool);
// // console.log('und ' + typeof und);
// // console.log('nul ' + typeof nul);
// let x = str;
// str = 3;
// // const firstName = 'Hegi';
// // const lastName = 'Gjoka';
// // const fullName = `${firstName}=>${lastName}`;
// // console.log(str);
// // console.log('str = ' + str);
// // console.log('x = ' + x);
//
// // const arr = [1,2,3,4,0,-2];
// const arr = new Array(1,2,3,4,0,-2);
// console.log(`arr: ${typeof arr}`);
// console.log(`arr: ${arr instanceof Array}`);
// const acad = {
//     admin: 'Xheni',
//     employee: ['Sara', 'Hegi', 'Edlira'],
//     classNr: 2
// }; // JSON
// console.log(`acad: ${typeof acad}`);
// console.log(`acad: ${acad instanceof Array}`);
// arr.push(10);
// const arr2 = arr;
// arr.push(11);
// console.log(arr);
// console.log(arr2);

<!-- HTML -->
/* JS */

const person = {
    fn: 'Hegi',
    ln: 'Gjoka',
    age: 24,
    graduated: true,
    isMale: true,
    jobs: ['Instructor', 'Lector', 'Developer'],
    married: null
};

// console.log('person gender: ' + (person.isMale ? 'Male' : 'Female'));

// if (person.graduated) {
// if (person['graduated']) {
//    console.log('Is graduated');
// } else {
//     console.log('Is Not graduated');
// }

const condition = person.age >= 18 && person.age < 25;
/*
* && (AND)
* 1 1 => 1
* 1 0 => 0
* 0 1 => 0
* 0 0 => 0
*
* || (OR)
* 1 1 => 1
* 1 0 => 1
* 0 1 => 1
* 0 0 => 0
*
* ! (NOT)
* 1 => 0
* 0 => 1
* */

// console.log(condition);

// if (person.age < 18) {
//     console.log('Eshte minoren');
// } else if (condition) {
//     console.log('Eshte student');
// } else if (person.age > 65) {
//     console.log('Eshte pensionist');
// } else {
//     console.log('Eshte me pushime');
// }

const httpStatus = {
    200: 'OK',
    201: 'CREATED',
    401: 'NOT AUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT FOUND',
    500: 'INTERNAL SERVER ERROR'
};

for (const key in httpStatus) {
    console.log(key);
}

// error
// for (const value of httpStatus) {
//     console.log(value);
// }

const response = {
    status: 400,
    data: null,
    error: {'name': 'required'}
};

// switch (response.status) {
//     case 200:
//         console.log(httpStatus[200], response.data);
//         break;
//     case 201:
//         console.log(httpStatus[201]);
//         break;
//     case 401:
//     case 403:
//     case 404:
//     case 500:
//         console.log('Error: ', response.error);
//         break;
//     default:
//         console.log('Status not recognized, ', response);
// }

// condition ? true : false Ternary Operator
// console.log(person.graduated ? 'Is graduated' : 'Is not graduated');

// let i = 0; i < 5; i++(i += 1)(i = i + 1)
const weekDays = ['M','T', 'W', 'T', 'F', 'S', 'S'];
const weekDaysCount = 7;
for (let i = 0;i < weekDaysCount;i++) {
    console.log( `[${i}] => ${weekDays[i]}` );
    // console.log( '[' + i + '] => ' + weekDays[i] );
}

for (const index in weekDays) {
    console.log(index);
}

for (const element of weekDays) {
    console.log(element);
}

// let i = 0;
// // while (i < weekDaysCount) {
// //     console.log(weekDays[i]);
// //     i++;
// // }
//
// do {
//     console.log(weekDays[i]);
//     i++;
// } while (i < weekDaysCount);

function sayHiHegi() {
    console.log('Hi Hegi');
}

function sayHiLedio() {
    console.log('Hi Ledio');
}

function sayHi(name) {
    console.log('Hi ' + name);
}

function addTwoNumbers(num1, num2) {
    let sum = 0;
    sum = num1 + num2;
    return sum;
}

const addThreeNumbers = (num1, num2, num3) => num1 + num2 + num3;

sayHi('Tea');
sayHiHegi();
sayHiLedio();

// let sum = addTwoNumbers(1,3);
let sum = addThreeNumbers(1,3,5);
console.log(sum);
