let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

    // Menu toggle
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    // Scroll karne par menu band ho jaye
    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };

    // 🔹 Navbar link ya section click karne par sidebar band ho jaye
    document.querySelectorAll('header .navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    });

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});


videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-swiper-slider').src = src;
  });
});

var swiper = new Swiper(".mySwiper", {

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    type: "progressbar",
  },
});


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    type: "progressbar",
  },
  breakpoints: {
           450: {
             slidesPerView: 2,
           },
           768: {
             slidesPerView: 3,
           },
           991: {
             slidesPerView: 4,
           },
           1200: {
             slidesPerView: 5,
           },
        },
});










