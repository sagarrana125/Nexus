/* ==========================================================================
   NEXUS — Home Page Renderer
   Builds the resource grid from RESOURCES (see js/data.js) and wires up
   card navigation: internal cards route to a local page, external cards
   open in a new tab.
   ========================================================================== */

(function () {
  const grid = document.getElementById("resource-grid");
  if (!grid) return;

  const card = (item) => {
    const el = document.createElement("article");
    el.className = "resource-card";
    el.setAttribute("role", "link");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${item.title} — ${item.type}`);

    el.innerHTML = `
      <div class="icon-box">
        <svg viewBox="0 0 24 24" fill="none">${item.icon}</svg>
      </div>
      <div class="eyebrow">${item.category}</div>
      <h3>${item.title}</h3>
      <p class="description">${item.description}</p>
      <div class="card-footer">
        <span class="type-badge">${item.type}</span>
        <span class="visit-link">Visit
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
          </svg>
        </span>
      </div>
    `;

    const go = () => {
      if (item.internal) {
        window.location.href = item.url;
      } else {
        window.open(item.url, "_blank", "noopener");
      }
    };

    el.addEventListener("click", go);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });

    return el;
  };

  RESOURCES.forEach((item) => grid.appendChild(card(item)));
})();
