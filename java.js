const header = document.querySelector("header");


window.addEventListener("scoll", function(){
    header.classList.toggle("stricky", this.window.scrollY > 0);
})


let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');


menu onclick = () => {
    menu.classList.toggle('bx-x')
    vanmenu.classList.toggle('open')
}