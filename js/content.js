let fs = require('fs');
let data = {
    "home": {
        "contenidoPagina": "<h1> este es el home</h1>",
    },
    "recomendados": {

        "contenidoPagina": function () {
            return fs.readFileSync('../html/recomendados.html');
        },
    },
    "eventos": {
        "contenidoPagina": function () {
            return fs.readFileSync('../html/eventos.html').toString();
        }
    },
    "busqueda": {
        "contenidoPagina": function () {
            return fs.readFileSync('../html/busqueda.html').toString();
        }
    }
}
module.exports.data = data