const http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url'),
    events = require('events').EventEmitter;
contenido = require('./content.js').data;

eventos = new events();

http.createServer((request, response) => {
    contador++;
    let htmlContent = "";
    fs.readFile('../html/home.html', (error, dato) => {
        htmlContent += dato.toString();
        let urlPath = path.basename(url.parse(request.url).pathname);

        switch (urlPath) {
            case "pag1":
                htmlContent = remplaceContent(htmlContent, contenido.pag1);
                break;
            case "pag2":
                htmlContent = remplaceContent(htmlContent, contenido.pag2);
                break;
            case"about":
                htmlContent = remplaceContent(htmlContent, contenido.about);
                break;
            case "":
                //var output = mustache.render(template, contenido.pag1);
                break;
        }
        response.write(htmlContent);
        response.end();

    });

    fs.readFile('../json/comics.json', (Error, data) => {
        let datos = JSON.parse(data);
        console.log(datos.comics[0].link + " ");
    })
    
}).listen(8080);

eventos.once('lecJson', () => {

});

function remplaceContent(file, data) {
    let htmlTexto = file,
        cambios = file.match(/[^\{\{\}\}]+(?=\}\})/g);

    cambios.forEach((cambio) => {
        htmlTexto = htmlTexto.replace(`{{${cambio}}}`, data[cambio]);
    });
    return htmlTexto;
}

