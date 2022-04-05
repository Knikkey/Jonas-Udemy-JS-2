"use strict";
/*
///////////////////////////////////////////////////////////////////
//                      Functions practice
///////////////////////////////////////////////////////////////////
function describeCountry(country, population, capitalCity) {
    const countryStats = `${country} has ${population} million people and its capital city is ${capitalCity}.`
    return countryStats
}
const weebLand = describeCountry('Weebland', 3, 'Basement');
console.log(weebLand);
const dummyLand = describeCountry('Dummy Land', 100, 'Your House');
console.log(dummyLand)
const idk = describeCountry('IDK', 1, 'IDK');
console.log(idk)

///////////////////////////////////////////////////////////////////
//           Functions Declarations vs. Expressions practice
///////////////////////////////////////////////////////////////////
function percentageOfWorld1(country, population) {
    return (population / 7900) * 100
}
const china = percentageOfWorld1('China', 1441);
console.log(china);
const usa = percentageOfWorld1('USA', 400);
console.log(usa);
const korea = percentageOfWorld1('Korea', 100);
console.log(korea);

const percentageOfWorld2 = function (country, population) {
    return country + ' accounts for ' + (population / 7900) * 100 + ' % of the world population!';
}
const china2 = percentageOfWorld2('China', 1441);
console.log(china2);

//////////////////////////////////////////////////////////////////
//                  Arrow functions practice
//////////////////////////////////////////////////////////////////
const percentageOfWorld3 = (country, population) => {
    const percent = population / 7900 * 100;
    return `${country} has ${percent} of the world population.`
}
const china3 = percentageOfWorld3('China', 1441);
console.log(china3);

//////////////////////////////////////////////////////////////////
//          Functions calling other functions practice
///////////////////////////////////////////////////////////////////
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

function describePopulation(country, population) {
    const populationPercentage = percentageOfWorld1(population)
    const fuck = `${country} has ${population} million people, which is about ${populationPercentage} % of the world.`
    console.log(fuck)
}
describePopulation('China', 1441);
describePopulation('USA', 5);

///////////////////////////////////////////////////////////////////
//                      Array Practice
///////////////////////////////////////////////////////////////////
const populations = [1441, 100, 200, 300];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/

/////////////////////////////////////////////////////////////////////              Basic Array Operations (Methods) practice
///////////////////////////////////////////////////////////////////
/*
const neighbors = ['Mexico', 'Canada'];
console.log(neighbors);
neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European Country :D');
}

neighbors[neighbors.indexOf('Canada')] = 'Southern Canada';
console.log(neighbors);
*/
///////////////////////////////////////////////////////////////////
//                      Objects practice
///////////////////////////////////////////////////////////////////
/*
const myCountry = {
    country: 'USA',
    capital: 'Washington DC',
    language: 'English',
    population: 329.5,
    neighbors: '2'
};

///////////////////////////////////////////////////////////////////
//                Dot vs. Bracket Notation practice
///////////////////////////////////////////////////////////////////

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors} neighboring countries, and the capital is ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
*/
/////////////////////////////////////////////////////////////////////                           Object Methods
///////////////////////////////////////////////////////////////////
/*
const myCountry = {
    country: 'USA',
    capital: 'Washington DC',
    language: 'English',
    population: 329.5,
    neighbors: '2',

    describe: function () {
        this.describe = (`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors} neighboring countries, and the capital is ${this.capital}.`)
        return this.describe;
    },

    checkIsland: function () {
        this.isIsland = this.neighbors = 0 ? true : false
        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
*/

/////////////////////////////////////////////////////////////////////                       "for" loop practice
///////////////////////////////////////////////////////////////////
/*
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`)
};
*/
/////////////////////////////////////////////////////////////////////          Looping arrays, breaking, continuing practice
///////////////////////////////////////////////////////////////////
/*
const populations = [1441, 100, 200, 300];

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);
*/
/////////////////////////////////////////////////////////////////////                       Loop in Loop practice
///////////////////////////////////////////////////////////////////
/*
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/
/////////////////////////////////////////////////////////////////////                       While loop practice
///////////////////////////////////////////////////////////////////
/*
const populations = [1441, 100, 200, 300];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
*/
/*
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
*/
