/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });
}

/* ================= CLOSE MENU ================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
});

/* ================= DARK MODE ================= */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("paras-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

if (themeButton) {
  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀";
  } else {
    themeButton.textContent = "☾";
  }

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    if (darkMode) {
      localStorage.setItem("paras-theme", "dark");

      themeButton.textContent = "☀";
    } else {
      localStorage.setItem("paras-theme", "light");

      themeButton.textContent = "☾";
    }
  });
}
