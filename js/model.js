const model = {};

model.loginUser = undefined;

model.creatNewUser = (firstName, lastName, email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerResult) => {
        //update display name
        registerResult.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
        });
        //send vertify email
        registerResult.user.sendEmailVerification();
        window.alert('Register successfully! Please check your email');
        view.clearRegisterInfo();
    })
    .catch((error) => {
        window.alert(error.code);
    });
};

model.loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult) => {
        //check email verified
        if(loginResult.user.emailVerified){
            //login success
            model.loginUser = {
                id : loginResult.user.id,
                displayName : loginResult.user.displayName,
                email: loginResult.user.email,
            };
            view.setActiveScreen('homePage');
        }else{
            window.alert('this email is not activate, please verify your email!');  
        }
    })
    .catch((error) => {
        console.log(error);
        window.alert(error.message);
    })
};

model.resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
    .then((resetResult) => {
        window.alert('Please check your email to reset password');
        view.setActiveScreen('loginPage');
    })
    .catch((error) => {
        window.alert(error.message);
    })
};