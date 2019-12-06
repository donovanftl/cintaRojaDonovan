const request = require('request');
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

    function createAuthor(nombre, apellidos, nac, bio, gender, age) {
        return new Promise(() => {


            
        })
        const jsonSend = {
            name: nombre,
            last_name: apellidos,
            nacionalidad: nac,
            biography: bio,
            gender,
            age,
        };
        request.post(URL, {form: jsonSend}, (err, res, body) => {
            console.log(res.statusCode);
            console.log(JSON.parse(body))
        });
    }

    function updateNameAuthorByID(idAuthor, name) {
        const json  ={name}
        request.patch(`${URL}${idAuthor}/`,{form: json},
        (err,res,body) => {
            console.log(res.statusCode);
            console.log(JSON.parse(body));
        })
        }

        function getAllAuthors(){
            request.get(URL, (err, res , body) =>{
                console.log(res,statusCode);
                console.log(JSON.parse(body));
            })
        }

        function deleteAuthorsByID(idAuthor, name) {
            const json ={name}
            request.delete(`${URL}${idAuthor}/`,{form: json},
            (err,res,body) => {
                console.log(res.statusCode);
            })
            }

    createAuthor('Donovan', 'Torres', 'MX', 'lorem', 'M', 33)
    .then((cambio) => {
        console.log(cambio.name);
        return updateNameAuthorByID('3753', 'Fernando')
    })
            
