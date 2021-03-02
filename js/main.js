window.addEventListener("DOMContentLoaded", function(event) {
    const menu = document.querySelector('.site-nav');
    const menuButton = document.querySelector(".menu-icon");
    
    menuButton.onclick = (e) => {
        menu.classList.toggle("left");
    }

    menu.onmouseleave = (e) => {
        menu.classList.toggle('left');
    } 
});