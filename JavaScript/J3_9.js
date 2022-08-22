let numberList = [];
let value = 0;
while(value != "f"){
    value = prompt("Ingrese un valor (si desea terminar ingrese 'f')");
    numberList.push(value);
}
console.log (numberList)
console.log(higherThanFirst(numberList));

function higherThanFirst(a){
    const value = a[0];
    const lenght = (a.length) - 1;
    let highers = [];
 
    for(let i = 0; i < lenght; i++){
        if(i >= value){
            highers.push(a[i]);
        }
    }
    console.log(highers)
    return highers;
}