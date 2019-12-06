const request = require('request');

function getPeopleById(idPersonaje){
    return new Promise((resolve, reject) => {
        request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => { 
            if (err) return console.log('Error');
            if (response.statusCode === 200) {
                const people = JSON.parse(body)
                resolve(people);
            }else{
                reject('Error buscando el personaje')
            }          
        });
    });
}

function getMovieByURL(url){
    return new Promise((resolve, reject) => {
        request.get(url, (err, response, body) => { 
            if (err) return console.log('Error');
            if (response.statusCode === 200) {
                resolve(JSON.parse(body));
            } else{
                reject('Error buscando el personaje')
            }    
            });
    })
}

 getPeopleById(1)
 .then((respuesta) => {
     console.log(respuesta.name);
     return getMovieByURL(respuesta.films[0])
 })
 .then((result) => {
     console.log(result.title);
 })
 .catch((err) => {
    console.log(err);
 })

 getPeopleById (20)