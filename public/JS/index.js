let toggle = document.querySelector('.nav__menu input')
const navList = document.querySelector("#nav ul")
console.log("in js");
toggle.addEventListener('change', function() {
    navList.classList.toggle("nav__active")
})

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('nav')
    if(this.scrollY >= 200) nav.classList.add('nav__scroll'); else nav.classList.remove('nav__scroll')
}
window.addEventListener('scroll', scrollHeader)