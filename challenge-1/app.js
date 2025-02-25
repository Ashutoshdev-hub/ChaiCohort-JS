let bulbElement = document.getElementById('bulb')
let bodyElement = document.getElementById('body')
let btnElement = document.getElementById('toggleButton')
const statusElement = document.getElementById('status')

btnElement.addEventListener("click",function(){
    bulbElement.style.backgroundColor = bulbElement.style.backgroundColor === '' ? 'yellow' : ''
    statusElement.innerText = bulbElement.style.backgroundColor === '' ? 'OFF' : 'ON'
    bodyElement.style.backgroundColor = bulbElement.style.backgroundColor === '' ? 'white' : 'black'
    bodyElement.style.color = bulbElement.style.backgroundColor === '' ? 'black' : 'white'

})

