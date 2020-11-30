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

/*gasp*/

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".mini-menu", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".content-banner h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".content-banner h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".content-banner a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });





/*-----------login form -------------*/

var user = "baodeptrai";
var pass = "123456"

function submitForm() {
    var username = document.forms["myLoginForm"]["uname"].value;
    var password = document.forms["myLoginForm"]["pw"].value;
    if (username == "") {
      alert("Bạn chưa nhập tài khoản hoặc mật khẩu ");
      return false;
    } else if(password == "") {
        alert("Vui lòng nhập mật khẩu");
        return false;
    }else if (username.length <= 6) {
        alert("Tài khoản quá ngắn. Vui lòng nhập lớn hơn 6 kí tự");
        return false;
    }else if (password.length <= 6) {
        alert("Mật khẩu quá ngắn. Vui lòng nhập lớn hơn 6 kí tự");
        return false;
    }
    window.location.href = "../dashBoardAdmin.html";
}

var previous = document.querySelector(".previous");
var next = document.getElementsByClassName(".next").innerHTML;

previous.addEventListener('click', () => {
    window.location.assign("https://www.w3schools.com")
})
console.log(previous);

console.log(screen.width);
console.log(window.location.port);


// const slider1 = document.getElementById("glide_1");

// if(slider1) {
//     new Glide(slider1, {
//         type: "carousel",
//         startAt: 0,
//         hoverpause: true,
//         perView: 4,
//         animationDuration: 800,
//         animationTimingFunc: "cubic-bezier(.165,.840,.44,.1)",
//         breakpoints: {
//             1200: {
//                 perView: 3
//             },
//             768: {
//                 perView: 2
//             },
//         },
//     }).mount();
// }
