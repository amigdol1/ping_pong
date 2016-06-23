
// output= any number within the array "range" - need to still create this


// http://stackoverflow.com/questions/16881872/changing-array-value-when-condition-is-met-in-javascript
// this is where the front-end logic will start

$(document).ready(function() {
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    console.log(input)

    var totle = 1
    var range = [];

    for (var index = 1; index <= input; index += 1) {
      range.push(index);
    };
    console.log(range)

    var pingPong = $.map(range, function(output) {
      if (output % 3 === 0) {
        return "ping" // most likely need to use replace method here
      }
      else if (output % 5 === 0) {
        return "pong" // most likely need to use replace method here
      }
      else if (output % 15 === 0) {
        return "pingpong" // most likely need to use replace method here
      }
    });
    console.log(pingPong);
  });
});
