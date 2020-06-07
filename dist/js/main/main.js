
//nav
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

//projects
const projects = document.querySelectorAll(`.projects__item`);

function fillInfo(project) {
  const name = project.dataset.name;
  const info = project.dataset.info;
  const displayer = project.querySelector(`.project__item--info`);
  displayer.innerHTML = `
  <h2>${name}</h2>
  <p>${info}</p>
  `;
}

projects.forEach(project => fillInfo(project))

//progressbar

function hndScrollbar() {
  let progressbar = document.querySelector(`#progressbar`);
  if(progressbar) {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = (window.pageYOffset / totalHeight) *100;
    progressbar.style.height = progressHeight + '%';
  }
}

window.onscroll = hndScrollbar;
window.onresize = hndScrollbar;

