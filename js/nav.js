const navSlide = () => {
  const nav_btn = document.querySelector(".nav_btn");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav_btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    nav_btn.classList.toggle(`toggle`);
    navLinks.classList.toggle("nav-active");
  });
};

navSlide();
