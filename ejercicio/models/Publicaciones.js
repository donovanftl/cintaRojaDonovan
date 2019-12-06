const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
    publicacion: String,
    fecha: Number,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    } 
});

const Publicaciones = mongoose.model('publicacion', publicacionSchema);
module.exports = Publicaciones;
