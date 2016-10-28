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
    }
  }
  return(array);
}

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.result').empty().show();
    var input = $('input').val();
    $('.result').append(count(input));
  });
});
