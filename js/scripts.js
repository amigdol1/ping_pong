var number = function(output) {
  if (output % 15 === 0) {
    return "pingpong"
  } else if (output % 5 === 0) {
    return "pong"
  } else if (output % 3 === 0) {
  return "ping"
  } else {
    return output;
  }
}

$(document).ready(function() {
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());

    var range = [];
    for (var index = 1; index <= input; index += 1) {
      range.push(index);
    };

    var pingPong = $.map(range, number)
    var result = pingPong.join(',  ')

    $("#result").text(result)
    });
  });
