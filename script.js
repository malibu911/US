$(".slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  initialSlide: 1,
  arrpws: true,
  nextArrow: ".slider__arrow_right",
  prevArrow: ".slider__arrow_left",
  dotsClass: "slider__dots",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});
