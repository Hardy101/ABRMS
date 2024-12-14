const button = document.querySelectorAll(".btn");
const sidebar = document.getElementById("sidebar");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
});