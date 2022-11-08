const express = require('express');
const taskRoutes = require('./controllers/task')

const app = express();

app.use(express.json())

app.use(function (req, res, next){
    console.log('Request Type:', req.method);
    console.log('path:', req.path)
    console.log('timestamp:', new Date())
    console.log('body:' , req.body)
    console.log('path params:', req.params.id)
    req.userName = 'Nico'
    next()
})

app.get('/',(req,res) => {
    let fecha = req.query.date;
    console.log(fecha);
    res.send('Hola '+ req.params.name)
    next()
})

app.use('/tasks',taskRoutes)

app.listen(8080,()=>{
    console.log('I\'m working')
})