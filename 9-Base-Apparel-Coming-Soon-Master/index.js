function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



$(".submit-btn").click(function(){

    var emailId = document.getElementsByName("email")[0].value;
    var valid = validateEmail(emailId);
    if(!valid){
        $("input").addClass("error-email");
        $("input").addClass("error-logo");
        $(".error-msg").css("visibility", "visible");
    }
    else{
        $("input").removeClass("error-email");
        $("input").removeClass("error-logo");
        $(".error-msg").css("visibility", "hidden");
    }
})