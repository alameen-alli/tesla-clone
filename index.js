const openMenu = () => {
    document.querySelector( selectors: '.backdrop').classname = 'backdrop active';
    document.querySelector( selectors: 'aside').classname = 'active';
}

const closeMenu = () => {
    document.querySelector(selectors: '.backdrop').classname = 'backdrop';
    document.querySelector(selectors: 'aside').classname = 'backdrop';
}

document.getElementById( elementId: 'menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}