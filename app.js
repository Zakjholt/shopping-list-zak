$(document).ready(function() {
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    $('ul.shopping-list').append(
      '<li><span class="shopping-item">' + $("#shopping-list-entry").val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    );
    //append list item to bottom of ul.shopping-list
    //add the contents of #shopping-list-entry to the li
  });

//**use the ul.on(click, li)** for listeners on li buttons

});
