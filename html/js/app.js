// let a = 5;
// let b = 2;
// let myName = "matteo";
// let veryLongName = "matteo";


// myName = "Matteo";

// console.log("your name is " + myName);


// const amIHappy = true;

// console.log("am I happy? " + amIHappy);

// const amItired = null;

// console.log("am I happy? " + amItired);


// let something;
// console.log("am I happy? " + something);

// // arrays

// const mon= "monday";
// const tue= "tuesday";
// const wed= "wednesday";
// const thu= "thursday";
// const fri= "friday";
// const sat= "saturday";
// const sun= "sunday";

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];



// // get Item from array
// console.log(daysOfWeek);

// // add one item to array
// daysOfWeek.push("newday");


// console.log(daysOfWeek);
// console.log(daysOfWeek[7]);


// const playerName = "Matteo";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// player [0] == name
// player [1] == points


// const player = ["Matteo", 121212, false, "little bit"];


// const player = {
//     name: "Matteo",
//     points: 10,
//     fat: "true"
// };

// console.log(player);
// console.log(player.name);


// update object

// console.log(player);
    // player.fat = false;
    // player.lastName = "Bergamini";
    // player.points = player.points + 15;
    // console.log(player);

    // console.log("hello my name is Matteo")
    // console.log("hello my name is Dal")
    // console.log("hello my name is Shigatsi")
    // console.log("hello my name is Random")
    // console.log("hello my name is hello")

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + "and I am " + age + "years old");

// }


// sayHello("Matteo", 10);
// sayHello("Vanessa", 23);
// sayHello("Dal", 21);

// function plus(anyNumber, iWant) {
//     console.log(anyNumber + iWant);
// }
// function divide(a, b) {
//     console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);


// const player = {
//     name: "Matteo",
//     sayHello: function (otherPersonsName) {
//         console.log ("hello! " + otherPersonsName + "nice to meet you! ");
//     },
// };

// console.log(player.name);
// player.sayHello("Dal");


const calculator = {
    add: function(a, b) {
        return (a + b);
    },
    divide: function(a, b) {
        return (a / b);
    },
    multiply: function(a, b) {
        return (a * b);
    },
    subtract: function(a, b) {
        return (a - b);
    },
    powerOf: function(a, b) {
        return (a ** b);
    }
}

const addResult = calculator.add(1, 2)
const subtractResult = calculator.subtract(addResult, 2)
const multiplyResult = calculator.multiply(10, subtractResult)
const divideResult = calculator.divide(multiplyResult, addResult)
const powerOfResult = calculator.powerOf(divideResult, 2)
console.log(powerOfResult);


// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);