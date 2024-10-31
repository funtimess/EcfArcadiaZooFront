async function loadAdminDashboard() {
    const response = await fetch('/api/admin/dashboard', {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
    if (response.ok) {
        const data = await response.json();
        displayAdminData(data);
    } else {
        alert('Erreur lors du chargement du tableau de bord admin');
    }
}

function displayAdminData(data) {
    document.getElementById('admin-stats').innerHTML = `Nombre de consultations: ${data.consultations}`;
}

document.getElementById('employee-register-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    try {
        const response = await fetch('/api/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
            body: JSON.stringify({ username, password, role })
        });
        if (response.ok) {
            alert('Utilisateur créé avec succès');
            document.getElementById('employee-register-form').reset();
        } else {
            alert('Erreur lors de la création de l\'utilisateur');
        }
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
    }
});

loadAdminDashboard();

