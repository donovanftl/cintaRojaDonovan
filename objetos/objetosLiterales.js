    const ayudanteDeSanta = {
    ojos: 2,
    patas: 4,
    nombre: 'Ayudante de santa',
    raza: 'Galgo',
    ladrar: function () {
        return 'Waaau'
    },
    comer: function (comida){
        if(comida === 'Croquetas'){
            return 'Wacala'
        }else {
            return 'Yomi Yomi'
        }
    }
} 
const snoopy = {
    ojos: 2,
    patas: 4,
    nombre: 'Snoopy',
    raza: 'Beagle',
    ladrar: function () {
        return 'Waaau'
    },
    comer: function (comida){
        if(comida === 'Croquetas'){
            return 'Wacala'
        }else {
            return 'Yomi Yomi'
        }
    }
}   
    console.log(ayudanteDeSanta.raza);
    console.log(snoopy.raza);

    
