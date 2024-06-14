// console.log('start');
// function abc(params) {
//     console.log(params*2);
//     temp(params/2);
// }
// abc(8);
// console.log('mid');
// function temp(params) {
//     console.log(params/2);
// }
// console.log("end");



// const button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", cb);
// function cb() {
//   console.log("Button Clicked");
// }


// const input = document.getElementsByTagName("input")[0];
// input.addEventListener("keyup", cb);
// function cb(e) {
//   console.log("Input is: ", e.target.value);
// }

//Aysnchronous work
// console.log('start');
// let delay =1000;
// function cb() {
//     console.log('CB called');
// }
// setTimeout(cb,delay);
// console.log('end');


// console.log('start');
// setTimeout(()=>{
//     console.log('cb called');
//     setTimeout(()=>{
//         console.log("internal cb called");
//     },1000);

// },1000)
// console.log('end');

console.log("start");
setTimeout(()=>{
    console.log("A");
},0)
console.log("mid");
function abc() {
    console.log("B");

}
function efg() {
    console.log("c");
    setTimeout(()=>{
        console.log("D");
    },0)
}
setTimeout(abc,0)
efg();
console.log("end");


