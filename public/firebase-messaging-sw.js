importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyDFT08slpXE82uoq89xI1lyAUywwt4NQE0",
    authDomain: "expense-tracker-pwa-1f13e.firebaseapp.com",
    projectId: "expense-tracker-pwa-1f13e",
    storageBucket: "expense-tracker-pwa-1f13e.appspot.com",
    messagingSenderId: "173642209547",
    appId: "1:173642209547:web:86847cd5b92d7cc07f6a0e"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();