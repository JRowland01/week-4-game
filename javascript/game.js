$(document).ready(function(){

var wins = 0;
var losses = 0;
var totalSc = 0;

$('#wins').html(wins); 
$('#losses').html(losses); 


function totalPts () {

  $('#totalSc').html(totalSc); 
};

totalPts();



var mainNumber = function() {
      var randomNum = Math.floor(Math.random() * 120) + 19; 
      $('#noMatch').html(randomNum);
    
};

    mainNumber();



$('#jewelOne').on('click', function() {

    function firstJewel() {

    var jOne = $('#totalSc');
    var num = +jOne.text();
    jOne.text(num+ Math.ceil(Math.random() * 12) + 1);
      

    }
  firstJewel();  

   
});
    

  $('#jewelTwo').on('click', function() {

     function secondJewel() {
      
        var jTwo = $('#totalSc');
        var num = +jTwo.text();
        jTwo.text(num+ Math.ceil(Math.random() * 12) + 1);
    
    }   
  secondJewel();  

    }); 

  
  $('#jewelThree').on('click', function() {

     function thirdJewel() {
     
        var jThree = $('#totalSc');
        var num = +jThree.text();
        jThree.text(num+ Math.ceil(Math.random() * 12) + 1);

    }   

  thirdJewel();  
    
  }); 

  $('#jewelFour').on('click', function() {

     function fourthJewel() {
        
        var jFour = $('#totalSc');
        var num = +jFour.text();
        jFour.text(num+ Math.ceil(Math.random() * 12) + 1);
        
    }   

  fourthJewel();  
   
    }); 

  //function reset(){

    //     mainNumber();
     //    totalPts();
 // }


 //if (mainNumber === totalSc) {

//   wins++;
//   $('#wins').html(wins); ; 
 //   reset();
//
//if (mainNumber < totalSc) {

  //  losses++;
  // ('#losses').html(losses); 
   // reset();

//}




  //wins++;




 //if (mainNumber < totalPts) {

//  return losses*1+1;

//  }

 //wins++;
//$('#wins').val(function(i, val)); {
//return val*1+1; 
//}


//});
//if (mainNumber === totalPts) {
//$('#wins').html(function(i, val)
//{ return +val+1;
//}

 // wins++;
  //reset();
//}


  //losses++;
 // reset();

//}
//}
 


//var fScore = mainNumber();

//$(document).keyup(function (event) {
 //function tScore() {

// if ($('#totalSc').val() =(fScore)){
         //wins++;
         //$('#wins').html(wins);
     
   //    reset();
  //}

    //else if ($('#totalSc').val() > (fScore)){
    //      losses++;
    //      $('#losses').html(losses);

    //   reset();
 // }

//});

});
