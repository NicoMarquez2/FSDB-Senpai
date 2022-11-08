var http = require('http');

const today ={
    year: 2022,
    month: 10,
    day: 25
}

const birthDay ={
    year: 2001,
    month: 10,
    day: 22
}

function getAge(){
    let age = today.year - birthDay.year;
    if (today.month < birthDay.month){
        age--;
    }
    else if (today.month = birthDay.month){
        if (today.day < birthDay.day){
            age--;
        }
    }
return age;
}

http.createServer(function (req, res){
    let age = getAge();
    res.write(`hello Nicolas ${age}`)
    res.end()
}).listen(8080);