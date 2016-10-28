var input = parseInt('input');
var array = [];

var count = function(number) {
  array = [];
  for (var index = 1; index <= number; index ++) {
    if (index % 15 === 0) {
      array.push("ping-pong");
    } else if (index % 3 === 0) {
      array.push("ping");
    } else if (index % 5 === 0) {
      array.push("pong");
    } else {
      array.push(index);
    }
  }
  return(array);
}

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.result').empty();
    var input = $('input').val();
    $('.result').append(count(input));
  });
});
