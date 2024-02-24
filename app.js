let headerMenu = document.getElementById('header-menu')
headerMenu.onclick = function(){
    console.log('work')
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')
}
let info = document.getElementById('info')
info.onclick = function(){
    console.log('info')
    let map = document.getElementById('map')
    map.classList.toggle('display-none')
    let phone = document.getElementById('phone')
    phone.classList.toggle('display-none')
    let info_img = document.getElementById('info-img')
    info_img.classList.toggle('display-none')
}

let map = document.getElementById('map')
map.onclick = function(){
    console.log('map')
    let info = document.getElementById('info')
    info.classList.toggle('display-none')
    let phone = document.getElementById('phone')
    phone.classList.toggle('display-none')
    let map_img = document.getElementById('map-img')
    map_img.classList.toggle('display-none')
}

let phone = document.getElementById('phone')
phone.onclick = function(){
    console.log('phone')
    let info = document.getElementById('info')
    info.classList.toggle('display-none')
    let map = document.getElementById('map')
    map.classList.toggle('display-none')
    let phone_img = document.getElementById('phone-img')
    phone_img.classList.toggle('display-none')
}