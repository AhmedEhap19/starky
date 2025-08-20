let stars = document.getElementById('stars')
let behind = document.getElementById('behind')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')


window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px'
    moon.style.top = value *4 + 'px'
    mountains3.style.top = value*2 + 'px'
    mountains4.style.top = value*1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value*1.2 + 'px'
    boat.style.left = value*1.2 + 'px'
    behind.style.fontSize = value + 'px'
    if(scrollY >= 118){
        behind.style.fontSize = 118 + 'px'
        behind.style.position = "fixed"
        if(scrollY >= 625){
            behind.style.display = 'none'
        }else{
            behind.style.display = 'block'
        }
    }
    
}