const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });
}

if (mobileClose) {
  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Complete the required fields.";
      return;
    }

    formMessage.textContent = "Message sent. This form can be connected to a backend later.";
    contactForm.reset();
  });
}