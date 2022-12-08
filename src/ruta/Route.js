//Importamos el Router de express
const {Router} = require("express");
//Importamos el Controlador
const Controlador = require("../controlador/Controlador");

//Asignamos el Router
const router = Router();

//Definimos un endpoint /saludar de verbo GET 
//que al ser llamado ejecuta Controlador.metodoControlador
router.get("/saludar", Controlador);

//Exportamos router para usarlo en app.js
module.exports = router;
