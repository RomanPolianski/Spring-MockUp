const ROOT_NAV_ITEMS = document.getElementsByClassName("header-options");
const ROOT_NAV_BURGER_ITEMS = document.getElementsByClassName(
  "header-options-mobile"
);

(function navItemsRender() {
  let htmlElems = NAV_ITEMS.reduce((html, { title, submenu }) => {
    if (submenu.length !== 0) {
      html += `
          <li class = "nav-item">
            <a href = "#" class="menu-link bold">${title}</a>
            <span class="menu-arrow"></span>
            <ul class = "menu-sublist">
        `;
      submenu.forEach((item) => {
        if (item === "View all Projects") {
          html += `
              <li>
                <a href = "#" class = "menu-sublink blue-link">${item}</a>
              </li>
            `;
        } else if (item === "Development Tools") {
          html += `
              <li class = "uppercase-text">
                <a href = "#" class = "menu-sublink thin">${item}</a>
              </li>
            `;
        } else {
          html += `
            <li>
              <a href = "#"  class = "menu-sublink blue">${item}</a>
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
            <a href = "#" class="menu-link bold">${title}</a>
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
  Array.from(ROOT_NAV_BURGER_ITEMS).forEach((item) => {
    item.innerHTML = html;
  });
})();