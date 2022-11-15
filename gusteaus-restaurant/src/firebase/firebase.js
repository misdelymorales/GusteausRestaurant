// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFireStore, collection, query, where, getDocs } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB82cQFvjqkTygYbW4nEDNdPiObjP1neyg",
  authDomain: "gusteausrestaurant-ce6b0.firebaseapp.com",
  projectId: "gusteausrestaurant-ce6b0",
  storageBucket: "gusteausrestaurant-ce6b0.appspot.com",
  messagingSenderId: "229892520596",
  appId: "1:229892520596:web:2577d5f0cd01216329d281",
  measurementId: "G-2FBWFB63T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
const analytics = getAnalytics(app);

//función para traer desayunos
export const desayunos = query(collection(db, "menuItems"), where("categoria", "==", "desayunos"));

const coleccionDesayunos = await getDocs(desayunos);
coleccionDesayunos.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});