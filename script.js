// Menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Panier
let panier = [];
const panierDiv = document.getElementById("panier");

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  panierDiv.innerHTML = "<h2>Panier</h2>";
  let total = 0;

  panier.forEach(item => {
    panierDiv.innerHTML += `<p>${item.nom} - ${item.prix}€</p>`;
    total += item.prix;
  });

  panierDiv.innerHTML += `<strong>Total : ${total}€</strong>`;
}
