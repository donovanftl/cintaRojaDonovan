class Mascota{
    constructor(patas, nombre){
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log('Se creo la mascota');
    }
    getNombre(){
        return this.nombre;
    }
}

module.exports ={
    Mascota
}

