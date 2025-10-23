// Fonction avec narrowing : string ou number
function traiterValeur(valeur: string | number): number {
  if (typeof valeur === "string") {
    return valeur.length; // Longueur de la chaîne
  } else {
    return valeur * 2; // Double du nombre
  }
}

// Tests
console.log("Résultat pour 'Hello' :", traiterValeur("Hello"));
console.log("Résultat pour 5 :", traiterValeur(5));
