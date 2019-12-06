const express = require('express');
const { Director, Pelicula } = require('./models/index')

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post('/director',(req, res) => {
    const newDirector = Director (req.body);
    newDirector.save((err, director) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(director);
        
    });
});

app.get('/all/directors',(req,res) => {
    Director.find().exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.get('/directors/:id', (req, res) => {
    const id = req.params.id
    Director.findById(id).exec()
    .then((result) =>{
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch('/directors/:id', (req,res) => {
    const id = req.params.id
    Director.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
        
});
app.post('/add/premio/:idDirector', (req,res) => {
    const id = req.params.idDirector;
    Director.findByIdAndUpdate(id, { $push:{premios: [req.body.premios]}}, 
        {new: true}).exec()
        .then((result) => {
            res.status(200).send(result);   
        }).catch((err) => {
            res,status(409).send(err)
        });
});

// //pelicula

app.post('/pelicula',(req, res) => {
    const newPelicula = Pelicula (req.body);
    newPelicula.save((err, pelicula) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(pelicula);
    });
});

app.get('/all/peliculas',(req,res) => {
    Pelicula.find()
    .populate('director')
    .exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch('/peliculas/:id', (req,res) => {
    const id = req.params.id
    Pelicula.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });       
});


app.listen(3000, () => {
    console.log('Server on'); 
});
