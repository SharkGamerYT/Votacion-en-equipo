import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyACjmC0-vwl8HhPUIeZc2rdh-dmQc68XTQ",
  authDomain: "votacion-6d00d.firebaseapp.com",
  databaseURL: "https://votacion-6d00d-default-rtdb.firebaseio.com",
  projectId: "votacion-6d00d",
  storageBucket: "votacion-6d00d.appspot.com",
  messagingSenderId: "1034967849705",
  appId: "1:1034967849705:web:3f9fb3da6986e0c07c2e78"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
