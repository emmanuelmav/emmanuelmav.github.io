// Create the observer
// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        // Select the element you want animated
        const cards = entry.target.querySelectorAll('.project-card');
        cards.forEach((card) => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                card.classList.add('slide-in');
                return; // if we added the class, exit the function
            }

            // We're not intersecting, so remove the class!
            card.classList.remove('slide-in');
        });

    });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.projects-section'));


