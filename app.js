//Importamos la librería express necesaria para construir una API
const express = require("express");
//Importamos Body parser - convierte una petición recibida (POST-GET...) a objeto JSON
const bodyParse = require("body-parser");
//Utilizamos el archivo donde definimos el endpoint y el método a ejecutar (el controlador)
const route = require("./src/ruta/Route");
//Iniciamos express en la constante app
const app = express();

//Configuramos app para que utilice el body parser y la const route
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
app.use(route);

//Exportamos la app para utilizarla en index.js
module.exports = app;