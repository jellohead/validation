// validation.js

addSubmitButtonListener = () => {
    const btn = document.querySelector('.submit');
    btn.addEventListener('click', (e) => {

    }
}

addValidationListeners = () => {
    console.log('in addValidationListeners');
    emailValidation();
    zipcodeValidation();
};

emailValidation = () => {
    console.log('in emailValidation');
    const email = document.querySelector('#email-id');
    email.addEventListener('input', (e) => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('I am expecting and e-mail address!');
            email.reportValidity();
        } else {
            email.setCustomValidity('');
        }
    })
}

zipcodeValidation = () => {
    console.log('in zipcodeValidation');
    const zipcode = document.querySelector('#zip-code');
    const zipcodeRegexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    zipcode.addEventListener('input', (e) => {
        const isValid = zipcodeRegexp.test(e.target.value);
        resultZipCode = isValid !== true ? e.preventDefault() : e.target.value;
        console.log(resultZipCode);
    })

    // zipcodeRegexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

};




window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded and parsed');
    addValidationListeners();
    addSubmitButtonListener();
})


// email.addEventListener("input", () => {
//     const isValid = email.value.length === 0 || emailRegExp.test(email.value);
//     if (isValid) {
//       email.className = "valid";
//       error.textContent = "";
//       error.className = "error";
//     } else {
//       email.className = "invalid";
//     }
//   });