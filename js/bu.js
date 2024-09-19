// Smooth Scroll for "Back to Top" Button
document.querySelector('.button-2').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default anchor behavior
    document.querySelector('#Top').scrollIntoView({
        behavior: 'smooth'
    });
});

// Lazy Loading for Images - Already handled by 'loading="lazy"' in the HTML
// But you can add IntersectionObserver to enhance it.
let lazyImages = document.querySelectorAll('img[loading="lazy"]');

let lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in');  // Optional: add some class for animation
            lazyImageObserver.unobserve(img);  // Stop observing once loaded
        }
    });
});

lazyImages.forEach((img) => {
    lazyImageObserver.observe(img);
});

// Smooth Scrolling for Navigation Menu Links
document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // If the link is an internal anchor
        if (targetId.startsWith("#")) {
            e.preventDefault();  // Prevent the default anchor behavior
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
