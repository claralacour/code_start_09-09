//opg 1
for (let i = 1; i < 6; i++) {
    console.log(i)
};

//opg 2
for (let i = 2; i < 11; i++) {
    if (i % 2 == 0)
        console.log(i)
};

//opg 3
for (let i = 65; i <= 70; i++) {
    console.log(String.fromCharCode(i))
};

//opg 4
for (let i = 10; i >= 1; i--) {
    console.log(i)
};

//opg 5
console.log('opgave 5');
let i = 0;
while (i < 6) {
    console.log(i);
    i++;
};

//opg 6
console.log('opgave 6');
let ii = 1;
while (ii < 11) {
    ii++;
    if (ii % 2 == 0)
        console.log(ii)
};

//opg 7
console.log('opgave 7');

let alphabet = 65;

while (alphabet < 71) {
    console.log((String.fromCharCode(alphabet)))
    alphabet++;
};

//opg 8
console.log('opgave 8');

let oli = 11;
while (oli >= 1) {
    oli--;
    console.log(oli)
};

//opg 9
console.log('opgave 9');

let numbis = [66, 33, 88, 99, 11];
for(let numbisse of numbis){
    console.log(numbisse);
}

//opg 10
console.log('opgave 10');

let streng = 'Hejsa';
for(let letter of streng) {
    console.log(letter)
};