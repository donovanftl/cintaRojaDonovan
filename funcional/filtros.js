const lista = [12,122,1223,444,2324,655,3233]
const listaObj = [
        {nombre: 'Lola', age: 20},
        {nombre: 'Lolo', age: 22},
        {nombre: 'Lula', age: 25},
        {nombre: 'Lela', age: 23},
        {nombre: 'Lala', age: 29},]
        
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

const filtro = listaObj.filter((elemento,index,lista) => {
    return elemento.age > 22
})
console.log(filtro)
