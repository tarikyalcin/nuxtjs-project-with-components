import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCn_QEEjFSf0TZquJUZ23j8sdpz2bXv3aY",
  authDomain: "nuxtjs-project-8e2ac.firebaseapp.com",
  projectId: "nuxtjs-project-8e2ac",
  storageBucket: "nuxtjs-project-8e2ac.firebasestorage.app",
  messagingSenderId: "805325982318",
  appId: "1:805325982318:web:a4727f27b63b7ba249f47f",
  measurementId: "G-8DCY2LV3GN"
};

export default defineNuxtPlugin(() => {
  // Firebase'i başlat
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Gerekirse Nuxt uygulamasına bir şeyler ekle (örneğin, global context'e)
  return {
    provide: {
      firebaseApp: app,
      firebaseAnalytics: analytics,
    },
  };
});


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);