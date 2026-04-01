const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const heroImage = document.querySelector(".hero-image");

/* HEADER + PARALLAX */
window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }

 
});

/* MOBILE MENU */
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

/* CONTACT FORM */
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Complete the required fields.";
      return;
    }

    formMessage.textContent =
      "Message sent. This form can be connected to a backend later.";
    contactForm.reset();
  });
}

/* TEAM SLIDER */
const teamSlides = document.querySelectorAll(".team-slide");
const teamDots = document.querySelectorAll(".team-dot");
const teamPrev = document.getElementById("teamPrev");
const teamNext = document.getElementById("teamNext");

let currentTeamSlide = 0;

function showTeamSlide(index) {
  teamSlides.forEach((slide) => slide.classList.remove("active"));
  teamDots.forEach((dot) => dot.classList.remove("active"));

  if (teamSlides[index] && teamDots[index]) {
    teamSlides[index].classList.add("active");
    teamDots[index].classList.add("active");
  }
}

if (teamSlides.length > 0) {
  teamDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTeamSlide = index;
      showTeamSlide(currentTeamSlide);
    });
  });

  if (teamPrev) {
    teamPrev.addEventListener("click", () => {
      currentTeamSlide =
        currentTeamSlide === 0 ? teamSlides.length - 1 : currentTeamSlide - 1;
      showTeamSlide(currentTeamSlide);
    });
  }

  if (teamNext) {
    teamNext.addEventListener("click", () => {
      currentTeamSlide =
        currentTeamSlide === teamSlides.length - 1 ? 0 : currentTeamSlide + 1;
      showTeamSlide(currentTeamSlide);
    });
  }
}

/* SERVICE TOGGLE */
document.querySelectorAll(".service-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest(".service-row");
    row.classList.toggle("open");
    btn.textContent = row.classList.contains("open") ? "Ver menos" : "Ver más";
  });
});

/* REVEAL ON SCROLL */
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});