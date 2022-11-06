import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCKhrrE5SslcX6NE-j-sbg1FPsgbmkG-Iw",
    authDomain: "uniqlo-ecommerce.firebaseapp.com",
    projectId: "uniqlo-ecommerce",
    storageBucket: "uniqlo-ecommerce.appspot.com",
    messagingSenderId: "692387243101",
    appId: "1:692387243101:web:73d43158718d07386a19b4"
};


const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app
