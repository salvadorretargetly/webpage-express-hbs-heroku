const express = require('express')
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 8080;

//Middleware 
//Mediante la funcion app.use se puede crear diferentes layers de middleware , los middlewares son callbacks o instrucciones que se ejecutan
//Siempre , sin importar el path que se consulte
app.use(express.static(__dirname + "/public"))


hbs.registerPartials(__dirname + "/views/parciales");


app.set('view engine', 'hbs');

app.get('/', (req, res) => {


    res.render('home');
    /*
    let ret = {
        nombre: 'salvador',
        apellido: 'Ríos velázquez',
        url: req.url
    }*/
    //res.send(ret);
    //res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(port, () => {

    console.log("Escuchando peticiones en el puerto 8080");
});