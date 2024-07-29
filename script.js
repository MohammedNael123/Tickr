document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', () => {
        mobileNav.classList.add('show');
    });

    closeIcon.addEventListener('click', () => {
        mobileNav.classList.remove('show');
    });
});
