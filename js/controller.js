const controller = {};


//validate Login Infor

controller.validateLoginInfo = (email, password) => {
    //Biểu thức check định dạng email
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
        view.renderErrorMessage('email-error-message', 'Please input email');
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    } else {
        view.renderErrorMessage('email-error-message', '');
    }

    if (!password) {
        view.renderErrorMessage('password-error-message', 'Please input password')
    } else {
        view.renderErrorMessage('password-error-message', '')
    }

    if (email && password) {
        //call model => check database
        model.loginUsers(email, password);
    }
};

//validate Register Info
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
controller.validateRegisterInfo = (firstName, lastName, email, password, confirmPassword) => {
    //check first name
    if (!firstName) {
        view.renderErrorMessage('error-first-name-message', 'Please input your first name')
    } else {
        view.renderErrorMessage('error-first-name-message', '')
    }
    if (!lastName) {
        view.renderErrorMessage('error-last-name-message', 'Please input your last name');
    } else {
        view.renderErrorMessage('error-last-name-message', '');
    }

    //check email
    if (!email) {
        view.renderErrorMessage('error-email-message', 'Please input your email');
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage('error-email-message', 'Invalid email');
    } else {
        view.renderErrorMessage('error-email-message', '');
    }
    //check password
    if (!password) {
        view.renderErrorMessage('error-password-message', 'Please input your password');
    } else if (password.length < 6) {
        view.renderErrorMessage('error-password-message', 'Password must at least 6 characters');
    } else if (!passwordRegex.test(password)) {
        view.renderErrorMessage('error-password-message', 'Password must contain number, lower case and upper case');
    } else {
        view.renderErrorMessage('error-password-message', '');
    }

    if (!confirmPassword) {
        view.renderErrorMessage('error-confirm-password-message', 'Please confirm your password');
    } else if (confirmPassword != password) {
        view.renderErrorMessage('error-confirm-password-message', 'password did not match');
    } else {
        view.renderErrorMessage('error-confirm-password-message', '')
    }

    if (firstName && lastName && email && emailRegex.test(email) && password && confirmPassword === password) {
        //call model => check database
        model.creatNewUser(firstName, lastName, email, password);
    }

};

//validate reset info
controller.validateResetInfo = (email) => {
    // Biểu thức check định dạng email
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email) {
        view.renderErrorMessage('email-error-message', 'Please input email');
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    } else {
        view.renderErrorMessage('email-error-message', '');
    }

    if (email) {
        //call model => check database
        model.resetPassword(email);
    }

};

controller.validateCreateFolderInfor = (nameOfFolder, question, answer) => {
    //check nameOfFolder
    if (!nameOfFolder) {
        view.renderErrorMessage('folder-name-error-message', 'Please input folder name');
    } else {
        view.renderErrorMessage('folder-name-error-message', '');
    }
    //check question
    if (!question) {
        view.renderErrorMessage('question-error-message', 'Please input question');
    } else {
        view.renderErrorMessage('question-error-message', '');
    }
    //check answer
    if (!answer) {
        view.renderErrorMessage('answer-error-message', 'Please input answer');
    } else {
        view.renderErrorMessage('answer-error-message', '');
    }

    if (nameOfFolder && question && answer) {
        //call model
        model.saveFolderInfor(nameOfFolder, question, answer);
    }
};