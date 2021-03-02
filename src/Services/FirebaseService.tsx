import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFT08slpXE82uoq89xI1lyAUywwt4NQE0",
    authDomain: "expense-tracker-pwa-1f13e.firebaseapp.com",
    projectId: "expense-tracker-pwa-1f13e",
    storageBucket: "expense-tracker-pwa-1f13e.appspot.com",
    messagingSenderId: "173642209547",
    appId: "1:173642209547:web:86847cd5b92d7cc07f6a0e"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()



export const initNotification = ()=> {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          messaging.getToken().then((currentToken) => {
            if (currentToken) {
                
                console.log(currentToken)
          
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
          
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
 
          });

        }

})
}


