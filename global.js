function init() {
    let navExpandButton = document.querySelector('.nav-expand');
    let nav = document.querySelector('nav');
    let content = document.querySelector('.content');

    navExpandButton.addEventListener('click', (element) => {
        if(nav.classList.contains('collapsed')) {
            nav.classList.remove('collapsed');
            content.classList.remove('content-full');
        } else {
            nav.classList.add('collapsed');
            content.classList.add('content-full');
        }
    });
};

init();