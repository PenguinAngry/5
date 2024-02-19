let headerMenu = document.getElementById('header-menu')
headerMenu.onclick = function(){
    console.log('work')
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')
}