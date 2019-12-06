    const lista = [12,122,1223,444,2324]
    const listaObj = [
            {nombre: 'Lola', age: 20},
            {nombre: 'Lolo', age: 22},
            {nombre: 'Lula', age: 25},
            {nombre: 'Lela', age: 23},
            {nombre: 'Lala', age: 29},

    ]


// for (let i = 0; i < lista.length; i++) {
//     const element = array[i];
    
// }

// lista.map((elemento,index,lista) => {
//     console.log(x);
// });

// listaObj.map((element, index,lista) =>{
//     console.log(element.nombre)
// });

const listaNombre = listaObj.map((element,index,lista) => {
    console.log(element.nombre);
    return element.nombre
});

console.log(listaNombre);

