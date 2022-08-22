//ejercicio 3
let nombreEmpleado = "Lieonel Messi"
let sueldoEmpleado = 50000
const edadEmpleado = 35

console.log(`El empleado ${nombreEmpleado} tiene ${edadEmpleado} años, y un sueldo de ${sueldoEmpleado}`)

//ejercicio 1.1
let day = parseInt(prompt("Ingrese el dia"))
let month = parseInt(prompt("Ingrese el mes (de forma numerica)"))
let year = parseInt(prompt("Ingrese el año"))

if(day == 25 && month == 12)
    console.log("Es el dia de navidad")
else
    console.log("No es el dia de navidad :(")

//ejercicio 2
let numer_one = parseFloat(prompt("Ingrese un numero cualquiera"))
let numer_two = parseFloat(prompt("Ingrese otro numero cualquiera"))
let numer_three = parseFloat(prompt("Ingrese otro numero cualquiera"))

if(numer_one == numer_two && numer_two == numer_three){
    console.log("Los numeros son todos iguales")
    console.log(numer_one*2*numer_one)
}
else
    console.log("Los numeros no son todos iguales")

//ejercicio 3
let numerOne = parseFloat(prompt("Ingrese un numero cualquiera"))
let numerTwo = parseFloat(prompt("Ingrese otro numero cualquiera"))
let numerThree = parseFloat(prompt("Ingrese otro numero cualquiera"))

if(numerOne <= 10 && numerTwo <= 10 && numerThree <= 10)
    alert("Todos los numeros son menores a diez")
else
    alert("Algun(os) numero(s) es menor a diez")

//ejercicio 4
let x = parseInt(prompt("Ingrese el valor x"))
let y = parseInt(prompt("Ingrese el valor y"))

if(x > 0){
    if(y > 0)
        console.log("1º cuadrante")
    else
        console.log("4º cuadrante")
} 
else{
    if(y > 0)
        console.log("2º cuadrante")
    else
        console.log("3º cuadrante")
}

//ejercicio 4 (aumentos)

let sueldo = parseInt(prompt("Ingrese el sueldo del empleado"))
let antiguedad = parseInt(prompt("Ingrese los años de antiguedad del empleado"))

if(sueldo < 500){
    if(antiguedad < 10)
        console.log(`El sueldo a pagar es ${sueldo*1.05}`)
    else
        console.log(`El sueldo a pagar es ${sueldo*1.2}`)
}
else
    console.log(`El sueldo a pagar es ${sueldo} (no recibe aumento)`)

//ejercicio 5/6

let nota1 = parseInt(prompt("Ingrese la primer nota del alumno"))
let nota2 = parseInt(prompt("Ingrese la segunda nota del alumno"))
let nota3 = parseInt(prompt("Ingrese la tercer nota del alumno"))
let promedio = (nota1 + nota2 + nota3) / 3
if(promedio >= 7){
    console.log(`¡¡Aprobado!! El promedio es ${promedio}`)
}
else
    console.log(`No aprobado :( El promedio es ${promedio}`)

//ejercicio 7


do{
    var password = prompt("Ingrese la contraseña")
    var checkPassword = prompt("Verifique la contraseña")

    if(password == checkPassword){
        console.log("Las contraseñas coinciden")
    }
    else{
        console.log("Las contraseñas no coinciden")
    }
}while(password != checkPassword)

//ejercicio 8

let value1 = parseInt(prompt("Ingrese un valor", 1))
let value2 = parseInt(prompt("Ingrese otro valor", 1))

if(value1 > value2){
    console.log(value1 + value2)
    console.log(value1 * value2)
}

