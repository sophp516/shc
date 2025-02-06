// Import the necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrPHYfJYynVie_8CPq4JEYpU42zNal4po",
    authDomain: "sair-hate-club.firebaseapp.com",
    projectId: "sair-hate-club",
    storageBucket: "sair-hate-club.firebasestorage.app",
    messagingSenderId: "34472005467",
    appId: "1:34472005467:web:326c75e93083868388547e",
    measurementId: "G-29S1NT8THL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

async function fetchCrimes() {
    const crimesCollection = collection(db, "crimes"); 
    const crimesSnapshot = await getDocs(crimesCollection);
    const crimesList = crimesSnapshot.docs.map(doc => doc.data().name); 
    displayCrimes(crimesList);
}

function displayCrimes(crimesList) {
    const crimesListElement = document.getElementById('crimes-list');
    crimesListElement.innerHTML = ''; // Clear previous list if any

    crimesList.forEach(crime => {
        const listItem = document.createElement('li');
        listItem.textContent = crime;
        crimesListElement.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', fetchCrimes);
