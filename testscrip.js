$(document).ready(init); //when page starts call the init function

function init(){
    //initialize the themes from local storage

    var theme=localStorage.getItem("theme");
    if(theme!=null){
        if(theme=="dark"){
            dark_theme();
        }
        else{
            light_theme();
        }
    }
}



function light_theme(){
    $("body").css("background-color","white").css("color","black");
    $("body").css("font-size",8);
    $("h1").css("background-color","black").css("color","white");
    localStorage.setItem("theme","light");
}

function dark_theme(){
    $("body").css("background-color","black").css("color","white");
     $("h1").css("background-color","white").css("color","black");
    
    localStorage.setItem("theme","dark");
}

//function light_theme(){
//    //write code for light theme
//    //background color should be white
//    //color should be black
//    //h1 background color should be dark blue
//    //h1 color should be white
//    //store the theme in local storage.
//}
//
//function dark_theme(){
//    //write code for dark theme
//    //background color should be dark blue
//    //color should be black
//    //h1 background color should be white
//    //h1 color should be dark blue
//    //store the theme in local storage.
//}
//
//function show_name(){
function show_name(){
     var name=$("#guest_name").val();
    localStorage.setItem("name",name);
}
    
    
    


function showw_name(){
    var fav_name=localStorage.getItem("name");
    if(fav_name!=null){
        $("#guest_name").val(fav_name);
        alert("welcome " + fav_name);
    }
}
//
////code to show name instead of 'Welcome Guest'
//}
//
//function validate(){
//    //code for validating the form
//
//    //show the validation styling from Bootstrap (red, or green)
//    $("form").addClass("was-validated");
//}
function validate(){
    var name_value=$("#name").val();
    var name_feedback="";
    
    if(name_value.length<10){
        name_feedback="Name must be at least 10 characters long";
        $("#name")[0].setCustomValidity(name_feedback);
        $("#name-feedback").text(name_feedback);
    }
    else{
        $("#name")[0].setCustomValidity("");
    }
    
    var budget_value=$("#budget").val();
    var budget_feedback="";
    
    if(budget_value<1000 ){
        budget_feedback="Age must be between 0 and 100";
         $("#budget")[0].setCustomValidity(budget_feedback);
        $("#budget-feedback").text(budget_feedback);       
    }
    else{
        $("#budget")[0].setCustomValidity("");
    }

    $("form").addClass("was-validated");
}