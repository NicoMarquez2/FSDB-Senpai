let contador = 0;

document.getElementById("boton").addEventListener('click', onClickForTitle)
document.getElementById("button").addEventListener('click', counterUp)

function counterUp() {
    const fatherDiv = document.getElementById("counter");
    const newContent = document.createTextNode(contador++);
    fatherDiv.innerHTML = contador;
}

function onClickForTitle() {
    const titulo = document.getElementById("titulo")
    titulo.classList.toggle("titulo")
}
