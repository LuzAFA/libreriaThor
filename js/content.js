let fs = require('fs');
let data = {
    "home": {
        "contenidoPagina": "<h1> este es el home</h1>",
    },
    "consulta": {
        "contenidoPagina": function () {
           return fs.readFileSync('../html/busqueda.html');
        },

        "plantilla":
            {
                "title":
                    "contenido para pagina plantilla.html q es el index  ",
                "content1":
                    "este es el primer contenido de la otra pag ",
                "content2":
                    "segundo contenido tbn de la segunda pag XD",

                "img":
                    "https://vignette.wikia.nocookie.net/marioparty/images/5/5e/Estrella.png/revision/latest?cb=20121216194216&path-prefix=es"
            }
        ,

    },
}

module.exports.data = data;