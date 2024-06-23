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
      const bf = await fsPromises.readFile(
        `${__dirname}/pages/productsPage.html`
      );
      let text = bf.toString();
      let productsText = "";
      for (let i = 0; i < data.length; i++) {
        productsText += `
          <div class="product-card">
              <h3>${data[i].title}</h3>
              <img src="${data[i].thumbnail}" alt="product-image">
              <p>${data[i].description}</p>
              <a href="/view?id=${data[i].id}" style="display: block; text-align: center; background-color: grey; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; transition: background-color 0.3s; margin-top: 10px;" target="_blank">View Details</a>
          </div>`;
      }
      text = text.replace("$PRODUCTS$", productsText);
      res.end(text);
      break;
    }
    case "/view": {
      const product = data.find((elem) => elem.id === parseInt(query.id));
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${product.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f0f0f0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .product-view {
              background: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
              max-width: 800px;
              margin: 20px auto;
              text-align: center;
            }
            .product-view img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              margin-bottom: 15px;
            }
            .product-view h2 {
              margin-top: 0;
              color: #333;
              font-size: 28px;
              font-weight: bold;
              text-align: center;
            }
            .product-view p {
              margin: 10px 0;
              line-height: 1.6;
              text-align: justify;
            }
            .product-view .price {
              color: #007bff;
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .product-view .rating {
              color: #28a745;
              font-size: 18px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="product-view">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="Product Image">
            <p>${product.description}</p>
            <p class="price">Price: $${product.price.toFixed(2)}</p>
            <p class="rating">Rating: ${product.rating}</p>
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
