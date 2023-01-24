// index        0 1 2 3
let numArray = [1,2,3,4];
console.log(numArray[2]);
// let numArray = new Array(1,2,3,4);
// let copy = numArray;
numArray.push(5);
// memory
// var | val
// ---------
// na  | [1,2,3,4,5]
// copy| *na
// for (let index = 0;index < numArray.length;index++) {
//     console.log(numArray[index]);
// }
// for (const value of numArray) {
//     console.log(value);
// }

function add2(num) {
    return num + 2;
}

add2(3); // 5

function sayHi () {
    console.log('hi');
}

sayHi();

function forEach(array, handler) {
    for (let index = 0; index < array.length; index++) {
        handler(array[index], index, array);
    }
}

// function printValues(value, index, array) {
//     console.log('Print values: ', value, index, array);
// }

// arrow function
const printValues = (value, index, array) => {
    console.log('Print values: ', value, index, array);
}

// forEach(numArray, printValues);

// forEach is a higher order function, because it takes another function as its argument
// numArray.forEach(printValues);
// forEach == for
// numArray.forEach(
//     (value, index, array) => {
//         console.log('Print values: ', value, index, array);
//     }
// );
const add3 = (value) => {
    return value +=3;
}
// map mutate every element in the array and return a new array
// const mutatedArray = numArray.map(add3);
// console.log(mutatedArray);

function map(array, handler) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(handler(array[index], index, array));
    }
    return newArray;
}
// const mutatedArray = map(numArray, add3);
// console.log(mutatedArray);

const notat = [4,10,4,7,4,8,4];
const notatMeMik = notat.map((nota) => {
    const notaERe = nota + 1;
    if (notaERe > 10) return nota;
    else return notaERe;
});
console.log(notat, notatMeMik);
// const notatKaluese = notat.filter((nota) => nota > 4);
function filter(array, fn) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if (fn(value)) {
            newArray.push(value);
        }
    }
    return newArray;
}
const notatKaluese = filter(notat, (nota) => nota > 4)
console.log(notatKaluese);
const studentAge = [18, 30, 20, 28, 24]
console.log('Te gjithe cunat shkojn ne kazino: ', studentAge.every((mosha) => mosha >= 21));
console.log('Disa nga cunat shkojn ne kazino: ', studentAge.some((mosha) => mosha >= 21));
console.log('Mesatarja e notave: ', notat, ' eshte: ', notat.reduce(
    (acc, nota) => {
        return acc += nota
    },
    0
)/notat.length)
studentAge.push(25);
console.log('Mosha e cunave: ', studentAge);
const cuniQeIku = studentAge.pop();
console.log('Mosha e cunave: ', studentAge, ' cuni qe iku', cuniQeIku);
studentAge.unshift(12);
console.log('Mosha e cunave: ', studentAge);
const djaliQeIku = studentAge.shift();
console.log('Mosha e cunave: ', studentAge, ' cuni qe iku', djaliQeIku);
studentAge.splice(
    studentAge.indexOf(30),
    1,
    0
);
console.log('Mosha e cunave: ', studentAge);
studentAge.sort(
    (a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }
);
console.log('Mosha e cunave: ', studentAge);

