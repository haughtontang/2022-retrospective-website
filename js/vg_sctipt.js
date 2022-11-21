// nav toggle
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById("mobile-menu");
btn.addEventListener('click', navToggle);
function navToggle() {
    console.log("test")
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-dash-scrolling');
    menu.classList.toggle('show-menu');
  }