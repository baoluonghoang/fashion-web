function decreaseCheck() {
    var descrease = document.getElementById("counter-product1").value;
    descrease--;
    if(descrease < 0) return 0;
    document.getElementById("counter-product1").value = descrease;
}

function increaseCheck() {
    var inscrease = document.getElementById("counter-product1").value;
    inscrease++;
    document.getElementById("counter-product1").value = inscrease;
}