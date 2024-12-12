// Select the navbar element
const navbar = document.getElementById("navbar");
const navdiv = document.getElementById("navdiv");
const navbtn = document.getElementById("navbtn");
const logo = document.getElementById("logo");

// Define the scroll threshold
const scrollThreshold = 200; // Adjust this value as needed

// Add a scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-darkBlue", "text-white");
    navdiv.classList.add("md:py-4");
    navdiv.classList.remove("md:py-10");
    navbtn.classList.add("invert");
    logo.classList.add("invert");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-darkBlue", "text-white");
    navdiv.classList.add("md:py-10");
    navdiv.classList.remove("md:py-4");
    navbtn.classList.remove("invert");
    logo.classList.remove("invert");
  }
});
