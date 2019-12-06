    // const request = require('request');
    // const url_api = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    // ​
    // // request.get(url_api, (err, res, body) => {
    // //     const json = JSON.parse(body);
    // //     console.log(json);
    // // });
    // ​
    // const jsonSend = {
    //     "name": "Master",
    //     "last_name": "Miyagi",
    //     "nacionalidad": "USA",
    //     "biography": "Viejito karateka",
    //     "gender": "M",
    //     "age": 83
    // };
    // ​
    // request.post(url_api, {form: jsonSend}, (err, res, body) => {
    //     console.log('🤠', res.statusCode);
    //     console.log(JSON.parse(body));
    // });
    // ​
    // // CRUD OPERATIONS
    // // CREATE
    // // READ
    // // UPDATE
    // // DELETE

    const request = require('request');
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

    function createAuthor(nombre, apellidos, nac, bio, gender, age) {
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
            (err, res,body) => {
            console.log(res.statusCode);
            console.log(JSON.parse(body));
        })
        }

        function getAllAuthors(){
            request.get(URL, (err, res , body) =>{
                console.log(res.statusCode);
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


    //  createAuthor('cinta roja 36', 'otro batch', 'MX', 'lorem', 'M', 33)
    //  mupdateNameAuthorByID(3633, 'Nombre roja');
    //  getAllAuthors()
    //    deleteAuthorsByID('3633')


