/*1. Hacer superclase Maestro y subclases Maestro de Física y
   Maestro de Música y a cada uno asignarle su materia y
   calcular su promedio de grupo a partir de calificaciones
   (puedes usar arreglos). El maestro de física tiene un
   atributo “antiguedad” que guarda un valor numerico,
   mientras que el maestro de música tiene un atributo “edad”
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro{
    constructor(materia, calificaciones){
        this.materia = materia;
        this.calificaciones = calificaciones;
    }
    calcularPromedio(){
    let suma = 0;

    for(let i=0; i<this.calificaciones.length; i++){
        suma += this.calificaciones[i]; 
    }    
    return (suma/this.calificaciones.length);
    }    
}
    

    module.exports = {
        Maestro
    }

    