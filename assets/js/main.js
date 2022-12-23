$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.setting').click(function(){
    $('.setting').toggleClass('active');
    $('.side-nav').toggleClass('active-side-nav');
    $('body').toggleClass('overflowNone')
  });

  $('.side-nav .overlay').click(function(){
    $('.setting').toggleClass('active');
    $('.side-nav').toggleClass('active-side-nav');
    $('body').toggleClass('overflowNone')
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper = new Swiper(".swiper-category", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    // slidesPerView: "auto",
    // centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-products", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    // slidesPerView: "auto",
    // centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
});


$(document).ready(function() {
  let i = 120;
  let a = setInterval(function() {
    if (i < 10)
      document.querySelector('.count_down').textContent = `0${i}`;
    else {
      document.querySelector('.count_down').textContent = `${i}`
    }
    i--;
    if (i < 0) {
      clearInterval(a);
    }
  }, 1000)
});

$(document).ready(function() {
  let i = 1000;
  let a = setInterval(function() {
    if (i < 10)
      document.querySelector('.count_down_product').textContent = `0${i}`;
    else {
      document.querySelector('.count_down_product').textContent = `${i}`
    }
    i--;
    if (i < 0) {
      clearInterval(a);
    }
  }, 1000)
});

$(document).ready(function() {
  const codes = document.querySelectorAll('.code');
  codes[0].focus();
  codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
      if (e.key >= 0 && e.key <= 9) {
        codes[idx].value = '';
        setTimeout(() => codes[idx + 1].focus(), 10);
      } else if (e.key === 'Backspace') {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    });
  });
});