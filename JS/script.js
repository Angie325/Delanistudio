$(document).ready(function(){


  $("#design").click(function() {
    $("#design-showing").toggle();
    $(".hideDesignImage").toggle();
    });

  $("#development").click(function(){
    $("#develpment-showing").toggle();
    $("#.hideDevelopmentImage").toggle();
    });
    
  $("#productManagement").click(function(){
     $("#productManagement-showing").toggle();
     $("#.hideProductManagement").toggle();
  });
  
  $(".Hover").hover (function() {
      $(this).animate ({opacity:'1'});

  },
  function(){

    $(this).animate ({opacity:'0'});

  });
  $('.button').click(function(){
      var Name= $('#name').val();
      var Email=$('#Email').val();
      var message=$('#message');
      if (Name == '' || Email== '' || Message == ''){
          alert('fill in the form correctly!');
      } else {
        alert(' Hi ' + Name + ('Message received. Thankyou for reaching out to us.'));
      } 
  });   

    }); 
  



  
  

