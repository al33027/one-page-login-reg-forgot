function login() {
    let loginBtn = document.getElementById('logIn'),
        rememberCheck = document.getElementById('rememberMe'),
        loginUser = document.getElementById('loginUser'),
        loginPass = document.getElementById('loginPass');

    loginBtn.addEventListener('click', function(event) {

        console.log(loginUser.value, loginPass.value);

        event.preventDefault();
    });

    if (localStorage.chkbox && localStorage.chkbox != "") {
        rememberCheck.setAttribute('checked', 'checked')
        loginUser.value(localStorage.username);
        loginUser.value(localStorage.password);
    } else {
        rememberCheck.removeAttribute('checked', 'checked')
        loginUser.value = "";
        loginUser.value = "";
    }

    rememberCheck.addEventListener('click', function() {
        if (rememberCheck.checked === true) {
            localStorage.username = loginUser.value;
            localStorage.password = loginPass.value;
            localStorage.chkbox = rememberCheck.value;
            console.log('I remember');
        } else {
            localStorage.loginUser = "";
            localStorage.loginPass = "";
            localStorage.rememberCheck = "";
            console.log('dont remember');
        }
    });
}

let loginForm = new login();