let section = document.createElement('section');
section.className = 'classes';

export async function fetchcourse() {
    let course_div = document.querySelector('.courses-item');
    let course = await fetch('./backend/courses.json');
    let courses = await course.json();
    await courses.forEach(element => {
        // console.log(element);
        section.innerHTML+=CourseHTMLGenerator(element);
        
    });
    course_div.appendChild(section);
    // document.querySelector('.courses-item').appendChild(section);
}
// fetchcourse( document.querySelector('.course-items'));
fetchcourse();
// courses class html generator
function CourseHTMLGenerator(course){
    let branch = ` 
            <div class="class class${course.id}">
                <h2 class="class-no"> ${course.classNo}</h2>
                <div class="image">
                    <img src="${course.image}" alt="">
                </div>
                <div class="text">
                    <h3 class="course">${course.course}</h3>
                    <span class="instructor"><b>Instructor:</b> ${course.instructor}</span>
                </div>
                <div class="text-continue">
                    <span class="short-note"><b>short note:</b>${course.shortNote}</span>
                    <span class="benefits"><b>Benefits:</b>${course.benefits}</span>
                    <span class="improvements"><b>Improvements:</b>${course.improvements}</span>   
                </div>              
            </div>
            `;
            // console.log(branch);
    return branch;
}
