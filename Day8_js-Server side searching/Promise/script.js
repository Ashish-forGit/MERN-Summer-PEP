


// console.log('start');
// const pr = new Promise((resolve, reject)=>{   // constructor to make promise 
//     let flag = true;
   
//     if (flag) {
        
//         setTimeout(()=>{
//             resolve(["apple", "mango"])
//         },1000)
//     } else {
//         reject('not done')
//     }
// });

// console.log('mid');

// setTimeout(()=>{
//     console.log('done')
// },1000)

// // console.log(pr);

// pr.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log("error ",err);
// })
// console.log('end');

// let count =0;
// let id;
// const cb = () =>{
//     count++;
//     console.log('done');
//     if (count==4) {
//         clearInterval(id)
//         console.log('work done');
//     }
// }


// const time = 1000
// id = setInterval(cb, time)



const arr = ['apple', 'orange', 'mango','pineapple'];

// console.log(arr.length);

// const str = arr.toString();
// console.log(str);

// const str2 = arr.join(',_')
// console.log(str2);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift());
// console.log(arr);

const arr2 = [1,2,[3,[69],4,5],[6]];
// console.log(arr2.flat(2));
// console.log(arr2);

//splice = push, pop, shift, insert, delete

// const arr3 = ['A','B','C','D']
// console.log(arr3.splice(0,1));
// console.log(arr3);
// console.log(arr3.splice(0,1,'add'));
// console.log(arr3);

// console.log(arr3.splice(0,2,'x','y','z'));
// console.log(arr3);

// const res1 =arr.forEach((a,b,C)=>{  // doesent return anything
//     console.log(a,b,C); 
//     return 'ok'

// })

// const res2 =arr.map((elem,b,C)=>{  // returns value
//     // console.log(a,b,C);
//     return elem
// })

// console.log(res1); 
// console.log(res2); 


// if (arr==res2) {
//     console.log('yes');
    
// }else{
//     console.log('no');
// }

// const arr3 = ['A','Bb','CD','Dr']
// const res = arr3.filter((a,b,c)=>{
//     if(b%2==0){
//         return true;
//     }else false;
// })

// console.log(res);

const arr3 =  [" ",1,2,3,4];
const res = arr3.reduce((a,b)=>{
    return a + b
})

console.log(res);
