const path = require('path');
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, { 'content-type': 'text/html' })

    switch(req.url) {
        case '/':
            fs.createReadStream(path.join(__dirname, 'templates', 'index.html')).pipe(res);
            break;
        case '/about':
            fs.createReadStream(path.join(__dirname, 'templates', 'about.html')).pipe(res);
            break;
        case '/contact-me':
            fs.createReadStream(path.join(__dirname, 'templates', 'contact-me.html')).pipe(res);
            break;
        default:
            fs.createReadStream(path.join(__dirname, 'templates', '404.html')).pipe(res);
            break;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
