//Importamos el Servicio
const Servicio = require("../servicio/Servicio");

//Creamos la funcion que recibirá el request (req)
// y el response (res) y llamamos a la lógica de negocio (Servicio) 
//y esportamos todo con module.exports
const Controlador = async (req,res) => {
    try{
        await Servicio(req, res);
    }catch(error){

    }
}

module.exports = Controlador;


//Esta es la forma de hacerla como vimos en clase haciendo uso de clases y no funciones
//Si usas esta forma hay que cambiar la línea 11 de Route.js por esta otra
//router.get("/saludar", Controlador.metodoControlador);
/*module.exports = class Controlador {
    static async metodoControlador(req, res){
        try{
            await Servicio.metodoServicio(req, res);
        }catch(error){

        }
    }
}*/