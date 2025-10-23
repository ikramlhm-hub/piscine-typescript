// Fonction générique pour des tableaux (contrainte implicite: length & index)
function premierElement<T>(tableau: T[]): T | undefined {
  if (tableau.length > 0) {
    return tableau[0];
  } else {
    console.log("Erreur : le tableau est vide !");
    return undefined;
  }
}

// Tests

// Tableau non vide
const numeros = [5, 10, 15];
console.log("Premier élément (numéros) :", premierElement(numeros));

// Tableau vide
const vide: any[] = [];
console.log("Premier élément (vide) :", premierElement(vide));

// Chaînes (Array.from transforme une string en tableau de caractères)
console.log("Premier caractère :", premierElement(Array.from("Hello")));
