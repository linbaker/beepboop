// Back End
function robot(userInput) {


}



//User Front End
$(function(){
  $("form").submit(function(event) {
    var userInput = $("#inputNumber").val();
    var output = robot(userInput);
    $("#answer").show();
    $("#outputToUser").text(output);
    event.preventDefault();
  });
});
