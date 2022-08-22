//ejercicio 1

let number = parseInt(prompt("Ingrese por favor un numero: "))

if(number % 3 == 0 && number % 5 == 0){
    console.log("El numero es multiplo de 3 y 5")
}
else if (number % 5 == 0){
    console.log("El numero es multiplo de 5")
}
else if (number % 3 == 0){
    console.log("El numero es multiplo de 3")
}
else{
    console.log("El numero no es multiplo de 3 ni de 5")
}

//ejercicio 2

let a = parseInt(prompt("Ingrese a"))
let b = parseInt(prompt("Ingrese b"))
let c = parseInt(prompt("Ingrese c"))
let discriminante = (b*b)-(4*a*c)
let raizUno
let raizDos

if(discriminante < 0){
    console.log("La ecuacion no tiene raices")
}
else if(discriminante == 0){
    console.log("La ecuacion tiene una unica raiz")
    raizUno= -b/(2*a)
    console.log(raizUno)
}
else{
    console.log("La ecuacion tiene dos raices")
    raizUno = (-b + discriminante) / (2*a)
    raizDos = (-b - discriminante) / (2*a)
    console.log(raizUno, raizDos)
}

//ejercicio 3
let isOver = false
do{
let option = (prompt("Ingrse una opcion (a, b, c o d)"))
switch(option){
    case 'a':
        console.log("procedimiento a")
        break;
    case 'b':
        console.log("procedimiento b")
        break;
    case 'c':
        console.log("procedimiento c")
        break;
    case 'd':
        console.log("procedimiento d")
        isOver = true
        break;
    default: console.log("No seas pt")
}
} while(isOver == false)