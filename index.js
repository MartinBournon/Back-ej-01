//Importamos app
const app = require("./app");

//Funcion asincrona para iniciar la API definida en app con el puerto 8000 
const main = async () => {
    await app.listen(8000, () => {console.log("Servidor conectado")})
}

main();
