const ROOT_NAV_ITEMS = document.getElementsByClassName("header-options");

(function navItemsRender() {
  let htmlElems = NAV_ITEMS.reduce((html, { title, submenu }) => {
    if (submenu.length !== 0) {
      html += `
          <li class = "nav-item">
            <a href = "#" class="has-menu bold">${title} <i class="arrow arrow-down"></i></a>
            <ul class = "menu-sublist">
        `;
      submenu.forEach((item) => {
        if (item === "View all Projects") {
          html += `
              <li>
                <a href = "#" class = "blue-link">${item}</a>
              </li>
            `;
        } else if (item === "Development Tools") {
          html += `
              <li class = "uppercase-text">
                ${item}
              </li>
            `;
        } else {
          html += `
            <li>
              <a href = "#">${item}</a>
            </li>
            `;
        }
      });
      html += `
              </ul>
          </li>
        `;
    } else {
      html += `
          <li>
            <a href = "#" class="has-menu bold">${title}</a>
          </li>
        `;
    }
    return html;
  }, ``);
  const html = `
        ${htmlElems}
      `;
  Array.from(ROOT_NAV_ITEMS).forEach((item) => {
    item.innerHTML = html;
  });
})();
