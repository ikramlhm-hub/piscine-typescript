// Fonction générique avec sécurité
function premierElement<T>(tableau: T[]): T | undefined {
  if (tableau.length > 0) {
    return tableau[0];
  }
  return undefined;
}

// Tests avec différents types

// Tableau de nombres
const tabNombres = [10, 20, 30];
console.log("Premier nombre :", premierElement(tabNombres));

// Tableau de chaînes
const tabChaines = ["Alice", "Bob", "Charlie"];
console.log("Premier nom :", premierElement(tabChaines));

// Tableau d’objets
const tabObjets = [{ id: 1, nom: "Produit A" }, { id: 2, nom: "Produit B" }];
console.log("Premier objet :", premierElement(tabObjets));
