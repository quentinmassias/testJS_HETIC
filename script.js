function validateForm() {
    var val_nom = document.forms["myForm"]["nom"].value;
    var val_prenom = document.forms["myForm"]["prenom"].value;
    if(val_nom == null || val_nom == "" || val_prenom == null || val_prenom == "")
    {
        alert("Formulaire incomplet.");
        return false;
    } else
    {
        alert("Formulaire valide.");
        return true;
    }
}
