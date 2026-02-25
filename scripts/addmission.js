// Admission Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('admission-form');
    const applyClass = document.querySelector('.applyClass');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Get form values
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const course = form.querySelector('select[name="course"]').value;

            // Hide form and show success message
            applyClass.innerHTML = `
                <div class="success-message">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>Application Submitted!</h2>
                    <p>Thank you, <strong>${name}</strong>!</p>
                    <p>Your application for <strong>${course}</strong> has been successfully submitted.</p>
                    <p class="email-confirm">A confirmation email has been sent to <strong>${email}</strong></p>
                    <div class="success-details">
                        <p><i class="fas fa-user-graduate"></i> Name: ${name}</p>
                        <p><i class="fas fa-envelope"></i> Email: ${email}</p>
                        <p><i class="fas fa-book"></i> Course: ${course}</p>
                    </div>
                    <button class="submit-another" onclick="location.reload()">Submit Another Application</button>
                </div>
            `;
        });
    }
});
