const { Mascota } = require('./herencia');

class Perro extends Mascota {
    constructor(raza, color, nombre){
        super(4, nombre)
        this.raza = raza;
        this.color = color;
        console.log('Se creo el Perro');
    }
    getRaza(){
        return this.raza;
    }
}

module.exports = {
    Perro
}