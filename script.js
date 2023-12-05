const hamburguer=document.querySelector(".nav_toggle")
const navMenu=document.querySelector(".nav-menu")
const navMenuItem=document.querySelector(".nav-menu-item")
const alert=document.querySelector("alert")

hamburguer.addEventListener("click",()=>{
    
    navMenu.classList.toggle("nav-menu_visible")//esto le agrega la clase al elemento nav-menu

})
