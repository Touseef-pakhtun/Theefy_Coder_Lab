// import {fetchBranches} from './scripts/branches.js'

// Only run fetchBranches if the target element exists on the page
// if (document.querySelector('.branche-items')) {
//     fetchBranches();
// }
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const menuList = document.querySelector('.menu-list');
    
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', function() {
            menuList.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (menuList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const menuLinks = menuList.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuList.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});
