// Interface Adresse avec deux propriétés obligatoires
interface Adresse {
  rue: string;
  ville: string;
}

// Interface Personne améliorée
interface Personne {
  readonly id: number; // Lecture seule
  nom: string;
  age: number;
  adresse?: Adresse; // Optionnelle
}

// Fonction d'affichage avancée
function afficherPersonneAvancee(personne: Personne): void {
  if (personne.adresse) {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`
    );
  } else {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`
    );
  }
}

// Personne avec adresse
const personne2: Personne = {
  id: 1,
  nom: "Alice",
  age: 25,
  adresse: {
    rue: "Rue des Fleurs",
    ville: "Paris",
  },
};

// Personne sans adresse
const personne3: Personne = {
  id: 2,
  nom: "Bob",
  age: 30,
};

// Tests
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
