document.addEventListener('DOMContentLoaded', () => {
    // Initialize the router
    handleLocation();

    // Handle navigation clicks
    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            history.pushState(null, '', href);
            handleLocation();
        }
    });
});