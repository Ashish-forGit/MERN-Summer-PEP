const http = require("http");
const fsPromises = require('fs/promises')

const app = http.createServer(async (req, res) => {

  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == '/') {
    const stream = await fsPromises.readFile('./pages/homepage.html')
    res.end(stream);
  } 
  else if(req.url === '/products'){
    const stream2 = await fsPromises.readFile('./pages/products.html')
    res.end(stream2);
  }else{
    res.end(" :(  Page not fond")
  }

  
});

const port = 1400;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
