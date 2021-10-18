//Email validation

function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Name and Password Validation 

function validateNameAndPassword(name){
    var size = name.length;
    if(size===0)return false;
    else return true;
}


// Click Action on Claim Buttom 

$(".claim-btn").click(function(){

    var Fname = document.getElementsByName("Fname")[0].value;
    var Lname = document.getElementsByName("Lname")[0].value;
    var emailId = document.getElementsByName("Email")[0].value;
    var password = document.getElementsByName("pass-word")[0].value;

    

    var validEmail = validateEmail(emailId);
    var validFname = validateNameAndPassword(Fname);
    var validLname = validateNameAndPassword(Lname);
    var validPassword = validateNameAndPassword(password);

    // First name

    if(!validFname){
        document.querySelectorAll("input")[0].classList.add("error-logo");
        $(".error-msg-fname").css("display", "block");
    }
    else{
        document.querySelectorAll("input")[0].classList.remove("error-logo");
        $(".error-msg-fname").css("display", "none");
    }

    //last Name

    if(!validLname){
        document.querySelectorAll("input")[1].classList.add("error-logo");
        $(".error-msg-lname").css("display", "block");
    }
    else{
        document.querySelectorAll("input")[1].classList.remove("error-logo");
        $(".error-msg-lname").css("display", "none");
    }

    //Email Address

    if(!validEmail){
        document.querySelectorAll("input")[2].classList.add("error-logo");
        $(".error-msg-email").css("display", "block");
    }
    else{
        document.querySelectorAll("input")[2].classList.remove("error-logo");
        $(".error-msg-email").css("display", "none");
    }

    //Password

    if(!validPassword){
        document.querySelectorAll("input")[3].classList.add("error-logo");
        $(".error-msg-password").css("display", "block");
    }
    else{
        document.querySelectorAll("input")[3].classList.remove("error-logo");
        $(".error-msg-password").css("display", "none");
    }

    if(validEmail && validFname && validLname && validPassword){
        location.reload();
    }
})