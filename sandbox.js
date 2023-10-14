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

// const toggleMenu = () => {
//   const iconMenu = document.querySelector(".menu");
//   const closeMenu = document.querySelector(".close");
//   const menu = document.querySelector("ul");

//   iconMenu.classList.toggle("hide");
//   closeMenu.classList.toggle("hide");
//   menu.classList.toggle("hide");
// };

// iconMenu.addEventListener("click", toggleMenu);
// closeMenu.addEventListener("click", toggleMenu);

// for (let i = 0; i < menuItem.length; i++) {
//   menuItem[i].addEventListener("click", toggleMenu);
// }

// // Toggle the menu when the user scrolls past a certain point on the page.
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     toggleMenu();
//   }
// });

// // Toggle the menu when the user clicks a button.
// const toggleMenuButton = document.querySelector(".toggle-menu-button");
// toggleMenuButton.addEventListener("click", toggleMenu);
