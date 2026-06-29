document.addEventListener('DOMContentLoaded', () => {
    const targetLinks = document.querySelectorAll('.menu-link');
    const contentPanels = document.querySelectorAll('.view-panel');

    // Custom operational view navigation logic
    function switchPanel(panelId) {
        // Toggle Active Styling states across header navigation chips
        targetLinks.forEach(item => {
            if (item.getAttribute('data-target') === panelId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Toggle visibility block logic for core panels
        contentPanels.forEach(panel => {
            if (panel.id === panelId) {
                panel.classList.add('active-panel');
                // Smooth scroll window up to the absolute baseline height
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                panel.classList.remove('active-panel');
            }
        });
    }

    // Attach native operational event listeners directly to target links
    targetLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedTarget = link.getAttribute('data-target');
            switchPanel(selectedTarget);
        });
    });

    // Share switchPanel with global execution matrix window context safely
    window.switchPanel = switchPanel;
});
