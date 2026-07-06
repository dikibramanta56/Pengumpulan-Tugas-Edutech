// ===============================
// FILTER PROJECT
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Menghapus status aktif pada semua tombol
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Menambahkan status aktif pada tombol yang dipilih
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {
                card.style.display = "block";
            } else if (card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// ===============================
// VALIDASI FORM
// ===============================

const form = document.getElementById("contactForm");
const error = document.getElementById("error");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("message").value.trim();

    if (nama === "" || email === "" || pesan === "") {

        error.textContent = "Semua kolom wajib diisi!";

        return;
    }

    error.textContent = "";

    popup.style.display = "flex";

    form.reset();

});


// ===============================
// MENUTUP POPUP
// ===============================

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});


// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});