async function loadVetDashboard() {
    const response = await fetch('/api/vet/dashboard', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    if (response.ok) {
        const habitats = await response.json();
        // Affichez les données du tableau de bord vétérinaire
        console.log(habitats);
    } else {
        alert('Erreur lors du chargement du tableau de bord.');
    }
}

loadVetDashboard();


