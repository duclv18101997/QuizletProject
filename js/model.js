const model = {};

model.loginUser = undefined;
model.listener = undefined;
model.activeFolder = undefined;
model.folders = undefined;

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

//load 1 folder

model.loadFolder = (email) => {
    const db = firebase.firestore();
    model.listener = db.collection('folders')
        .where('user', '==', email)
        .onSnapshot((snapshot) => {
            const folders = [];
            snapshot.docs.forEach((items) => {
                const folder = items.data();
                folder.id = items.id;
                console.log(folder.id);
                folders.push(folder);
            });
            model.folders = folders;
            model.folders.forEach((item) => {
                view.renderFolderItem(item);
            });
        });

};

// Load content of 1 folder

model.loadContentFolder = (id) => {
    const db = firebase.firestore();
    model.listener = db.collection('folders').where('id', '==', id.id)
        .onSnapshot((snapshot) => {
            const folders = [];
            snapshot.docChanges.forEach((items) => {
                const folder = items.doc.data();
                folder.id = items.doc.id;
                folders.push(folder);
            });
            model.folders = folders;
            model.folders.folder.forEach((flashcart) => {
                view.addFlashcart(flashcart.folder);
            });
        });
}