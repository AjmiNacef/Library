// ===============================
// ANNEE AUTOMATIQUE
// ===============================

let currentYear = new Date().getFullYear();

let yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = currentYear;
}


// ===============================
// FORMULAIRE
// ===============================

let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        // Empêcher le rechargement de la page
        event.preventDefault();


        // Récupérer les valeurs
        let nom = document.getElementById("nom").value.trim();

        let prenom = document.getElementById("prenom").value.trim();

        let email = document.getElementById("email").value.trim();

        let message = document.getElementById("message").value.trim();

        let result = document.getElementById("result");


        // Vérification
        if (
            nom === "" ||
            prenom === "" ||
            email === "" ||
            message === ""
        ) {

            result.textContent =
                "Veuillez remplir tous les champs obligatoires.";

            result.style.color = "red";

        } else {

            result.textContent =
                "Votre message a été envoyé avec succès !";

            result.style.color = "green";

        }

    });


    // ===============================
    // COMPTEUR DE CARACTERES
    // ===============================

    let messageInput =
        document.getElementById("message");

    let counter =
        document.getElementById("counter");


    messageInput.addEventListener("input", function() {

        let numberOfCharacters =
            messageInput.value.length;

        counter.textContent =
            "Nombre de caractères : "
            + numberOfCharacters;

    });

}