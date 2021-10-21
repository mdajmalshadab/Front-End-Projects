$(document).ready(function(){
    $(".social").hover(function(){
        $(this).find("i").css("color", "#fff");
    }, function(){
        $(this).find("i").css("color", "hsl(223, 87%, 63%)");
    });
  });

  function validateEmail(email) 
  {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  $(".notify-btn").click(function(){
      var emailId = document.getElementsByName("Email")[0].value;
      var valid = validateEmail(emailId);
      if(!valid){
          $("input[type='email']").css("border-color","hsl(354, 100%, 66%)");
          $(".error-msg").css("display","block");
      }
      else{
        $("input[type='email']").css("border-color","hsl(223, 100%, 88%)");
        $(".error-msg").css("display","none");
      }
  })