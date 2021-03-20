let navbar = document.querySelector("nav.fixed-top");
let logo = document.querySelector(".logo img");
let toggle = document.querySelector(".toggle");
let menu2 = document.querySelector(".menu2");
let workTag = document.querySelectorAll(".work-type-tag ul li a");

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    center: true,
    dots: true
  });
});

window.addEventListener("scroll", () => {
  // GET STROLLING POSITION
  let currentPosition = window.pageYOffset;
  if (currentPosition > 200) {
    navbar.classList.add("addsticky");
    logo.setAttribute("src", "./images/asset 1.png");
  } else {
    navbar.classList.remove("addsticky");
    logo.setAttribute("src", "./images/asset 0.png");
  }
});

toggle.addEventListener("click", () => {
  menu2.classList.toggle("active");
});

// FILTERING FEATURE

let test = $(".works-thumbnail").isotope({
  itemSelector: ".each-project"
});

workTag[0].addEventListener("click", e => {
  e.preventDefault();
  workTag.forEach(each => {
    each.classList.remove("active");
  });
  workTag[0].classList.add("active");
  test.isotope({
    filter: workTag[0].getAttribute("data-filter")
  });
});

workTag[1].addEventListener("click", e => {
  e.preventDefault();
  workTag.forEach(each => {
    each.classList.remove("active");
  });
  workTag[1].classList.add("active");
  test.isotope({
    filter: workTag[1].getAttribute("data-filter")
  });
});

workTag[2].addEventListener("click", e => {
  e.preventDefault();
  workTag.forEach(each => {
    each.classList.remove("active");
  });
  workTag[2].classList.add("active");
  test.isotope({
    filter: workTag[2].getAttribute("data-filter")
  });
});

workTag[3].addEventListener("click", e => {
  e.preventDefault();
  workTag.forEach(each => {
    each.classList.remove("active");
  });
  workTag[3].classList.add("active");
  test.isotope({
    filter: workTag[3].getAttribute("data-filter")
  });
});

workTag[4].addEventListener("click", e => {
  e.preventDefault();
  workTag.forEach(each => {
    each.classList.remove("active");
  });
  workTag[4].classList.add("active");
  test.isotope({
    filter: workTag[4].getAttribute("data-filter")
  });
});
