const mongoose = require('mongoose');

//El modelo que hacemos aca es el que vamos a montar en psotman

const clienteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos:
    {
        type: String,
        required: true
    },

    cedula:
    {
        type: Number,
        required: true
    },

    correo:
    {
        type: String,
        required: true
    },

    telefono:
    {
        type: Number,
        required: true
    },

    direccion:
    {
        type: String,
        required: true
    },



}, { versionkey: false });
module.exports = mongoose.model('clientes', clienteSchema);
