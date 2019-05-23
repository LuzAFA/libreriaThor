const http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url'),
    events = require('events').EventEmitter;
contenido = require('./content.js').data;

eventos = new events();

http.createServer((request, response) => {

    let htmlContent = "";
    let urlPath = path.basename(url.parse(request.url).pathname);

    switch (urlPath) {
        case "":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.home);
                response.write(htmlContent);
                response.end();
            });
            break;
        case "consulta":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.consulta);
                response.write(htmlContent);
                response.end();
            });
            break;
        case "eventos":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
            });
            htmlContent = remplaceContent(htmlContent, contenido.plantilla);
            break;
    }


    fs.readFile('../dataContent/comics.json', (Error, data) => {
        let datos = JSON.parse(data);
        //console.log(datos.comics[0].link + " ");
    })

}).listen(8080);

eventos.once('lecJson', () => {

});

function remplaceContent(file, data) {
    let htmlTexto = file,
        cambios = file.match(/[^\{\{\}\}]+(?=\}\})/g);
    if (cambios != null) {
        cambios.forEach((cambio) => {
            htmlTexto = htmlTexto.replace(`{{${cambio}}}`, data[cambio]);
        });
        return htmlTexto;
    }
}





