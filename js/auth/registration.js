
document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const role = document.getElementById('role').value;

    try {
        const response = await fetch('/api/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, nom, prenom, role })
        });

        if (response.ok) {
            const data = await response.json();
            alert('Inscription réussie');
            window.location.href = '/signin';
        } else {
            alert('Erreur lors de l\'inscription');
        }
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        alert('Erreur lors de l\'inscription.');
    }
});
