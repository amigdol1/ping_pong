$(document).ready(function() {
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    console.log(input)

    var range = [];
    for (var index = 1; index <= input; index += 1) {
      range.push(index);
    };
    console.log(range)

    var pingPong = $.map(range, function(output) {
      if (output % 15 === 0) {
        return "pingpong"
      } else if (output % 5 === 0) {
        return "pong"
      } else if (output % 3 === 0) {
      return "ping"
      } else {
        return output;
      }
    });
    var result = pingPong.join(' ')
    console.log(result);
    $("#result").text(result);

    $(button).click(function() {
      $("#result").hide();
    });
  });
});
