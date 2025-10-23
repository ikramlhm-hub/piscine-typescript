// Interface Personne
interface Personne {
  nom: string;
  age: number;
}

// Fonction d'affichage
function afficherPersonne(personne: Personne): void {
  console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

// Création d'un objet respectant l'interface
const personne1: Personne = {
  nom: "Alice",
  age: 25,
};

// Appel de la fonction
afficherPersonne(personne1);
