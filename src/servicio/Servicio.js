//Capa donde se encuentra la lógica de negocio (llamadas a base de datos, otros servicios, etc)
//Definido como función,
const Servicio = async (req, res) => {
    try{
        res.send("holaaa desde el Servicio");
    }catch(error){

    }
}
module.exports = Servicio;

//Idem que anterior pero con clases
//Para usar esta forma cambiar la línea 12 del Controlador.js por
//await Servicio.metodoServicio(req, res);
/*
module.exports = class Servicio {
    static async metodoServicio(req, res){
        try{
            res.send("holaaa desde el Servicio");
        }catch(error){

        }
    }
}*/