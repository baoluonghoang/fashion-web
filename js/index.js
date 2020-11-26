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


const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const navbarFixed = navBar.classList.contains("navbar-fix");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  });
});
/*gasp*/

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".mini-menu", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".content-banner h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".content-banner h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".content-banner a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

// const slider1 = document.getElementById("glide1");

// if(slider1)

// new Glide(slider1, {
//     type: "carousel",
//     startAt: 0,
//     autoPlay: true,
//     hoverpause:true,
//     perView: 1,
//     animationDuration: 800,
//     animationTimingFunc: "linear",
// }).mount();