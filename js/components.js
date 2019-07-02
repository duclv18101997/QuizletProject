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
                    <div class="menu-item" id="home-page">
                        <img src="../image/homepage.png" />
                        <div class="menu-name">Trang chủ</div>
                    </div>
                    <div class="menu-item" id="my-folder">
                        <img src="../image/folder2.png" />
                        <div class="menu-name">Học phần của bạn </div>
                    </div>
                    <div class="menu-item" id="taoThumuc">
                        <img src="../image/create.png" />
                        <div class="menu-name">Tạo thư mục </div>
                    </div>
                </div>
            </div>
            <div id="list-folder" class="list-folder">
            </div>
        </div>
    
`;
components.myFolderPage = `
<div id="content" class="content">
            <div id="site-bar" class="site-bar">
                <div class="menu" id="menu">
                    <div class="menu-item" id="home-page">
                        <img src="../image/homepage.png" />
                        <div class="menu-name">Trang chủ</div>
                    </div>
                    <div class="menu-item" id="my-folder">
                        <img src="../image/folder2.png" />
                        <div class="menu-name">Học phần của bạn </div>
                    </div>
                    <div class="menu-item" id="taoThumuc">
                        <img src="../image/create.png" />
                        <div class="menu-name">Tạo thư mục </div>
                    </div>
                </div>
            </div>
            <div id="list-folder" class="list-folder">
            </div>
        </div>
    
`;

components.welcomePageQuiz = `
<div class="main-content">
            <div class="main-Introduce " data-aos='fade-up' data-aos-anchor-placement="top-center">
                <h1 class="Introduce-Title">Cách tốt nhất để đạt điểm tuyệt đối bài thi.</h1>
                <p class="Introduce-Content">Hãy bắt đầu tạo các thẻ ghi nhớ dành riêng cho bạn. Biến khoảng cách bạn và thế giới gần nhau hơn</p>
                <button class="btn" id="btn-start">Bắt đầu học</button>
            </div>
            <div></div>
        </div>
        <div class="student-teacher">
            <div class="main-content-student">
                <div class="content-introduce">
                    <div class="student-content" data-aos="fade-right">
                        <h3 class="Introduce-Title">Học theo cách thông minh hơn.</h3>
                        <p class="Introduce-Content">Hơn 90% học sinh sử dụng Quiz cho biết họ đã cải thiện được điểm số. Hãy xem các công cụ đơn giản của Quiz có thể giúp bạn học bất cứ nội dung gì, từ đại số nhập môn, lịch sử Việt Nam, cho đến kinh tế lượng cấp đại học — và hơn
                            thế nữa
                        </p>
                    </div>
                </div>
                <div></div>
                <div class="image-student" data-aos="fade-left"><img class="" src="../image/students.jpg"></div>
            </div>
            <div class="main-content-teacher">
                <div class="image-teacher" data-aos="fade-right">
                    <img class="" src="../image/teachers.jpg" />
                </div>
                <div class="teacher-content">
                    <h3 class="Introduce-Title">Chia sẻ kiến thức</h3>
                    <p class="Introduce-Content">Tạo động lực và thu hút học sinh học tập bằng Quiz. Tạo học phần cho lớp học của bạn, hợp tác với giáo viên khác, chơi Quiz và cung cấp tài liệu cho học sinh để các em học theo phương pháp hiệu quả và vui hơn.</p>
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
                        <input type="text" id="input-folder-name" name="folderName"
                            placeholder="Enter folder name..." />
                        <div id="folder-name-error-message" class="error-message"></div>
                    </div>
                </div>
                <div class="create-title">Thêm thuật ngữ và định nghĩa:</div>
                <div class="list-add" id="list-add">
                    <div class="input-folder-infor-item" id="input-folder-infor-item">
                        <div class="input-question input-infor">
                            <input type="text" id="input-folder-question" name="questionName"
                                placeholder="Enter question" />
                            <div id="question-error-message" class="error-message"></div>
                        </div>
                        <div class="input-answer input-infor">
                            <input type="text" id="input-folder-answer" name="answerName" placeholder="Enter answer" />
                            <div id="answer-error-message" class="error-message"></div>
                        </div>
                    </div>


                </div>
            </form>
            <div class="add-more-item">
                <button class="btn" id='btn-add-more-item'>Thêm thuật ngữ</button>
                <button class="btn" id='btn-clear-item'>Xóa thuật ngữ</button>
            </div>
            

        </div>
`;
components.searchScreen = `
<div class="search-main-screen">
<div class="search-screen">
<div class='resultSearch' id='resultSearch'></div>
    <div id="list-folder" class="list-folder">
    </div>
</div>
</div>
`;
components.StudyFlashCard = `
<div class="main-study-screen">
            <div class="flashcard-content" id='flashcard-content'>
                <div id='folder-name'></div>
                <section class="lazy slider" id='slick-lazy'>
                </section>
                <div class="flashcard-next">
                    <img src="../image/left-arrow.png" />
                    <img src="../image/right-arrow.png" />
                </div>
            </div>
            <form id="form-create-folder">
                <div class="create-title">Thuật ngữ trong học phần này:</div>
                <div class="list-add" id='list-add'>

                </div>

            </form>
            <div class="edit-item" id="edit-item">
                <button class="btn center" id='btn-edit-item'>Thêm hoặc chỉnh sửa thuật ngữ</button>
            </div>
        </div>
`;