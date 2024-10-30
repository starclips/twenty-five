'use strict'

let inputP = document.getElementById('password')

let entrar = document.getElementById('entrar')

entrar.addEventListener('click', ()=>{
    if(inputP.value == "3110")
    window.location.assign('./room.html')
})