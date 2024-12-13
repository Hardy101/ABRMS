// Cache DOM elements
const elements = {
  navbar: document.getElementById("navbar"),
  navdiv: document.getElementById("navdiv"),
  navbtn: document.getElementById("navbtn"),
  logo: document.getElementById("logo"),
};

// Define the scroll threshold
const SCROLL_THRESHOLD = 200; // Adjust this value as needed

// Helper functions for adding and removing classes
const addClasses = (element, classes) => element.classList.add(...classes);
const removeClasses = (element, classes) =>
  element.classList.remove(...classes);

// Scroll event handler
const handleScroll = () => {
  const isScrolled = window.scrollY > SCROLL_THRESHOLD;

  const navbarClasses = isScrolled
    ? ["bg-darkBlue", "text-white"]
    : ["bg-transparent"];
  const navdivPadding = isScrolled ? ["md:py-4"] : ["md:py-10"];
  const invertClasses = isScrolled ? ["invert"] : [];

  // Update classes for navbar
  removeClasses(elements.navbar, [
    "bg-transparent",
    "bg-darkBlue",
    "text-white",
  ]);
  addClasses(elements.navbar, navbarClasses);

  // Update padding for navdiv
  removeClasses(elements.navdiv, ["md:py-4", "md:py-10"]);
  addClasses(elements.navdiv, navdivPadding);

  // Update invert state for navbtn and logo
  [elements.navbtn, elements.logo].forEach((el) => {
    removeClasses(el, ["invert"]);
    addClasses(el, invertClasses);
  });
};

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
