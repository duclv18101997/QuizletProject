const view = {};

view.setActiveScreen = (ScreenName) => {
    const app = document.getElementById('quiz-app');
    switch (ScreenName) {
        case 'welcomePage':
            if (app) {
                app.innerHTML = components.welcomePageQuiz;
            }
            break;
    }
};