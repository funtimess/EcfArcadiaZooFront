document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-service-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;

        try {
            const response = await fetch('http://127.0.0.1:8000/api/services', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description }),
            });
            if (response.ok) {
                alert("Service ajouté avec succès !");
                form.reset();
            } else {
                alert("Erreur lors de l'ajout du service.");
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du service:', error);
        }
    });
});

