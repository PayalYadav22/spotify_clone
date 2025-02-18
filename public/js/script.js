// @license Apache-2.0
// @copyright Payal Yadav

import { addEventOnElement } from "./utils.js";

// search clear functionality

const searchField = document.querySelector("[data-search-field]");
const clearField = document.querySelector("[data-search-clear]");

clearField?.addEventListener("click", () => {
  searchField.value = "";
});

// logo functionality

const logo = document.querySelector("[data-logo]");

if (!sessionStorage.getItem("logoAnimated")) {
  logo.classList.add("animate");
  sessionStorage.setItem("logoAnimated", true);
}

// menu toggle

const menuWrapper = document.querySelector("[data-menu-wrapper]");
const menuToggler = document.querySelector("[data-menu-toggler]");

menuToggler?.addEventListener("click", () => {
  menuWrapper.classList.toggle("active");
});

// hide top bar on scroll down

const page = document.querySelector("[data-page]");
let lastScrollPosition = 0;

page?.addEventListener("scroll", function () {
  if (lastScrollPosition < this.scrollTop) {
    this.classList.add("header-hide");
  } else {
    this.classList.remove("header-hide");
  }
  lastScrollPosition = this.scrollTop;
});

// ripple effect

const ripple = function (rippleElement) {
  rippleElement.addEventListener("pointerdown", function (event) {
    event.stopImmediatePropagation();
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const removeRipple = () => {
      ripple.animate(
        {
          opacity: 0,
        },
        { fill: "forwards", duration: 200 }
      );
      setTimeout(() => {
        ripple.remove(); // Fixed here
      }, 1000);
    };

    this.addEventListener("pointerup", removeRipple);
    this.addEventListener("pointerleave", removeRipple);

    const rippleSize = Math.max(this.classWidth, this.classHeight);
    ripple.style.top = `${event.layerY}px`;
    ripple.style.left = `${event.layerX}px`;
    ripple.style.width = `${rippleSize}px`;
    ripple.style.height = `${rippleSize}px`;
  });
};

const rippleElements = document.querySelectorAll("[data-ripple]");

rippleElements?.forEach((item) => ripple(item));

// image animation on loading

window.addEventListener('DOMContentLoaded',function(){
  const animatedImage = document.querySelectorAll('[data-image-load-anim]');

  const addAnimation = function () {
    this.animate({
      opacity:1,
    }, {duration: 200, fill: 'forwards'});
  }
  animatedImage.forEach((image)=>{
    image.style.opacity = 0;
    if(image.complete){
      addAnimation.call(image)
    }else {
      image.addEventListener('load',addAnimation)
    }
  })
})


// bottom nav item active

const bottomNav = document.querySelectorAll('[data-bottom-nav-item]')

const activeBottomNavItem = document.querySelector('[data-bottom-nav-item].active')

const activeNavItem = function ()  {
  activeBottomNavItem?.classList.remove('active')
  this.classList.add('active')
}

bottomNav && addEventOnElement(bottomNav, 'click', activeNavItem)