var login = JSON.parse(loginData);
//console.log(login[1].email);

var logInButton = document.getElementById("confirm");
var dviBox = document.getElementById("wrapper");

//login.forEach(check);

// var email = abd;
// var password = 234;

logInButton.addEventListener("click", check)
//     login.forEach(check)
// };
var userNumber = Object.keys(login).length;


function check() {
    //  login.forEach(function (element) {
    var emailCheck = 0;
    for (i = 0; i < userNumber; i++) {


        var inputEmail = login[i].email.toLowerCase();
        var inputPassword = login[i].password;
        var email = document.getElementById("email").value.toLowerCase();
        var password = document.getElementById("password").value;

        console.log(inputEmail);
        console.log(email);

        if (inputEmail == email) {
            document.getElementById("email").classList.remove("wrongLogin");
            var emailCheck = 1;
            if (inputPassword == password) {
                console.log("ok")
                dviBox.classList.add("hideDiv");
                document.getElementById("password").classList.remove("wrongLogin");
                break;
            } else {
                console.log("incorect password");
                document.getElementById("password").value = "";
                document.getElementById("password").classList.add("wrongLogin");
                break;

            }
        }
    }
    if (emailCheck == 0) {
        console.log("incorect email");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("email").classList.add("wrongLogin");
    }

}

//do dodania regiser page
//forgot your pasword