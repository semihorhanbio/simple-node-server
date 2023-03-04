const path = require('path');
const fs = require('fs');
const http = require('http');

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

server.listen(8080, () => {
  console.log('Listeninig on port 8080.....');
});
