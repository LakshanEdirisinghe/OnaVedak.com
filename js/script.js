// ===============================
// Main Page Slider
// ===============================

var Slide = document.getElementById("Slide");
var slider = document.getElementById("slider");
var frame = document.getElementById("formFrame");

var slideimages = [
    "../../../assets/s1.jpg",
    "../../../assets/s2.jpg",
    "../../../assets/s3.jpg",
    "../../../assets/s4.jpg",
    "../../../assets/s5.jpg",
    "../../../assets/s6.jpg"
];

let i = 0;
let sliderInterval;


if (Slide) {

    sliderInterval = setInterval(function () {

        i = (i + 1) % slideimages.length;
        Slide.src = slideimages[i];

    }, 3000);

}


// ===============================
// Load Client / Worker Register Form
// ===============================

function loadForm(page) {

    // Stop slider
    if (sliderInterval) {
        clearInterval(sliderInterval);
    }


    // Hide slider
    if (slider) {
        slider.style.display = "none";
    }


    // Show iframe
    if (frame) {

        frame.style.display = "block";
        frame.src = page;

    }

}


// ===============================
// Register Animation
// (indexRR.html & worker_register.html)
// ===============================

const wrapper = document.querySelector(".wrapper");


if (wrapper) {

    const registerForm = document.querySelector(".form-box.register");

    if (registerForm) {

        wrapper.classList.add("active");

    }

}


// ===============================
// Login / Register Switch
// ===============================

const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");


if (registerLink) {

    registerLink.onclick = function(e) {

        e.preventDefault();
        wrapper.classList.add("active");

    };

}


if (loginLink) {

    loginLink.onclick = function(e) {

        e.preventDefault();
        wrapper.classList.remove("active");

    };

}