/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

window.onscroll = function(ev) {
  const myNav = document.getElementsByClassName("header")[0];
  if (window.scrollY > 20) {
    myNav.classList.add("myNav-scrolled");
  } else if (window.scrollY == 0) {
    myNav.classList.remove("myNav-scrolled");
  }
};