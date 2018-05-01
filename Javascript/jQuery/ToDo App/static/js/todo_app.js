// Check off To-Dos
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Delete To-Dos completely
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Add New To-Dos
$("input").keypress(function(event) {
  if(event.which === 13) {
    // Gets text from input
    toDoText = $(this).val();
    $(this).val("");
    // Create new li and add to List
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>");
  }
});

$(".fa-plus-circle").click(function() {
  $("input").fadeToggle(500);
});
