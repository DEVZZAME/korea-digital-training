// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// click이 되는 순간 적용
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
}); //searchEl.addEventListener

// focus가 되는 순간 적용
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// focus에서 벗어나는 순간 적용
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// SWIPER
// NOTICE >> SWIPER

const swiperNotice = new Swiper(".notice .notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// PROMOTION >> SWIPER
// SWIPER PROMOTION

const swiperPromotion = new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // pagination을 할 엘리먼트 클래스 설정
    clickable: true, // 클릭 가능 여부 설정
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev", // 이전 버튼 클래스 설정
    nextEl: ".promotion .swiper-button-next", // 이후 버튼 클래스 설정
  },
});

// SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoplay() {
  if (swiperPromotion.autoplay.running) {
    swiperPromotion.autoplay.stop();
  } else {
    swiperPromotion.autoplay.start();
  }
}

// TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleIcon = document.querySelector(".toggle-promotion span");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }

  if (promotionToggleIcon.style.transform === "rotate(-180deg)") {
        promotionToggleIcon.style.transform = "rotate(0deg)";
      } else {
        promotionToggleIcon.style.transform = "rotate(-180deg)";
      }
    
});

//SCROLL ANIMATION
let scrollYpos;
window.addEventListener("scroll", function(){
  scrollYpos = window.scrollY;
  console.log(scrollYpos);
})