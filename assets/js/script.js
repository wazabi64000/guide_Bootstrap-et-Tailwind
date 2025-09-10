// script.js

document.addEventListener("DOMContentLoaded", function () {
  // ===== Dark Mode Toggle =====
  const darkModeBtn = document.getElementById("darkModeToggle");
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    // Charger le thème depuis le localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }

  // ===== Exemple d'alerte sur boutons =====
  const alertButtons = document.querySelectorAll(".btn-alert");
  alertButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Bouton cliqué !");
    });
  });

  // ===== Toggle menu responsive (Bootstrap navbar) =====
  const navbarToggles = document.querySelectorAll(".navbar-toggler");
  navbarToggles.forEach((toggler) => {
    toggler.addEventListener("click", () => {
      const targetId = toggler.getAttribute("data-bs-target");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.classList.toggle("show");
      }
    });
  });
});
