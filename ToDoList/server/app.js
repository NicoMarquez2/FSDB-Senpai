const express = require('express');
const cors = require('cors')
const taskRoutes = require('./controllers/task');


const app = express();
app.use(express.json())
app.use(cors())
/*
function print(birthdate) {
    let today = new Date();
    let birth = new Date(birthdate);
    var edad = today.getFullYear() - birth.getFullYear();
    let m = today.getMonth() - birth.getMonth();


    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        edad--;
    }
    return  edad + ' años'
}


app.get('/:name',(req,res) => {
    let fecha = req.query.date;
    res.send('Hola ' + req.params.name + ' ' + print(fecha))
})
*/

app.use(function (req, res, next) {
    console.log('Request Type:', req.method);
    console.log('path:', req.path)
    console.log('timestamp:', new Date())
    console.log('body:', req.body)
    if(req.params.id){
        console.log('path params:', req.params.id)
    }
    next();
});



app.use('/tasks', taskRoutes)


app.listen(8080, () => {
    console.log('...')
})


