document.addEventListener('DOMContentLoaded', () => {
    // Interactive navigation hover effects
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.color = 'var(--secondary-color)';
        });
        link.addEventListener('mouseleave', (e) => {
            if (!e.target.classList.contains('active')) {
                e.target.style.color = 'white';
            }
        });
    });

    // Smooth scroll for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓';
    themeToggle.classList.add('theme-toggle');
    document.body.appendChild(themeToggle);

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('cellverse-theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply theme on page load
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('cellverse-theme', 'dark');
        } else {
            localStorage.setItem('cellverse-theme', 'light');
        }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        if (e.matches && !localStorage.getItem('cellverse-theme')) {
            document.body.classList.add('dark-mode');
        } else if (!e.matches && !localStorage.getItem('cellverse-theme')) {
            document.body.classList.remove('dark-mode');
        }
    });
});