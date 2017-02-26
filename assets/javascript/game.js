$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

// Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//Resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

//Adds the wins to the userTotal
function won(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

//Addes the losses to the userTotal
function lost(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

//Sets up click for jewels
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          won();
        }
        else if ( userTotal > Random){
          lost();
        }   
  })  

  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          won();
        }
        else if ( userTotal > Random){
          lost();
        } 
  })  

  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

//Sets win/lose conditions
          if (userTotal == Random){
         won();
        }
        else if ( userTotal > Random){
          lost();
        } 
  })  

  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
        won();
        }
        else if ( userTotal > Random){
          lost();
        }
  });   
}); 