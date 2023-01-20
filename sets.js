// // const list = [1,2,4,4,5,6,7,8,8,8,10];
// const list = new Array(1,2,4,4,5,6,7,8,8,8,10);
// console.log(list);
// // const set = new Set(list);
// // console.log(set);
// const set = new Set();
// Set.prototype.addd = function (value) {
//     if (this.has(value)) {
//         return false;
//     } else {
//         this.add(value);
//         return true;
//     }
// }
// // Array.prototype.add = function () {
// //     console.log(this);
// // }
// // list.push(11);
// // list.add();
// // for (const value of list) {
// //     // console.log(set.add(value));
// //     console.log(value, set.addd(value));
// // }
// let firstDuplicate;
// let size = 0;
// // list = [1,2,3,4,4,5];
// console.log(set);
// for (const value of list) { // 2
//     // 2 1
//     if (set.size > size) {
//         size++;
//     }
//     set.add(value);
//     if (set.size === size) {
//         firstDuplicate = value;
//     }
// }
// console.log('first duplicate: ', firstDuplicate);
// console.log(set);
// console.log(set.size);
// console.log(set.has(3));
// console.log(set.has(8));
// console.log(set.delete(10));
// console.log(set.size);

// const mySet = {
//     size: 10,
//     add: (value) => mySet.size = mySet.size + 1
// };
// console.log(mySet);
// mySet.add(1);
// console.log(mySet);

const personList = [
    {
        name: 'Endi',
        age: 20,
        graduated: false,
        grades: [5, 6, 8, 10, 10]
    },
    {
        name: 'Ledio',
        age: 25,
        graduated: true,
        grades: [7, 6, 5, 8, 9, 10]
    },
    {
        name: 'Ersildi',
        age: 30,
        graduated: true,
        grades: [10, 8, 9, 7, 10]
    },
    {
        name: 'Tea',
        age: 22,
        graduated: true,
        grades: [7, 8, 8, 6, 9]
    }
];
// Rendit listen nga personi me moshe me te madhe tek ai me mosh me te vogel
personList.sort((curr, next) => {
    if (curr.age > next.age) return -1;
    else if (curr.age < next.age) return 1;
    else return 0;
});
console.log(personList);
// Rendit listen nga personi me mesatare me te ulet tek ai me me te lart
// const person = { firstName: 'Hegi' };
// // output: { firstName: "Hegi" }
// person.lastName = 'Gjoka';
// // output: { firstName: "Hegi", lastName: "Gjoka" }
const personWithAvgList = personList.map((person) => {
    person.average = person.grades.reduce(
        (sum, grade) => {
            return sum + grade
        },
        0
    )/person.grades.length;
    return person;
});
console.log(personWithAvgList);
// Per te palikuar per Phd duhet te keni mesataren me te lart se 8.0
// dhe te jeni diplomuar. Krijoni nje list te re ku do jeni prezent vetem
// personat te cilet plotesojne kushtin
const phdList = personWithAvgList.filter((person) => {
    // if (person.average > 8 && person.graduated) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (person.average > 8 && person.graduated);
});
console.log(phdList);
// Beni revers listen e re duke perdorur funksionin pop()
const nrList = [1,2,3,4,5];
const reverseNrList = [];
while (nrList.length > 0) {
    reverseNrList.push(nrList.pop());
}
console.log(reverseNrList);