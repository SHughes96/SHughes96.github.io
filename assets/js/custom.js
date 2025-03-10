// Custom JavaScript to force the background color to stay blue
document.addEventListener('DOMContentLoaded', function() {
    // Function to set the background color
    function setBlueBackground() {
        var blueColor = '#1a5c8e';
        
        // Set background color for all possible elements
        document.documentElement.style.backgroundColor = blueColor;
        document.body.style.backgroundColor = blueColor;
        
        // Find all background elements
        var bgElements = document.querySelectorAll('.bg, #wrapper > .bg, .bg.fixed, #wrapper.fade-in:before');
        bgElements.forEach(function(el) {
            el.style.backgroundColor = blueColor;
        });
        
        // Specifically target transition elements
        var fadeInBefore = document.querySelector('#wrapper.fade-in:before');
        if (fadeInBefore) {
            fadeInBefore.style.backgroundColor = blueColor;
            fadeInBefore.style.opacity = '0';  // Make sure it's transparent after load
        }
    }

    // Set initially
    setBlueBackground();
    
    // Set multiple timeouts to ensure it applies after any animations or delays
    setTimeout(setBlueBackground, 100);
    setTimeout(setBlueBackground, 500);
    setTimeout(setBlueBackground, 1000);
    setTimeout(setBlueBackground, 2000);
    
    // Set during scroll to ensure it remains during scrolling
    window.addEventListener('scroll', function() {
        setBlueBackground();
    });
    
    // Fix the load transition
    var wrapper = document.getElementById('wrapper');
    if (wrapper) {
        wrapper.classList.remove('fade-in');
        setTimeout(function() {
            wrapper.classList.add('fade-in');
            document.body.classList.remove('is-preload');
        }, 10);
    }
});