// Lightweight interactions for the personal single-page site.

const skills = [
  { label: "HTML", icon: "icon-html" },
  { label: "CSS / SCSS", icon: "icon-css" },
  { label: "JavaScript (ES6)", icon: "icon-js" },
  { label: "TailwindCSS", icon: "icon-tailwind" },
  { label: "Responsive Layouts", icon: "icon-responsive" },
  { label: "Accessibility", icon: "icon-accessibility" },
  { label: "Version Control (Git)", icon: "icon-git" },
  { label: "Problem Solving", icon: "icon-problem" },
  { label: "Communication", icon: "icon-comm" },
  { label: "Documentation", icon: "icon-doc" }
];

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;
  container.innerHTML = skills
    .map(skill => `<span class="skill-pill"><span class="skill-icon ${skill.icon}" aria-hidden="true"></span>${skill.label}</span>`)
    .join("");
}

function attachImageFallback() {
  const placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="%23111827" offset="0"/><stop stop-color="%230f172a" offset="1"/></linearGradient></defs><rect width="600" height="400" fill="url(%23g)"/><text x="50%" y="50%" fill="%2394a3b8" font-family="Segoe UI, sans-serif" font-size="28" text-anchor="middle">Add your photo to assets/images</text></svg>';
  document.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
      img.src = placeholder;
      img.style.objectFit = "cover";
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();

  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.getElementById("menu-toggle");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  attachImageFallback();

  // Typewriter effect for hero headline
  const typeTarget = document.getElementById("typewriter");
  const cursor = document.querySelector(".cursor");
  const phrase = "Hello, I'm Kasim Praise Onomehe";
  if (typeTarget && cursor) {
    typeTarget.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      typeTarget.textContent = phrase.slice(0, i + 1);
      i += 1;
      if (i === phrase.length) {
        clearInterval(interval);
        setTimeout(() => cursor.classList.remove("blink"), 400);
      }
    }, 60);
    cursor.classList.add("blink");
  }
});
