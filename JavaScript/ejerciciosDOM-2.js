//ejercicio 1
const bOne = document.getElementById("buttonOne")
const bTwo = document.getElementById("buttonTwo")
const bThree = document.getElementById("buttonThree")

bOne.message = "Presionaste el boton 1"
bTwo.message = "Presionaste el boton 2"
bThree.message = "Presionaste el boton 3"

bOne.addEventListener('click', clickButton)
bTwo.addEventListener('click', clickButton)
bThree.addEventListener('click', clickButton)

function clickButton(){
    alert("")
}

//ejercicio 2
const passValue = document.getElementById("exampleInputPassword1")
const button = document.getElementById("button")

button.addEventListener('click', click)


function click(){
    if(passValue.value.length < 7)
        alert("la pass no puede tener menos de 7 caracteres")
    else if (passValue.value.length > 20)
        alert("la pass no puede tener mas de 20 caracteres")
    else 
        alert("caracteres correctos")
}

//ejercicio 3

function load(){
    alert("La pagina termino de cargar")
}

//ejercicio 4
const button4 = document.getElementById("buttonEj4")

button4.addEventListener('click', openWindow)

function openWindow(){
    window.open("target: blank", "nueva ventana", "width=600, height=300")  
}

//ejercicio 5
const button5 = document.getElementById("buttonEj5")

button5.addEventListener('click', openMail)

function openMail(){
    let num 
    num = Math.random()*3
    num = parseInt(num)

    if(num == 0)
        window.location = "https://www.outlook.com"
    if(num == 1)
        window.location = "https://www.google.com/intl/es/gmail/about/"
    if(num == 2)
        window.location = "https://login.yahoo.com/"
}

//ejercicio 6
const button6 = document.getElementById("buttonEj6")

button6.addEventListener('click', openHalfWindow)

function openHalfWindow(){
    window.open("target: blank", "nueva ventana", "withd = 1900, height = 500")  
}

//ejercicio 7
const myDiv = document.getElementById("div")
var content = 2
var newDiv = document.createElement("div")
newDiv.textContent = content

myDiv.appendChild(newDiv)

myDiv.addEventListener('dblclick', dobleClick)

function dobleClick(){
    content = content*2
    newDiv.textContent = content
}

//ejercicio 8
const divEj8 = document.getElementById("divEj8")

divEj8.addEventListener('mousedown', isClicking)
divEj8.addEventListener('mouseup', notClicking)

function isClicking(){
    divEj8.classList.add("colorTwo")
}

function notClicking(){
    divEj8.classList.remove("colorTwo")
}

//ejercicio 9
const h1 = document.getElementById("h1")

h1.addEventListener('mouseover', mouseOver)
h1.addEventListener('mouseleave', mouseLeave)

function mouseOver(){
    h1.classList.add("classForH1")
}

function mouseLeave(){
    h1.classList.remove("classForH1")
}

//ejercicio 10

const check = document.getElementById("chBox")
const buttonEj10 = document.getElementById("buttonEj10")

check = addEventListener('click', checking)

function checking(){
        buttonEj10.disabled = !buttonEj10.disabled
}