// Clases
    // DEfiniciones de las propiedades y comportamientos de un tipo de objeto concreto
// Constructor
// El constructor es un metodo especial que se ejecuta automaticamente cuando se crea una instancia de clase 

class Perro{
        constructor(color, nombre, patas){
            this.color = color;
            this.nombre = nombre;
            this.patas = patas;
        }

        ladrar(){
            return 'Waau'
        }
        getNombre(){
            return `El perro se llama: ${this.nombre}`

        }

}

const perro1 = new Perro('cafe', 'ayudante de santa', 4);
const perro2 = new Perro('Blanco con negro', 'Snoopy', 4)
    console.log(perro1.getNombre());
    console.log(perro2.getNombre());




