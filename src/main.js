import './styles/main.scss';
import lozad from 'lozad';

document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    const images = document.querySelectorAll('.modal-image');

    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('open');
            modalImage.src = e.target.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modal.classList.remove('open');
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('open');
        }
    });

    // Lazy load images
    const observer = lozad('.lazy', {
        loaded: (el) => {
            el.classList.add('loaded');
        },
    });

    observer.observe();
});
