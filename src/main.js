import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Récupération des éléments du formulaire
let contact = document.getElementById("Form")
let inputFirstName = document.getElementById("first-name");
let inputLastName = document.getElementById("last-name");
let inputEmail = document.getElementById("email");
let inputObject = document.getElementById("object");
let inputMessage = document.getElementById("message");

//fonction pour faire apparaitre le message d'erreur ou le message d'information
function displayMessages() {
    // Vérification que tous les champs sont remplis
    if (inputFirstName.value === "" || inputLastName.value === "" || inputEmail.value === "" || inputObject.value === "" || inputMessage.value === "") {
        // Affichage du message d'erreur
        document.getElementById("error-message").style.display = "block";
        //Réinitialisation du message d'information s'il était affiché précédemment
        document.getElementById("information-message").style.display = "none";
        return; // Arrête l'exécution de la fonction si un champ est vide
    }else{
        document.getElementById("information-message").style.display = "block";
        //Affichage du message d'information
    }

    // Réinitialisation du message d'erreur s'il était affiché précédemment
    document.getElementById("error-message").style.display = "none";

    // Réinitialisation des champs du formulaire
    contact.reset();

}

//Empèche le formulaire d'actualiser la page
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
});