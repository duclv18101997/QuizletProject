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
            if (loginResult.user.emailVerified) {
                //login success
                model.loginUser = {
                    id: loginResult.user.id,
                    displayName: loginResult.user.displayName,
                    email: loginResult.user.email,
                };
                view.setActiveScreen('homePage');
            } else {
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


//load all folder of login user to homepage
model.loadFolder = () => {
    const db = firebase.firestore();

};

// save folder infor to firebase
// model.saveFolderInfor = (nameOfFolder, question, answer) => {
//     const newFolder = {
//         question: question,
//         answer: answer,
//     };
//     const db = firebase.firestore();
//     db.collection('folders')
//     .doc('qE97IiG9jg3XlFJ1qbrs')
//     .update({

//         folder: firebase.firestore.FieldValue.arrayUnion(newFolder),

//     });
// };
model.createConversation = (conversationName, userEmail) => {
    const db = firebase.firestore();
    const newConversation = {
        name: conversationName,
        User: [userEmail, model.loginUser.email],
        createAt: new Date(),
        messages: [],
    };
    db.collection('conversations').add(newConversation)
        .then(() => {
            view.setActiveScreen('chatPage');

            //view.sendMessage()
        })
        .catch((error) => {
            console.log(error);
            window.alert(error.message);
        }
        );
};

model.saveFolderInfor = (nameOfFolders, questions, answers) => {
    const db = firebase.firestore();
    // const newArrayFolder = {
    //     question: questions,
    //     answer: answers,
    // };
    const newFolder = {
        folderName: nameOfFolders,
        folder: [],
        createAt: new Date(),
        user: model.loginUser.email,
    };
    db.collection('folders').add(newFolder)
        .then(() => {
            view.setActiveScreen('homePage');

            //view.sendMessage()
        })
        .catch((error) => {
            console.log(error);
            window.alert(error.message);
        } 
        );
}