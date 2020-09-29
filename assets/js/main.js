$(document).ready(function(){
  $(".dropdown-trigger").dropdown();
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
  
  var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
  });

  // layout Masonry after each image loads
  $container.imagesLoaded().progress( function() {
    $container.masonry('layout');
  });
});