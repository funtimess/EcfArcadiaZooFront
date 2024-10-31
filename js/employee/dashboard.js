// Chargement des avis en attente de validation
async function loadPendingAvis() {
    const response = await fetch('http://127.0.0.1:8000/api/employee/avis/pending', {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });

    const avisList = await response.json();
    const avisContainer = document.getElementById('pending-avis-list');
    avisContainer.innerHTML = '';

    avisList.forEach(avis => {
        const avisItem = document.createElement('div');
        avisItem.classList.add('avis-item');
        avisItem.innerHTML = `
            <p><strong>${avis.pseudo}</strong>: ${avis.commentaire}</p>
            <button onclick="validateAvis(${avis.id})">Valider</button>
            <button onclick="invalidateAvis(${avis.id})">Invalider</button>
        `;
        avisContainer.appendChild(avisItem);
    });
}

// Validation d’un avis
async function validateAvis(avisId) {
    const response = await fetch(`http://127.0.0.1:8000/api/employee/avis/${avisId}/validate`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });

    if (response.ok) {
        alert('Avis validé');
        loadPendingAvis();
    } else {
        alert('Erreur lors de la validation de l\'avis');
    }
}

// Invalidation d’un avis
async function invalidateAvis(avisId) {
    const response = await fetch(`http://127.0.0.1:8000/api/employee/avis/${avisId}/invalidate`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        }
    });

    if (response.ok) {
        alert('Avis invalidé');
        loadPendingAvis();
    } else {
        alert('Erreur lors de l\'invalidation de l\'avis');
    }
}

document.addEventListener('DOMContentLoaded', loadPendingAvis);





