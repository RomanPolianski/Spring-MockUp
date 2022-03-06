const ROOT_PROJECT_ITEMS = document.getElementsByClassName("proj-content");

(function projectsRender() {
  let htmlCatalog = PROJECTS.reduce((html, { imageUrl, title, text }) => {
    return (html += `
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
      `);
  }, ``);
  const html = `
      <div class="projects">
        ${htmlCatalog}
      </div>
    `;
  Array.from(ROOT_PROJECT_ITEMS).forEach((item) => {
    item.innerHTML = html;
  });
})();
