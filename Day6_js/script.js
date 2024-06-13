

//using getElementsByTagName
// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title =  secondSection.getElementsByTagName('h4');
// title[0].innerText = 'js Callback'

// using query Selector
// const title = document.querySelectorAll('section')[1].querySelector('h4');
// title.innerText = "Js callback";
// title.style.color = 'brown';
// title.className = 'cs1';
// title.setAttribute('name','ashish');

//adding a new p tag in a section dom (creating and attaching)
// const  p = document.createElement('p');
// const se =  document.getElementsByTagName('section')[0];
// p.textContent = 'Hi i am new <p> tag'
// se.appendChild(p);

// se.append('hello world!')
// se.appendChild('hello world!') it will not work

// Node v element 
// html collection vs Array

// events
// function inputClicked() {
//     console.log('inputClicked');  
// }

// function inputKeyDown(e) {
//     console.log('inputKey Down');
//     console.log(e.target.value);
    
// }
// function inputChange(e) {
//     console.log('inputChange',e);
//     console.log(e.target.value); 
    
// }


// function handleUserName(e) {
//     console.log('Name:', e.target.value);
    
// }
// function handleUserAge(e) {
//     console.log('useremail:', e.target.value);
    
// }
// function handleSubmit(e) {
//     e.preventDefault();
//     const arr= e.target;
//     const username = e.target[0].value
//     const useremail = e.target[1].value
//     console.log(username, useremail);

//     const form = document.getElementsByTagName('form')[0];
//     form.style.display='none';


//     renderCard(username, useremail)
    

// }

// const renderCard = (n,e)=>{
//     const root =document.getElementById("root");
//     root.setAttribute('class', 'card')
//     root.innerHTML =
//     `<h3 class="name">Name is: ${n}</h3>
//     <h3 class="email">Email is: ${e}</h3>`;
    
// }




// const showResult = (res) =>{
//     console.log(res);
//     const root = document.getElementById('root')
//     root.innerHTML = res

// }
// const printPrity = (res) =>{
//     console.log(res);
//     const root = document.getElementById('root')
//     root.style.color ='green';
//     root.innerHTML = res

// }

// const sum =(a,b)=>{
//     // let k = a+b;
    
//     // showResult(k);
//     // console.log(k);
//     const res = a+b;
//     return res;
// }
// const mul =(a,b)=>{
//     let k = a*b;
//     console.log(k);
//     showResult(k);
// }
// const sub =(a,b)=>{
//     let k = a-b;
//     console.log(k);
//     showResult(k);
// }

// showResult(sum(10,20));
// printPrity(res)

// const showResult = (res) =>{
//     console.log(res);
//     const root = document.getElementById('root')
//     root.innerHTML = res

// }
// const printPrity = (res) =>{
//     console.log(res);
//     const root = document.getElementById('root')
//     root.style.color ='green';
//     root.innerHTML = res

// }

// const sum =(a,b, fn)=>{
    
//     const res = a+b;
//     fn(res);
// }

// const rr = sum(10,20, printPrity);

// const payWithRazorPay = ()=>{
//     console.log('Payment processingg with rozerpay');
// }
// const payWithPaytm = ()=>{
//     console.log('Payment processingg with Paytm');
// }
// const userDetails = (name, age, seat, processPayment)=>{
//     console.log(`Booking for ${name} whose age is ${age}`);
    

//     //................................................
//     if (true) {
//         processPayment();
//     } else{
//         console.log('error');
//     }
// }
// userDetails('ashish', 19, "ind", payWithPaytm )



// const arr = [1,2,3,4];
// const arr1 = arr.shift();
// console.log(arr.shift());
// console.log(arr1);

// const arr = ["apple","mango","banana"]

// const printValues= (a,b,c)=>{
//     console.log("value is : ",a);
//     console.log("index is : ",b);
//     console.log("...................");
// }

// // for (let index = 0; index < arr.length; index++) {
// //     printValues(arr[index],index, arr)
// // }

// arr.forEach(printValues);


const arr = [1,2,3,4]
// let sum =0;
// arr.forEach((a) => {
//  sum = sum +a;
// })
// console.log(sum);

const isEven = (x)=>{
    if(x%2==0) return true;
    else return false;
}
const res = arr.filter(isEven);
console.log('res',res);
console.log('array',arr);


