const routes = {
    '/': 'pages/home.html',
    '/privacy-policy': 'pages/privacy.html',
    '/terms-of-use': 'pages/terms.html',
    '/contact': 'pages/contact.html',
    '/account-deletion': 'pages/account-deletion.html'
};

async function handleLocation() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('App element not found');
        return;
    }

    // Get the path and handle GitHub Pages base path
    let path = window.location.pathname;
    const githubPagesBase = '/muslimain_web';
    if (path.startsWith(githubPagesBase)) {
        path = path.slice(githubPagesBase.length);
    }
    
    const route = routes[path] || routes['/'];
    
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
                    <a href="/" data-link>Return to Home</a>
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