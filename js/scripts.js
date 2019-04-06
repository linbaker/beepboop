//BACKEND


//function for range up to 50
function robot(userInput, userName) {
  var numberUserInput = parseInt(userInput);

  var rangeArray = [];

//If number input is left blank
  if (userInput === "") {
    return "You can't fool me, human, enter a number!";
  }


//If name input is left blank
  if (userName === "") {
    userName = "Dave";
  }

if (numberUserInput > 50) {
  $(overFiftyOutput).show();
  for (var i = 0; i <= 50; i++) {
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
  } else if (numberUserInput < 50) {
    $(overFiftyOutput).hide;
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
  }
  return rangeArray
}

//Function for inputs over 50
function robotExcessive(userInput, userName) {
  var numberUserInput = parseInt(userInput);

  var rangeArray = [];

  for (var i = 50; i <= numberUserInput; i++) {

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
  return rangeArray
}


//FRONTEND
$(function(){
  $("form").submit(function(event) {
    var userInput = $("#inputNumber").val();

    var userName = $("#inputName").val();

    var output = robot(userInput, userName);
    $(".answer").show();

    $("#outputToUser").text(output);
    event.preventDefault();
  });
  $("#secondButton").submit(function(event) {
    var userInput = $("#inputNumber").val();

    var userName = $("#inputName").val();

    var outputExcessive = robotExcessive(userInput, userName);

    $(".answer").show();
    $("#overFiftyOutput").hide();

    $("#outputToUser").append(outputExcessive);
    event.preventDefault();
  });
});
