document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,  // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px'  // Slight offset to trigger before element is fully in view
    });

    animatedElements.forEach(element => observer.observe(element));
});
