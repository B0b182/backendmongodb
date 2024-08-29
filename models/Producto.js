const mongoose = require('mongoose');

//El modelo que hacemos aca es el que vamos a montar en postman

const productoSchema = mongoose.Schema({
    producto: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },


    codigo:
    {
        type: Number,
        required: true,
        unique: true,
        trim: true

    },

    proveedor:
    {
        type: String,
        required: true
    },

    unidades:
    {
        type: Number,
        required: true
    },

    ingreso:
    {
        type: Date,
        default: Date.now(),
        required: true
    },



}, { versionkey: false });
module.exports = mongoose.model('productos', productoSchema);