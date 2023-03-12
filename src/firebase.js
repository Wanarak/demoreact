import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-gTeu60xzUH_ln0TQV4usf9FMyDE6zDY",
  authDomain: "fir-01-f3179.firebaseapp.com",
  projectId: "fir-01-f3179",
  storageBucket: "fir-01-f3179.appspot.com",
  messagingSenderId: "542113278013",
  appId: "1:542113278013:web:a51d98c0bef89ba07b6254"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);