// Liste des habitats avec les informations et les animaux
const habitats = {
    savane: {
      nom: "Savane",
      description: "Plongez au cœur de notre espace savane où lions, girafes et éléphants vivent ensemble.",
      image: "images/savane.jpg",
      animaux: [
        {
          nom: "Tigre",
          image: "images/tigre.jpg",
          race: "Panthera leo",
          rapports: [
            {
              date: "15 Septembre 2024",
              etat: "En bonne santé",
              nourriture: "Viande crue",
              grammage: "7 kg",
              details: "Léger boitement à la patte avant gauche."
            }
          ]
        },
        {
          nom: "Girafe",
          image: "images/girafe.jpg",
          race: "Giraffa camelopardalis",
          rapports: [{
            date: "18 Septembre 2024",
            etat: "En bonne santé",
            nourriture: "Feuilles d'acacia",
            grammage: "15 kg",
            details: "Aucune anomalie, mouvements fluides."
          }]
        },
        {
          nom: "Éléphant",
          image: "images/elephant.jpg",
          race: "Loxodonta africana",
          rapports: [{
            date: "13 Septembre 2024",
            etat: "En bonne santé",
            nourriture: "Herbe et fruits",
            grammage: "100 kg",
            details: "Très énergique, rien à signaler."
          }]
        }
      ]
    },
    marais: {
      nom: "Le Marais",
      description: "Un écosystème mystérieux avec des oiseaux rares et des reptiles intrigants.",
      image: "images/marais.jpg",
      animaux: [
        {
          nom: "Alligator",
          image: "images/alligator.jpg",
          race: "Alligator mississippiensis",
          rapports: [{
            date: "20 Septembre 2024",
            etat: "En bonne santé",
            nourriture: "Viande crue",
            grammage: "4 kg",
            details: "Peau en bon état, mouvement fluide dans l'eau."
          }]
        },
        {
          nom: "Cigogne",
          image: "images/cigogne.jpg",
          race: "Ciconia ciconia",
          rapports: [{
            date: "19 Septembre 2024",
            etat: "En bonne santé",
            nourriture: "Poissons et petits invertébrés",
            grammage: "1.2 kg",
            details: "Ailes et plumage en bon état, aucun signe de blessure."
          }]
        }
      ]
    },
    jungle: {
      nom: "Jungle",
      description: "Une canopée verdoyante abritant une variété incroyable de singes et d'oiseaux exotiques.",
      image: "images/jungle.jpg",
      animaux: [
        {
          nom: "Singe",
          image: "images/singe.jpg",
          race: "Cercopithecidae",
          rapports: [{
            date: "16 Septembre 2024",
            etat: "En bonne santé",
            nourriture: "Fruits et insectes",
            grammage: "0.8 kg",
            details: "Actif et joueur, rien à signaler."
          }
          ]
        },
        {
          nom: "Serpent",
          image: "images/serpent.jpg",
          race: "Pythonidae",
          rapports: [{
            date: "11 Septembre 2024",
            etat: "En bonne santé",
            nourriture: "Rongeurs",
            grammage: "1 kg",
            details: "Aucune anomalie, mue récente observée."
          }
          ]
        }
      ]
    }
  };
  

  // Fonction pour afficher les détails d'un habitat
function showHabitatDetails(habitatKey) {
    const habitat = habitats[habitatKey];
  
    // Remplir les informations de l'habitat
    document.getElementById('habitat-info').innerHTML = `
      <h2>${habitat.nom}</h2>
      <img src="${habitat.image}" alt="${habitat.nom}" class="img-fluid habitat-image">
      <p>${habitat.description}</p>
    `;
  
    // Afficher la liste des animaux
    const animalList = document.getElementById('animal-list');
    animalList.innerHTML = '';
    habitat.animaux.forEach(animal => {
      const animalCard = `
        <div class="col-md-4 animal">
          <div class="card text-center" onclick="showAnimalDetails('${habitatKey}', '${animal.nom}')">
            <img src="${animal.image}" alt="${animal.nom}" class="card-img-top img-fluid animal-image">
            <div class="card-body">
              <h3 class="card-title">${animal.nom}</h3>
            </div>
          </div>
        </div>
      `;
      animalList.innerHTML += animalCard;
    });
  
    // Afficher la section des détails de l'habitat
    document.getElementById('habitat-details').style.display = 'block';
    document.getElementById('animal-details').style.display = 'none'; // Masquer les détails des animaux
  
    // Scroller vers le milieu de la section "habitat-details"
    document.getElementById('habitat-details').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  // Fonction pour afficher les détails d'un animal
  function showAnimalDetails(habitatKey, animalName) {
    const animal = habitats[habitatKey].animaux.find(a => a.nom === animalName);
  
    // Remplir les informations de l'animal
    document.getElementById('animal-info').innerHTML = `
      <h2>${animal.nom}</h2>
      <img src="${animal.image}" alt="${animal.nom}" class="img-fluid animal-image">
      <p><strong>Race :</strong> ${animal.race}</p>
    `;
  
    // Afficher les rapports vétérinaires
    const vetReports = document.getElementById('veterinary-reports');
    vetReports.innerHTML = '';
    if (animal.rapports.length > 0) {
      animal.rapports.forEach(rapport => {
        const report = `
          <div class="rapport">
            <h4>Rapport du ${rapport.date}</h4>
            <ul>
              <li><strong>État de l'animal :</strong> ${rapport.etat}</li>
              <li><strong>Nourriture :</strong> ${rapport.nourriture}</li>
              <li><strong>Grammage :</strong> ${rapport.grammage}</li>
              <li><strong>Détails :</strong> ${rapport.details || 'N/A'}</li>
            </ul>
          </div>
        `;
        vetReports.innerHTML += report;
      });
    } else {
      vetReports.innerHTML = '<p>Aucun rapport vétérinaire disponible pour cet animal.</p>';
    }
  
    // Afficher la section des détails de l'animal
    document.getElementById('animal-details').style.display = 'block';
  
    // Scroller vers le milieu de la section "animal-details"
    document.getElementById('animal-details').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  