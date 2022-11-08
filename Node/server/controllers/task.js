const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send(tasks)
})
router.delete('/:id',(req,res)=>{
    tasks = tasks.filter((task) => task.id != req.params.id)
    res.send({message: 'deleted'})
})
router.put('/:id',(req,res)=>{
    let body = req.body;
    console.log(body)
    let task = tasks.find((task)=>task.id==req.params.id)
    task.task = body.task
    task.priority = body.priority
    res.send(task)
})

router.post('/',(req,res)=>{
    let task = req.body;
    task.id = tasks.sort((a,b)=> b.id - a.id)[0].id+1
    tasks.push(task)
    res.send(tasks)
})

module.exports = router


let tasks = [
    {
        "task": "Hacer preguntas en Slack",
        "priority": "priority-low",
        "id": 1
      },
      {
        "task": "Limpiar el cuarto",
        "priority": "priority-medium",
        "id": 2
      },
      {
        "task": "asdsada",
        "priority": "priority-low",
        "id": 3
      }
]