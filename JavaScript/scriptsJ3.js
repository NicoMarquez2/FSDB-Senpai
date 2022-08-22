//ejercicio 1
/*rangoNumeros();

function rangoNumeros(){
    let valueA = parseInt(prompt("ingrese el primer valor"));
    let valueB = parseInt(prompt("ingrese el segundo valor"));

    for(let i = valueA; i <= valueB; i++){
        console.log(i);
    }
}

//ejercicio 2
let valueA = parseInt(prompt("Ingrese el primer numero"));
let valueB = parseInt(prompt("Ingrese el segundo numero"));
let valueC = parseInt(prompt("Ingrese el tercer numero"));

minor(valueA,valueB,valueC);

function minor(a,b,c){
    const list = [a,b,c];
    list.sort((a,b) => b-a)
    console.log(list[2]);
}

//ejercicio 3
let valueA = parseInt(prompt("Ingrese el primer numero"));
let valueB = parseInt(prompt("Ingrese el segundo numero"));
let valueC = parseInt(prompt("Ingrese el tercer numero"));

order(valueA,valueB,valueC);

function order(a,b,c){
    const list = [a,b,c];
    list.sort((a,b) => a-b)
    console.log(list);
}

//ejercicoi 4
let valueA = parseInt(prompt("Ingrese el primer numero"));
let valueB = parseInt(prompt("Ingrese el segundo numero"));
let valueC = parseInt(prompt("Ingrese el tercer numero"));
let higherValue

higherValue = higher(valueA,valueB,valueC);

function higher(a,b,c){
    const list = [a,b,c];
    list.sort((a,b) => b-a)
    return list[0];
}

//ejercicio 5

let side = parseInt(prompt("Ingrese la mediad del lado del cuadrado"));

let perimeter = squarePerimeter(side);
console.log(perimeter);

function squarePerimeter(a){
    let perimeter = a*4;
    return perimeter;
}

//ejericio 6
let cantDigits;
let value
do{
    value = parseInt(prompt("Ingrese un valor de hasta 5 digitos"));
}while((value / 100000) >= 1)

cantDigits = howManyDigits(value);
console.log(cantDigits);

function howManyDigits(a){
    let digits;
    if (a/10000 >=1)
        digits = 5;
    else if(a/1000 >=1)
        digits = 4;
    else if(a/100 >=1)
        digits = 3;
    else if(a/10 >=1)
        digits = 2;
    else 
        digits = 1;
    
    return digits;
}

//ejercicio 7
let sum;

sum = fiveValuesSum();
console.log(sum);

function fiveValuesSum(){
    const list = [];
    let value;
    let sum = 0

    for(let i = 0; i <= 4; i++){
        value = parseInt(prompt("Ingrese un valor"));
        list.push(value);
    }

    for(let i = 0; i <= 4; i++){
        sum += list[i];
    }

    return sum;
}

//ejercicio 8
let wordsList = [];
let word = null;

while(word != "0"){
    word = prompt("Ingrese una palabra (si desea terminar ingrese 0)");
    wordsList.push(word);
}

console.log (wordsToNumbers(wordsList));

function wordsToNumbers(a){
    const numberList = [];
    let numberOfCharacters;
    for(let i = 0; i < (wordsList.length)-1; i++){
        numberOfCharacters = a[i].length;
        numberList.push(numberOfCharacters);
    }

    return numberList;
}*/

//ejercicio 9
let numberList = [];
do{
    value = parseInt(prompt("Ingrese un valor numerico"));
    control = isNaN(value);
    if(control == false){
        numberList.push(value);
    }
}while(control == false)
console.log (numberList)
console.log(higherThanFirst(numberList));

function higherThanFirst(a){
    const value = a[0];
    const lenght = (a.length);
    let highers = [];
 
    for(let i = 0; i < lenght; i++){
        if(i >= value){
            highers.push(a[i]);
        }
    }
    return highers;
}
