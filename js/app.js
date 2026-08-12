/* ==========================================================================
   NEXUS — App
   Renders the shelf from RESOURCES (js/data.js), opens a reading panel
   on click ("pulling a book off the shelf"), and runs the one-time
   hero typewriter intro.
   ========================================================================== */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     Hero typewriter — types one line, then reveals the mark. Runs once.
     --------------------------------------------------------------------- */
  function runHero() {
    const lineEl = document.getElementById("hero-line");
    const h1 = document.getElementById("hero-title");
    const tagline = document.getElementById("hero-tagline");
    if (!lineEl) return;

    const message = "What do you want to learn today?";

    const finish = () => {
      lineEl.classList.add("done");
      if (h1) h1.classList.add("reveal");
      if (tagline) tagline.classList.add("reveal");
    };

    if (reduceMotion) {
      lineEl.textContent = message;
      finish();
      return;
    }

    let i = 0;
    const textNode = document.createElement("span");
    lineEl.appendChild(textNode);
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    lineEl.appendChild(cursor);

    const type = () => {
      if (i < message.length) {
        textNode.textContent += message.charAt(i);
        i += 1;
        setTimeout(type, 28);
      } else {
        setTimeout(finish, 500);
      }
    };
    setTimeout(type, 250);
  }

  /* ---------------------------------------------------------------------
     Shelf rendering
     --------------------------------------------------------------------- */
  const shelf = document.getElementById("shelf");
  const shelfHint = document.getElementById("shelf-hint");

  function buildSpine(item) {
    const btn = document.createElement("button");
    btn.className = "spine" + (item.featured ? " featured" : "");
    btn.type = "button";
    btn.dataset.id = item.id;
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-label", `Open ${item.title} — ${item.type}`);
    btn.innerHTML = `<span>${item.spineLabel || item.title}</span>`;
    btn.addEventListener("click", () => openPanel(item));
    return btn;
  }

  if (shelf) {
    RESOURCES.forEach((item) => shelf.appendChild(buildSpine(item)));

    // Hide the "scroll to browse" hint after the first interaction.
    let hintHidden = false;
    const hideHint = () => {
      if (hintHidden || !shelfHint) return;
      hintHidden = true;
      shelfHint.classList.add("hidden");
    };
    shelf.addEventListener("scroll", hideHint, { once: true, passive: true });
    shelf.addEventListener("pointerdown", () => setTimeout(hideHint, 400), { once: true });
  }

  /* ---------------------------------------------------------------------
     Reading panel
     --------------------------------------------------------------------- */
  const backdrop = document.getElementById("panel-backdrop");
  const panel = document.getElementById("panel");
  let lastTrigger = null;

  function linkIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
    </svg>`;
  }

  function renderPanel(item) {
    const cta = item.links
      ? `<div class="panel-links">
          ${item.links
            .map(
              (l) => `
            <a class="panel-link-row" href="${l.url}" target="_blank" rel="noopener">
              <span class="dot"></span>
              <span class="meta">
                <span class="title">${l.title}</span>
                <span class="url">${l.url}</span>
              </span>
              ${linkIcon()}
            </a>`
            )
            .join("")}
        </div>`
      : `<a class="panel-cta" href="${item.url}" target="_blank" rel="noopener">
          Open resource ${linkIcon()}
        </a>`;

    panel.innerHTML = `
      <button class="panel-close" id="panel-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M18 6 6 18"/><path d="M6 6l12 12"/>
        </svg>
      </button>
      <div class="panel-icon">
        <svg viewBox="0 0 24 24" fill="none">${item.icon}</svg>
      </div>
      <div class="eyebrow">${item.category}</div>
      <h3 id="panel-title">${item.title}</h3>
      <span class="type-tag">${item.type}</span>
      <p class="desc">${item.description}</p>
      ${cta}
    `;

    document.getElementById("panel-close").addEventListener("click", closePanel);
  }

  function openPanel(item, pushHash) {
    lastTrigger = document.activeElement;
    renderPanel(item);
    backdrop.classList.add("open");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "panel-title");
    document.body.style.overflow = "hidden";
    if (pushHash !== false) history.replaceState(null, "", `#${item.id}`);
    requestAnimationFrame(() => {
      const closeBtn = document.getElementById("panel-close");
      if (closeBtn) closeBtn.focus();
    });
  }

  function closePanel() {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    history.replaceState(null, "", window.location.pathname + window.location.search);
    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
  }

  if (backdrop && panel) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closePanel();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("open")) closePanel();
    });
  }

  /* ---------------------------------------------------------------------
     Deep link support — opening index.html#chaicode-data-science jumps
     straight to that resource's reading panel.
     --------------------------------------------------------------------- */
  function openFromHash() {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const item = RESOURCES.find((r) => r.id === id);
    if (item) openPanel(item, false);
  }

  document.addEventListener("DOMContentLoaded", () => {
    runHero();
    openFromHash();
  });
  window.addEventListener("hashchange", openFromHash);
})();
