const hamburguer=document.querySelector(".nav_toggle")
const navMenu=document.querySelector(".nav-menu")

hamburguer.addEventListener("click",()=>{
    
    navMenu.classList.toggle("nav-menu_visible")//esto le agrega la clase al elemento nav-menu

})