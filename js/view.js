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
                    event.preventDefault();//cancel action mặc định của form

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

            //listen click Hoc Phan Cua Ban
            const myFolder = document.getElementById('my-folder');
            if (myFolder) {
                myFolder.addEventListener('click', () => {
                    view.setActiveScreen('');
                });
            }

            //onsearch event
            const searchfolder = document.getElementById('search');
            const searchKeyWord = searchfolder.value;
            if (searchfolder) {
                searchfolder.addEventListener('onsearch', () => {
                    model.searchFolderInfor(searchKeyWord);
                })
            }

            break;
        case 'createFolderPage':
            if (app) {
                app.innerHTML = components.createFolderPage;
            }

            view.setHomePageScreen();

            //listen click create folder form
            const btnCreate = document.getElementById('form-create-folder');
            if (btnCreate) {
                btnCreate.addEventListener('submit', (event) => {
                    event.preventDefault();
                    //   const nameOfFolder = btnCreate.folderName.value;
                    //   const question = btnCreate.questionName.value;
                    //   const answer = btnCreate.answerName.value;
                    const nameOfFolder = document.getElementById('input-folder-name').value;
                    const question = document.getElementById('input-folder-question').value;
                    const answer = document.getElementById('input-folder-answer').value;
                    console.log(nameOfFolder);
                    console.log(question);
                    console.log(answer);
                    controller.validateCreateFolderInfor(nameOfFolder, question, answer);

                });
            }

            //listen click them thuat ngu
            const addMoreItem = document.getElementById('btn-add-more-item');
            if (addMoreItem) {
                addMoreItem.addEventListener('click', () => {
                    view.renderMoreItem();
                })
            }

            //listen click xoa thuat ngu
            const cleartItem = document.getElementById('btn-clear-item');
            if (cleartItem) {
                cleartItem.addEventListener('click', () => {
                    view.clearItem();
                });
            }
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

view.renderMoreItem = () => {
    const listAdd = document.getElementById('list-add');
    if (listAdd) {
        //create div
        const inputInforItem = document.createElement('div');
        const inputQuestion = document.createElement('div');
        const inputQ = document.createElement('input');
        inputQ.setAttribute('type', 'text');
        inputQ.id = 'input-folder-question';
        inputQ.placeholder = 'Enter question';
        inputQ.name = 'questionName';
        const errorQ = document.createElement('div');
        errorQ.id = 'question-error-message';
        errorQ.classList.add('error-message');
        const inputAnswer = document.createElement('div');
        const inputA = document.createElement('input');
        inputA.setAttribute('type', 'text');
        inputA.id = 'input-folder-answer';
        inputA.placeholder = 'Enter answer';
        inputA.name = 'answerName';
        const errorA = document.createElement('div');
        errorA.id = 'answer-error-message';
        errorA.classList.add('error-message');
        //modify div inputInforItem
        inputInforItem.classList.add('input-folder-infor-item');
        inputInforItem.id = 'input-folder-infor-item';

        inputQuestion.classList.add('input-question');
        inputQuestion.classList.add('input-infor');

        inputAnswer.classList.add('input-answer');
        inputAnswer.classList.add('input-infor');

        //append child
        inputQuestion.appendChild(inputQ);
        inputQuestion.appendChild(errorQ);
        inputAnswer.appendChild(inputA);
        inputAnswer.appendChild(errorA);

        inputInforItem.appendChild(inputQuestion);
        inputInforItem.appendChild(inputAnswer);

        listAdd.appendChild(inputInforItem);


    }
};

view.clearItem = () => {
    const listAdd = document.getElementById('list-add');
    const folderItem = document.getElementById('input-folder-infor-item');
    if (listAdd && folderItem) {
        listAdd.removeChild(folderItem);
    }
};

view.setHomePageScreen = () => {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => {
            view.setActiveScreen('homePage');
        });
    }
};