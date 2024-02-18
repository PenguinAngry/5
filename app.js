let headerMenu = document.getElementById('header-menu')
headerMenu.onclick = function(){
    console.log('work')
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')

    let info = document.getElementById('info')
    info.classList.toggle('display-none')

    let map = document.getElementById('map')
    map.classList.toggle('display-none')


    let phone = document.getElementById('phone')
    phone.classList.toggle('display-none')
}