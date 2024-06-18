

const pr1 = fetch("https://dummyjson.com/products");
pr1.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
        console.log(data);
        createUI(data);
    }).catch((err) => {
        console.error("Error occurred during data parsing: ", err);
    });
}).catch((err) => {
    console.error("Error occurred during fetch: ", err);
});

const main = document.getElementById('root');

function createUI(data) {
    const products = data.products;
    main.innerHTML = "";  // clears previous data  
    console.log(products);

    for (let i = 0; i < products.length; i++) {
        const newCard = document.createElement("div");
        newCard.className = "product-card";

        const title = document.createElement('h3');
        title.innerText = products[i].title;

        const img = document.createElement('img');
        img.setAttribute('src', products[i].thumbnail);

        const description = document.createElement('p');
        description.innerText = products[i].description;

        const price = document.createElement('p');
        price.className = 'price';
        price.innerText = `$${products[i].price}`;

        newCard.appendChild(img);
        newCard.appendChild(title);
        newCard.appendChild(description);
        newCard.appendChild(price);

        main.appendChild(newCard);
    }
}


function searchProducts(e) {
    const searchedText = e.target.value;
    fetch(`https://dummyjson.com/products/search?q=${searchedText}`)
    .then((res)=>{
        res.json().then((data)=>{
            createUI(data)
        }).catch((err)=>{
            console.error('Error occurred during data parsing: ', err);
        })
    })
    
}

