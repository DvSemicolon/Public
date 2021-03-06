const projects = document.querySelectorAll(`.projects__item`);

function fillInfo(project) {
  const name = project.dataset.name;
  const info = project.dataset.info;
  const displayer = project.querySelector(`.project__item--info`);
  displayer.innerHTML = `
  <h2>${name}</h2>
  <p>${info}</p>
  `;

  console.dir(displayer);
}

projects.forEach(project => fillInfo(project))

function hndScrollbar() {
  let progressbar = document.querySelector(`#progressbar`);
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let progressHeight = (window.pageYOffset / totalHeight) *100;
  progressbar.style.height = progressHeight + '%';
}

window.onscroll = hndScrollbar;
window.onresize = hndScrollbar;

