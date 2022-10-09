function checkpwd(password){
    var strength = 0;
    if (password.length < 8){
        $('#strengthMessage').removeClass();
        $('#strengthMessage').addClass('Password too Short');
        return 'Too weak';
    }
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)){
        strength += 1;
    }
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~,.])/)){
        strength += 1;
    }

    if (strength == 1) {  
        $('#strengthMessage').removeClass();
        $('#strengthMessage').addClass('Weak password');
        return 'Weak';
    }
    if (strength == 2){  
        $('#strengthMessage').removeClass();
        $('#strengthMessage').addClass('Strong password');
        return 'Strong';
    } 
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function() {
    $("#password").keyup(function(){
        $('#strengthMessage').html(checkpwd($('#password').val()));
    });

    $("#email").change(function(){
        $("#email-alert").css("display", "none");
    });

    $("#submit").click(function(){
        var correct = true;
        if ($("#name").val().length === 0  || 
            $("#email").val().length === 0 || 
            $("#password").val().length === 0 || 
            $("#repassword").val().length === 0 ){
            $("#null-alert").css("display", "block");
            correct = false;
        }
        if ($("#password").val() != $("#repassword").val()){
            $("#pwd-alert").css("display", "block");
            correct = false;
        }
        if(!isEmail($("#email").val())){
            $("#email-alert").css("display", "block");
            correct = false;
        }

        if(correct == true){
            alert("Successfully registered!\n name: "+$("#name").val()+"\nemail: "+$("#email").val()+"\npassword: "+$("#password").val());

            location.href = 'login.html';
        }
        
    });

});