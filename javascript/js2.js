/* Dropdown nav functionality */
let dropdown_btn = document.getElementById('nav-dropdown-btn');
let nav_dropdown = document .getElementById('navbar-bottom');


dropdown_btn.addEventListener('click', function () {
    if(dropdown_btn.classList.contains('dropdown-open')) {
        dropdown_btn.classList.remove('dropdown-open');
        dropdown_btn.classList.add('dropdown-close');
        nav_dropdown.classList.add('collapse');
    } else {
        dropdown_btn.classList.add('dropdown-open');
        dropdown_btn.classList.remove('dropdown-close');
        nav_dropdown.classList.remove('collapse');
    }
});
