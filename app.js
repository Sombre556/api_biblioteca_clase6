const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middleware/errorHndler");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: 'http://api.example.com/api/biblioteca',
    issuerBaseURL: 'https://dev-dzpawwtg0uqa4srl.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

//Configuramos el middleware de autenticacion
app.use("/libros", autenticacion, librosRouter);
app.use(errorHandler);




app.listen(3000, () => {
    console.log('servicio iniciado en el puerto 3000.');
});
