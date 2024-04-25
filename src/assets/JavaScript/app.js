function displayErrorMessage() {

    // Récupération des éléments du formulaire
    let contact = document.getElementById("myForm")
    let inputFirstName = document.getElementById("first-name");
    let inputLastName = document.getElementById("last-name");
    let inputEmail = document.getElementById("email");
    let inputObject = document.getElementById("object");
    let inputMessage = document.getElementById("message");

    // Vérification que tous les champs sont remplis
    if (inputFirstName.value === "" || inputLastName.value === "" || inputEmail.value === "" || inputObject.value === "" || inputMessage.value === "") {
        // Affichage du message d'erreur
        document.getElementById("error-message").style.display = "block";
        return; // Arrête l'exécution de la fonction si un champ est vide
    }

    // Réinitialisation du message d'erreur s'il était affiché précédemment
    document.getElementById("error-message").style.display = "none";

    // Réinitialisation des champs du formulaire
    contact.reset();

}


