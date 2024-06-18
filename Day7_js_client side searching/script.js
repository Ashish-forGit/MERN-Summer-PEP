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

// console.log("start");
// setTimeout(()=>{
//     console.log("A");
// },0)
// console.log("mid");
// function abc() {
//     console.log("B");

// }
// function efg() {
//     console.log("c");
//     setTimeout(()=>{
//         console.log("D");
//     },0)
// }
// setTimeout(abc,0)
// efg();
// console.log("end");

// Promises

// const pr = fetch("https://api.github.com/users/Ashish-forGit");

// console.log(pr);
// const cb2 = (res)=>{
//     console.log('fetch -', res);
//     res.json();
// }

// pr.then(cb1).catch(cb2);

// pr.then((res)=>{
//     console.log('fetch +', res);
//     const pr2 = res.json();

//     pr2.then((data)=>{
//         console.log(data);
//     })

// }).catch((res)=>{
//     console.log("fetch -",res);
// })
// 
// const root = document.getElementById('root');
// const pr = fetch("https://dummyjson.com/products");
// console.log(pr);

// pr.then((res) => {

//   res.json().then((data) => {
//     renderUI(data);
//   }).catch((error)=>{
//     console.error("error fetching data ",error);
//   })

// }).catch((err) => {
//   console.log("error",err);
// });

// const renderUI = (data) =>{
//     const products = data.products
//     console.log("data fetched=> products", products);

    
//     for (let index = 0; index < products.length; index++) {
//         // root.append(`${products[index].title} \n`);

//         const card = document.createElement('div');
//         card.className = 'product-card'
//         card.innerHTML =
//         `<img src="${products[index].images} alt="${products[index].title}">
//         <h3> ${products[index].title}</h3>
//         <p>${products[index].price}</p>
//         `
//         root.appendChild(card)
//     }
// }



const root = document.getElementById('root');
const searchInput = document.getElementById('search');

const pr = fetch("https://dummyjson.com/products");
console.log(pr);

pr.then((res) => {
  res.json().then((data) => {
    renderUI(data.products);

    // Add event listener to search input
    searchInput.addEventListener('input', (event) => {

      const searchTerm = event.target.value.toLowerCase();

      const filteredProducts = data.products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
      renderUI(filteredProducts);
    });

  }).catch((error)=>{
    console.error("error fetching data ",error);
  })
}).catch((err) => {
  console.log("error", err);
});

const renderUI = (products) => {
  root.innerHTML = '';  // Clear previous content

  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p class="price">$${product.price}</p>
    `;
    root.appendChild(card);
  }
}
