const sum = (a,b)=>{
    return a+b;
}
const mul = (a,b)=>{
    return a*b;
}
const sub = (a,b)=>{
    return a-b;
}
const add2 = (a)=>{
    const res = sum(a,2)
    return res;
}





// module.exports = [sum, mul];
console.log('hello');
module.exports = {add2, mul ,sub};
