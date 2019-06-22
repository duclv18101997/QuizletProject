const components = {};

components.loginPage = `
<div id='background'>
<div id="login-screen">
    <div id="login-form-container">
        <h2>Welcome to Quizlet</h2>
        <form id="login-form">
            <div class="input-text form">
                <input type="text" name="email" placeholder="Email">
                <div id="email-error-message" class="error-message"></div>
            </div>
            <div class="input-text form">
                <input type="password" name="password" placeholder="Password">
                <div id="password-error-message" class="error-message"></div>
            </div>
            <div id="submit-content-google" class="form">
                <a href="#" id="forgot-link">Forgot your password?</a>
            </div>
            <div id="login-button" class="form">
                <input type="submit" name="" value="Login">
            </div>
            <div id="submit-content" class="form">
                <a href="#" id="register-link">Dont' have an account? Register</a>
            </div>
        </form>
    </div>
</div>
</div>
`;

components.registerPage = `
<div id='background'>
            <div id="register-screen">
                        <h2>MindX Chats</h2>
                        <form id="register-form">
                            <div class="div-form">
                                <div id="first-name-input" class="wrapper-form inline">
                                    <input type="text" name="firstName" placeholder="First name">
                                    <div id="error-first-name-message" class="error-message"></div>
                                </div>
                                <div id="last-name-input" class="wrapper-form inline">
                                    <input type="text" name="lastName"  placeholder="Last name">
                                    <div id="error-last-name-message" class="error-message"></div>
                                </div>
                            </div>
                            <div id="email-input" class="wrapper-form div-form">
                                <input type="text" name="email"  placeholder="Email">
                                <div id="error-email-message" class="error-message"></div>
                            </div>
                            <div id="password-input" class="wrapper-form div-form">
                                <input type="password" name="password"  placeholder="Password">
                                <div id="error-password-message" class="error-message"></div>
                            </div>
                            <div id="confirm-password-input" class="wrapper-form div-form">
                                <input type="password" name="confirmPassword"  placeholder="Confirm password">
                                <div id="error-confirm-password-message" class="error-message"></div>
                            </div>
                            <div id="submit-content" class="div-form">
                                <a href="#" id="login-link">Already have an account? Login</a>
                                <input type="submit"  value="Register">
                            </div>
                        </form>
                    </div>
                    </div>
`;

components.resetPage = `
<div id='background'>
            <div id="login-screen">
                <div id="login-form-container">
                    <h2>MindX Chats</h2>
                    <form id="reset-form">
                        <div class="input-text form">
                            <input type="text" name="email" placeholder="Enter email to reset password">
                            <div id="email-error-message" class="error-message"></div>
                        </div>
                        <div id="submit-content" class="form">
                            <input type="submit" name="" value="Reset">
                        </div>
                    </form>
                </div>
            </div>
        </div>
`;

components.homePage = `
<div id="content" class="content">
            <div id="site-bar" class="site-bar">
                <div class="menu" id="menu">
                    <div class="menu-item">
                        <img src="../image/homepage.png" />
                        <div class="menu-name">Trang chủ</div>
                    </div>
                    <div class="menu-item">
                        <img src="../image/folder2.png" />
                        <div class="menu-name">Học phần của bạn </div>
                    </div>
                </div>
            </div>
            <div id="list-folder" class="list-folder">
                <div class="list-folder">
                        <div class="list-folder-item">
                            <div class="list-folder-item-infor">
                                <div class="question-number">
                                    100 thuật ngữ
                                </div>
                                <div class="author">
                                    Duc Le
                                </div>
                            </div>
                            <div class="folder-header">
                                JPD323-Kanji-lesson1
                            </div>
                        </div>

                        <div class="list-folder-item">
                            <div class="list-folder-item-infor">
                                <div class="question-number">
                                    200 thuật ngữ
                                </div>
                                <div class="author">
                                    Duy DN
                                </div>
                            </div>
                            <div class="folder-header">
                                JPD323-Kotoba-lesson1
                            </div>
                        </div>

                        <div class="list-folder-item">
                                <div class="list-folder-item-infor">
                                    <div class="question-number">
                                        20 thuật ngữ
                                    </div>
                                    <div class="author">
                                        DucLv
                                    </div>
                                </div>
                                <div class="folder-header">
                                    JPD323-Kotoba-lesson1
                                </div>
                            </div>
                </div>
            </div>
        </div>
`;

components.welcomePageQuiz = `
<div class="main-content">
            <div class="main-Introduce">
                <h1 class="Introduce-Title">Cách tốt nhất để đạt điểm tuyệt đối bài thi.</h1>
                <p class="Introduce-Content">Hãy bắt đầu tạo các thẻ ghi nhớ dành riêng cho bạn. Biến khoảng cách bạn và thế giới gần nhau hơn</p>
                <button class="btn" id="btn-start">Bắt đầu học</button>
            </div>
            <div></div>
        </div>
`;

components.createFolderPage = `
<div class="create-folder">
            <div class="folder-head">
               <div class="folder-head-heading">
                    <div class="folder-head-heading-text">
                        Tạo học phần mới
                    </div>
                    <div class="folder-head-heading-button">
                        <button class="btn" id='btn-create-folder'>Tạo</button>
                    </div>
               </div>
               <div class="input-folder-name">
                    <input type="text" id="input-folder-name" placeholder="Enter folder name..." />
                    <div id="folder-name-error-message" class="error-message"></div>
               </div>
            </div>
 
            <div class="input-question">

            </div>


        </div>
`;