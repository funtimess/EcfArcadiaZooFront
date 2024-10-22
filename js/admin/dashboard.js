// adminDashboard.js
async function loadAdminDashboard() {
    const response = await fetch('/api/admin/dashboard', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        displayAdminData(data);
    } else {
        alert('Erreur lors du chargement du tableau de bord admin');
    }
}

function displayAdminData(data) {
    // Affiche les données spécifiques à l'admin dans le tableau de bord
    document.getElementById('admin-stats').innerHTML = `Nombre de consultations: ${data.consultations}`;
}

loadAdminDashboard();

