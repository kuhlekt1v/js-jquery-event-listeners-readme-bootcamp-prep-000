//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
    return;
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    return;
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

