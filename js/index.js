window.onload = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBiLL36oqX0BsUij1CbuW-8OZVBBODH5Fo",
        authDomain: "quizletproject-9aba3.firebaseapp.com",
        databaseURL: "https://quizletproject-9aba3.firebaseio.com",
        projectId: "quizletproject-9aba3",
        storageBucket: "quizletproject-9aba3.appspot.com",
        messagingSenderId: "26872049070",
        appId: "1:26872049070:web:5b93774e6e0f871f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      //set welcome page
    view.setActiveScreen('welcomePageQuiz');  
};