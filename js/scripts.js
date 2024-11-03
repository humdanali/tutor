// Change Navbar background on scroll
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 0){
        navbar.classList.add('navbar-scroll')
    }else{
        navbar.classList.remove('navbar-scroll')
    }
});



// 
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-item");
  //   toggleButton.addEventListener("click", function () {
  //     mobileMenu.classList.toggle("active");
  //   });
  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  } else {
    console.error("Toggle button or mobile menu element not found.");
  }
});
