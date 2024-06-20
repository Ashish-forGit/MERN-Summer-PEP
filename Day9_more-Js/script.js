// const student ={
//     username : 'ashish',
//     rollno : 12,
//     city: 'delhi'
// }

//destructuring in objects
// const {username} = student;
// const {username,city} = student;
// console.log(username);
// console.log(username,city);


// const fruits = ["apple","banana","mango"];
// console.log(fruits[0]);
// const [i1,,i2] = fruits;
// const [,i3,] = fruits;
// console.log(i1,i2); //destructuring array
// console.log(i3); //destructuring array

// const student ={
//         username : 'ashish',
//         rollno : 12,
//         city: 'delhi',
//         hobbies: "['painting','dancing','ajvkh']"
//     }

    

//     const {hobbies} = student;
//     hobbies[0] = 'roaming';
//     console.log(hobbies); //output: ['painting','dancing','ajvkh']
//     console.log(student); //output: { username: 'ashish', rollno: 12

// rest ===> to pack the values
// spread ===> to unpack the values;;

// const s1 ={
//         username : 'ashish',
//         rollno : 12,
//         city: 'delhi',
//         hobbies: ['painting','dancing','ajvkh']
//     }
// const s2 = {...s1};  // spread 


// s2.username = 'ashish2';
// s2.hobbies[0] ='playing';
// console.log(s1);
// console.log(s2);




// function sum(...data) {   //rest oper
//     return data.filter((acc, val) =>{
//         return acc , val
//     } ,0);
// }

// function sum(...data) {   //rest oper
//     return data.reduce((acc, val, i, arr) =>{
//         console.log(acc,val,i,arr)
//         return acc * val;
//     },-1);
// }

// console.log(sum(3,4,7,8)); 

// function getData() {
//     const pr =fetch('https://dummyjson.com/products');
//     pr.then((res)=>{
//         const pr2 = res.json();
//         pr2.then((data)=>{
//             console.log(data);
//         })
//     })
// }

// getData();
// async await


 async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(res);
    console.log(data);
    
    
}
getData();