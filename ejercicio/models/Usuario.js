const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    usuario: String, 
    edad: Number,
    bio: {
        type: String,
        default: 'No-bio'
    },
    nacionalidad:{
        type: String,
        enum: ['MX', 'USA', 'BR']
    },
    sexo: {
        type: String,
        enum: ['F','M','SN']
    },
});

const Usuario = mongoose.model('usuario', usuarioSchema);
module.exports = Usuario;