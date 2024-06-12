console.log("hello js is loosely and dynamicaly typed");
var age; //decleration
age = 19; //initialization
console.log(age);

var age = 45; // reinitialization
console.log(age);

function abc(){
    var name= 'ashish'
    console.log(age);
}
abc();

// diff btw '===' and "=="
let a = 10;
let k = '10'
if(a == k){
    console.log(true);
}
else{
    console.log(false);
}

if(a===k){
    console.log(true);
}else{
    console.log(false);
}


function printhello() {
    console.log('hello');
}
printhello();

//arrow function
let username= (parms)=>{

    console.log('hii', parms);
}

console.log(username('ashish'));

let obj = {
    "name": 'ashish',
    "id": 23,
    "city": "patna",

};

// const input = prompt("Enter the property name (e.g., 'name' or 'id'):");
const input = 'id';
function work(input) {
    console.log(obj[input]);  
}

work(input);

//array
const arr = ["one", "two", 100];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

