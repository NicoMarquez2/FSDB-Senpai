const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(figuritas);
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    figuritas = figuritas.filter((figurita) => figurita.id != id);
    res.send({message: 'deleted'});
})

router.put('/:id', (req, res) => {
    let body = req.body;
    let figurita = figuritas.find((card) => card.id == req.params.id)
    figurita.name = body.name
    figurita.position = body.cost
    figurita.country = body.country
    figurita.birthdate = body.birthdate
    res.send(figuritas)
})

router.post('/', (req,res) => {
    let figurita = req.body;
    figurita.id= figuritas.sort((a,b) => b.id - a.id)[0].id + 1;
    figuritas.push(figurita);
    res.send(figuritas)
})

module.exports = router



let figuritas = [
    {
        "name": "Luis Suárez",
        "position": "atacante",
        "country": "Uruguay",
        "birthdate": "1987-1-27",
        "id": 1
    },
    {
        "name": "Federico Valverde",
        "position": "mediocampista",
        "country": "Uruguay",
        "birthdate": "1998-6-28",
        "id": 2
    },
    {
        "name": "Ronald Araujo",
        "position": "defensa",
        "country": "Uruguay",
        "birthdate": "1997-4-15",
        "id": 3
    }
]