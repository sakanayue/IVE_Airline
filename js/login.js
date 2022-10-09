function checkaccount(name, password){
    if(name == "admin" && password == "admin"){
        return true;
    }
    if(name == "Tommer" && password == "pwd"){
        return true;
    }
}

function checkstaff(name){
    if(name == "admin"){
        return true;
    }
}

$(document).ready(function() {

    $("#submit").click(function(){

        $("#null-alert").css("display", "none");
        $("#wrong-alert").css("display", "none");

        if ($("#name").val().length === 0 ||
            $("#password").val().length === 0 ){
            $("#null-alert").css("display", "block");
            return;
        }

        if(checkaccount($("#name").val(), $("#password").val())){

            if(checkstaff($("#name").val())){
                location.href = 'staff.html';
                alert("Welcome Staff "+$("#name").val());
            } else{
                location.href = 'user.html';
                alert("Welcome user "+$("#name").val());
            }
            
        } else{
            $("#wrong-alert").css("display", "block");
        }
        
    });

});