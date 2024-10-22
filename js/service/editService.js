document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-service-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;

        fetch('http://localhost:8000/api/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.status);
            form.reset();  // reinitialise le formulaire après soumission
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout du service:', error);
        });
    });
});