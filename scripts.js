let menuIcon = document.querySelector('.menuIcon');
let menuText = document.querySelector('.menuText');
let closeMenuButton = document.querySelector('#closeMenuButton');
let portfolioAnchor = document.querySelector('#portfolioMenuButton');
let aboutAnchor = document.querySelector('#aboutMenuButton');
let contactAnchor = document.querySelector('#contactMenuButton');

menuIcon.addEventListener("click", function() {
    menuText.classList.add('menuTextToggle');
})

closeMenuButton.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})

portfolioAnchor.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})

aboutAnchor.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})

contactAnchor.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})