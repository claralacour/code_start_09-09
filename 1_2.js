console.log("script loaded...")

//opgave 1
let age = 27;
age = 27 + 5;
age = 50;
const pi = 3.14159;
let name = "Clara";
let price = 19.99;
let isLogged = false;

console.log(age)

//opgave 1.5
let emptyArray = [];

let fruits = ['strawberry', 'apple', 'grapes'];
//ændrer 3. element i array
console.log(fruits[1]);
fruits[2] = 'melon';

console.log(fruits);
//tilføjer et element til array
fruits.push('banan');

console.log(fruits);
//fjerner første element fra array
fruits.shift();

console.log(fruits);

//find specifikt index 
console.log(fruits.indexOf('banan'));

//merge 2 arrays 
let berries = ['blueberry', 'rasberry', 'blackberry'];

let fruitsAndBerries = fruits.concat(berries);
console.log(fruitsAndBerries);

//sort arrays ascending order
const numbers = [3, 2, 5, 88, 95, 40, 6];
numbers.sort();
console.log(numbers);

//copying array
let copyiedArray = [...numbers];
console.log(copyiedArray);

//opgave 2
//1
let sum = 10 + 5;
console.log(sum);

//2
let difference = 20 - 8;
console.log(difference);

//3
let product = 6 * 7;
console.log(product);

//4 
let quoetient = 50 / 10;
console.log(quoetient);

//5 
let total = 15;
total += 5;
console.log(total);

//6
let balance = 100;
balance -= 25;
console.log(balance);

//7
let amount = 10;
amount *= 3;
console.log(amount);

//8
let quantity = 100;
quantity /= 5;
console.log(quantity);

//9
let result = (10 + 5) * 2;
console.log(result);

//10
let x = 3;
x *= 4;
x += 2;
console.log(x); 

//11
let mixedResult = (20/4) + (3*2);
console.log(mixedResult);

//12
let y = 15;
y -= 7;
y /= 2;
console.log(y);

//13
let isGreaterThan = 10 > 5;
console.log(isGreaterThan);

//14
let isLessThanOrEqual = 7 <= 7;
console.log(isLessThanOrEqual);

//15
let isEqual = 3 == 3;
console.log(isEqual);
