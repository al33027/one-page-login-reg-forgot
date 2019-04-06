function login() {
    let loginBtn = document.getElementById('logIn'),
        rememberCheck = document.getElementById('rememberMe'),
        loginUser = document.getElementById('loginUser'),
        loginPass = document.getElementById('loginPass');

    loginBtn.addEventListener('click', function(event) {

        console.log(loginUser.value, loginPass.value);

        event.preventDefault();
    });

    rememberCheck.addEventListener('click', function() {
        rememberCheck.toggleAttribute('checked');
        if (rememberCheck === 'checked') {
            console.log('I remember');
        } else {

        }
    });
}

let loginForm = new login();