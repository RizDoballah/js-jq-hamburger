// alert('ciao');
// $('.fa-bars').click(
//   function() {
//     var visible = $('.hamburger-menu').hasClass('none');
//     console.log(visible);
//     if (visible) {
//       $('.hamburger-menu').removeClass('none');
//     } else {
//       $('.hamburger-menu').addClass('none');
//     }
//   }
// );

$('.fa-bars').click(
  function() {
    $('.hamburger-menu').show()
  }
);

$('.fa-times').click(
  function() {
    $('.hamburger-menu').hide()
  }
);
