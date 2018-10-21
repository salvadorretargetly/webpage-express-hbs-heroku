const http = require("http");




http.createServer((req, res) => {


        res.writeHead(200, { 'Content-type': 'applications/json' });


        let ret = {
            nombre: 'salvador',
            apellido: 'Ríos velázquez',
            url: req.url
        }
        res.write(JSON.stringify(ret));
        //Con el end indicamos que ya terminamos de generar la rta , sino queda colgado
        res.end();
    })
    .listen(8080);


console.log("Escuchando el puerto 8080");