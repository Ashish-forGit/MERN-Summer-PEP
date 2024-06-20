//internal modules 

// const { dir, log } = require('console');
const { error } = require('console');
const fs = require('fs');
const { log } = require('util');

// const data = fs.readFileSync('./text.txt')  // will give buffer data 
// console.log(data.toString());

// const data2 = fs.readFileSync('./text.txt', 'utf-8') //encoding 
// console.log(data2);

// console.log('start');
// const data = fs.readFile('./text.txt','utf-8', (error,data)=>{ // asynchronus with call back
//     if(error){
//         console.log('error occured: ',error);
//     } else{
//         console.log(data);
//     }
// });
// console.log('end');

// const write = fs.writeFileSync("./text2.txt","helllo"); // writeFileSync
// const data = fs.readFile('./text2.txt','utf-8', (error,data)=>{ // asynchronus with call back
//     if(error){
//         console.log('error occured: ',error);
//     } else{
//         console.log(data);
//     }
// });

// const write = fs.writeFile("./text2.txt","helllo", (err, data)=>{     // writeFile
//     console.log(err,data);
// });


// const data = fs.readFile('./text2.txt','utf-8', (error,data)=>{ // asynchronus with call back
//     if(error){
//         console.log('error occured: ',error);
//     } else{
//         console.log(data);
//     }
// });

const fsPromises = require('fs/promises');  

// console.log('start');
// fsPromises.readFile('text.txt', 'utf-8')
// .then((data) => {console.log(data);})
// .catch((error) => {console.log(error);})
// console.log('end');

// fsPromises.writeFile('text.txt', "hi") // writeFile()
// .then(()=>{console.log("data written ");})
// .catch((err)=>{console.log('error writing data in file',err);});


// fsPromises.appendFile('text.txt', "hi") // appenFile()
// .then(()=>{console.log("data written ");})
// .catch((err)=>{console.log('error writing data in file',err);});

//  async function calMathMarks(){
//     try{
//         const data =  await fsPromises.readFile('data.json','utf-8');
//         const mathMarks = JSON.parse(data).mathMarks;
//         const sum = mathMarks.reduce((a,b)=> a+b,0);
//         console.log(sum);
//     } catch(err){
//         console.error(err);
//     }
//  }

//  calMathMarks()



// async function readAndCalculate() {
//   try {
//     const data = await fsPromises.readFile('./data.json', 'utf-8');
//     const students = JSON.parse(data);
//     const mathScores = students.map(student => student.mathScore);
//     const sum = mathScores.reduce((acc, current) => acc + current, 0);
//     console.log(`Sum of math scores: ${sum}`);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readAndCalculate();

const pr = fsPromises.readFile('data.json','utf-8');

// pr.then((data)=>{
//     const array = JSON.parse(data);
//     console.log(array);
//     let mt =0, st=0;
//     for (let i = 0; i < array.length; i++) {
//         mt += array[i].mathScore;
//         st += array[i].scienceScore;

        
//     }
//     console.log(`Sum of math scores: ${mt}`);
//     console.log(`Sum of science scores: ${st}`);
// })
// .catch((err)=>{console.log(err);})

// find data if i provide id only;
pr.then((data)=>{
    const array = JSON.parse(data);
    // console.log(array);
    const obj = getObjectById(3,array);
    console.log(obj);

})
.catch((err)=>{console.log(err);})

function getObjectById(id, array) {
    return array.find((item) => item.id === id);
  }