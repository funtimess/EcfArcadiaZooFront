
document.getElementById('signin-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            
            // verifie si l'utilisateur a l'un des rôles autorisés
            const roles = data.roles;
            if (roles.includes('ROLE_ADMIN') || roles.includes('ROLE_EMPLOYEE') || roles.includes('ROLE_VET')) {
                // stocke le token et le rôle de l'utilisateur
                setToken(data.token); // utilise une fonction pour stocker le token dans un cookie
                setCookie('userRole', roles[0], 7); // stock le rôle dans un cookie

                // redirige l'utilisateur en fonction de son rôle
                if (roles.includes('ROLE_ADMIN')) {
                    window.location.href = '/adminDashboard';
                } else if (roles.includes('ROLE_EMPLOYEE')) {
                    window.location.href = '/employeeDashboard';
                } else if (roles.includes('ROLE_VET')) {
                    window.location.href = '/vetDashboard';
                }
            } else {
                alert('Vous n\'avez pas l\'autorisation d\'accéder à cet espace.');
            }
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        alert('Erreur lors de la connexion.');
    }
});

