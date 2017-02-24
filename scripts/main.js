$(document).ready(function(){
// TODO: add toggles and slides to fontawesome button
$('.mobile-collapse-toggle').on('click', function() {
  var btn = $(this);

  var nav = btn.closest('nav');
  nav.find('.mobile-collapse').slideToggle()
})

// TODO: add toggle, change this.closest from nav-bar to dropdown and change find nav items (create) to sub-menu
$('.sub-menu-btn').on('click', function(e) {
  e.preventDefault();
  var btn = $(this);

  var nav = btn.closest('.drop-down');
  nav.find('.sub-menu').slideToggle()
})

})
