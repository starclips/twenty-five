'use strict'

let showB = document.getElementById('showboard')
let board = document.getElementById('board')
let exitB = document.getElementById('exitB')

showB.addEventListener('click', () => {
    
        board.classList.remove('hidden')
        showB.classList.add('hidden')
})
exitB.addEventListener('click', () =>{
   
    board.classList.add('hidden')
    showB.classList.remove('hidden')
})

let showC = document.getElementById('showletter')
let carta = document.getElementById('carta')
let exitC = document.getElementById('exitC')

showC.addEventListener('click', () => {
    
    carta.classList.remove('hidden')
    showC.classList.add('hidden')
})
exitC.addEventListener('click', () =>{

carta.classList.add('hidden')
showC.classList.remove('hidden')
})

let showPc = document.getElementById('showpc')
let pc = document.getElementById('password-cont')
let exitPc = document.getElementById('exitPc')

showPc.addEventListener('click', () => {
    
    pc.classList.remove('hidden')
    pc.style.display = 'grid'
    showPc.classList.add('hidden')
})
exitPc.addEventListener('click', () =>{

pc.classList.add('hidden')
pc.style.display = 'none'
showPc.classList.remove('hidden')
})

let inputP = document.getElementById('password')
let entrar = document.getElementById('entrar')

entrar.addEventListener('click', ()=>{
    if(inputP.value == "1999")
    window.location.assign('./final.html')
})

