//DOM load event
window.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector(".cube"),
    imageButtons = document.querySelector(".image-buttons");
  let cubeImageClass = cube.classList[1];

  //Add click event listener to image buttons container
  imageButtons.addEventListener("click", e => {
    //Get node type and class value of clicked element
    const targetNode = e.target.nodeName,
      targetClass = e.target.className;

    //Check if image input has been clicked and isn't the currently shown image
    if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
      console.log(`Show Image: ${targetClass.charAt(11)}`);

      //Replace previous cube image class with new class
      cube.classList.replace(cubeImageClass, targetClass);

      //Update cube image class variable with new class
      cubeImageClass = targetClass;
    }
  });
});

// for sticky header

const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// for sticky header  



$('.nav-link-custom').on('click', function (e) {
  var target = this.hash,
      $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 130
  }, 50, function () {
      window.location.hash = target;
  });
  if (window.matchMedia("(max-width: 1199px)").matches) {
      $('.navbar-collapse').collapse('hide');
  }
});

// popup code

$(document).ready(function () {
  setTimeout(function () {
     $('#exampleModal').modal('show')
  }, 3000)
})

// popup code

// for side menu open script

let navbarBackdrop = $('<div class="navbarBackdrop"></div>');
    $('.navbar .navbar-toggler').on('click', function () {
      $('.navbar .navbar-collapse').addClass('show');
      $('.navbar').append(navbarBackdrop);
    })

    $('.navbar .navbar-collapse .close').on('click', function () {
      $('.navbar .navbar-collapse').removeClass('show');
      $(navbarBackdrop).remove();
    })

    $(document).on('click', function (e) {
      if ($(e.target).hasClass('navbarBackdrop')) {
        $(e.target).remove();
        $('.navbar .navbar-collapse').removeClass('show');
      }

      else if ($(e.target).hasClass('custom_nav_link')) {
        $(navbarBackdrop).remove();
        $('.navbar .navbar-collapse').removeClass('show');
      }
    })