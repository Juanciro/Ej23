let Ainput = document.getElementById("area")
let Dinput = document.getElementById("diametro")
let Pinput = document.getElementById("perimetro")

let area
let perimetro
let diametro
let radio



Ainput.addEventListener("keyup", ()=>{
    radio = Math.sqrt(Ainput.value / Math.PI )
    document.getElementById("radio").innerHTML = `Radio: ${radio}`
    Dinput.value = radio * 2
    Pinput.value = 2 * Math.PI * radio
})

Dinput.addEventListener("keyup", ()=>{
    radio = Dinput.value/2
    document.getElementById("radio").innerHTML = `Radio: ${radio}`
    Ainput.value = Math.PI * radio * radio
    Pinput.value = 2 * Math.PI * radio
})

Pinput.addEventListener("keyup",()=>{
    radio = Pinput.value / (2*Math.PI)
    document.getElementById("radio").innerHTML = `Radio: ${radio}`
    Ainput.value = Math.PI * radio * radio
    Dinput.value = radio * 2
})