$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.result').empty();
    var input = $('input').val();
    $('.result').append(count(input));
  });
});
