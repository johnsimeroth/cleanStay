import { initializeApp } from "firebase/app";
import { initializeAuth, reactNativeLocalPersistence, connectAuthEmulator } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCUPj2WhmZtfwgFaAfMee6aM_P9yzrffQ8",
  authDomain: "cleanstay.firebaseapp.com",
  projectId: "cleanstay",
  storageBucket: "cleanstay.appspot.com",
  messagingSenderId: "654611793707",
  appId: "1:654611793707:web:a6d1076ae94913c668e76e",
  measurementId: "G-ZQPCH6V36W"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: reactNativeLocalPersistence
});

connectAuthEmulator(auth, 'http://127.0.0.1:9099');