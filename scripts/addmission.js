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

// making the addmission data with js

export function addmissionHtml(){
    let addmission = document.querySelector('.addmission-html');
    let html = `
        <section id="admission-page">
  <h2>Admissions Open</h2>
  <p>Join Theefy_Coder_Lab and start your coding journey today!</p>

  <h3>Eligibility</h3>
  <p>Open to all learners with a passion for coding. Basic computer knowledge recommended.</p>

  <h3>Programs Offered</h3>
  <ul>
    <li>Frontend Foundations: HTML & CSS – Learn the basics of HTML and CSS to build your first web page.</li>
    <li>JavaScript Basics for Beginners – Learn the fundamentals of JavaScript programming.</li>
    <li>DOM Manipulation & Event Handling – Learn how to manipulate the DOM and handle events in JavaScript.</li>
    <li>Mastering Git & Version Control – Learn advanced Git commands and version control best practices.</li>
    <li>JavaScript Promises & Async Programming – Learn how to handle asynchronous operations in JavaScript.</li>
    <li>API Integration Project – Integrate third-party APIs into web applications.</li>
    <li>Responsive Web Design – Learn how to create websites that adapt to different screen sizes.</li>
    <li>UI/UX Essentials – Learn fundamental UI/UX design principles.</li>
    <li>Website Branding & Verification Badge – Learn how to brand your website and obtain verification badges.</li>
    <li>Portfolio Development Workshop – Learn how to build a professional portfolio.</li>
  </ul>

  <h3>Admission Process</h3>
  <ol>
    <li>Fill out the form below.</li>
    <li>Submit your details.</li>
    <li>Receive confirmation email.</li>
    <li>Begin your classes.</li>
  </ol>
  <div class="applyClass">
  <h3>Apply Now</h3>
  
  <form id="admission-form">
    <label>Name:</label><br>
    <input type="text" name="name" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Upload Picture:</label><br>
    <input type="file" name="picture" accept="image/*" required><br><br>

    <label>Select Course:</label><br>
    <select name="course">
      <option>Frontend Foundations: HTML & CSS</option>
      <option>JavaScript Basics for Beginners</option>
      <option>DOM Manipulation & Event Handling</option>
      <option>Mastering Git & Version Control</option>
      <option>JavaScript Promises & Async Programming</option>
      <option>API Integration Project</option>
      <option>Responsive Web Design</option>
      <option>UI/UX Essentials</option>
      <option>Website Branding & Verification Badge</option>
      <option>Portfolio Development Workshop</option>
    </select><br><br>

    <label>Message:</label><br>
    <textarea name="message"></textarea><br><br>

    <button class="submit">Submit Application</button>
  </form>
  </div>
        </section>`;
        addmission.innerHTML = html;
}
addmissionHtml();
