const openMenu = document.getElementById("show-menu")
const hideMenuIcon = document.getElementById("hide-menu")
const sideMenu = document.getElementById("nav-menu")

openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
});

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active')
})


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}