//ejercicio 1
/*let initialValue = 0;

for(let i = 1; i <= 25; i++){
    initialValue += 11;
    console.log(initialValue);
}

//ejercicio 2

for(let i = 8; i <= 500; i += 8){
    console.log(i);
}

//ejercicio 3

let pass = 0;
let failed = 0;

for(let i = 1; i <= 10; i++){
    let value = parseInt(prompt("Ingrese una nota"));
    if(value >= 7){
        pass++;
    }
    else{
        failed++;
    }
}
console.log("Hay ",pass," alumnos con nota mayor o igual que 7");
console.log("Hay ",failed, "alumnos con nota menor a 7");

//ejrecicio 4
let suma = 0
let height
for(let i = 1; i <= 5; i++){
    height = parseFloat(prompt("Ingrese la altura (en metros)"));
    suma = suma + height;
}
console.log("El promedio de altura es: ", (suma/5))

//ejercicio 5
const divisionSalary = 300;

let Salary;
let salaries= Array();
let peopleWithBigSalary = 0;
let peopleWithLowSalary = 0;
let totalWaste = 0

for(let i = 1; i <= 5; i++){
    Salary = parseInt(prompt("Ingrese un salario:"));
    salaries.push(Salary);
}

for(let i = 0; i <= 4; i++){
    if(salaries[i] >= divisionSalary){
        peopleWithBigSalary++;
    }
    else{
        peopleWithLowSalary++;
    }
    totalWaste = totalWaste + salaries[i];
}
console.log("Hay ",peopleWithBigSalary, "personas que ganan mas de 300");
console.log("Hay ",peopleWithLowSalary, "personas que ganan menos de 300");
console.log("El gasto total en salarios es de: ",totalWaste);

//ejercicio 6

for(let i = 10; i <= 1500; i += 10){
    console.log(i);
}

//ejercicio 7
let listOne = Array();
let listTwo = Array();
let totalListOne = 0;
let totalListTwo = 0;
var value

for(let i = 0; i <= 2; i++){
    value = parseInt(prompt("Ingrese valor para la primera lista"));
    listOne.push(value);
}

for(let i = 0; i <= 2; i++){
    value = parseInt(prompt("Ingrese valor para la segunda lista"));
    listTwo.push(value);
}
console.log("2")
for(let i = 0; i <= 2; i++){
    totalListOne = totalListOne + listOne[i];
}
console.log(totalListOne)

for(let i = 0; i <= 2; i++){
    totalListTwo += listTwo[i];
}
console.log(totalListTwo)

if(totalListOne == totalListTwo)
    console.log("Listas iguales");
else if(totalListOne > totalListTwo)
    console.log("Lista 1 mayor");
else
    console.log("Lista 2 mayor");

//ejercicio 8
const lista = Array();

let pares = 0;
let impares = 0;

for(let i = 0; i <= 4; i++){
    let value = parseInt(prompt("Ingrese un valor de la lista"));
    lista.push(value);
}

lista.forEach(element => {
    if(element % 2 == 0)
        pares++;
});

impares = lista.length - pares;

console.log(`Hay: ${impares} numeros impares`);
console.log(`Hay ${pares} numeros pares`);*/

//ejrcicio 9


