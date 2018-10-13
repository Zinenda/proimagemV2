$(document).ready(function(){
  M.AutoInit();
  $('.modal').modal();
  $('.slider').slider({
    height: 600
  });

  var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
  });
});