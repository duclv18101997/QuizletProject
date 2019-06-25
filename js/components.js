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
                    <div class="menu-item" id="menu-item">
                        <img src="../image/homepage.png" />
                        <div class="menu-name">Trang chủ</div>
                    </div>
                    <div class="menu-item" id="menu-item">
                        <img src="../image/folder2.png" />
                        <div class="menu-name">Học phần của bạn </div>
                    </div>
                    <div class="menu-item" id="taoThumuc">
                            <img src="../image/create.png" />
                            <div class="menu-name" >Tạo thư mục </div>
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
    </div>
    
`;

components.welcomePageQuiz = `
<div class="main-content">
            <div class="main-Introduce " data-aos='fade-up' data-aos-anchor-placement="top-center">
                <h1 class="Introduce-Title">Cách tốt nhất để đạt điểm tuyệt đối bài thi.</h1>
                <p class="Introduce-Content">Hãy bắt đầu tạo các thẻ ghi nhớ dành riêng cho bạn. Biến khoảng cách bạn và thế giới gần nhau hơn</p>
                <button class="btn" id="btn-start">Bắt đàu học</button>
            </div>
            <div></div>
        </div>
        <div class="student-teacher">
            <div class="main-content-student">
                <div class="content-introduce">
                    <div class="main-Introduce" data-aos="fade-right">
                        <h3 class="Introduce-Title">Học theo cách thông minh hơn.</h3>
                        <p class="Introduce-Content">Hơn 90% học sinh sử dụng Quiz cho biết họ đã cải thiện được điểm số. Hãy xem các công cụ đơn giản của Quiz có thể giúp bạn học bất cứ nội dung gì, từ đại số nhập môn, lịch sử Việt Nam, cho đến kinh tế lượng cấp đại học — và hơn
                            thế nữa
                        </p>
                    </div>
                </div>
                <div class="image-student" data-aos="fade-left"><img class="" src="../image/students.jpg"></div>
            </div>
            <div class="main-content-student-right">
                <div class="image-student-left" data-aos="fade-right"><img class="" src="../image/teachers.jpg"></div>
                <div class="content-introduce-right">
                    <div class="main-Introduce-right" data-aos="fade-left">
                        <h3 class="Introduce-Title">Chia sẻ kiến thức .</h3>
                        <p class="Introduce-Content">Tạo động lực và thu hút học sinh học tập bằng Quiz. Tạo học phần cho lớp học của bạn, hợp tác với giáo viên khác, chơi Quiz và cung cấp tài liệu cho học sinh để các em học theo phương pháp hiệu quả và vui hơn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
`;

components.createFolderPage = `
<div class="create-folder">
            <form id="form-create-folder">
            <div class="folder-head">
                <div class="folder-head-heading">
                    <div class="folder-head-heading-text">
                        Tạo học phần mới
                    </div>
                    <div class="folder-head-heading-button">
                        <button class="btn" id='btn-create-folder'>Tạo</button>
                    </div>
                </div>
                <div class="input-folder-name input-infor">
                    <input type="text" id="input-folder-name" name="folderName" placeholder="Enter folder name..." />
                    <div id="folder-name-error-message" class="error-message"></div>
                </div>
            </div>
            <div class="create-title">Thêm thuật ngữ và định nghĩa:</div>
            <div class="list-add">
            <div class="input-folder-infor-item">
                <div class="input-question input-infor">
<<<<<<< HEAD
                    <input type="text" id="input-folder-question" placeholder="Enter question" />
                    <div id="question-error-message" class="error-message"></div>
                </div>
                <div class="input-answer input-infor">
                    <input type="text" id="input-folder-answer" placeholder="Enter answer" />
=======
                    <input type="text" id="input-folder-question" name ="questionName" placeholder="Enter question" />
                    <div id="question-error-message" class="error-message"></div>
                </div>
                <div class="input-answer input-infor">
                    <input type="text" id="input-folder-answer" name = "answerName" placeholder="Enter answer" />
>>>>>>> 0a39913b4093cdffb2b32dfbbe5de56f5d67a06a
                    <div id="answer-error-message" class="error-message"></div>
                </div>
            </div>

            <div class="input-folder-infor-item">
                <div class="input-question input-infor">
<<<<<<< HEAD
                    <input type="text" id="input-folder-question" placeholder="Enter question" />
                    <div id="question-error-message" class="error-message"></div>
                </div>
                <div class="input-answer input-infor">
                    <input type="text" id="input-folder-answer" placeholder="Enter answer" />
                    <div id="answer-error-message" class="error-message"></div>
                </div>
            </div>
            <div class="input-folder-infor-item">
                <div class="input-question input-infor">
                    <input type="text" id="input-folder-question" placeholder="Enter question" />
                    <div id="question-error-message" class="error-message"></div>
                </div>
                <div class="input-answer input-infor">
                    <input type="text" id="input-folder-answer" placeholder="Enter answer" />
                    <div id="answer-error-message" class="error-message"></div>
                </div>
            </div>
        </div>
        <div class="add-more-item">
            <button class="btn" id='btn-add-more-item'>Thêm thuật ngữ</button>
        </div>
    </form>
        </div>
`;
components.searchScreen = `
<div class="search-main-screen">
<div class="search-screen">
    <div id="list-folder" class="list-folder">
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
    </div>
</div>
</div>
`;
components.StudyFlashCard = `
<div class="main-study-screen">
            <div class="flashcard-content">
                <h3 class="flashcard-title">JPD322_Kanji Lession 1</h3>
                <input class="main-flashcard" type="text" readonly='' value="abc">
                <div class="flashcard-next">
                    <img src="../image/left-arrow.png" />
                    <img src="../image/right-arrow.png" />
                </div>
            </div>
            <div class="author-content">
                <img class="avatar-author" src="" />
                <p class="name-author">DuyDNSE04661</p>
            </div>
            <form id="form-create-folder">
                <div class="create-title">Thuật ngữ trong học phần này:</div>
                <div class="list-add">
                    <div class="input-folder-infor-item">
                        <div class="input-question input-infor">
                            <input type="text" id="render-folder-question" value="きょか" readonly='' />
                            <div id="question-error-message" class="error-message"></div>
                        </div>
                        <div class="input-answer input-infor">
                            <input type="text" id="render-folder-answer" value="許可 [HỨA KHẢ]" readonly='' />
                            <div id="answer-error-message" class="error-message"></div>
                        </div>
                    </div>

                    <div class="input-folder-infor-item">
                        <div class="input-question input-infor">
                            <input type="text" id="render-folder-question" value="ゆるす" readonly='' />
                            <div id="question-error-message" class="error-message"></div>
                        </div>
                        <div class="input-answer input-infor">
                            <input type="text" id="render-folder-answer" value="許す [HỨA]" readonly='' />
                            <div id="answer-error-message" class="error-message"></div>
                        </div>
                    </div>
                    <div class="input-folder-infor-item">
                        <div class="input-question input-infor">
                            <input type="text" id="render-folder-question" value="とっきょ" readonly='' />
                            <div id="question-error-message" class="error-message"></div>
                        </div>
                        <div class="input-answer input-infor">
                            <input type="text" id="render-folder-answer" value="特許 [ĐẶC HỨA]" readonly='' />
                            <div id="answer-error-message" class="error-message"></div>
                        </div>
                    </div>
                </div>
                <div class="add-more-item">
                    <button class="btn" id=' btn-add-more-item '>Thêm hoặc chỉnh sửa thuật ngữ</button>
                </div>
            </form>
=======
                    <input type="text" id="input-folder-question" name ="questionName" placeholder="Enter question" />
                    <div id="question-error-message" class="error-message"></div>
                </div>
                <div class="input-answer input-infor">
                    <input type="text" id="input-folder-answer" name = "answerName" placeholder="Enter answer" />
                    <div id="answer-error-message" class="error-message"></div>
                </div>
            </div>

            
        </div>
        <div class="add-more-item">
            <button class="btn" id='btn-add-more-item'>Thêm thuật ngữ</button>
        </div>
    </form>
>>>>>>> 0a39913b4093cdffb2b32dfbbe5de56f5d67a06a
        </div>

`;