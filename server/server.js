
// requires
require('./config/config'); // Configuraciones de puertos

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT;


// middlewares routes
app.get('/caka', (req, res) => {
    res.json({
        msg: 'Hola mundo',
        port: process.env.PORT,
        node: process.env.NODE_ENV
    })
})

app.get('/caka2', (req, res) => {
    res.json({
        msg: 'Hola2 mundo',
        port: process.env.PORT,
        node: process.env.NODE_ENV
    })
})

app.get('/caka3', (req, res) => {
    res.json({
        msg: 'Hola3 mundo',
        port: process.env.PORT,
        node: process.env.NODE_ENV
    })
})

app.use(require('./routes/usuario'))


// Conexion a la DB
mongoose.connect(process.env.URLDB, (err, res) =>{
    if(err) throw err;
    console.log(`Base de datos conectada.`)
});



// Server al a escucha
app.listen(port, ( ) => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})







// qwe