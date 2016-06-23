





// var outputNumber = single item in array that is in the output (one of the array values)


/* if (outputNumber % 3 === 0) {
  return "Ping" // most likely need to use replace method here
}
else if (outputNumber % 5 ===0) {
  return "Pong" // most likely need to use replace method here
}
else if (outputNumber % 15 ===0) {
  return "PingPong" // most likely need to use replace method here
} */

// will use .range to get a range of numbers from 1 to input variable a

// this is where the front-end logic will start

$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    console.log(input)

    var range = Array.apply(1, Array(input + 1)).map(function (_, input) {
      return input;
    });
    console.log(range)
  })
});
