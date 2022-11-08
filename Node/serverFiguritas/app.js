const express = require('express');
const figusRoutes = require('./controllers/figurita')

const app = express();

app.use(express.json())

app.get('/',(req,res) => {
    
    res.send(`Hola ${req.params.name}`)
})

app.use('/figuritas', figusRoutes)

app.listen(8080,()=>{
    console.log('I\'m working')
})