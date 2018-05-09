//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('click', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('')
}  
  
$(document).ready(function(){

// call functions here

//Hey! Popup when clicked
getIt()
  
//Adds red frame to image
frameIt()

});

