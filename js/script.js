/* simple lightbox initialization */
const gallery = $(".gallery a").simpleLightbox();

$(document).ready(function() {
  $("#video").fitVids();
});

AOS.init({
  duration: 1000
});
