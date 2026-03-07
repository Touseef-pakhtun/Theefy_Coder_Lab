let section = document.querySelector('.about-info');
export function aboutHtml(){
    let html = `
            <section class="about-section about1">
                <section class="text">
                    <h3>About Theefy Coder Lab</h3>
                    <span class="para para1"><b>Theefy Coder Lab</b> is more than just a coding space—it’s a vision brought to life by <b>Muhammad Touseef (Teefy)</b>, a resilient learner and passionate computer science student at <b>Gomal University</b>. Built on curiosity, persistence, and a love for problem-solving, this lab is dedicated to helping learners and developers grow with clarity, confidence, and creativity.</span>
                    <span class="para para2">At its core, Theefy Coder Lab is a community-driven <b>hub</b> where coding challenges transform into opportunities for learning. Every bug becomes a lesson, every workflow a chance to refine best practices, and every project a step toward building robust, <b>scalable</b> real-world applications.</span>
                    <span class="para para3">Theefy Coder Lab also emphasizes community and collaboration. We document real-world challenges, share solutions openly, and foster an environment where peers can learn together. This lab is not just about individual growth—it’s about building a <b>collaborative</b> network of learners who uplift one another and contribute to a culture of accessible, safe, and innovative coding.</span>              
                </section>
                <section class="image">
                    <img src="images/about/about1.png" alt="">
                </section>
            </section>
            <section class="about-section about2">
                <section class="image">
                    <img src="images/about/about2.jpg" alt="">
                </section>
                <section class="text">
                    <h3>Our Mission</h3>
                    <span class="para para1"><b>We believe that coding should be accessible, safe, and empowering. Theefy Coder Lab exists to:</b></span>
                    <span class="para para2"><b>- Simplify Complexity: </b>Breaking down advanced concepts in JavaScript, Git, and frontend development into clear, step-by-step explanations.</span>
                    <span class="para para3"><b>- Promote Best Practices: </b>Encouraging safe workflows in version control, error handling, and maintainable code design.</span>
                    <span class="para para4"><b>- Foster Collaboration: </b>Sharing solutions, documenting errors, and building a supportive environment where peers can learn together.</span>
                    <span class="para para5"><b>- Spark Innovation: </b>Exploring cloud deployment, modern web technologies, and creative projects that inspire experimentation.</span>
                    <span class="para para6"><b>- Encourage Lifelong Learning: </b>Inspiring learners to continuously grow, adapt, and refine their skills in a rapidly evolving tech landscape</span>
                </section>
            </section>
            <section class="about-section about3">
                <section class="text">
                    <h3>What Makes Us Different</h3>
                    <span class="para para6">Unlike traditional tutorials, Theefy Coder Lab emphasizes <b>interactive</b> hands-on experimentation and real-world problem solving. We don’t just teach coding—we mentor, troubleshoot, and guide learners through the <b>“why”</b> behind every solution. Our approach blends technical precision with accessibility, ensuring that both beginners and advanced coders feel welcome.</span>
                    <span class="para para2">Beyond technical skills, Theefy Coder Lab nurtures creativity, resilience, and confidence. We encourage learners to embrace challenges as opportunities, to see every <b>error</b> as a stepping stone, and to approach coding not just as a discipline but as a craft. By combining structured guidance with <b>open-ended exploration</b>, we create an environment where curiosity thrives and innovation becomes second nature.</span>
                </section>
                <section class="image">
                    <img src="images/about/about3.jpg" alt="">
                </section>
            </section>
            <section class="about-section about4">
                <section class="image">
                    <img src="images/about/about4.jpg" alt="">
                </section>
                <section class="text">
                    <h3>Our Values</h3>
                    <span class="para para1"><b>- Clarity: </b>Every explanation is designed to be simple, visual, and easy to follow.</span>
                    <span class="para para2"><b>- Safety: </b>We prioritize workflows that protect your projects and data.</span>
                    <span class="para para3"><b>- Community: </b>Growth is best achieved together, through shared experiences and peer support.</span>
                    <span class="para para4"><b>- Creativity: </b>Coding is not just technical—it’s an art of building, experimenting, and innovating.</span>
                    <span class="para para5"><b>- Growth: </b>We are committed to continuous learning and improvement, both for ourselves and our community.</span>
                    <span class="para para6"><b>- Encourage Lifelong Learning: </b>Inspiring learners to continuously grow, adapt, and refine their skills in a rapidly evolving tech landscape</span>

                </section>
            </section>
            <section class="about-section about5">
                <section class="text">
                    <h3>The Journey Ahead</h3>
                    <span class="para para1">Theefy Coder Lab is continuously evolving. From building personal projects like <b>Theefy_Coder_Lab</b> website with polished branding and community features, to experimenting with APIs, cloud platforms, and <b>modern</b> dynamic UI design, we are committed to pushing boundaries while staying grounded in best practices.</span>
                    <span class="para para2">This lab is not just about coding—it’s about <b>collaborative</b> learning, sharing, and growing together. Whether you’re here to master <b>Git workflows</b>, explore <b>JavaScript promises</b>, or simply find inspiration in troubleshooting stories, Theefy Coder Lab welcomes you to join the journey.</span>
                    <span class="para para3">Together, we will navigate the complexities of coding with clarity, build projects with safety, and grow as a community of passionate learners and creators. The future is bright, and the <b>endless</b> possibilities are at <b>Theefy Coder Lab</b>.</span>
                </section>
                <section class="image">
                    <img src="images/about/about5.png" alt="">
                </section>   
            </section>
            <section class="about-section about6">
                <section class="img">
                    <img src="images/about/about6.png" alt="">
                </section>
                <section class="text">
                    <h3>✨ Suggested tagline:</h3>
                    <span class="para para1">“Code with clarity. Build with safety. Grow with community.”</span>
                </section>
            </section>
            
        `;
        section.innerHTML = html;
}
aboutHtml();
section.innerHTML+=``;