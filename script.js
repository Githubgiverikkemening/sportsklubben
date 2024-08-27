const burgermenu = document.querySelector("#burger_java");
const navbar = document.querySelector("#navbar");

burgermenu.addEventListener("click", onBurgerMenuClick);

function onBurgerMenuClick() {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
}
