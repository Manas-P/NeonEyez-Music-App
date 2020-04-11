const navSlide = () => {
  const nav_btn = document.querySelector(".nav_btn");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //For loop to select each list since we can't pass muliple values on EventListener
  for (eachLi of navLinks) {
    eachLi.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      nav_btn.classList.toggle(`toggle`);
    });
  }

  nav_btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active"); //Calling Drawer

    nav_btn.classList.toggle(`toggle`); //nav Button Animation

    //To Prevent Scroll
    nav.addEventListener(
      "touchmove",
      (nav) => {
        nav.preventDefault();
      },
      false
    );
  });
};

navSlide();
