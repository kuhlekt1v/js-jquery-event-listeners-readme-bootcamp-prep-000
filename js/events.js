//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}
  
$(document).ready(function(){

// call functions here

//Hey! Popup when clicked
getIt()
  
//Adds red frame to image
frameIt()

});

