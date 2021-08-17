import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdJ1OXKpg5HQFx0xWKZeVYRbL8_OdYEbE",
    authDomain: "alochat-29d76.firebaseapp.com",
    projectId: "alochat-29d76",
    storageBucket: "alochat-29d76.appspot.com",
    messagingSenderId: "210015688610",
    appId: "1:210015688610:web:a0b6bb6a764ff71e5b84fb",
    measurementId: "G-2WPFF7QKZ2"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }