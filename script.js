// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

if (toggle) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Contact form alert
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    });
}