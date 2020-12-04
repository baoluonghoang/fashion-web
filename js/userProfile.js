var slideUser = 1;
showUser(slideUser);

function currentUser(n){
    showUser(slideUser = n);
    console.log(n);
}

function showUser(n) {
    var aUser = document.querySelectorAll(".a-user");
    var ctProfile = document.querySelectorAll(".content-bar-profile");

    if( n > ctProfile.length) slideUser = 1;
    if( n < 1) slideUser = ctProfile.length;
    
    for(var i = 0; i< ctProfile.length; i++) {
        ctProfile[i].style.display = "none";
    }

    for(var i = 0; i < aUser.length; i++) {
        aUser[i].className = aUser[i].className.replace(" a-user-active", "");
    }

    aUser[slideUser - 1].className += " a-user-active";
    ctProfile[slideUser - 1].style.display = "block";
}

