var name = "Rajesh";
var password = "Rajesh@123";
$(document).ready(function() {
    $("#login").on("click", function() {
        $("#loginBlock,#back").css("visibility","visible");
        $("main,#registerBlock").css("visibility","hidden");
    });
    $("#register").on("click", function() {
        $("#registerBlock,#back").css("visibility","visible");
        $("#loginBlock,main").css("visibility","hidden");
    });
    $("#back").on("click", function() {
        $("main").css("visibility","visible");
        $("#loginBlock,#registerBlock,#back").css("visibility","hidden");
    });
    $("#loginSubmit").on("click", function(){
        if($("#username").val() === name && $("#password").val() === password) {
            localStorage.setItem("name", name);
            window.location = 'home.html';
        } else {
            $("#nonMatch").html("Username or password is not matching..");
        }
        
    })
})