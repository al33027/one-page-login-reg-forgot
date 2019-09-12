function reset() {
    let resetPass = document.getElementById('reset-pass'),
        sendEmail = document.getElementById('send-email'),
        backBtn = document.getElementById('back-btn'),
        loginBox = document.getElementById('login-container'),
        forgotBox = document.getElementById('forgotPass-container');

    backBtn.addEventListener('click', function() {
        loginBox.classList.remove('left');
        forgotBox.classList.remove('left');
    });

    sendEmail.addEventListener('click', function() {
        loginBox.classList.remove('left');
        forgotBox.classList.remove('left');
        console.log(resetPass.value);
    });
}

let resetForm = new reset();