import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkzpvfC-cul63p-xzPEIHibdO307KZMlI",
  authDomain: "blog-3319d.firebaseapp.com",
  projectId: "blog-3319d",
  storageBucket: "blog-3319d.firebasestorage.app",
  messagingSenderId: "157510607230",
  appId: "1:157510607230:web:a6ac89c2c1063f3397132f",
  measurementId: "G-TQH7ERY6H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Create a test admin user if it doesn't exist
createUserWithEmailAndPassword(auth, "admin@example.com", "admin123")
  .then((userCredential) => {
    console.log("Test admin user created:", userCredential.user);
  })
  .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      console.log("Test admin user already exists");
    } else {
      console.error("Error creating test user:", error);
    }
  });