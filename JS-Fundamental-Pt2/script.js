"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (passDriversLicense) console.log('I can drive :D')

//const interface = 'Audio';
//const private = 534;
*/
/*
/////////////////////////////////////////////////////////////////
//                          Functions
//////////////////////////////////////////////////////////////////
function logger() {
    console.log('My name is Jonas');
}

//calling, running, invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
/////////////////////////////////////////////////////////////////
//                  Function declaration
//////////////////////////////////////////////////////////////////
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//////////////////////////////////////////////////////////////////
//                      Function expression
//////////////////////////////////////////////////////////////////
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
//////////////////////////////////////////////////////////////////
//                      Arrow Function
//////////////////////////////////////////////////////////////////
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////////////////////////////
//                  Function calling functions
////////////////////////////////////////////////////////////////
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
//////////////////////////////////////////////////////////////////
//                      Functions review
//////////////////////////////////////////////////////////////////
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Jonas'));
*/
//////////////////////////////////////////////////////////////////
//                  Coding challenge #1
//////////////////////////////////////////////////////////////////
/*
const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

//Test 1
let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);
console.log(dolphinScore, koalaScore);

function checkWinner(dolphinScore, koalaScore) {
    if (dolphinScore >= koalaScore * 2) {
        console.log(`Dolphins win ${dolphinScore} to ${koalaScore}!`);
    } else if (koalaScore >= dolphinScore * 2) {
        console.log(`Koalas win ${koalaScore} to ${dolphinScore}!`);
    } else {
        console.log("Nobody wins today :(");
    }
}
checkWinner(dolphinScore, koalaScore);

//Test 2
dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);

checkWinner(dolphinScore, koalaScore);
*/
///////////////////////////////////////////////////////////////////
//                          Arrays
///////////////////////////////////////////////////////////////////
/*
const friend1 = 'Michael';
const friend2 = 'Scott';
const friend3 = 'Peter';

const friends = ['Michael', 'Scott', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 3]);
console.log(friends[friends.length - 4]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Nick'
const nick = [firstName, 'Bingham', 2022 - 1991, 'teacher', friends];
console.log(nick)

//Usage example
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

const ages2 = [age1, age2, age3];
console.log(ages2);
*/

//////////////////////////////////////////////////////////////////
//              Basic Array Operations (Methods)
//////////////////////////////////////////////////////////////////
/*

const friends = ['Michael', 'Steven', 'Peter'];
//add to end of array
const newLength = friends.push('Jay'); //push returns array length
console.log(friends);
console.log(newLength);

//add to beginning of array
friends.unshift('John');
console.log(friends);

//remove from array
friends.pop(); //remove last element
const popped = friends.pop(); //pop returns the removed element
console.log(friends);
console.log(popped);

friends.shift(); //remove first element
console.log(friends);

console.log(friends.indexOf('Steven')); //returns element's positon
console.log(friends.indexOf('Bob')); //doesn't exist = -1
friends[friends.indexOf('Steven')] = 'Adam'; //replace
console.log(friends);

friends.push(23);
console.log(friends.includes('Adam')); //boolean check
console.log(friends.includes('bob')); //boolean check
console.log(friends.includes('23')); //false because strict
console.log(friends.includes(23)); //true

if (friends.includes('Adam')) {
    console.log('You have a friend named Adam!');
}
*/

///////////////////////////////////////////////////////////////////
//                      Coding Challenge #2
///////////////////////////////////////////////////////////////////
/*
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
    //ALTERNATIVE
    //return bill >= 50 && bill <= ? bill * 0.15 : bill * 0.20;
}

//Alternative via Arrow Function:
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const test = calcTip(100);
console.log(test);
const test2 = calcTip(400);
console.log(test2);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills);
console.log(tips);

const totalBill = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totalBill);
*/

/////////////////////////////////////////////////////////////////////                              Objects
///////////////////////////////////////////////////////////////////
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas); //objects are ordered alphabetically
*/
///////////////////////////////////////////////////////////////////
//              Dot and Bracket notations
///////////////////////////////////////////////////////////////////
/*
console.log(jonas.lastName);
console.log(jonas['lastName']); //object must be entered as expression

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey); //doesn't work

const interestedIn = prompt('What do you want to know about Jonas Choose between firstName, lastName, age, job, friends, and bestFriend');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("We don't have that info! Choose between firstName, lastName, age, job, and friends.");
}

jonas.location = 'Portugal'; //add object
jonas['twitter'] = '@jonasschmedtman'; //add object
console.log(jonas);

//challenge:
//"Jonas has 3 friends, and his best friend is Michael."
jonas.bestFriend = 'Michael';
console.log(jonas.firstName + " has " + (jonas['friends'].length) + " friends, and his best friend is named " + jonas.bestFriend + ".");
//alternative
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is named ${jonas.bestFriend}.`);
*/
/////////////////////////////////////////////////////////////////////                       Object Methods
///////////////////////////////////////////////////////////////////
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    summary: function () {
        this.summary = (`${this.firstName} is a ${this.calcAge()} year old ${this.job} ${this.hasDriversLicense ? 'with' : 'without'} a drivers license.`)
        return this.summary
    }

};

console.log(jonas.calcAge());
console.log(jonas.age);

//Challenge
console.log(jonas.summary());
*/
///////////////////////////////////////////////////////////////////
//                      Coding challenge #3
///////////////////////////////////////////////////////////////////
/*
const mark = {
    weight: 78,
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: 'Mark Miller',
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

const john = {
    weight: 92,
    firstName: 'John',
    lastName: 'Smith',
    fullName: 'John Smith',
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}
console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI is ${mark.calcBMI()}, which is higher than ${john.fullName}'s BMI of ${john.calcBMI()}.`)
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI is ${john.calcBMI()}, which is higher than ${mark.fullName}'s BMI of ${mark.calcBMI()}.`)
};
*/
/////////////////////////////////////////////////////////////////////                   Iteration: The "for" Loop
///////////////////////////////////////////////////////////////////
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/
/////////////////////////////////////////////////////////////////////                           Looping Arrays
///////////////////////////////////////////////////////////////////
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
//i is a typical counter for loops
for (let i = 0; i < jonas.length; i++) {

    //reading an array
    console.log(jonas[i], typeof jonas[i]);

    //filling an array
    //types[i] = typeof jonas[i];
    //types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
*/
/////////////////////////////////////////////////////////////////////               Continuing and breaking loops
///////////////////////////////////////////////////////////////////
/*
//break = terminate the loop
//continue = stop, then start again at another point

//continue
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; //only does strings
    console.log(jonas[i]);
};

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] == 'string') continue; //skips strings
    console.log(jonas[i]);
};

//break
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; //stops after 1st #
    console.log(jonas[i]);
};
*/
/////////////////////////////////////////////////////////////////////                          Backwards loops
///////////////////////////////////////////////////////////////////
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
};
*/
/////////////////////////////////////////////////////////////////////                           Loops in loops
///////////////////////////////////////////////////////////////////
/*
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        for (let RIR = 5; RIR >= 0; RIR--) {
            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} for ${RIR} RIR.`);
        }
    }
};
*/
/////////////////////////////////////////////////////////////////////                           While loop
///////////////////////////////////////////////////////////////////
/*
//for loop review
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}!`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
}
*/
/////////////////////////////////////////////////////////////////////                           Challenge #4
///////////////////////////////////////////////////////////////////
/*
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

const tips = []
const totals = []

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(tips);
console.log(totals);
/////////////////////////////////////////////////////////////////////                   Bonus challenge (half-failed)
///////////////////////////////////////////////////////////////////

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
*/
