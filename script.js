function calc_ticket_price() {
    var tickets = document.getElementById("tickets").value;
    var type = document.getElementById("type").value;
    var price = 0;
    if(type=="credit card"){
        price=20*tickets;
    }
    else if(type=="Bus"){
        price=10*tickets;
    }
   
    
    document.getElementById("result").innerHTML="The app will cost you " + price + "AED";     
    return false; }





function correct(){
        var fullname_value=$("#fullname").val();
        var fullname_feedback="";
    if(fullname_value.length<10){
        fullname_feedback="full name must be at least 10 characters long";
        $("#fullname")[0].setCustomValidity(fullname_feedback);
        $("#fullname-feedback").text(fullname_feedback);
    }
    else{
        $("#fullname")[0].setCustomValidity("");
    }
    
    
    $("form").addClass("was-validated");
}



function login(){
    var password_value=$("#password").val();
    var password_feedback="";
    var has_lowercase=password_value.match(/[a-z]/g);
    var has_uppercase=password_value.match(/[A-Z]/g);
    var has_digits=password_value.match(/[0-9]/g);
    var has_symbols=password_value.match(/[\-\*\^&%\$#@]/g);
    var correct_length=password_value.length>=8 && password_value.length<=16;
        if (has_lowercase && has_uppercase && has_digits && has_symbols && correct_length){
            $("#password")[0].setCustomValidity("");    
    }
        else{
            password_feedback="password must contain lowercase, uppercase, and digits, and must be 8-6 character long";
            $("#password")[0].setCustomValidity(password_feedback);
            $("#password-feedback").text(password_feedback);
        }



        var username_value=$("#username").val();
        var username_feedback="";
    if(username_value.length<8){
        username_feedback="Username must be at least 8 characters long";
        $("#username")[0].setCustomValidity(username_feedback);
        $("#username-feedback").text(username_feedback);
    }
    else{
        $("#username")[0].setCustomValidity("");
    }
    
    
    $("form").addClass("was-validated");
}


  

function signin(){
    var pass_value=$("#pass").val();
    var pass_feedback="";
    var have_lowercase=pass_value.match(/[a-z]/g);
    var have_uppercase=pass_value.match(/[A-Z]/g);
    var have_digits=pass_value.match(/[0-9]/g);
    var have_symbols=pass_value.match(/[\-\*\^&%\$#@]/g);
    var correctt_length=pass_value.length>=9 && pass_value.length<=17;
        if (have_lowercase && have_uppercase && have_digits && have_symbols && correctt_length){
            $("#pass")[0].setCustomValidity("");    
    }
        else{
            pass_feedback="Password must be combination of lowercase, uppercase, digits and must be 9-17 character long";
            $("#pass")[0].setCustomValidity(pass_feedback);
            $("#pass-feedback").text(pass_feedback);
        }


      var phone_value=$("#phonenumber").val();
      var phone_feedback="";
      var has_digit=phone_value.match(/[+,0-9]/g);

      if ( has_digit){
            $("#phonenumber")[0].setCustomValidity(""); } 
      else{
             phone_feedback="Phone number must contain digits and + sign only!";
            $("#phonenumber")[0].setCustomValidity(phone_feedback);
            $("#phonenumber-feedback").text(phone_feedback);
        }


        var full_value=$("#full").val();
        var full_feedback="";
        var have_lowercasee=full_value.match(/[a-z]/g);
        var have_uppercasee=full_value.match(/[A-Z]/g);
        var correcttt_length=full_value.length>=9 && full_value.length<=17;
    if ( correcttt_length && have_lowercasee && have_uppercasee){
            $("#full")[0].setCustomValidity(""); } 
      else{
             full_feedback="Full name must be combination of lower and uppercase alphabets and its lenght must be between 9 and 17!";
            $("#full")[0].setCustomValidity(full_feedback);
            $("#full-feedback").text(full_feedback);
        }
    
    $("form").addClass("was-validated");
}






