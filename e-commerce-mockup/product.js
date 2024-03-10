// Function to animate products
function animateProducts() {
    const totalWidth = getTotalWidth();
    const carouselWidth = carousel.offsetWidth;
    
    // Set initial transform
    carousel.style.transform = 'translateX(0)';
    
    // Animate products
    let distance = 0;
    function slide() {
        distance += 1; // Adjust speed by changing increment value
        
        if (distance >= totalWidth) {
            distance = 0;
        }
        
        // Check if any product is fully out of view
        carousel.querySelectorAll('.product').forEach(product => {
            const productRect = product.getBoundingClientRect();
            if (productRect.right < 0) {
                // Reset the position of the product to the end
                product.style.transform = `translateX(${carouselWidth}px)`;
            }
        });

        // Move the carousel
        carousel.style.transform = `translateX(-${distance}px)`;
        requestAnimationFrame(slide);
    }

    slide();
}

// Start the animation
animateProducts();
