// const {add2, mul} = require('./myMath.js')
// const {sub} = require('./myMath.js')



// const [add, mul] = require('./myMath.js');
// console.log(sum);

// const res = sum[0](10,20);
// const res2 = sum[1](10,20);

// const res3 = add(10,20);

// const res3 = add2(10,20);
// const res4 = mul(10,20);
// const res5 = sub(10,20);

// console.log(res3);
// console.log(res4);
// console.log(res5);

var figlet = require("figlet");

figlet("Deepraj!!", (err, data)=>{
    if(err){
        console.log("something went wrong" , err);
    } else{
        console.log(data);
    }
  
  
});
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "00",
    T : "U "
}));