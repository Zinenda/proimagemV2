$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  
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