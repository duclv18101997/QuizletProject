const view = {};

view.setSlickScreen = () => {
    console.log('aaaaaaaaaaa0000');
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
};

view.setActiveScreen = (screenName) => {
    const app = document.getElementById('app');
    switch (screenName) {
        case 'welcomePageQuiz':
            if (app) {
                app.innerHTML = components.welcomePageQuiz;
            }

            //listen enter click

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

            model.loadFolderWelcomePage();
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
                    view.setActiveScreen('createFolderPage');
                });
            }

            //listen click Hoc Phan Cua Ban
            const myFolder = document.getElementById('my-folder');
            if (myFolder) {
                myFolder.addEventListener('click', () => {
                    view.setActiveScreen('myFolderPage');
                    model.loadFolder(model.loginUser.email);
                })
            }


            //onsearch event
            const searchfolder = document.getElementById('search-form');


            if (searchfolder) {
                searchfolder.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const idSearch = document.getElementById('search');
                    const searchKeyWord = idSearch.value;
                    model.loadFolderWithFolderName(searchKeyWord);

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
                    const nameOfFolder = document.getElementById('input-folder-name').value;
                    const question = document.getElementById('input-folder-question').value;
                    const answer = document.getElementById('input-folder-answer').value;

                    controller.validateCreateFolderInfor(nameOfFolder, question, answer);
                })
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

        case 'searchScreen':
            if (app) {
                app.innerHTML = components.searchScreen;
            }
            view.setHomePageScreen();
            const keyWord = document.getElementById('search').value;
            const resultSearch = document.getElementById('resultSearch');
            console.log(model.folders.length);

            if (model.folders.length === 0) {
                resultSearch.innerText = 'Rất tiếc, không tìm thấy học phần nào khớp với: ' + keyWord;
            } else {
                resultSearch.innerText = 'Kết quả cho tìm kiếm từ khóa: ' + keyWord;
            }

            break;
        case 'StudyFlashCard':
            if (app) {
                app.innerHTML = components.StudyFlashCard;
            }

            view.setHomePageScreen();
            break;
        case 'myFolderPage':
            if (app) {
                app.innerHTML = components.myFolderPage;
            }
            view.setHomePageScreen();
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
            model.clearFolderListener();
            view.setActiveScreen('homePage');
        });
    }
};

//render folder with search
view.renderFolderItemWithSearch = (folder) => {
    const listFolder = document.getElementById('list-folder');
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
            });
            const searchForm = document.getElementById('search');
            searchForm.value = '';
            folderInfor.folder.forEach((item) => {
                view.addflashcart(item);
            });
            view.setSlickScreen();
            const titleflashcart = document.getElementById('folder-name');
            if (titleflashcart) {
                const titleOfFlashcart = document.createElement('h3');
                titleOfFlashcart.id = folderInfor.id;
                titleOfFlashcart.classList.add("flashcard-title");
                titleOfFlashcart.innerText = folderInfor.folderName + " - " + folderInfor.user;
                titleflashcart.appendChild(titleOfFlashcart);
            }
            view.listenClickButtonAddorEdit(folder);
        });

    }
}

//render folder
view.renderFolderItem = (folder) => {
    const listFolder = document.getElementById('list-folder');
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
                    view.setActiveScreen('StudyFlashCard');
                }
            });
            folderInfor.folder.forEach((item) => {
                view.addflashcart(item);
            });
            view.setSlickScreen();
            const titleflashcart = document.getElementById('folder-name');
            if (titleflashcart) {
                const titleOfFlashcart = document.createElement('h3');
                titleOfFlashcart.id = folderInfor.id;
                titleOfFlashcart.classList.add("flashcard-title");
                titleOfFlashcart.innerText = folderInfor.folderName + " - " + folderInfor.user;
                titleflashcart.appendChild(titleOfFlashcart);
            }
            view.listenClickButtonAddorEdit(folder);
        });
    }
};

//remove flashcart in study page
view.removeFolderInHomePage = (listFolder) => {
    console.log(listFolder.length);
}

// add flashcart in study page
view.addflashcart = (folder) => {
    const listflashcart = document.getElementById('list-add');
    const slickLazy = document.getElementById('slick-lazy');
    if (listflashcart && slickLazy) {
        const flashcartContainer = document.createElement('div');
        const flashcartItemQuestion = document.createElement('div');
        const flashcartItemAnswer = document.createElement('div');
        const flipCardLazy = document.createElement('div');
        const flipCardInner = document.createElement('div');
        const flipCardFont = document.createElement('div');
        const flipCardContentQuestion = document.createElement('div');
        const flipCardContentAnswer = document.createElement('div');
        const flipCardBack = document.createElement('div');
        flipCardLazy.classList.add('flip-card');
        flipCardInner.classList.add('flip-card-inner');
        flipCardFont.classList.add('flip-card-front');
        flipCardContentQuestion.classList.add('flip-lazy-content');
        flipCardContentAnswer.classList.add('flip-lazy-content');
        flipCardBack.classList.add('flip-card-back');
        flashcartContainer.classList.add('input-folder-infor-item');
        flashcartItemQuestion.classList.add('input-question');
        flashcartItemQuestion.classList.add('input-infor');
        flashcartItemAnswer.classList.add('input-infor');
        flashcartItemAnswer.classList.add('input-answer');
        // gan du lieu
        flipCardContentAnswer.innerText = folder.answer;
        flipCardContentQuestion.innerText = folder.question;
        flashcartItemAnswer.innerHTML = '<input type="text" id="render-folder-question" value="' + folder.answer + '" readonly="" />';
        flashcartItemQuestion.innerHTML = '<input type="text" id="render-folder-answer" value="' + folder.question + '" readonly="" />';
        flipCardBack.appendChild(flipCardContentAnswer);
        flipCardFont.appendChild(flipCardContentQuestion);
        flipCardInner.appendChild(flipCardBack);
        flipCardInner.appendChild(flipCardFont);
        flipCardLazy.appendChild(flipCardInner);
        slickLazy.appendChild(flipCardLazy);
        flashcartContainer.appendChild(flashcartItemQuestion);
        flashcartContainer.appendChild(flashcartItemAnswer);
        listflashcart.appendChild(flashcartContainer);
        flashcartContainer.scrollTop = flashcartContainer.scrollHeight;
    }
};

//ngay 29/6 render flashcart in new folder
view.renderflashcart = (folder) => {
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
        flashcartItemAnswer.innerHTML = '<input type="text" id="render-folder-question" value="' + folder.answer + '" />';
        flashcartItemQuestion.innerHTML = '<input type="text" id="render-folder-answer" value="' + folder.question + '"/>';
        flashcartContainer.appendChild(flashcartItemQuestion);
        flashcartContainer.appendChild(flashcartItemAnswer);
        listflashcart.appendChild(flashcartContainer);
        flashcartContainer.scrollTop = flashcartContainer.scrollHeight;
    }
};

//ngay 29/6 lang nghe nut click de edit

view.listenClickButtonAddorEdit = (folder) => {
    const btnAddNewOrEditFlashcart = document.getElementById("edit-items");
    if (btnAddNewOrEditFlashcart) {
        btnAddNewOrEditFlashcart.addEventListener('click', () => {
            let folderInforWithAddOrEdit;
            model.folders.forEach((item) => {
                if (item.id == folder.id) {
                    folderInforWithAddOrEdit = item;
                    model.thu(folder);
                    view.setActiveScreen('createFolderPage');
                }
            });
            const inputFolderName = document.getElementById("input-folder-name");
            inputFolderName.value = folder.folderName;
            folderInforWithAddOrEdit.folder.forEach((items) => {
                view.renderflashcart(items);
            })
        });
    }
};