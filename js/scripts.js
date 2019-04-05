//BACKEND

function robot(userInput, userName) {
  var numberUserInput = parseInt(userInput);
  alert(userName);

  var rangeArray = [];
if (userName === "") {
  userName = "Dave";
}
  for (var i = 0; i <= numberUserInput; i++) {

//Condition for 3's
    if (String(i).includes("3")){
    rangeArray.push(" I'm sorry, " + userName + ". I'm afraid I can't do that.");

//Condition for 2's
    } else if (String(i).includes("2")){
      rangeArray.push(" BOOP");

//Condition for 2's
    } else if (String(i).includes("1")){
      rangeArray.push(" BEEP");

//Condition for numbers w/o 1,2 or 3
    } else {
      rangeArray.push(" " + i);
    }
  }

  if (rangeArray.length === 0) {
    return
  }
  return rangeArray
}


//FRONTEND
$(function(){
  $("form").submit(function(event) {
    var userInput = $("#inputNumber").val();

    var userName = $("#inputName").val();

    var output = robot(userInput, userName);
    $("#answer").show();

    $("#outputToUser").text(output);
    event.preventDefault();
  });
});
