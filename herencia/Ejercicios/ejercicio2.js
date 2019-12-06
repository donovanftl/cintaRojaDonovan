/* 2.- Crea una superclase llamada Electrodoméstico con las
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------
*/

class Electrodoméstico {
    constructor(precio, color, consumoEnergetico, capacidad){
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.capacidad = capacidad;
    }
    getConsumoEnergetico(){
        return this.consumoEnergetico;
    }
}

//  Crear una clase Bebida que herede a dos clases Cerveza
//     y Refresco. Ambas clases deben tener la propiedad
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes.

class Bebida {
    constructor(cantidad){
        this.cantidad = cantidad;
    }
    
    getCantidad(){
        return this.cantidad;
    }

    setCantidad(cantidad){
        this.cantidad = cantidad;
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }

    setPorcentajeAlcohol(porcentaje){
        this.porcentajeAlcohol = porcentaje;
    }
}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }

    getAzucar(){
        return this.azucar;
    }

    setAzucar(azucar){
        this.azucar = azucar;
    }
}

const cerveza = new Cerveza(355, 4.7);
console.log( cerveza.getPorcentajeAlcohol() );
const refresco = new Refresco(600, 20);
console.log( refresco.getAzucar() ); 


// 4.- Crea una superclase llamada Electrodoméstico con las
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color
//        y capacidad.
//     c. consumoEnergetico debe iniciar con valor de 100


    class Electrodoméstico {
        constructor ( precio, color, capacidad){
            this.precio = precio;
            this.color = color;
            this.capacidad = capacidad;
        }
    }

        getConsumoEnergetico(){
            return this.consumoEnergetico;
        }

        setConsumoEnergetico(precio){
            this.consumoEnergetico = precio;
        }
    
        // 5.- Crea una subclase de Electrodomestico llamada Lavadora
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.

        class Lavadora extends Electrodomestico {
            constructor(precio, color, capacidad, carga){
                super(precio, color, capacidad);
                this.carga = carga;
            }
        
            precioFinal() {
                return 'Total: $' + this.getConsumoEnergetico() * this.carga;
            }
        }