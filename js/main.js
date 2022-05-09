/* Barra de Menu */

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if(this.window.pageYOffset >100){
        nav.classList.add('bg-dark','shadow');
    }else{
        nav.classList.remove('bg-dark', 'shadow');
    }
})

/* Slick Carousel */

$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });