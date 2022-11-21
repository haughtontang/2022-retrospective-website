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

// Tab JS
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// This will select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add show class to that tab
    tabContentItem.classList.add('show')
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));