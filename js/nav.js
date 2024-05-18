var menuIsOpen = false;

const menuButton = document.querySelector('#mobile-menu-btn');
const collapsedParts = document.querySelectorAll('.menu-collapsed');

menuButton.addEventListener('click', () => toggleMenuOpen());

function toggleMenuOpen() {
    if (menuIsOpen) {
        collapsedParts.forEach((item) => {
            item.classList.add("opened");
        });
        menuButton.classList.add("opened");
    } else {
        collapsedParts.forEach((item) => {
            item.classList.remove("opened");
        });
        menuButton.classList.remove("opened");
    }

    menuIsOpen = !menuIsOpen;
}