function reset() {
    let resetPass = document.getElementById('reset-pass'),
        sendEmail = document.getElementById('send-email'),
        backBtn = document.getElementById('back-btn');

    backBtn.addEventListener('click', function() {
        loginBox.classList.remove('left');
        forgotPass.classList.remove('left');
    });

    sendEmail.addEventListener('click', function() {
        console.log(resetPass.value);
    });
}

let resetForm = new reset();