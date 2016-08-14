$(document).ready(function() {
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    $('ul.shopping-list').append(
      '<li><span class="shopping-item">' + $("#shopping-list-entry").val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    );
    $(this)[0].reset();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest("li").find(".shopping-item").toggleClass('shopping-item__checked');
  });

//**use the ul.on(click, li)** for listeners on li buttons

  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });

});
