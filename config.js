import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyACjmC0-vwl8HhPUIeZc2rdh-dmQc68XTQ",
  authDomain: "votacion-6d00d.firebaseapp.com",
  projectId: "votacion-6d00d",
  storageBucket: "votacion-6d00d.appspot.com",
  messagingSenderId: "1034967849705",
  appId: "1:1034967849705:web:51c890c300f0026e7c2e78"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
