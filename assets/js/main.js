$(document).ready(function(){
  M.AutoInit();
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  
  var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
  });
});