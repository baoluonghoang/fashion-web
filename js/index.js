/* navbar responsive */
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

/*fix navbar when scroll*/
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("navbar-fix");
    }else{
        navBar.classList.remove("navbar-fix");
    }
})

/*gasp*/
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".mini-menu", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1, x: -200 });
gsap.from(".content-banner h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".content-banner h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".content-banner a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

/*hide_show discount form */
const inforDiscount = document.querySelector(".infor-discount");
const closeDiscount = document.querySelector(".discount-close");
const button = document.querySelector(".btn");
if(inforDiscount) {
    // window.addEventListener("load", () => {
    //     setTimeout(() => {
    //         inforDiscount.classList.remove(".hide-discount")
    //     }, 400);
    // })
    // button.addEventListener('click', () => {
    //     inforDiscount.classList.remove("hide-discount");
    // })

    closeDiscount.addEventListener('click', () => {
        inforDiscount.classList.add("hide-discount");
    })

    closeDiscount.addEventListener('click', () => {
        inforDiscount.classList.add("hide-discount");
    })
}


/*type-product in index.html */

var slideIndex = 1;
showListProduct(slideIndex);

function currentTypeProduct(n) {
    showListProduct(slideIndex = n)
}

function showListProduct(n) {
    var typeOfList = document.querySelectorAll(".type-of-list");
    var checkType = document.querySelectorAll(".check-type");

    if(n > typeOfList.length) { slideIndex = 1}
    if(n < 1) { slideIndex = typeOfList.length}

    for(var i = 0; i < typeOfList.length; i++) {
        typeOfList[i].style.display = "none";
    }

    for(var i = 0; i < checkType.length; i++) {
        checkType[i].className =checkType[i].className.replace(" typeActive", " ");
    }

    typeOfList[slideIndex - 1].style.display = "grid";
    checkType[slideIndex - 1].className += " typeActive";
}

