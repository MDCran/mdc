window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var headerAlert = document.querySelector('.header-alert');
    var highlightButton = document.querySelector('.hc-highlighted');
    var headerHeight = headerAlert.offsetHeight; // Get the height of the header alert

    if (window.scrollY > headerHeight) {
        navbar.classList.add('fixed'); // Add the fixed class to "lock" the navbar
        highlightButton.classList.remove('hide'); // Ensure it's not hidden
        highlightButton.classList.add('visible'); // Show the highlighted button
    } else {
        navbar.classList.remove('fixed'); // Remove the fixed class to move the navbar back
        highlightButton.classList.remove('visible'); // Remove the visibility class
        highlightButton.classList.add('hide'); // Smoothly hide the highlighted button
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.home-button-1');
    
    if (button) {
        button.addEventListener('mouseover', function() {
            const svgElement = this.querySelector('svg path');
            svgElement.setAttribute('d', "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z");
        });

        button.addEventListener('mouseout', function() {
            const svgElement = this.querySelector('svg path');
            svgElement.setAttribute('d', "m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z");
        });
    }
});




