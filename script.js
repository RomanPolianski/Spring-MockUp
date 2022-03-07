let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  let menuArrows = document.querySelectorAll(".menu-arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function(e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}


const iconMenu = document.querySelector(".menu-icon");
if (iconMenu) {
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

document.querySelector('.proj-input').oninput = function () {
    setTimeout(() => {
      let val = this.value.trim().toLowerCase();
      let projects = PROJECTS;
      let htmlCatalog = "";
      if (val !== '') {
        let filteredArr = projects.filter(({ title, text }) => {
          return title.toLowerCase().indexOf(val) !== -1 || text.toLowerCase().indexOf(val) !== -1
        })
        if (filteredArr.length === 0) {
          htmlCatalog = `
        <div>
          <h1 class = 'no-results'>No Results</h1>
        </div>
        `
        } else {
          htmlCatalog += filteredArr.reduce((html, { imageUrl, title, text }) => {
            return html += `
            <div class="project bg-white">
              <div class="project-icon-header">
                <img class="project-icon-header" src=${imageUrl}/>
                <div class="project-header">
                <h3 class="bold">${title}</h3>
              </div>
              </div>
                <div class="project-description">
                  <p >${text}</p>
                </div>
            </div>
             `
          }, ``)
        }
      } else {
        projects.forEach(({ imageUrl, title, text }) => {
          htmlCatalog += `
          <div class="project bg-white">
          <div class="project-icon-header">
            <img class="project-icon-header" src=${imageUrl}/>
            <div class="project-header">
            <h3 class="bold">${title}</h3>
          </div>
          </div>
            <div class="project-description">
              <p >${text}</p>
            </div>
          </div>
          `;
        });
      }
      const html = `
          <div class="projects">
            ${htmlCatalog}
          </div>
      `;
      Array.from(ROOT_PROJECT_ITEMS).forEach(item => {
        item.innerHTML = html
      })
    }, 300)
  }