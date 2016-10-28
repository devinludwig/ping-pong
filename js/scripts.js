var input = parseInt('input');
var array = [];

var count = function(number) {
  array = [];
  for (var index = 1; index <= number; index ++) {
    if (index % 15 === 0) {
      array.push("<li class='pingpong'>ping-pong</li>");
    } else if (index % 3 === 0) {
      array.push("<li class='ping'>ping</li>");
    } else if (index % 5 === 0) {
      array.push("<li class='pong'>pong</li>");
    } else {
      array.push("<li>" + index + "</li>");
    };
  };
  return(array);
};

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.result').empty().fadeIn();
    $('#pingpong, #ping, #pong').hide();

    var input = $('input').val();
    count(input);
    $('.result').append(array);
    $("li").each(function(i) {
      $(this).delay(400 * i).fadeIn();
        if ($(this).attr("class") === "ping"){
        $("#ping").delay(400 * i).fadeIn();
        // $("#pong , #pingpong").fadeOut();
      } else if ($(this).attr("class") === "pong") {
        $("#pong").delay(400*i).fadeIn();
        // $("#ping , #pingpong").fadeOut();
      }  else if ($(this).attr("class") === "pingpong") {
        $("#pingpong").delay(400*i).fadeIn();
        // $("#ping #pong").fadeOut();
    };
  });
  });
});
