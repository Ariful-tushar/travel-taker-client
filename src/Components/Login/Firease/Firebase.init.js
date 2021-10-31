import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentiaction = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentiaction;
