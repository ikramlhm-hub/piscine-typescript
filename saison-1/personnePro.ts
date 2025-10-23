// Interface Employe
interface Employe {
  nom: string;
  poste: string;
}

// Interface Client
interface Client {
  nom: string;
  entreprise: string;
}

// Type union regroupant Employe et Client
type PersonnePro = Employe | Client;

// Fonction avec Narrowing pour distinguer les types
function afficherInfoProfessionnelle(personne: PersonnePro): void {
  if ("poste" in personne) {
    console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
  } else if ("entreprise" in personne) {
    console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
  }
}

// Test avec un Employe
const employe1: Employe = {
  nom: "Sarah",
  poste: "Développeuse"
};

// Test avec un Client
const client1: Client = {
  nom: "Karim",
  entreprise: "TechCorp"
};

// Appel de la fonction pour les deux objets
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
