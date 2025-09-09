//opg 1
let more = 1;
let less = 0;

if (more > 0 && less > 0) {
    console.log('flot')
} else {
    console.log('knap så flot')
};

//opg 2
let student = 18;
let isStudent = false;

if (student >= 18 || isStudent == true) {
    console.log('ur student! gz')
} else {
    console.log('nikssss')
};

//opg 3
let isLoggedOn = false;

if (!isLoggedOn) {
    console.log('yes den er falsk')
} else {
    console.log('den er sgu god nok')
};

//opg 4 

//opg 5

//opg 6
let EvenAndNumber = 22;
if (EvenAndNumber % 2 == 0 && EvenAndNumber > 10) {
    console.log('even number and greater than 20')
} else {
    console.log('niks ikke godt nok!!')
};

//opg 7
const over10 = 7;

if (over10 % 2 == 0 && over10 > 10) {
    console.log("du er et lige tal og større end 10");
} else if (over10 % 2 == 0 && over10 < 10) {
    console.log("Du er et lige tal men ikke større end 10");
} else if (over10 % 2 == 1 && over10 > 10) {
    console.log("Du et ulige tal, og større end 10");
} else if (over10 % 2 == 1 && over10 < 10) {
    console.log("Du er et ulige tal og mindre end 10");
}

//opg 8 
let combiNumber = 15;

if(combiNumber < 20 && combiNumber > 10) {
    console.log('det er lige i midten')
} else {
    console.log('du sgu ikke i midten')
};

//opg 9 
const stringVal = "15";

if (stringVal === 15) {
    console.log('jaja det er tæt nok på')
} else {
    console.log('det er vist ikke samme datatype')
};  

//opg 10
let kale = ['spidskål', 'blomkål', 'grønkål'];
if (kale.includes('spidskål')) {
    console.log('der er kål i det der')
} else {
    console.log('ikke noget kål til dig!')
};