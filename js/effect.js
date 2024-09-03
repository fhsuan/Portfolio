// top
$(document).ready(function () {
  // 初始隐藏“返回顶部”按钮
  $("#back-top").hide();

  // 监听窗口滚动事件
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  // 点击“返回顶部”按钮时滚动到页面顶部
  $('#back-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});


// bgcolor
updateBackgroundColor();

window.addEventListener('scroll', function () {
  updateBackgroundColor();
});

function updateBackgroundColor() {
  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;

  var endScroll1 = windowHeight;
  var endScroll2 = 2 * windowHeight;
  var endScroll3 = 3 * windowHeight;

  var scrollPercent;
  var startColor, endColor;

  if (scrollTop < endScroll1) {
    scrollPercent = scrollTop / endScroll1;
    var startColor = [249, 232, 225];
    var endColor = [249, 232, 225];
  } else if (scrollTop < endScroll2) {
    scrollPercent = (scrollTop - endScroll1) / (endScroll2 - endScroll1);
    var startColor = [249, 232, 225];
    var endColor = [241, 240, 238];
  } else if (scrollTop < endScroll3) {
    scrollPercent = (scrollTop - endScroll2) / (endScroll3 - endScroll2);
    startColor = [241, 240, 238];
    endColor = [241, 240, 238];
  } else {
    scrollPercent = 1;
    var startColor = [241, 240, 238];
    var endColor = [255, 255, 255];
  }

  var r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercent);
  var g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercent);
  var b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercent);

  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

window.addEventListener('scroll', updateBackgroundColor);

// Swiper functionality
var swiper = null;
function initSwiper() {
  var windowWidth = window.innerWidth;
  if (swiper !== null) {
    swiper.destroy();
  }

  if (windowWidth >= 600) {
    swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        2000: {
          slidesPerView: 4,
        },
      },
      loop: true,
      effect: 'slide',
      autoHeight: true,
    });
  }
}

// Add mouse events for Swiper
var swiperContainer = document.querySelector('.swiper-container');

swiperContainer.addEventListener('mouseenter', function () {
  if (swiper !== null) {
    swiper.autoplay.stop();
  }
});

swiperContainer.addEventListener('mouseleave', function () {
  if (swiper !== null) {
    swiper.autoplay.start();
  }
});

// Initial Swiper setup and resize event
initSwiper();
window.addEventListener('resize', function () {
  initSwiper();
});
