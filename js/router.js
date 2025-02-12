const routes = {
    '/muslimain_web/': 'pages/home.html',
    '/muslimain_web/privacy-policy': 'pages/privacy.html',
    '/muslimain_web/terms-of-use': 'pages/terms.html',
    '/muslimain_web/contact': 'pages/contact.html'
};

async function handleLocation() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('App element not found');
        return;
    }

    let path = window.location.pathname;
    // Handle trailing slash
    path = path.endsWith('/') && path !== '/muslimain_web/' ? path.slice(0, -1) : path;
    const route = routes[path] || routes['/muslimain_web/'];
    
    try {
        const response = await fetch(route);
        if (!response.ok) {
            throw new Error('Page not found');
        }
        const html = await response.text();
        appElement.innerHTML = html;
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading page:', error);
        appElement.innerHTML = `
            <section class="page-content">
                <div class="container">
                    <h1>Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                    <a href="/muslimain_web/" data-link>Return to Home</a>
                </div>
            </section>
        `;
    }
}

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
} else {
    initRouter();
}

function initRouter() {
    // Check for redirected route
    const savedPath = localStorage.getItem('path');
    if (savedPath) {
        localStorage.removeItem('path');
        history.replaceState(null, '', savedPath);
    }

    window.addEventListener('popstate', handleLocation);
    
    document.body.addEventListener('click', e => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            history.pushState(null, '', link.href);
            handleLocation();
        }
    });
    
    handleLocation();
}