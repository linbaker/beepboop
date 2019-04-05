//Back preventDefault
function robot(userInput) {



}


//Front End
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputNumber").val();
    var output = roman(userInput);
    $("#answer").show();
    $("#outputToUser").text(output);
  });
});
