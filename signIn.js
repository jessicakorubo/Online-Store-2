const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
 
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-bar-responsive-wrap .navbar');
const menu_item = document.querySelector('.nav-bar-responsive-wrap .navbar a');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

menu_item.forEach((item)=>{
  item.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});