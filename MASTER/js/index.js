const http = require('http').createServer();

let miServidor = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1> Prueba desde node en git pages </h1> ')
};

http.on('request', miServidor).listen(8080);
console.log('conectado');