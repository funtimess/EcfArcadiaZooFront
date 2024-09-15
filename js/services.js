const formInscription = document.getElementById("add-service-form");



// Charger les services depuis l'API
async function loadServices() {
    const response = await fetch('http://127.0.0.1:8000/api/services');
    const services = await response.json();

    const servicesList = document.getElementById("dynamic-service-list");
    servicesList.innerHTML = '';  // Nettoyer la liste avant d'insérer les éléments

    services.forEach(service => {
        // Créer l'élément service
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("secondary-cust", "d-flex", "justify-content-between", "align-items-center", "flex-column", "flex-lg-row", "p-0", "w-100", "my-2", "rounded");

        // Structure HTML du service
        serviceElement.innerHTML = `
            <img src="path/to/image.jpg" alt="${service.nom}" class="col-12 col-lg-3 img-size rounded">
            <div class="d-flex justify-content-center align-items-center flex-column w-100 w-md-75 text-center text-lg-start">
                <h3 class="my-3">${service.nom}</h3>
                <p class="p-3 fs-6 m-0">${service.description}</p>
                <div class="mt-2 d-flex justify-content-end">
                    <button class="btn btn-primary show-more-btn me-2" data-id="${service.id}">Voir plus</button>
                </div>
            </div>
        `;

        // Si l'utilisateur est admin, ajouter les boutons Modifier et Supprimer
        const userRole = getRole();
        if (userRole === 'admin') {
            const adminButtons = document.createElement("div");
            adminButtons.innerHTML = `
                <button class="btn btn-warning edit-service-btn me-2" data-id="${service.id}">Modifier</button>
                <button class="btn btn-danger delete-service-btn" data-id="${service.id}">Supprimer</button>
            `;
            serviceElement.querySelector(".d-flex.justify-content-end").appendChild(adminButtons);
        }

        // Ajouter le service à la liste
        servicesList.appendChild(serviceElement);
    });
}

// Gérer la suppression d'un service
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-service-btn")) {
        const serviceId = e.target.dataset.id;
        if (confirm("Êtes-vous sûr de vouloir supprimer ce service ?")) {
            deleteService(serviceId);
        }
    }
});

// Fonction pour supprimer un service
async function deleteService(serviceId) {
    const response = await fetch(`http://127.0.0.1:8000/api/services/${serviceId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    if (response.ok) {
        alert("Service supprimé avec succès !");
        loadServices(); // Recharger la liste après suppression
    } else {
        alert("Erreur lors de la suppression du service.");
    }
}

// Charger les services au démarrage
loadServices();


// Afficher les détails du service
function showServiceDetails(serviceId) {
    const detailsContainer = document.getElementById("service-details");
    const detailsText = document.getElementById("details-text");

    // Les détails pour chaque service
    const details = {
        resto: "Découvrez une expérience culinaire unique au cœur de la nature! Notre service de restauration au zoo offre des mets délicieux pour combler toutes les envies.",
        guide: "Explorez les secrets de la faune avec nos visites guidées gratuites! Découvrez les habitats des animaux sous un nouvel angle et plongez dans leur monde fascinant.",
        train: "Embarquez pour une balade pittoresque à travers notre parc en petit train! Laissez-vous transporter à travers les merveilles de la nature tout en vous relaxant confortablement."
    };

    detailsText.textContent = details[serviceId];
    detailsContainer.classList.remove("d-none");
    document.getElementById("service-list").classList.add("d-none");
}

// Cacher les détails du service
function hideServiceDetails() {
    document.getElementById("service-details").classList.add("d-none");
    document.getElementById("service-list").classList.remove("d-none");
}

// Gestion des clics sur les services
document.addEventListener("click", function(e) {
    const target = e.target.closest(".secondary-cust");
    if (target) {
        const serviceId = target.dataset.id;
        showServiceDetails(serviceId);
    }
});

