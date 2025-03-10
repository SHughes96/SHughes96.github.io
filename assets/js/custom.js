// Custom JavaScript to force the background color to stay blue
document.addEventListener('DOMContentLoaded', function() {
    // Define our blue color
    var blueColor = '#1a5c8e';
    
    // Function to set the background color
    function setBlueBackground() {
        // Set background color for all possible elements
        document.documentElement.style.backgroundColor = blueColor;
        document.body.style.backgroundColor = blueColor;
        
        // Find and set all background elements
        var bgElements = document.querySelectorAll('.bg, #wrapper > .bg, .bg.fixed, #bg, #wrapper:before, #wrapper:after, body:before, body:after');
        bgElements.forEach(function(el) {
            el.style.backgroundColor = blueColor;
        });
        
        // Style the intro section 
        var intro = document.getElementById('intro');
        if (intro) {
            intro.style.backgroundColor = blueColor;
        }
        
        // Fade-in element
        var fadeInBefore = document.querySelector('#wrapper.fade-in:before');
        if (fadeInBefore) {
            fadeInBefore.style.backgroundColor = blueColor;
        }
        
        // Make sure wrapper has the right color
        var wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.style.backgroundColor = blueColor;
        }
    }

    // Set initially
    setBlueBackground();
    
    // Set multiple timeouts to ensure it applies after animations/transitions
    setTimeout(setBlueBackground, 10);
    setTimeout(setBlueBackground, 100);
    setTimeout(setBlueBackground, 500);
    setTimeout(setBlueBackground, 1000);
    
    // Set during scroll to ensure it remains during scrolling
    window.addEventListener('scroll', function() {
        setBlueBackground();
    });
});