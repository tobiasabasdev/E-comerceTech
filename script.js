function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('hide');
    sidebar.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
    sidebar.classList.add('hide');
    sidebar.addEventListener('animationend', function handler() {
        if (sidebar.classList.contains('hide')) {
            sidebar.style.display = "none";
        }
        sidebar.removeEventListener('animationend', handler);
    });
}
