const view = {};

view.setActiveScreen = (screenName) => {
    const app = document.getElementById('app');

    switch (screenName) {
        case 'welcomePageQuiz':
            if (app) {
                app.innerHTML = components.welcomePageQuiz;
            }

            //listen đăng nhap button click
            const btnLogin = document.getElementById('btn-signIn');
            if (btnLogin) {
                btnLogin.addEventListener('click', () => {
                    view.setActiveScreen('loginPage');
                });
            }

            //listen đăng ki button click
            const btnRegister = document.getElementById('btn-register');
            if (btnRegister) {
                btnRegister.addEventListener('click', () => {
                    view.setActiveScreen('registerPage');
                });
            }

            //listen tao+ click
            const createFolderWelcome = document.getElementById('btn-add-new');
            if (createFolderWelcome) {
                createFolderWelcome.addEventListener('click', () => {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'You need to login to create new folder!',
                    })
                })
            }

            //listen bat dau hoc
            const startLearn = document.getElementById('btn-start');
            if (startLearn) {
                startLearn.addEventListener('click', () => {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'You need to login to create new folder!',
                    })
                })
            }

            break;
        case 'loginPage':
            if (app) {
                app.innerHTML = components.loginPage;
            }
            //listen submit form
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                loginForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const email = loginForm.email.value;
                    const password = loginForm.password.value;

                    controller.validateLoginInfo(email, password);
                })
            };

            // listen click register
            const registerLink = document.getElementById('register-link');
            if (registerLink) {
                registerLink.addEventListener('click', (event) => {
                    view.setActiveScreen('registerPage');
                });
            }

            // listen click forgot password
            const forgotLink = document.getElementById('forgot-link');
            if (forgotLink) {
                forgotLink.addEventListener('click', (event) => {
                    view.setActiveScreen('resetPage');
                });
            }

            break;

        case 'registerPage':
            if (app) {
                app.innerHTML = components.registerPage;
            }
            //listen submit
            const registerForm = document.getElementById('register-form');
            if (registerForm) {
                registerForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const firstName = registerForm.firstName.value;
                    const lastName = registerForm.lastName.value;
                    const email = registerForm.email.value;
                    const password = registerForm.password.value;
                    const confirmPassword = registerForm.confirmPassword.value;
                    controller.validateRegisterInfo(firstName, lastName, email, password, confirmPassword);
                });
            }

            //listen click
            const loginLink = document.getElementById('login-link');
            if (loginLink) {
                loginLink.addEventListener('click', (event) => {
                    view.setActiveScreen('loginPage');
                });
            }
            break;
        case 'resetPage':
            if (app) {
                app.innerHTML = components.resetPage;
            }

            // listen submit
            const resetForm = document.getElementById('reset-form');
            if (resetForm) {
                resetForm.addEventListener('submit', (event) => {
                    event.preventDefault(); //cancel action mặc định của form

                    const email = resetForm.email.value;
                    controller.validateResetInfo(email);
                });
            }
            break;
        case 'homePage':
            if (app) {
                app.innerHTML = components.homePage;
            }


            //display username and disable button
            const btnLogin1 = document.getElementById('btn-signIn');
            const btnRegister1 = document.getElementById('btn-register');
            if (btnLogin1 && btnRegister1) {
                btnLogin1.style.display = 'none';
                btnRegister1.style.display = 'none';
                view.displayUserInfor();
            }

            // listen click tao thu muc
            const createFolder = document.getElementById('taoThumuc');
            if (createFolder) {
                createFolder.addEventListener('click', () => {
                    console.log('aa');
                    view.setActiveScreen('createFolderPage');
                });
            }
            //listen click view my folder
            const myFolder = document.getElementById('my-folder');
            if (myFolder) {
                myFolder.addEventListener('click', () => {
                    model.loadFolder(model.loginUser.email);
                })
            }

            //listen click view folder detail
            const folderDetail = document.getElementById()
            break;
        case 'createFolderPage':
            if (app) {
                app.innerHTML = components.createFolderPage;
            }

            //listen click create folder form
            // const btnCreate =document.getElementById('btn-create-folder');
            // if(btnCreate){
            //     btnCreate.addEventListener('click', () => {

            //     });
            // }
            break;

        case 'StudyFlashCard':
            if (app) {
                app.innerHTML = components.StudyFlashCard;
            }

            //model.loadContentFolder();
            break;

    }
};



view.renderErrorMessage = (elementId, errorMessage) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = errorMessage;
    }
};



view.clearRegisterInfo = () => {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.firstName.value = '';
        registerForm.lastName.value = '';
        registerForm.email.value = '';
        registerForm.password.value = '';
        registerForm.confirmPassword.value = '';
    }
};

view.displayUserInfor = () => {
    const userInfor = document.getElementById('userInfor');
    const bigName = document.getElementById('big-name');
    if (userInfor && bigName) {
        bigName.style.display = 'flex';
        bigName.innerText = model.loginUser.displayName[0];
        userInfor.innerText = model.loginUser.displayName;
    }
};

// add flashcart in study page
view.addflashcart = (folder) => {
    const listflashcart = document.getElementById('list-add');

    if (listflashcart) {
        const flashcartContainer = document.createElement('div');
        const flashcartItemQuestion = document.createElement('div');
        const flashcartItemAnswer = document.createElement('div');
        flashcartContainer.classList.add('input-folder-infor-item');
        flashcartItemQuestion.classList.add('input-question');
        flashcartItemQuestion.classList.add('input-infor');
        flashcartItemAnswer.classList.add('input-infor');
        flashcartItemAnswer.classList.add('input-answer');
        flashcartItemAnswer.innerHTML = '<input type="text" id="render-folder-question" value="' + folder.answer + '" readonly="" />';
        flashcartItemQuestion.innerHTML = '<input type="text" id="render-folder-answer" value="' + folder.question + '" readonly="" />';
        flashcartContainer.appendChild(flashcartItemQuestion);
        flashcartContainer.appendChild(flashcartItemAnswer);
        listflashcart.appendChild(flashcartContainer);
        flashcartContainer.scrollTop = flashcartContainer.scrollHeight;
    }

};

//render folder
view.renderFolderItem = (folder) => {
    const listFolder = document.getElementById('list-folder');
    const titleflashcart = document.getElementById('folder-name');
    if (titleflashcart) {
        const titleOfFlashcart = document.createElement('h3');
        titleOfFlashcart.classList.add("flashcard-title");
        titleOfFlashcart.innerText = folder.folderName + " - " + model.loginUser.displayName;
        titleflashcart.appendChild(titleOfFlashcart);
    }
    if (listFolder) {
        const listFolderItems = document.createElement('div');
        const listFolderItemsInfor = document.createElement('div');
        const listFolderQuestionNumber = document.createElement('div');
        const listFolderQuestionName = document.createElement('div');
        const listFolderAuthor = document.createElement('div');
        listFolderItems.id = folder.id;
        listFolderItems.classList.add('list-folder-item');
        listFolderItemsInfor.classList.add('list-folder-item-infor');
        listFolderAuthor.classList.add('author');
        listFolderQuestionName.classList.add('folder-header');
        listFolderQuestionNumber.classList.add('question-number');
        listFolderQuestionName.innerText = folder.folderName;
        listFolderAuthor.innerText = folder.user;
        listFolderQuestionNumber.innerText = folder.folder.length + ' Thuật Ngữ';
        listFolderItemsInfor.appendChild(listFolderQuestionNumber);
        listFolderItemsInfor.appendChild(listFolderAuthor);
        listFolderItems.appendChild(listFolderItemsInfor);
        listFolderItems.appendChild(listFolderQuestionName);
        listFolder.appendChild(listFolderItems);
        listFolder.scrollTop = listFolder.scrollHeight;

        //listen click for each folder item
        listFolderItems.addEventListener('click', () => {
            let folderInfor;
            model.folders.forEach((item) => {
                if (item.id === folder.id) {
                    folderInfor = item;
                    console.log(folderInfor);
                    view.setActiveScreen('StudyFlashCard');
                }
                folderInfor.folder.forEach((item) => {
                    view.addflashcart(item);
                });

            });
        });
    }



};
t5