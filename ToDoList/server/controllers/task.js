const express = require('express')
const router = express.Router();

let tasks = [
    
]

router.get('/', (req,res)=>{
    if(req.query.priority){
        res.send(tasks.filter((item)=> item.priority == req.query.priority))
    }
    res.send(tasks)
})

router.delete('/:id', (req,res) => {
    let id = req.params.id
    tasks = tasks.filter((task) => task.id != id)
    console.log(tasks)
    res.send({message:'deleted'})
})

/*
router.put('/:id',(req,res) => {
    let id = req.params.id
    let body = req.body
    console.log(body)
    let toModify = tasks.find((task) => task.id == id)
    toModify.task = body.task
    toModify.priority = body.priority
    res.send(toModify) 
})*/

router.post('/', (req, res) => {
    let task = req.body;
    if (tasks.length == 0){
        task.id = 1
    }
    else{
        task.id = tasks.sort((a, b) => b.id - a.id)[0].id + 1
    }
    tasks.push(task)
    res.send(tasks)
})

module.exports = router
