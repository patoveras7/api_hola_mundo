const http = require('http');//La constante http ahora puede gestionar peticiones HTTP
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {//La función que recibe http.createServer se va a ejecutar 
    //cada vez que hay una petición al puerto de escucha. El servicio http comienza a escuchar en el puerto y hostname
    //configurado con server.listen(port, hostname, () => {.....});
    
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.end('{ "mensaje": "Hola Mundo!!"}');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
