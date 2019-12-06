function miPrimeraPromesa(numero){
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            if(numero === 5){
                resolve('Se cumplio la promesa')
            } else {
                reject('No se cumplio la promesa')
            }
        },3000)
    });
}

//Ejecucion de la funcion y se recibe la promesa
//THEN ---> resolve()
//CATCH ---> reject()
// resolve y reject reciben un parametro y la recibes en el callback de
// then(callback(parametroX)) & catch(callback(parametroX   ))
miPrimeraPromesa(5)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) =>{
        console.log(reject);
    })