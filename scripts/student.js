// Student HTML Generator for Theefy Coder Lab
// This script fetches student data from backend/student.json and generates HTML

document.addEventListener('DOMContentLoaded', function() {
    loadStudents();
});

export async function loadStudents() {
    const studentContainer = document.getElementById('student-container');
    
    if (!studentContainer) {
        console.error('Student container not found!');
        return;
    }

    try {
        // Fetch student data from JSON file
        const response = await fetch('./backend/student.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const students = await response.json();
        
        // Generate HTML for each student
        const studentsHTML = generateStudentsHTML(students);
        
        // Insert HTML into container
        studentContainer.innerHTML = studentsHTML;
        
    } catch (error) {
        console.error('Error loading students:', error);
        studentContainer.innerHTML = '<p class="error-message">Failed to load student data. Please try again later.</p>';
    }
}

function generateStudentsHTML(students) {
    let html = '<div class="students-grid">';
    
    students.forEach((student, index) => {
        const cardNumber = index + 1;
        html += `
            <div class="student-card">
                <div class="student-number">${cardNumber}</div>
                <div class="student-image">
                    <img src="${student.image}" width="100" alt="${student.name}" loading="lazy">
                </div>
                <div class="student-info">
                    <h3 class="student-name">${student.name}</h3>
                    <p class="student-father"><strong>Father:</strong> ${student['father-name']}</p>
                    <p class="student-age"><strong>Age:</strong> ${student.age}</p>
                    <p class="student-roll"><strong>Roll:</strong> ${student.roll}</p>
                    <p class="student-program"><strong>Program:</strong> ${student.program}</p>
                    <p class="student-email">
                        <a href="mailto:${student.email}">
                            <i class="fas fa-envelope"></i> ${student.email}
                        </a>
                    </p>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    return html;
}