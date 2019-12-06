const mongoose = require ('mongoose');
const Usuario = require('./Usuario');
const Publicaciones = require('./Publicaciones');


const URL = 'mongodb+srv://admin:123123dd@cluster0-dmitt.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL, (err) => {
    if (!err) console.log('Conexión exitosa');
    else console.log(err);
});

module.exports = {
    Usuario, 
    Publicaciones
}
