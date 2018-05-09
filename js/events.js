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
  
  
$(document).ready(function(){

// call functions here

//Hey! Popup when clicked
$("p").on("click", function() {
    alert("Hey!");
    return;
  });
  
//Adds red frame to image
$('img').on('load', function() {
    $('img').addClass('tasty');
    return;
  });

});
