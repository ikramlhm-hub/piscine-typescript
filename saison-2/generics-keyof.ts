// Fonction générique utilisant keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Interface pour les tests
interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

// Objet conforme à l'interface
const maVoiture: Voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2020,
};

// Tests de la fonction
console.log("Marque :", getProperty(maVoiture, "marque"));
console.log("Année :", getProperty(maVoiture, "annee"));

// Exemple d'erreur volontaire (à commenter)
// console.log(getProperty(maVoiture, "couleur"))       // TypeScript ne compile pas car "couleur" n'existe pas dans Voiture
 