const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");

const dataText = fs.readFileSync(`${__dirname}/data.json`);
const data = JSON.parse(dataText);
console.log(__dirname);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  const { query, pathname } = url.parse(req.url, true);

  switch (pathname) {
    case "/": {
      const bf = await fsPromises.readFile(`${__dirname}/pages/homepage.html`);
      res.end(bf);
      break;
    }
    case "/products": {
      const bf = await fsPromises.readFile(`${__dirname}/pages/productsPage.html`);
      let text = bf.toString();
      let productsText = "";
      for (let i = 0; i < data.length; i++) {
        productsText += `<div class="product-card">
                        <h3>${data[i].title}</h3>
                        <img src="${data[i].thumbnail}" alt='product-image' height='200'>
                        <p>${data[i].description}</p>
                        <a href="/view?id=${data[i].id}" target="_blank">More</a>
                    </div>`;
      }
      text = text.replace("$PRODUCTS$", productsText);
      res.end(text);
      break;
    }
    case "/view": {
      const product = data.find(elem => elem.id === parseInt(query.id));
      res.end(`
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f0f0f0;
              }
              .product-view {
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                margin: 0 auto;
              }
              .product-view img {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
              }
              .product-view h2 {
                margin-top: 0;
              }
              .product-view p {
                margin: 10px 0;
              }
            </style>
          </head>
          <body>
            <div class="product-view">
              <h2>${product.title}</h2>
              <img src="${product.thumbnail}" alt='product-image'>
              <p>${product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: ${product.rating}</p>
            </div>
          </body>
        </html>
      `);
      break;
    }

    default: {
      res.end("<h2>Oops! Page not found...</h2>");
    }
  }
});

app.listen(1400, () => {
  console.log("--------- Server Started ----------");
});
