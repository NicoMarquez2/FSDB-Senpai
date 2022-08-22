let numero1 = prompt("Ingrese un número por favor");
let numero2 = prompt("Ingrese el otro número por favor");

const numeros = document.createElement("div");
const resultado = document.createElement("div");

let mensaje = "El valor corresponde al segundo cuadrante";

if (parseInt(numero1) > 0 && parseInt(numero2) > 0) {
  mensaje = "El valor corresponde al primer cuadrante";
}

numeros.textContent += "Numeros: " + String(numero1) + ", " + String(numero2);
numeros.setAttribute("class", "alert alert-primary");
document.getElementById("numeros").appendChild(numeros);

resultado.setAttribute("class", "alert alert-success");
resultado.textContent += "El resultado es: " + mensaje;
document.getElementById("resultados").appendChild(resultado);
