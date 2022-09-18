window.addEventListener('load', ()=>{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      // spaceBetween: 45,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});

let mySwiper = document.querySelector("[data-swipper='mySwiper']");
let slides = document.querySelectorAll("[data-swipper='swiper-slide']");
let swiperLeft = document.querySelectorAll("[data-swipper='swiper-button-prev']");
let swiperRight = document.querySelectorAll("[data-swipper='swiper-button-next']");
function checkMediaQuery() {
  if (window.innerWidth < 960) {
    mySwiper.classList.add("mySwiper");
    slides.forEach((item)=>{
      item.classList.add("swiper-slide");
    })
    swiperLeft.forEach((item)=>{
      item.classList.add("swiper-button-prev");
    })
    swiperRight.forEach((item)=>{
      item.classList.add("swiper-button-next");
    })
  }
  else{
    mySwiper.classList.remove("mySwiper");
    slides.forEach((item)=>{
      item.classList.remove("swiper-slide");
    })
    swiperLeft.classList.remove("swiper-button-prev");
    swiperRight.classList.remove("swiper-button-next");
  }
}
window.addEventListener('DOMContentLoaded', checkMediaQuery);
window.addEventListener('resize', checkMediaQuery);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  // spaceBetween: 45,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

