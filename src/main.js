import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { initializeApp } from "firebase/app"


initializeApp({
    apiKey: "AIzaSyBIyj5OgYB-F6EpqZuLv72BFT5CgY0P5jM",
    authDomain: "backend-analisador-lexico.firebaseapp.com",
    projectId: "backend-analisador-lexico",
    storageBucket: "backend-analisador-lexico.appspot.com",
    messagingSenderId: "386845818503",
    appId: "1:386845818503:web:ca4595106fa3688fbf8222",
    measurementId: "G-MB0XGCMZ3L"
  });


createApp(App).use(router).mount('#app')


