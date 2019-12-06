const { Maestro } = require ('./ejercicio1');

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const profe_1 = new MaestroDeFisica('fisica', [7,8,5,1,10,5,2,3,5], 8);
const profe_2 = new MaestroDeMusica('musica', [9,10,9,8,9,9,6,7,10], 2);

console.log( profe_1.calcularPromedio() );
console.log( profe_2.calcularPromedio() );


