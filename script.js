// Dark Mode Toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Form submission validation and success/failure message
const form = document.getElementById('incidentForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting for validation

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const incidentType = document.getElementById('incident_type').value;
    const description = document.getElementById('incident_description').value;
    const location = document.getElementById('location').value;
    const incidentDate = document.getElementById('incident_date').value;
    const evidence = document.getElementById('evidence').files.length;

    // Check if required fields are filled
    if (incidentType && description && incidentDate && evidence > 0) {
        formMessage.innerHTML = '<p style="color: green;">Thank you! Your report has been submitted.</p>';
        form.reset();
    } else {
        formMessage.innerHTML = '<p style="color: red;">Please fill in all the required fields and upload evidence.</p>';
    }
});

