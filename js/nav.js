/*
============================================================
  JavaScript for Navigation Bar for Mobile Responsive Start
============================================================
*/
// Declaring Variables
const nav_btn = document.querySelector(".nav_btn"); // Responsive Navigation Button
const nav = document.querySelector(".nav-links"); // Drawer
const navLinks = document.querySelectorAll(".nav-links li"); // Drawer Menu List

//For loop to select each list since we can't pass muliple values on EventListener
for (eachLi of navLinks) {
  eachLi.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    nav_btn.classList.toggle(`toggle`);
  });
}

// Navigation Button Click Event
nav_btn.addEventListener("click", () => {
  nav.classList.toggle("nav-active"); //Calling Drawer
  nav_btn.classList.toggle(`toggle`); //nav Button Animation

  //To Prevent Scroll for Drawer on Mobile Responsive
  nav.addEventListener(
    "touchmove",
    (nav) => {
      nav.preventDefault();
    },
    false
  );
});
/*
=============================================================
  End of JavaScript for Navigation Bar for Mobile Responsive
=============================================================
*/

// !!! Button Click Active Pending
