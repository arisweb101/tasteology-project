import './styles/main.scss';
import lozad from 'lozad';

document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    const observer = lozad('.lazy', {
        loaded: (el) => {
            el.classList.add('loaded');
        },
    });

    observer.observe();
});
