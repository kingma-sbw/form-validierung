const usernameEl = document.getElementById('username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

/**
 * usernames cannot be blank and have a length
 */
const checkUsername = () => {

    /** Name length between 3 and 25 characters */
    const min = 3, max = 25;

    /* variable (let username) mit wert von usernameEl */

    /* leerschläge anfung und ende entfernen */
    /* test of username einen Wert hat, wenn nicht showError(usernameEl, 'Benutzername darf nicht leer sein'); return false;*/
    /* test ob länge von username between min und max, wenn nicht showError(usernameEl, 'Länge Benutzername nicht richtig'); return false;*/
    /* anders : showSuccess(usernameEl); return true; */
};


/**
 * emails cannot be blank and must obey rules
 */
const checkEmail = () => {

    /* variable email mit wert von emailEl */
    /* leerschläge anfung und ende entfernen */
    /* test of username einen Wert hat, wenn nicht showError(emailEl, 'mail muss ausgefüllt sein'); return false;*/
    /* test ob im richtigen format, wenn nicht showError(emailEl, 'Email im falschen Format.'); return false;*/
    /* anders : showSuccess(emailEl); return true; */

};

/**
 * password cannot be blank and must obey rules
 * @returns boolean true it valid
 */
const checkPassword = () => {

    /* variable (let password) mit wert von passwordEl */
    /* leerschläge anfung und ende entfernen */

    /* test of password einen Wert hat, wenn nicht showError(passwordEl, 'Kennwort muss ausgefüllt sein'); return false;*/
    /* test ob im richtigen format, wenn nicht showError(passwordEl, 'Kennwort-Mindestlänge 8 Buchstaben und muss mindestens 1 Kleinbuchstabe, 1 Grossbuchstaben, 1 Zahl, and 1 Spezialbuchstabe aus (!;@#$%^&*) enthalten.'); return false;*/
    /* anders : showSuccess(emailEl); return true; */

};

/**
 * password und check password should match
 * @returns boolean true if match
 */
const checkConfirmPassword = () => {
    /* variable (let passwort) mit wert von passwordEl */
    /* variable (let confirmpassword) mit wert von confirmPasswordEl */
    /* leerschläge anfung und ende entfernen */
    /* test of passwordConfirm einen Wert hat, wenn nicht showError(confirmPasswordEl, 'Kennwort nochmals eingeben.'); return false;*/
    /* vergleiche ob password und confirmPassword gleich sind, wenn nicht showError(confirmPasswordEl, 'Kennwort-Eingaben stimmen nicht überein.'); return false; */

};

/**
 * tested ob email ein E-Mail sein kann
 * @param {string} email 
 * @return {boolean}
 */
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

/**
 * Password entspricht das password die Mindestanforderungen
 * @param {string} password
 * @return {boolean}
 */
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.;:!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

/**
 * @param {string} value wurde einen Wert eingegegen
 * @return {boolean} false if no value
 */
const isSet = value => value !== '';

/**
 * 
 * @param {int} length aktuelle Länge
 * @param {int} min mindest Länge
 * @param {int} max maximum Länge
 */
const isBetween = (length, min, max) => min < length && length < max;

/**
 * Set the message field (<small>) and marks with color border
 * @param {element} input elemeent to show the message for, add error class to parent
 * @param {string} message the message to show
 */
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

/**
 * Set the message field (<small>) and marks with color border
 * @param {element} input element to show the result for, remves the class from parent
 */
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

/**
 * do form submit and send to server when valid
 */
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


    let isFormValid = checkUsername() &&
        checkEmail() &&
        checkPassword() &&
        checkConfirmPassword();

    // submit to the server if the form is valid
    if (isFormValid) {

        alert("success");

    }
});

/**
 * Delay function so user has time to input
 * @param {function} fn function that is delayed
 * @param {int} delay ms to delay, default to 500
 * @return {mixed} result of the fn call
 */
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce((e) => {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
