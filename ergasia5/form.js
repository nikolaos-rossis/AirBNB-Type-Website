window.onload = function() {
    let text = document.getElementById("message");
    let text2 = document.getElementById("message2");
    let text3 = document.getElementById("message3");
    text.style.display = "none";

    //αποθηκεύει τα elements σε μεταβλητές
    var password = document.getElementById("txt_pass");
    var repassword = document.getElementById("txt_passwordConfirm");
    var email = document.getElementById("txt_email");
    var age = document.getElementById("txt_age");


    //όταν πατιέται το κουτάκι βγάζει μήνυμα ανάλογια με το input του χρήστη (παίρνει το value του element)
    age.onfocus = function() {
        document.getElementById("message3").style.display = "block";
        if (age.value == "") {
            text3.innerHTML = "You have not chosen your age yet..."
        }

        if (!((age.value > 0) && (age.value <=70))) {
            text3.innerHTML = "Please enter a correct number..."
        } else {
            document.getElementById("message3").style.display = "none";
        }
    }

    //onblur = δεν πατιέται το κουτάκι
    age.onblur = function() {
        document.getElementById("message3").style.display = "none";
        
    }
    
    //onkeyup κάνει έλεγχο κατα τη διάρκεια που γράφεις στο κουτάκι
    repassword.onkeyup = function() {
        if (password.value != "") {
            if (password.value == repassword.value) {
                text.innerHTML = "The passwords match!!!"
            } else {
                text.innerHTML = "The passwords do not match..."
            }
        }
    }




    email.onblur = function() {
        var papaki = /[@]/g;
        if (email.value.match(papaki)) {
            text2.innerHTML = "Valid email address";
        } else {
            text2.innerHTML = "Invalid email address";
        }
    }





    repassword.onfocus = function() {
        document.getElementById("message").style.display = "block";
        if (password.value == "") {
            text.innerHTML = "You have not chosen a password yet..."
        } else {
            text.innerHTML = "Please confirm your password..."
        }

    }

    repassword.onblur = function() {
        document.getElementById("message").style.display = "none";
    }
    

    repassword.onkeyup = function() {
        if (password.value != "") {
            if (password.value == repassword.value) {
                text.innerHTML = "The passwords match!!!"
            } else {
                text.innerHTML = "The passwords do not match..."
            }
        }
    }

}