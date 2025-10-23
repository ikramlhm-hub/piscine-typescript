// Interface Vehicule
interface Vehicule {
  marque: string;
  annee: number;
}

// Type guard personnalisé
function isVehicule(obj: any): obj is Vehicule {
  return (
    obj &&
    typeof obj.marque === "string" &&
    typeof obj.annee === "number"
  );
}

// Fonction utilisant le type guard
function afficherVehicule(obj: any): void {
  if (isVehicule(obj)) {
    console.log(
      `Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`
    );
  } else {
    console.log("Objet invalide pour un véhicule.");
  }
}

// Test

const vehiculeValide = {
  marque: "Peugeot",
  annee: 2018,
};

const vehiculeInvalide = {
  marque: "Tesla", // manque année → invalide
};

afficherVehicule(vehiculeValide);
afficherVehicule(vehiculeInvalide);
