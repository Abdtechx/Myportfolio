document.addEventListener('DOMContentLoaded', () => {
    const targetLinks = document.querySelectorAll('.menu-link');
    const contentPanels = document.querySelectorAll('.view-panel');

    targetLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const selectedTarget = link.getAttribute('data-target');
            switchPanel(selectedTarget);
        });
    });

    // Globally assign utility router so embedded panel triggers execute perfectly
    window.switchPanel = (panelId) => {
        // Handle Header Link Active Toggles
        targetLinks.forEach(item => {
            if (item.getAttribute('data-target') === panelId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Handle Active Layout Structural Switches
        contentPanels.forEach(panel => {
            if (panel.id === panelId) {
                panel.classList.add('active-panel');
                // Scroll safely to peak of execution plane
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                panel.classList.remove('active-panel');
            }
        });
    };
});
