//Back preventDefault
function robot(userInput) {
  var numberUserInput = parseInt(userInput);
  console.log(numberUserInput);


  var rangeArray = [];

  for (var i = 0; i <= numberUserInput; i++) {
    if (String(i).includes("1")){
      rangeArray.push("BOOP");
    } else {
      rangeArray.push(i);
    }
  }
  console.log(rangeArray);
  console.log(rangeArray.includes(1));

}





  // for(var i = 0; i <= rangeArray.length; i++) {
  //   if (beep.includes(rangeArray[i]) === true) {
  //     rangeArray[i].replace("BEEP");
  //     console.log(rangeArray);
  //   }
  // }
  // return rangeArray
// }


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
