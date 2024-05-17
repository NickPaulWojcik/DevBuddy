function init() {
    let navExpandButton = document.querySelector('.nav-expand');
    let navExpandButtonArrow = navExpandButton.querySelector('.nav-arrow');
    let nav = document.querySelector('nav');
    let content = document.querySelector('.content');

    navExpandButton.addEventListener('click', (element) => {
        if(nav.classList.contains('collapsed')) {
            nav.classList.remove('collapsed');
            content.classList.remove('content-full');
            navExpandButtonArrow.classList.add('nav-expanded');
        } else {
            nav.classList.add('collapsed');
            content.classList.add('content-full');
            navExpandButtonArrow.classList.remove('nav-expanded');
        }
    });
};

init();