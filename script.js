document.addEventListener('DOMContentLoaded', function() {

    // 1. Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Active Page Link Highlighting
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    const menuLength = menuItems.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            // Remove active class from all
            menuItems.forEach(item => item.classList.remove('active'));
            // Add active class to the current page link
            menuItems[i].classList.add('active');
        }
    }

    // 3. Typewriter Effect for Hero Section
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const textArray = ["Full Stack Developer", "Problem Solver", "Creative Thinker"];
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, 500);
            }
        }
        
        type();
    }

    // 4. Contact Form Demo Submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission

            // Hide the form and show a success message
            contactForm.style.display = 'none';
            formMessage.textContent = 'Thanks for your message! I will reply soon.';
            formMessage.classList.remove('hidden');
        });
    }
});