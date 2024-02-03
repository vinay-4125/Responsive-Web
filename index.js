const topnav = document.getElementById("top-nav");
const vishide = document.querySelector(".vishide");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
// const goTop = document.getElementById("go-top");
const goTop = document.querySelector(".go-to-top");
const menuIcon = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".side-nav");
const closeDiv = document.querySelector(".closediv");
let sliderContainer = document.querySelector(".outer-slider-container");
let innerSlider = document.querySelector(".inner-slider");

window.onscroll = function () {
  //   console.log(document.documentElement.scrollTop);
  scrollFunction();
  goToTop();
};

const goToTopClick = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
};
goTop.addEventListener("click", goToTopClick);

function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 100 ||
  //     document.documentElement.scrollTop > 100
  //   ) {
  //     topnav.style.top = "50px";
  //   } else {
  //     topnav.style.top = "0";
  //   }

  //   console.log(document.documentElement.scrollTop);
  //   if (
  //     document.documentElement.scrollTop > 0 &&
  //     document.documentElement.scrollTop < 250
  //   ) {
  //     topnav.style.top = "50px";
  //     topnav.style.position = "absolute";
  //     topnav.style.animation = "none"
  //     //   }else if(document.documentElement.scrollTop>){}
  //   } else if (document.documentElement.scrollTop >= 200) {
  //     topnav.style.position = "sticky";
  //     topnav.style.top = "0px";
  //     topnav.style.animation = "fadeIn 0.5s"
  //   }

  if (
    document.documentElement.scrollTop >= 0 &&
    document.documentElement.scrollTop < 150
  ) {
    // topnav.style.top = "50px";
    topnav.style.position = "absolute";
    topnav.style.animation = "none";
    //   }else if(document.documentElement.scrollTop>){}
  } else if (document.documentElement.scrollTop >= 180) {
    topnav.style.position = "sticky";
    topnav.style.top = "0px";
    topnav.style.animation = "fadeIn linear 0.8s";
  }

  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
}

function goToTop() {
  if (document.documentElement.scrollTop < 550) {
    goTop.style.display = "none";
  } else if (document.documentElement.scrollTop >= 551) {
    goTop.style.display = "block";
  }
}

function myFunction(x) {
  if (x.matches) {
    if (
      document.documentElement.scrollTop >= 0 &&
      document.documentElement.scrollTop < 150
    ) {
      topnav.style.top = "50px";
      topnav.style.position = "absolute";
      topnav.style.animation = "none";
    }
  }
}

const mmObj = window.matchMedia("(min-width:1024px)");

myFunction(mmObj);

mmObj.addEventListener("change", function () {
  myFunction(mmObj);
});

menuIcon.addEventListener("click", () => {
  sideNav.style.width = "350px";
});

closeDiv.addEventListener("click", () => {
  sideNav.style.width = "0";
});

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", () => {
  sliderContainer.style.cursor = "default";
});

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  pressed = false;
});

window.addEventListener("mouseup", () => {
  // pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startX}px`;

  checkBoundary();
});

const checkBoundary = () => {
  const outerS = document.querySelector(".outer-slider-container");
  const innerS = document.querySelector(".inner-slider");
  let outer = outerS.getBoundingClientRect();
  let inner = innerS.getBoundingClientRect();
  //   let outer = sliderContainer.getBoundingClientRect();
  //   let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
};
