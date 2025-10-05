// Active le thème sombre Bootstrap au chargement
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("data-bs-theme", "dark");

  // Animation d'apparition du contenu
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "all 0.8s ease";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
// Active le thème sombre Bootstrap au chargement
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("data-bs-theme", "dark");

  // Animation d'apparition du contenu
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "all 0.8s ease";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
