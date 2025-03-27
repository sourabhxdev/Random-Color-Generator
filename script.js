var btn = document.querySelector('button')
var box = document.querySelector('.box')
var mess = document.querySelector('.message')

function changeColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    mess.innerHTML = `rgb(${r},${g},${b})`
}
btn.addEventListener('click', changeColor)
box.addEventListener('click', function(){
    let copyText = mess.innerHTML
    navigator.clipboard.writeText(copyText)
    alert("Copied : " + copyText)
})
