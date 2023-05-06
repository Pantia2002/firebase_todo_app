import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5V4NNXcr000sFx5sIJrp9N3cP-vZQRv4",
  authDomain: "crud-todo-app-62b1c.firebaseapp.com",
  projectId: "crud-todo-app-62b1c",
  storageBucket: "crud-todo-app-62b1c.appspot.com",
  messagingSenderId: "492975659560",
  appId: "1:492975659560:web:d1d4d331d4265d8454b31d",
  measurementId: "G-GLJL4PZRN5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };