$(document).ready(function () {
  $(".carousel-slick").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".control-button-left"),
    nextArrow: $(".control-button-right"),
  });
});

function hideFirstHeader() {
  const elFirstHeader = document.querySelector("#first-header");
  const elHeaderFixed = document.querySelector("#header-fixed");

  if (window.scrollY > 0) {
    elFirstHeader.style.display = "none";
    elHeaderFixed.style.top = 0;
  } else if (window.scrollY === 0) {
    elFirstHeader.style.display = "flex";
    elHeaderFixed.style.top = "35.92px";
  }
}
