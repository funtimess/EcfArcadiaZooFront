async function loadServices() {
    const response = await fetch('http://127.0.0.1:8000/api/services', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    const services = await response.json();

    const servicesList = document.getElementById("dynamic-service-list");
    servicesList.innerHTML = '';

    services.forEach(service => {
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("service-card", "d-flex", "justify-content-between", "align-items-center", "flex-column", "flex-lg-row", "p-0", "w-100", "my-2", "rounded");

        serviceElement.innerHTML = `
            <img src="path/to/image.jpg" alt="${service.name}" class="col-12 col-lg-3 img-size rounded">
            <div class="d-flex justify-content-center align-items-center flex-column w-100 w-md-75 text-center text-lg-start">
                <h3 class="my-3">${service.name}</h3>
                <p class="p-3 fs-6 m-0">${service.description}</p>
                <div class="mt-2 d-flex justify-content-end">
                    <button class="btn btn-primary show-more-btn me-2" data-id="${service.id}">Voir plus</button>
                </div>
            </div>
        `;

        const userRole = getRole();
        if (userRole === 'ROLE_ADMIN') {
            const adminButtons = document.createElement("div");
            adminButtons.innerHTML = `
                <button class="btn btn-warning edit-service-btn me-2" data-id="${service.id}">Modifier</button>
                <button class="btn btn-danger delete-service-btn" data-id="${service.id}">Supprimer</button>
            `;
            serviceElement.querySelector(".d-flex.justify-content-end").appendChild(adminButtons);
        }

        servicesList.appendChild(serviceElement);
    });
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-service-btn")) {
        const serviceId = e.target.dataset.id;
        if (confirm("Êtes-vous sûr de vouloir supprimer ce service ?")) {
            deleteService(serviceId);
        }
    }
});

async function deleteService(serviceId) {
    const response = await fetch(`http://127.0.0.1:8000/api/services/${serviceId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    if (response.ok) {
        alert("Service supprimé avec succès !");
        loadServices();
    } else {
        alert("Erreur lors de la suppression du service.");
    }
}

loadServices();
