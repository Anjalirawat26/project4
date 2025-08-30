// body toggle class
$(".sidebar-btn").click(function () {
    $("body").toggleClass("mobile-open");
});

  $(".sidebar-btn").click(function(){
    $(".menu_sec").slideToggle("slow");
  });


// $(".has-submenu").click(function () {
//   $(this).toggleClass("child-open");
//   $(this).children(".submenu").slideToggle();
// });

// header fixed
// $(window).scroll((function () {
//     $(window).scrollTop() >= 50 ? $("header").addClass("fixed-header") : $("header").removeClass("fixed-header")
// }
// ));



// popup js
$('.without-caption').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});

$('.with-caption').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom mfp-img-mobile',
  image: {
    verticalFit: true,
    titleSrc: function (item) {
      return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank"></a>';
    }
  },
  zoom: {
    enabled: true
  }
});

// popup 
    $(document).ready(() => {
      setTimeout(() => {
        $('#exampleModal1').modal('show');
      },  7000);
    })


// read more button
    $(".moreless-button").click(function () {
      $(".moretext").slideToggle(10);
      if ($(".moreless-button").text() == "Read more") {
          $(this).text("Read less");
      } else {
          $(this).text("Read more");
      }
  });


$(document).ready(function () {
  $('.nav-link').on('click', function (e) {
      var target = this.hash;
      var $target = $(target);
      var targetOffset = $target.offset().top - 50;
      $('html, body').stop().animate({
          scrollTop: targetOffset
      }, 1500, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(".counter-number").counterUp({
  delay: 10,
  time: 1000,
});


// const text = document.querySelector(".about-experience-tag");
// text.innerHTML = text.innerText
//     .split("")
//     .map(
//         (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
//     )
//     .join("");
