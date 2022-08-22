let contador = 0;

document.getElementById("boton").addEventListener('click', onClickForTitle)
document.getElementById("magicButton").addEventListener('click', clickForMagic)

function clickForMagic() {
    const fatherDiv = document.getElementById("counter");
    const newContent = document.createTextNode(contador++);
    fatherDiv.innerHTML = contador;
}

function onClickForTitle() {
    const titulo = document.getElementById("titulo")
    titulo.classList.toggle("titulo")
}
