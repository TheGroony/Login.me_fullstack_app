const inputEmail = document.querySelector(".inputEmail");
const inputHeslo = document.querySelector(".inputHeslo");
const labelEmail = document.querySelector(".labelEmail");
const labelHeslo = document.querySelector(".labelHeslo");

inputEmail.addEventListener("input", function() {
    if(this.value != "") {
        labelEmail.classList.add("offset");
    }
    else labelEmail.classList.remove("offset");
});

inputHeslo.addEventListener("input", function() {
    if(this.value != "") {
        labelHeslo.classList.add("offset");
    }
    else labelHeslo.classList.remove("offset");
});

