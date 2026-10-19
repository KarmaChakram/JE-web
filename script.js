// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: opens WhatsApp with the message pre-filled.
// Replace with your number in international format, no "+" or spaces.
const WHATSAPP_NUMBER = "910000000000";

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Hello, I'm ${name}${phone ? " (" + phone + ")" : ""}.\n${message}`;
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
});
