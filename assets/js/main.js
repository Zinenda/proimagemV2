$(document).ready(function(){
  M.AutoInit();
  $('.modal').modal();

  var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
  });
});