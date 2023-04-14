  //javascript task#2 

  //calculate the fitrah amount, first, ask the user to enter the total number of family
  //members using the prompt and store the value in a variable called
  //"familyMembers". Next, ask the user to choose a fitrah method by providing them
  //options using the prompt, and store the selected method and its price in variables.
  //Then, use an if-else block to check the user's input and calculate the fitrah amount
  //by multiplying the selected method's price with the number of family members.
  //Finally, display the calculated fitrah amount using an alert message.

  var wheat = 250;
  var barley = 450;
  var dates= 2100;
  var raisin = 2800;
  var  familyMembers=+prompt("Total number of family members?");

  var fitrahMethod=prompt("Choose the fitrah method \n a) Dates = 2100 \n b) Wheat = 250 \n c) Raisin = 2800 \n d) Barley = 450");

  fitrahMethod=fitrahMethod.toLowerCase();

 if (fitrahMethod == "a")

{
     totalFitrah=wheat * familyMembers;
}

else if (fitrahMethod =="b")

{
    var totalFitrah= barley * familyMembers;
}

else if(fitrahMethod=="c")

{
     var totalFitrah= dates * familyMembers;
}

else if(fitrahMethod=="d")

{
  var totalFitrah= raisin * familyMembers;
}

else
{
     alert("Invalid Option selected.")
}
 alert ( "Amount of fitrah for this year is "+"" + totalFitrah ); 
