//Back preventDefault
function robot(userInput) {
  var numberUserInput = parseInt(userInput);
  console.log(numberUserInput);

  var rangeArray = [];

  for(var i = 0; i <= numberUserInput; i++) {
    rangeArray.push(i);
  }
  return rangeArray
}


//Front End
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputNumber").val();
    var output = robot(userInput);
    $("#answer").show();
    $("#outputToUser").text(output);
  });
});
