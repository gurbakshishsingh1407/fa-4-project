
$(document).ready(function () {
  $('.hero').css('background-image', 'linear-gradient(rgba(129,82,2 , 0.5) , rgba(129,82,2 ,0.2)) , url("assets/images/main.jpg")')
});


nav = document.querySelector('.mobile-nav > nav')
Pagebody = document.querySelector('.Pagebody')
MobileHeader = document.querySelector('.mobile-nav > header')

MobileFooter = document.querySelector('.footer');

Modal = document.querySelector('.modal');



isOpen = false;
navBar = document.querySelector('.navBar');

function triggerMenu() {
  if (isOpen) {
    Pagebody.style.transform = "translate(0px ,0px)";
    MobileFooter.style.transform = "translate(0px ,0px)";
    MobileHeader.style.transform = "translate(0px ,0px)";

    Modal.style.visibility = "hidden";
    Modal.style.opacity = "0";

    nav.style.transform = "translate(-250px ,0px)";


    isOpen = false;
    $('#navBar')[0].checked = false;
  } else {
    Pagebody.style.transform = "translate(100px ,0px)";
    MobileHeader.style.transform = "translate(100px ,0px)";

    MobileFooter.style.transform = "translate(100px ,0px)";

    Modal.style.visibility = "visible";
    Modal.style.opacity = "1";

    nav.style.transform = "translate(250px ,0px)";


    isOpen = true;
    $('#navBar')[0].checked = true;
  }
}

function close_modal() {
  Pagebody.style.transform = "translate(0px ,0px)";
  MobileFooter.style.transform = "translate(0px ,0px)";
  MobileHeader.style.transform = "translate(0px ,0px)";

  Modal.style.visibility = "hidden";
  Modal.style.opacity = "0";

  nav.style.transform = "translate(-250px ,0px)";


  isOpen = false;
  $('#navBar')[0].checked = false;
}
$(document).on('scroll', function() {
  $('.scrollTop').css('transform', 'scale(1)');
})
var isScrolling;
// Listen for scroll events
window.addEventListener('scroll', function (event) {
  window.clearTimeout(isScrolling);

  if (window.scrollY < 700) {
    isScrolling = setTimeout(function() {
      $('.scrollTop').css('transform', 'scale(0)');
    }, 200);

  } else {
    isScrolling = setTimeout(function() {
      $('.scrollTop').css('transform', 'scale(0)');
    }, 1000);
  }
}, false);

function href(link) {
  window.location.href = link;
}

function scrollMeTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}