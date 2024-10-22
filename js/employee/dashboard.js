// adminDashboard.js
async function loadAdminDashboard() {
    const response = await fetch('http://127.0.0.1:8000/api/employee/dashboard', {
        headers: {
            'Authorization': `Bearer ${getToken()}` // Utilise un token pour sécuriser l'accès
        }
    });

    if (response.ok) {
        const data = await response.json();
        // Affiche les données sur le tableau de bord
        displayAdminDashboardData(data);
    } else {
        alert('Erreur lors du chargement du tableau de bord.');
    }
}

function displayAdminDashboardData(data) {
    // Fonction pour afficher les données dans le tableau de bord Admin
    const dashboardContainer = document.getElementById('employee-dashboard');
    // Affiche les données pertinentes comme les consultations d'animaux populaires, etc.
    dashboardContainer.innerHTML = `Nombre de consultations: ${data.consultations}`;
}

loadAdminDashboard();
