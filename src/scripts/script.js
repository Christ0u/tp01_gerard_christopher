// Fonction de validation du formulaire
function FormValidation() {
    var email = $('#email').val();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider un email simple

    if (!regex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false; // Empêche la soumission si l'email est invalide
    } else {
        return true; // Autorise la soumission
    }
}
