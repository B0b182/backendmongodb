const mongoose = require("mongoose");
require('dotenv').config();

//conexion base de datos con una promesa
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(()=> console.log("estamos conectados desde mongo DB"))
    .catch((err) => console.error(err));
     
}

module.exports =conectarBD;
