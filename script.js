const hamburger = document.querySelector(".hamburger");
const topBar = document.getElementById("bar1");
const middleBar = document.getElementById("bar2");
const bottomBar = document.getElementById("bar3");
const Menu = document.querySelector("nav");

hamburger.addEventListener("click", function () {
  topBar.classList.toggle("topBarRotate");
  middleBar.classList.toggle("middleBarTranslate");
  bottomBar.classList.toggle("bottomBarRotate");
  Menu.classList.toggle("menuShow");
});
