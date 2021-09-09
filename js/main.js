// // Step 1: select the element the user will click on to make this menu show/hide. In this case it's the toggle-icon and since we are grabbing it by it's classname we need to include the period 
// const clickButton = document.querySelector('.toggle-icon');


// // Step 2: add a click event to that icon
// clickButton.addEventListener('click', () => {
//     // when that icon is clicked we are going to grab the nav element (or whatever is showing/hiding) and add or remove that special class we created in the CSS
//     document.querySelector('nav').classList.toggle('left');
//     clickButton.classList.toggle('open');
// });

// 

const portBtn = document.querySelector('.portfolio-btn');
const folder = document.querySelector('.class-5');
const shadow = document.querySelector('.class-6');

portBtn.addEventListener('mouseover', () => {
    folder.classList.toggle('folder-open');
    shadow.classList.toggle('folder-open');
});

portBtn.addEventListener('mouseleave', () => {
    folder.classList.toggle('folder-open');
    shadow.classList.toggle('folder-open');
});

// Detect Browser for Webp as a background image
// Detect Safari
// let safariAgent = userAgentString.indexOf("Safari") > -1;
  
// Discard Safari since it also matches Chrome
// if ((chromeAgent) && (safariAgent)) safariAgent = false;

// console.log(safariAgent);

var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;

if ((is_chrome) && (is_safari)) is_safari = false;

console.log(is_safari);
console.log(window.navigator.userAgent);