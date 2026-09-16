// ============================
// MENU MOBILE
// ============================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ============================
// MENU OTOMATIS TERTUTUP
// ============================

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ============================
// FORM KONTAK
// ============================

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name === "" ||
        email === "" ||
        message === "") {

        alert("Silakan isi semua kolom terlebih dahulu.");

        return;
    }


    alert(
        "Terima kasih, " +
        name +
        "! Pesan kamu berhasil dikirim."
    );


    contactForm.reset();

});
