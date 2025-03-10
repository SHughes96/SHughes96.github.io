// Custom JavaScript to force the background color to stay blue
document.addEventListener('DOMContentLoaded', function() {
    // Function to set the background color
    function setBlueBackground() {
        // Set background color for all possible elements
        document.documentElement.style.backgroundColor = '#1a5c8e';
        document.body.style.backgroundColor = '#1a5c8e';
        
        // Find all background elements
        var bgElements = document.querySelectorAll('.bg, #wrapper > .bg, .bg.fixed');
        bgElements.forEach(function(el) {
            el.style.backgroundColor = '#1a5c8e';
        });
    }

    // Set initially
    setBlueBackground();
    
    // Set a timeout to ensure it applies after any animations or delays
    setTimeout(setBlueBackground, 100);
    setTimeout(setBlueBackground, 500);
    setTimeout(setBlueBackground, 1000);
    
    // Set during scroll to ensure it remains during scrolling
    window.addEventListener('scroll', function() {
        setBlueBackground();
    });
});