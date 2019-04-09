function login() {
    let loginBtn = document.getElementById('logIn'),
        rememberCheck = document.getElementById('rememberMe'),
        loginUser = document.getElementById('login-user'),
        loginPass = document.getElementById('login-pass');

    let data = {};


    loginBtn.addEventListener('click', function(event) {
        if (loginUser.value === "") {
            loginUser.classList.add('border', 'border-danger');
        } else {
            loginUser.classList.remove('border', 'border-danger');
        }

        if (loginPass.value === "") {
            loginPass.classList.add('border', 'border-danger');
        } else {
            loginPass.classList.remove('border', 'border-danger');
        }

        data.username = loginUser.value;
        data.password = loginPass.value;

        console.log(data);

        clearInp();

        event.preventDefault();
    });

    if (localStorage.chkbox && localStorage.chkbox != "") {
        loginUser.value = localStorage.username;
        loginPass.value = localStorage.password;
    } else {
        loginUser.value = "";
        loginPass.value = "";
    }

    rememberCheck.addEventListener('click', function() {
        rememberCheck.setAttribute('checked', 'checked')
        if (rememberCheck.checked === true) {
            localStorage.username = loginUser.value;
            localStorage.password = loginPass.value;
            localStorage.chkbox = rememberCheck.value;
        } else {
            rememberCheck.removeAttribute('checked', 'checked')
            localStorage.loginUser = "";
            localStorage.loginPass = "";
            localStorage.rememberCheck = "";
        }
    });

    if (loginUser.value != "" && loginPass.value != "") {

    }

    function clearInp() {
        loginUser.value = "";
        loginPass.value = "";
    }
}

let loginForm = new login();