const iconMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector("ul");
const menuItem = document.querySelectorAll("ul li a");

iconMenu.addEventListener("click", (e) => {
  e.preventDefault();
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("hide");
});

closeMenu.addEventListener("click", (e) => {
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("hide");
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
    menu.classList.toggle("hide");
  });
}
