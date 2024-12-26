import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyDioAA6hkkA4RFj8WLYMI5afo4HtNht66M",
  authDomain: "myshop-e398d.firebaseapp.com",
  databaseURL: "https://myshop-e398d-default-rtdb.firebaseio.com",
  projectId: "myshop-e398d",
  storageBucket: "myshop-e398d.firebasestorage.app",
  messagingSenderId: "207223930079",
  appId: "1:207223930079:web:bd5ea19a7a9bb053b93d6a",
  measurementId: "G-BTBR3J5VRS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); 

export default database;
