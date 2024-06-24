const express = require('express');
const app = express();
const fsPromise = require('fs/promises');

app.use(express.json());

app.get('/products', async (req, res) => {
    const products = await getData();
    res.json({
        status: 'success',
        data: {
            products: products,
        }
    });
});

const getData = async () => {
    const text = await fsPromise.readFile("./data.json", { encoding: 'utf-8' });
    let products;
    try {
        products = JSON.parse(text);
    } catch (error) {
        products = [];
    }
    return products;
};

app.post('/products', async (req, res) => {
    const body = req.body;
    const products = await getData();

    let lastId = 1;
    if (products.length != 0) {
        lastId = products[products.length - 1].id + 1;
    }
    body.id = lastId;
    products.push(body);

    await fsPromise.writeFile("data.json", JSON.stringify(products));

    res.status(201).json({
        status: 'success',
        data: {
            product: body
        },
    });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const products = await getData();

    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Product not found'
        });
    }

    products[index] = { ...products[index], ...body };
    await fsPromise.writeFile("data.json", JSON.stringify(products));

    res.json({
        status: 'success',
        data: {
            product: products[index]
        }
    });
});

app.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const products = await getData();

    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Product not found'
        });
    }

    products[index] = { ...products[index], ...body };
    await fsPromise.writeFile("data.json", JSON.stringify(products));

    res.json({
        status: 'success',
        data: {
            product: products[index]
        }
    });
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    let products = await getData();

    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Product not found'
        });
    }

    products = products.filter(product => product.id !== parseInt(id));
    await fsPromise.writeFile("data.json", JSON.stringify(products));

    res.json({
        status: 'success',
        message: 'Product deleted successfully'
    });
});

const port = 1400;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
