// Classe Rectangle
class Rectangle {
  constructor(public largeur: number, public hauteur: number) {}

  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

// Classe Cercle
class Cercle {
  constructor(public rayon: number) {}

  calculerSurface(): number {
    return Math.PI * this.rayon * this.rayon;
  }
}

// Fonction utilisant instanceof pour distinguer la forme
function afficherSurface(forme: Rectangle | Cercle): void {
  if (forme instanceof Rectangle) {
    console.log(
      `Ceci est un rectangle de surface ${forme.calculerSurface().toFixed(2)}.`
    );
  } else if (forme instanceof Cercle) {
    console.log(
      `Ceci est un cercle de surface ${forme.calculerSurface().toFixed(2)}.`
    );
  }
}

// Tests
const rect = new Rectangle(4, 5);
const cercle = new Cercle(3);

afficherSurface(rect);
afficherSurface(cercle);
