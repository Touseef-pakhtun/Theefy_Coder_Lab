// Import the fetchBranches function from branches.js
import { fetchBranches } from './branches.js';
import { fetchcourse } from './course.js';
import { fetchData } from './news.js';
import { addmissionHtml } from './addmission.js';
import { loadStudents } from './student.js';
// Note: gallery.js is loaded via script.js and exposes fetchGallery on window
// about.js is loaded separately and handles its own imports

// header html
export function header(){
    const headerHtml = `<nav>
            <div class="email">
                <a href="email"><i class="fas fa-envelope"></i> skpahtan@gemail.com</a>
                <a href="phone"><i class="fas fa-phone"></i> +92 300 1234567</a>
            </div>
            <div class="search">
                <label for="search">Search</label>
                <input type="search" name="search" id="search" placeholder="search.....">
            </div>
            <div class="list">
                <ul>
                    <li><a href="facebook"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="github"><i class="fab fa-github"></i></a></li>
                    <li><a href="instagram"><i class="fab fa-instagram"></i></a></li>
                    
                </ul>
            </div>
        </nav>
        
        <section class="top">
            <section class="welcome">
                <img src="./images/lab_logo/logo.png" alt="">
                <h1>Welcome to Theefy Coder Lab</h1>
            </section>
            <section class="manu">
                <div class="menu-toggle" id="mobile-menu">
                    <i class="fas fa-bars"></i>
                </div>
                <ul class="menu-list">
                    <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="about.html"><i class="fas fa-info-circle"></i> About</a></li>
                    <li><a href="class.html"><i class="fas fa-chalkboard-teacher"></i> Courses</a></li>
                    <li><a href="branches.html"><i class="fas fa-building"></i> Branches</a></li>
                    <li><a href="news.html"><i class="fas fa-newspaper"></i> News</a></li>
                    <li><a href="addmission.html"><i class="fas fa-user-plus"></i> Addmission</a></li>
                    <li><a href="gallery.html"><i class="fas fa-images"></i> Gallery</a></li>
                    <li><a href="student.html"><i class="fas fa-user-graduate"></i> Student</a></li>
                </ul>
            </section>
        </section>`;
        document.querySelector('header').innerHTML = headerHtml;
}
header();

// footer html 
export function footer(){
    const footer = `<div class="footerData">
            <div class="footer-section about">
                <h3>Theefy Coder Lab</h3>
                <p>Empowering learners with cutting-edge coding skills. Join us to master web development, programming, and innovative technologies.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="about.html"><i class="fas fa-info-circle"></i> About</a></li>
                    <li><a href="class.html"><i class="fas fa-chalkboard-teacher"></i> Classes</a></li>
                    <li><a href="branches.html"><i class="fas fa-building"></i> Branches</a></li>
                    <li><a href="news.html"><i class="fas fa-newspaper"></i> News</a></li>
                    <li><a href="addmission.html"><i class="fas fa-user-plus"></i> Admission</a></li>
                    <li><a href="gallery.html"><i class="fas fa-images"></i> Gallery</a></li>
                    <li><a href="student.html"><i class="fas fa-user-graduate"></i> Students</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <ul>
                    <li><a href="mailto:skpahtan@gemail.com"><i class="fas fa-envelope"></i> skpahtan@gemail.com</a></li>
                    <li><a href="tel:+923001234567"><i class="fas fa-phone"></i> +92 300 1234567</a></li>
                    <li><a href="#"><i class="fas fa-map-marker-alt"></i> Pakistan</a></li>
                </ul>
            </div>
            <div class="footer-section newsletter">
                <h3>Newsletter</h3>
                <p>Subscribe to get the latest updates and news.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email">
                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Theefy Coder Lab. All rights reserved.</p>
        </div>`;
        document.querySelector('footer').innerHTML+=footer;
}
footer();