const model = {};

model.loginUsers = undefined;
model.listener = undefined;
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

model.loginUsers = (email, password) => {
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
//load 1 folder with email

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

//load folder by folder name
model.loadFolderWithFolderName = (folderName) => {
    console.log(folderName);
    const db = firebase.firestore();
    model.listener = db.collection('folders')
        .where('folderName', '==', folderName)
        .onSnapshot((snapshot) => {
            const folders = [];
            snapshot.docs.forEach((items) => {
                const folder = items.data();
                folder.id = items.id;
                folders.push(folder);
            });
            model.folders = folders;
            console.log(model.folders.length);
            view.setActiveScreen('searchScreen');
            model.folders.forEach((item) => {
                view.renderFolderItemWithSearch(item);
            });

        });
}

//load all folder when comback welcome page
model.loadFolderWelcomePage = () => {
    const db = firebase.firestore();
    model.listener = db.collection('folders')
        .onSnapshot((snapshot) => {
            const folders = [];
            snapshot.docs.forEach((items) => {
                const folder = items.data();
                folder.id = items.id;
                folders.push(folder);
            });
            model.folders = folders;
            model.folders.forEach((item) => {
                view.renderFolderItem(item);
            });
        });
}

// save folder infor to firebase
model.saveFolderInfor = (nameOfFolders, questions, answers) => {
    const db = firebase.firestore();
    const newFolder = {
        folderName: nameOfFolders,
        folder: [
            {}
        ],
        createAt: new Date(),
        user: model.loginUser.email,
    };
    db.collection('folders').add(newFolder)
        .then(() => {
            view.setActiveScreen('homePage');
        })
        .catch((error) => {
            console.log(error.code);
            window.alert(error.message);
        });
}

//clear 
model.clearFolderListener = () => {
    model.listener();
};