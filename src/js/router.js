const routes = {
    '/': 'pages/home.html',
    '/privacy-policy': 'pages/privacy-policy.html',
    '/terms-of-use': 'pages/terms-of-use.html',
    '/contact': 'pages/contact.html',
    '/account-deletion': 'pages/account-deletion.html'
};

async function handleLocation() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('App element not found');
        return;
    }

    // Show loading state immediately
    appElement.innerHTML = `
        <section class="page-content">
            <div class="container">
                <div class="loading">Loading...</div>
            </div>
        </section>
    `;

    let path = window.location.pathname;
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    path = path || '/';

    const route = routes[path] || routes['/'];
    let content;
    
    try {
        const response = await fetch(route);
        if (!response.ok) {
            throw new Error('Page not found');
        }
        content = await response.text();
        
        // Update page title first
        const titles = {
            '/': 'Home',
            '/privacy-policy': 'Privacy Policy',
            '/terms-of-use': 'Terms of Service',
            '/contact': 'Contact Us',
            '/account-deletion': 'Account Deletion'
        };
        document.title = `Muslimain - ${titles[path] || 'Home'}`;
        
        // Then update content
        appElement.innerHTML = content;
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading page:', error);
        document.title = 'Muslimain - Page Not Found';
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

function initRouter() {
    // Handle redirects from 404.html
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('path');
    if (redirectPath) {
        history.replaceState(null, '', redirectPath);
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
} else {
    initRouter();
}