
var slideIndex = 1;
showSlides(slideIndex); 

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var mainItem = document.querySelectorAll(".main-item");
    var imageItem = document.querySelectorAll(".list-detail-item");

    //nếu mà selected list nhiều hơn list các item hiện có thì item sẽ trả về 1
    if(n > mainItem.length) { 
        slideIndex = 1;
    }
    //nếu selected list nhỏ hơn 1 thì nó trả về các phần tử hiện có của list item
    if(n < 1) {
        slideIndex = mainItem.length;
    }
    for(var i = 0; i < mainItem.length; i++) {
        mainItem[i].style.display = "none";
    }
    for(var i = 0; i < imageItem.length; i++) {
        imageItem[i].className = imageItem[i].className.replace(" active", "");
    }
    mainItem[slideIndex - 1].style.display = "block";
    imageItem[slideIndex - 1].className += " active";
}


/*detail description-review-shipping of users about product */

var detailIndex = 1;
detailShow(detailIndex); 

function currentDetail(n) {
    console.log(n);
    detailShow(detailIndex = n);
}

function detailShow(n) {
    var btnFeature = document.querySelectorAll(".btn-feature");
    var textProduct = document.querySelectorAll(".text-product");

    if(n > textProduct.length) { detailIndex = 1}
    if(n < 1) { detailIndex = textProduct.length}

    for(var i = 0; i < textProduct.length; i++) {
        textProduct[i].style.display = "none";
    }

    for(var i = 0; i < btnFeature.length; i++) {
        btnFeature[i].className = btnFeature[i].className.replace(" description-active", "");
    }

    textProduct[detailIndex - 1].style.display = "block";
    btnFeature[detailIndex - 1].className += " description-active";
}

/*button see more */

function seeMoreProduct() {
    var moreText = document.getElementById("more");
    var btnMore = document.getElementById("see-more");

    if(moreText.style.display === "block") {
        btnMore.innerHTML = "See more";
        moreText.style.display = "none";
    }else {
        btnMore.innerHTML = "See less";
        moreText.style.display = "block";
    }
}

/*sum product in detail-item.html*/

var minus = document.getElementsByClassName("minus-btn");

var plus = document.getElementsByClassName("plus-btn");

function plusCheck() {
    var total = document.getElementById("counter-total").value;
    total++;
    document.getElementById("counter-total").value = total;
}

function minusCheck() {
    var total = document.getElementById("counter-total").value;
    total--;
    if(total < 0) return 0;
    document.getElementById("counter-total").value = total;
}