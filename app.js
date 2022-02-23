// 1. let
//---Redeclare kora jabe na....
//---declare korar age defain kora 
//--- Block scope feature

let x = 10;

{
    let x = 2;
    // console.log('Inside block', x);
}
// console.log('Outside block', x);

// 2. const 
//---cannot reassign
//---has other feature of let

// const age = 45;
// age = 56;
// console.log(age);

// 4. template Literal or concatenation
let name = 'Nazrul';
let message = 'How are you';
// old way 
// let fullMessage  = 'Hellow ' + name + ', ' + message;
// new way 
let fullMessage = `Hi, ${name} ${message}?`
console.log(fullMessage);

// 5. Arrow Function

// function sum (a, b){
//     let totalEqual = a + b;
//     return totalEqual;
// }
// let totalEqual = sum(44, 55);
// console.log(totalEqual);

// const sum = (a, b) => (a + b);
// const totalEqual = sum(55, 33);
// console.log totalEqual);

const sum = (a, b, c) => {
    let sum1 = a + b;
    let sum2 = a - c;

    return sum1;
}
const totalEqual = sum(50, 33, 67);
// console.log totalEqual);


// 6. Array Destructuring

let myVehicles = ['Toyota', 'Yamaha'];

const [cars, bike] = myVehicles;
// console.log(cars);

// 7. spread operator 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
// console.log(arr3);


// 8.The For/of Loop

const numbers = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

for (number of numbers){
    // console.log(number);
}

// 9. Default parameter Values

function add (x, y = 10){
    let totalEqual = x + y;
    return totalEqual;
}
const equal = add (50);
console.log(equal);


function welcomeMessage (name = 'Tamim') {
    let message = `Hi ${name}, welcome to this session`;
    console.log(message);
}
welcomeMessage('Naymur');


// 10. Map, Filter, Find

const myArr = [2, 4, 6, 8, 10];
// let myNewArr = [];
// for (let number of myArr) {
//     let tripled = number * 3;
//     myNewArr.push(tripled);
// }
// console.log(myNewArr);

// map
const tripledArr = myArr.map(number => number * 3);
// console.log(tripledArr);


const myFriend = ['Shakib','Tamim', 'Mustafiz'];

const myFriendTotal = myFriend.map(friend => `Hello ${friend}, How are you`)
console.log(myFriendTotal);