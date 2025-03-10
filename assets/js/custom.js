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
        
        // Fade-in element
        var fadeInBefore = document.querySelector('#wrapper.fade-in:before');
        if (fadeInBefore) {
            fadeInBefore.style.backgroundColor = blueColor;
            fadeInBefore.style.opacity = '0';
        }
        
        // Set is-preload element
        if (document.body.classList.contains('is-preload')) {
            setTimeout(function() {
                document.body.classList.remove('is-preload');
            }, 0);
        }
        
        // Make sure wrapper has the right color
        var wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.style.backgroundColor = blueColor;
            // Add a div with the background color if it doesn't exist
            if (!document.querySelector('#manual-bg')) {
                var bgDiv = document.createElement('div');
                bgDiv.id = 'manual-bg';
                bgDiv.style.position = 'fixed';
                bgDiv.style.top = '0';
                bgDiv.style.left = '0';
                bgDiv.style.width = '100%';
                bgDiv.style.height = '100%';
                bgDiv.style.backgroundColor = blueColor;
                bgDiv.style.zIndex = '-1000';
                document.body.insertBefore(bgDiv, document.body.firstChild);
            }
        }
    }

    // Set initially
    setBlueBackground();
    
    // Set multiple timeouts to ensure it applies after animations/transitions
    setTimeout(setBlueBackground, 10);
    setTimeout(setBlueBackground, 100);
    setTimeout(setBlueBackground, 500);
    setTimeout(setBlueBackground, 1000);
    setTimeout(setBlueBackground, 2000);
    
    // Set during scroll to ensure it remains during scrolling
    window.addEventListener('scroll', function() {
        setBlueBackground();
    });
    
    // If page has scroll/resize animations, also handle those
    window.addEventListener('resize', function() {
        setBlueBackground();
    });
});