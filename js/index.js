const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.mini-menu');
const menuclose = document.querySelector('.close');
const navBar = document.querySelector('.navbar');

const navLeft = menu.getBoundingClientRect().left;

menuOpen.addEventListener('click', () => {
    if(navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
})

menuclose.addEventListener('click', () => {
    if(navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
})

/*fix navbar*/
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("navbar-fix");
    }else{
        navBar.classList.remove("navbar-fix");
    }
})
