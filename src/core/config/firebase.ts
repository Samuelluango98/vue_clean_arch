// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCurgEMzzgIygsiAv-0130jQBUCbL4b6ls',
  authDomain: 'vue-clean-arch.firebaseapp.com',
  projectId: 'vue-clean-arch',
  storageBucket: 'vue-clean-arch.firebasestorage.app',
  messagingSenderId: '771251072488',
  appId: '1:771251072488:web:48d30a772b8673e2a8485d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {});

export default db;
