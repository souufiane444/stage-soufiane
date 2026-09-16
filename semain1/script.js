
const API = "https://appdev.eatandcollect.fr/api/v3";
const DOMAINE = "dev.eatandcollect.fr";

let tousLesFamilles = [];

function formaterPrix(prix) {
  if (prix === null || prix === undefined) return "";
  return Number(prix).toFixed(2).replace(".", ",") + " €";
}
async function chargerRestaurant() {
  const reponse = await fetch(API + "/restaurant/" + DOMAINE);
  const restaurant = await reponse.json();

  document.getElementById("nom").textContent = restaurant.name;
  document.getElementById("adresse").textContent =
    restaurant.address + ", " + restaurant.pincode + " " + restaurant.city;
  document.getElementById("telephone").textContent = restaurant.phone;

  const statut = document.getElementById("statut");
  if (restaurant.is_open) {
    statut.textContent = "Ouvert";
  } else {
    statut.textContent = "Fermé";
    statut.classList.add("ferme");
  }
}

async function chargerMenu() {
  const reponse = await fetch(API + "/products/" + DOMAINE);
  tousLesFamilles = await reponse.json();


  afficherMenu(tousLesFamilles);


  const inputRecherche = document.getElementById("recherche");
  if (inputRecherche) {
    inputRecherche.addEventListener("input", function (e) {
      filtrerEtAfficher(e.target.value.toLowerCase());
    });
  }
}
function afficherMenu(familles) {
  let html = "";
  let nombreTotal = 0;

  for (const famille of familles) {
    const produits = famille.menu_list || [];
    if (produits.length === 0) continue;

    nombreTotal += produits.length;
    html += `<h2 class="titre-famille">${famille.name}</h2><div class="grille">`;

    for (const produit of produits) {
      let image = produit.image ? `<img src="${produit.image}" alt="${produit.name}">` : "";
      html += `
        <div class="carte">
          ${image}
          <h3>${produit.name}</h3>
          <p>${produit.description || ""}</p>
          <strong class="prix">${formaterPrix(produit.price)}</strong>
        </div>`;
    }
    html += `</div>`;
  }

  const elTotal = document.getElementById("total-produits");
  if (elTotal) {
    elTotal.textContent = "Nombre de produits : " + nombreTotal;
  }

  document.getElementById("menu").innerHTML = html || "<p>Aucun produit trouvé.</p>";
}

function filtrerEtAfficher(texte) {
  if (!texte.trim()) {
    afficherMenu(tousLesFamilles);
    return;
  }

  const famillesFiltrees = tousLesFamilles.map((famille) => ({
    ...famille,
    menu_list: (famille.menu_list || []).filter((produit) =>
      produit.name.toLowerCase().includes(texte) ||
      (produit.description || "").toLowerCase().includes(texte)
    )
  }));

  afficherMenu(famillesFiltrees);
}

async function demarrer() {
  try {
    await chargerRestaurant();
    await chargerMenu();
  } catch (erreur) {
    console.error("Problème :", erreur);
    document.getElementById("menu").textContent =
      "Oups, impossible de charger les données. Regarde la console (F12).";
  }
}

demarrer();
