function adminProcess() {
    // let express = require('express'),
    //     router = express.Router(),
    //     bodyParser = require('body-parser'),
    //     mysql = require('mysql'),
    //     jade = require('jade'),
    //     connection = mysql.createConnection({
    //         host: 'localhost',
    //         user: 'root',
    //         password: '',
    //         database: 'test'
    //     }),
    //     app = express(),
    //     urlencodedParser = bodyParser.urlencoded({ extended: false });


    //button
    let reg = document.getElementById('regHere'),
        forgotPassBtn = document.getElementById('forgotPass'),
        cancelBtn = document.getElementById('cancel-btn'),
        resetBtn = document.getElementById('reset-btn'),
        backBtn = document.getElementById('back-btn'),
        loginBox = document.getElementById('login-container'),
        regBox = document.getElementById('reg-container'),
        forgotPass = document.getElementById('forgotPass-container'),
        alertMsg = document.getElementById('alertMsg'),
        saveBtn = document.getElementById('save-btn');

    //personal info
    let firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        addressInput = document.getElementById('addressInput'),
        emailInput = document.getElementById('emailInput'),
        cityInput = document.getElementById('cityInput'),
        phoneInput = document.getElementById('phoneInput'),
        regUser = document.getElementById('regUsername'),
        zipCode = document.getElementById('zipCode');


    let alertH2 = document.createElement('h2'),
        alertDiv = document.createElement('hr'),
        alertP = document.createElement('p'),
        alertLoader = document.createElement('img');

    let data = {};

    let states = [
        { "name": "Alabama", "abbreviation": "AL" },
        { "name": "Alaska", "abbreviation": "AK" },
        { "name": "American Samoa", "abbreviation": "AS" },
        { "name": "Arizona", "abbreviation": "AZ" },
        { "name": "Arkansas", "abbreviation": "AR" },
        { "name": "California", "abbreviation": "CA" },
        { "name": "Colorado", "abbreviation": "CO" },
        { "name": "Connecticut", "abbreviation": "CT" },
        { "name": "Delaware", "abbreviation": "DE" },
        { "name": "District Of Columbia", "abbreviation": "DC" },
        { "name": "Federated States Of Micronesia", "abbreviation": "FM" },
        { "name": "Florida", "abbreviation": "FL" },
        { "name": "Georgia", "abbreviation": "GA" },
        { "name": "Guam", "abbreviation": "GU" },
        { "name": "Hawaii", "abbreviation": "HI" },
        { "name": "Idaho", "abbreviation": "ID" },
        { "name": "Illinois", "abbreviation": "IL" },
        { "name": "Indiana", "abbreviation": "IN" },
        { "name": "Iowa", "abbreviation": "IA" },
        { "name": "Kansas", "abbreviation": "KS" },
        { "name": "Kentucky", "abbreviation": "KY" },
        { "name": "Louisiana", "abbreviation": "LA" },
        { "name": "Maine", "abbreviation": "ME" },
        { "name": "Marshall Islands", "abbreviation": "MH" },
        { "name": "Maryland", "abbreviation": "MD" },
        { "name": "Massachusetts", "abbreviation": "MA" },
        { "name": "Michigan", "abbreviation": "MI" },
        { "name": "Minnesota", "abbreviation": "MN" },
        { "name": "Mississippi", "abbreviation": "MS" },
        { "name": "Missouri", "abbreviation": "MO" },
        { "name": "Montana", "abbreviation": "MT" },
        { "name": "Nebraska", "abbreviation": "NE" },
        { "name": "Nevada", "abbreviation": "NV" },
        { "name": "New Hampshire", "abbreviation": "NH" },
        { "name": "New Jersey", "abbreviation": "NJ" },
        { "name": "New Mexico", "abbreviation": "NM" },
        { "name": "New York", "abbreviation": "NY" },
        { "name": "North Carolina", "abbreviation": "NC" },
        { "name": "North Dakota", "abbreviation": "ND" },
        { "name": "Northern Mariana Islands", "abbreviation": "MP" },
        { "name": "Ohio", "abbreviation": "OH" },
        { "name": "Oklahoma", "abbreviation": "OK" },
        { "name": "Oregon", "abbreviation": "OR" },
        { "name": "Palau", "abbreviation": "PW" },
        { "name": "Pennsylvania", "abbreviation": "PA" },
        { "name": "Puerto Rico", "abbreviation": "PR" },
        { "name": "Rhode Island", "abbreviation": "RI" },
        { "name": "South Carolina", "abbreviation": "SC" },
        { "name": "South Dakota", "abbreviation": "SD" },
        { "name": "Tennessee", "abbreviation": "TN" },
        { "name": "Texas", "abbreviation": "TX" },
        { "name": "Utah", "abbreviation": "UT" },
        { "name": "Vermont", "abbreviation": "VT" },
        { "name": "Virgin Islands", "abbreviation": "VI" },
        { "name": "Virginia", "abbreviation": "VA" },
        { "name": "Washington", "abbreviation": "WA" },
        { "name": "West Virginia", "abbreviation": "WV" },
        { "name": "Wisconsin", "abbreviation": "WI" },
        { "name": "Wyoming", "abbreviation": "WY" }
    ];

    let validation = false;

    let stateInput = document.getElementById('inputState');

    for (let i = 0; i < states.length; i++) {
        let opts = document.createElement('option');
        stateInput.appendChild(opts);
        opts.setAttribute('value', states[i].abbreviation);
        opts.innerHTML = states[i].name;
    }

    reg.addEventListener('click', function() {
        loginBox.classList.add('right');
        regBox.classList.add('right');
    });

    cancelBtn.addEventListener('click', function() {
        loginBox.classList.remove('right');
        regBox.classList.remove('right');
    });

    backBtn.addEventListener('click', function() {
        loginBox.classList.remove('left');
        forgotPass.classList.remove('left');
    });

    forgotPassBtn.addEventListener('click', function() {
        loginBox.classList.add('left');
        forgotPass.classList.add('left');
    });

    saveBtn.addEventListener('click', function(event) {
        formValidation();

        alert();

        if (validation === true) {
            regForm();
            let json = JSON.stringify(data);

            setTimeout(function() {
                clearInp();
            }, 5000);

            event.preventDefault();
            console.log(json);
        }
    });

    function regForm() {

        data.first = firstName.value;
        data.last = lastName.value;
        data.email = emailInput.value;
        data.phone = phoneInput.value;
        data.address = addressInput.value;
        data.city = cityInput.value;
        data.zip = zipCode.value;
        data.state = stateInput.value;
        data.username = regUser.value;
        data.password = regPass.value;
        data.image = avatarPic;
    }

    let regPass = document.getElementById('regPassword'),
        matchPass = document.getElementById('matchPassword'),
        profileImg = document.getElementById('pictureUpload'),
        avatarImg = document.getElementById('avatarImg'),
        avatar = document.createElement('img'),
        passExp = document.getElementById('passExp'),
        lowLetter = document.getElementById('lower-letter'),
        upLetter = document.getElementById('upper-letter'),
        numbChar = document.getElementById('number-cha'),
        speChar = document.getElementById('special-cha'),
        lengthPass = document.getElementById('pass-length');

    // password validation
    let lowerCaseLetters = /[a-z]/g,
        upperCaseLetters = /[A-Z]/g,
        numbers = /[0-9]/g,
        specialChar = /[#$^+=!*()@%&]/g,
        regExpression = /^(?=.*\d)(?=.*[#$^+=!*()@%&])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/g,
        minNumbofChars = 6,
        maxNumbofChars = 16,
        emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        avatarPic = "";

    regPass.addEventListener('keyup', function() {

        if (regPass.value.match(lowerCaseLetters)) { // Validate lowercase letters
            lowLetter.classList.add('text-success');
        } else {
            lowLetter.classList.remove('text-success');
        }

        if (regPass.value.match(upperCaseLetters)) { // Validate capital letters
            upLetter.classList.add('text-success');
        } else {
            upLetter.classList.remove('text-success');
        }

        if (regPass.value.match(numbers)) { // Validate numbers
            numbChar.classList.add('text-success');
        } else {
            numbChar.classList.remove('text-success');
        }

        if (regPass.value.match(specialChar)) { // Validate special characters
            speChar.classList.add('text-success');
        } else {
            speChar.classList.remove('text-success');
        }

        if (regPass.value.length >= minNumbofChars || regPass.value.length >= maxNumbofChars) { // Validate length
            lengthPass.classList.add('text-success');
        } else {
            lengthPass.classList.remove('text-success');
        }
    });

    regPass.addEventListener('change', function() {
        if (regPass.value.match(regExpression)) {
            regPass.classList.add('border', 'border-success');
            regPass.classList.remove('border', 'border-danger');
        } else {
            regPass.classList.add('border', 'border-danger');
            regPass.classList.remove('border', 'border-success');
        }
    });

    regPass.addEventListener('focus', function() {
        passExp.classList.add('show-exp');
    });

    regPass.addEventListener('focusout', function() {
        passExp.classList.remove('show-exp');
    });

    matchPass.addEventListener('keyup', function() {
        if (matchPass.value.match(regPass.value)) {
            matchPass.classList.add('border', 'border-success');
            matchPass.classList.remove('border', 'border-danger');
        } else {
            matchPass.classList.add('border', 'border-danger');
            matchPass.classList.remove('border', 'border-success');
        }
    });

    profileImg.addEventListener('change', function() {
        for (let i = 0; i < profileImg.files.length; i++) {
            avatarPic = profileImg.files[i].name;
        }
        avatarImg.appendChild(avatar);
        avatar.setAttribute('src', 'img/' + avatarPic);
        avatar.setAttribute('alt', 'profile image');
    });

    phoneInput.addEventListener('input', function(event) {
        var number = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        event.target.value = !number[2] ? number[1] : '(' + number[1] + ') ' + number[2] + (number[3] ? '-' + number[3] : '');
    });

    function formValidation() {
        validation = false;

        if (firstName.value === "") {
            firstName.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (lastName.value === "") {
            lastName.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (addressInput.value === "") {
            addressInput.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (emailInput.value.match(emailPattern) && emailInput.value === "") {
            emailInput.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (phoneInput.value === "") {
            phoneInput.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (cityInput.value === "") {
            cityInput.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (stateInput.value === "") {
            stateInput.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (zipCode.value === "") {
            zipCode.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (avatarPic === "") {
            profileImg.classList.add('border', 'border-danger');
            avatarImg.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (regUser.value === "") {
            regUser.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
        if (regPass.value === "") {
            regPass.classList.add('border', 'border-danger');
            validation = false;
        } else {
            validation = true;
        }
    }

    function alert() {
        if (validation === false) {
            alertMsg.appendChild(alertH2);
            alertMsg.appendChild(alertDiv);
            alertMsg.appendChild(alertP);

            alertMsg.classList.add('slide-down');
            alertMsg.classList.add('alert-danger');

            alertH2.innerHTML = 'Something is Missing';
            alertP.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

            setTimeout(function() {
                alertMsg.classList.remove('slide-down');
                alertMsg.classList.remove('alert-danger');
                alertMsg.removeChild(alertH2);
                alertMsg.removeChild(alertLoader);
            }, 3000);
        } else {
            setTimeout(function() {
                alertMsg.classList.remove('slide-down');
                alertMsg.classList.remove('alert-success');
                alertMsg.removeChild(alertH2);
                alertMsg.removeChild(alertLoader);
            }, 4000);

            alertMsg.appendChild(alertH2);
            alertMsg.appendChild(alertDiv);
            alertMsg.appendChild(alertP);
            alertMsg.appendChild(alertLoader);

            alertMsg.classList.add('slide-down');
            alertMsg.classList.add('alert-success');

            alertH2.innerHTML = 'Registration Successful!';
            alertP.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';

            alertLoader.setAttribute('src', '/img/Spinner-1.5s-200px.gif');
            alertLoader.setAttribute('width', '5%');
            alertLoader.setAttribute('alt', 'Loader');
        }
    }

    function clearInp() {
        firstName.value = "";
        lastName.value = "";
        addressInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        cityInput.value = "";
        regPass.value = "";
        matchPass.value = "";
        profileImg.value = "";
        regUser.value = "";
        stateInput.value = "";
        zipCode.value = "";

        regPass.classList.remove('border', 'border-success');
        matchPass.classList.remove('border', 'border-success');
        lowLetter.classList.remove('text-success');
        upLetter.classList.remove('text-success');
        upLetter.classList.remove('text-success');
        numbChar.classList.remove('text-success');
        speChar.classList.remove('text-success');
        lengthPass.classList.remove('text-success');

        regPass.value = "";
        matchPass.value = "";
        avatar.setAttribute('src', 'img/img-sample');
        avatar.setAttribute('alt', '');

        loginBox.classList.remove('right');
        regBox.classList.remove('right');
    }
}

let managment = new adminProcess();