const express = require('express');
const { Usuario } = require('./models/index')


const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post('/usuario',(req, res) => {
    const newUsuario = Usuario (req.body);
    newUsuario.save((err, usuario) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(usuario);
    });
});

app.get('/all/usuario',(req,re) => {
    Usuario.find().exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    Usuario.findById(id).exec()
    .then((result) =>{
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch('/usuarios/:id', (req,res) => {
    const id = req.params.id
    Usuario.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
        
});


        
//publicaciones

app.post('/publicacion',(req, res) => {
    const newPublicacion = Publicaciones (req.body);
    newPublicacion.save((err, publicacion) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(publicacion);
    });
});

app.get('/all/publicacion',(req,re) => {
    Publicacion.find()
    .populate('usuario')
    .exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

// app.get('/usuarios/:id', (req, res) => {
//     const id = req.params.id
//     Director.findById(id).exec()
//     .then((result) =>{
//         res.send(result);
//     }).catch((err) => {
//         res.status(400).send(err)
//     });
// });

// app.patch('/usuarios/:id', (req,res) => {
//     const id = req.params.id
//     .findByIdAndUpdate(id,
//         {$set: req.body},
//         {new: true}).exec()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             res.status(400).send(err);
//         });
        
// });



app.listen(3000, () => {
    console.log('Server on'); 
}); 
