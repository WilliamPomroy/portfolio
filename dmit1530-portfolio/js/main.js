window.addEventListener("DOMContentLoaded", function(event) {
    const menu = document.querySelector('#mobile-sub-menu');
    const menuOpenButton = document.querySelector("#mobile-menu-open-button");
    const menuCloseButton = document.querySelector("#mobile-menu-close-button");
    
    let isOpen = false;
   
    /*
    https://greensock.com/docs/Easing/Bounce
    easing graph
    */
   
    // have the menu slide in from the 
    // opacity 

    menu.onmouseleave = (e) =>{
        TweenMax.to(menu,  0.4,  {top: "-30rem",   ease:Power3.easeOut});
        isOpen = false;
    }
    menuOpenButton.onclick = (e)=>{
        if (isOpen == false) {
            TweenMax.to(menu,  0.4,  {top: 0,   ease:Power3.easeOut});
            console.log("hi");
        }
        isOpen = true;
    }
    menuCloseButton.onclick = (e)=>{
        TweenMax.to(menu,  0.4,  {top: "-30rem",   ease:Power3.easeOut});
        isOpen = false;
    }
});