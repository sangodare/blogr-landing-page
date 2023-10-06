'use strict';

const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navItems = document.querySelector('.nav-items')
const arrows = document.querySelectorAll('.arrow');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');


// functions
function mobileMenuToggle () {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    };
};

function navItemsToggle(e) {
    const dropdownToggle = e.target.closest('.dropdown-toggle');
    if(!dropdownToggle.classList.contains('dropdown-toggle')) return;
    dropdownMenus.forEach(dropdownMenu => {
        if(!dropdownMenu.classList.contains(`dropdown-menu-${dropdownToggle.dataset.toggle}`)) {
            dropdownMenu.classList.add('hidden');
        }
    });
    arrows.forEach(arrow => {
        if(!arrow.classList.contains(`arrow-${dropdownToggle.dataset.toggle}`)) {
            arrow.classList.remove('arrow-flip');
        }
    });
    document.querySelector(`.dropdown-menu-${dropdownToggle.dataset.toggle}`).classList.toggle('hidden');
    document.querySelector(`.arrow-${dropdownToggle.dataset.toggle}`).classList.toggle('arrow-flip');
};  

function closeNavItems (e) {
    if(e.target.closest('.nav-items')) return;
    dropdownMenus.forEach(dropdownMenu => {
        if(!dropdownMenu.classList.contains('hidden'))dropdownMenu.classList.add('hidden')
    });
    arrows.forEach(arrow => {
        if(arrow.classList.contains('arrow-flip')) arrow.classList.remove('arrow-flip');
    });
}

//event listeners
navToggle.addEventListener('click', mobileMenuToggle);
navItems.addEventListener('click', navItemsToggle);
document.documentElement.addEventListener('click', closeNavItems);