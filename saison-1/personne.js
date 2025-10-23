// Fonction d'affichage
function afficherPersonne(personne) {
    console.log("Bonjour, je m'appelle ".concat(personne.nom, " et j'ai ").concat(personne.age, " ans."));
}
// Création d'un objet respectant l'interface
var personne1 = {
    nom: "Alice",
    age: 25,
};
// Appel de la fonction
afficherPersonne(personne1);
