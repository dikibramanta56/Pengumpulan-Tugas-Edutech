// =========================
// FORM KIRIM PESAN
// =========================

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("message").value.trim();

    if(nama === "" || email === "" || pesan === ""){
        alert("Harap lengkapi semua data terlebih dahulu!");
        return;
    }

    popup.style.display = "flex";

    form.reset();

});


// =========================
// TUTUP POPUP
// =========================

closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});


// =========================
// TOMBOL BACK TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});