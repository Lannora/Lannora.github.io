function changeColor(event) {
  // Obtenir tous les liens de navigation
  const links = document.querySelectorAll(".link-nav");

  // Retirer la modification de couleur de tous les liens
  links.forEach(link => {
    link.style.opacity = "0.5";
    link.style.borderBottom = "2px solid var(--gold4)";
  });

  // Ajouter la modification de couleur uniquement au lien qui a été cliqué
  const clickedLink = event.target;
  clickedLink.style.opacity = "1";
  clickedLink.style.borderBottom = "2px solid var(--gold3)";
}

// Ajouter un écouteur d'événements à chaque lien
const links = document.querySelectorAll(".link-nav");
links.forEach(link => {
  link.addEventListener("click", function(event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Obtenir l'identifiant de la section cible
    const targetId = event.target.hash;

    // Obtenir la section cible
    const targetSection = document.querySelector(targetId);

    // Faire défiler la page jusqu'à la section cible
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Modifier la couleur du lien cliqué
    changeColor(event);
  });
});
