# Nexus.

My personal learning zone — a single, calm homepage for every course, book,
and reference worth coming back to.

Minimalist by design: a monochrome grey/silver palette, one serif display
face for identity, restrained line icons, and generous whitespace instead
of color to create hierarchy. No frameworks — plain HTML, CSS, and JS.

## Live structure

```
Nexus/
├── index.html          Homepage — header, hero, resource grid, footer
├── chaicode.html        Chaicode detail page (reached from the Chaicode card)
├── css/
│   └── style.css        All styling — design tokens + light/dark theme
├── js/
│   ├── data.js           Resource data (edit this to add/remove cards)
│   ├── app.js             Renders the resource grid on index.html
│   └── theme.js            Light/dark mode toggle, shared by every page
└── README.md
```

## Every page follows the same three-part layout

| Section | What lives there |
|---|---|
| **Header** | Logo ("Nexus.") + theme toggle, sticky, hairline bottom border |
| **Body**   | Page-specific content — homepage hero + resource grid, or a detail page's intro + link list |
| **Footer** | A centered dot, copyright, and one line of credit |

## How the homepage works

`index.html` renders an empty `<div id="resource-grid">`. On load,
`js/app.js` reads the `RESOURCES` array from `js/data.js` and builds one
card per entry — icon, category, title, description, type badge, and a
"Visit →" affordance.

Each card does one of two things when clicked:

- **`internal: true`** → navigates to a local page (e.g. the Chaicode card
  routes to `chaicode.html`).
- **no `internal` flag** → opens the external `url` in a new tab.

### Adding or editing a resource

Open `js/data.js` and add an object to the `RESOURCES` array:

```js
{
  category: "Category",
  title: "Card Title",
  description: "One or two sentences.",
  type: "Course",           // shown as the badge, e.g. Course / Book / Notes / Blog
  url: "https://example.com",
  icon: `<path d="..."/>`   // any 24x24 line-art SVG markup
}
```

No other file needs to change — `app.js` picks it up automatically.

## Chaicode detail page

Clicking the **Chaicode Data Science** card opens `chaicode.html`, a
dedicated page (mirroring the homepage's header/footer) that lists every
Chaicode platform as its own clickable row, each opening in a new tab:

- **Chaicode Products** → https://chaicode.com/products
- **Chaicode Labs** → https://labs.chaicode.com/
- **Chaicode Data Science Course** → https://datascience.chaicode.com/

To give another resource the same "landing page with sub-links" treatment,
duplicate `chaicode.html`, swap the copy/links, and set that resource's
`internal: true` with `url` pointing at your new file.

## Theming

`js/theme.js` reads the visitor's OS-level `prefers-color-scheme` on first
paint and applies `data-theme="light"` or `data-theme="dark"` to `<html>`.
The header's circular button flips it for the rest of the session. All
colors are CSS custom properties defined once in `css/style.css` under
`:root` (light) and `[data-theme="dark"]` (dark) — change a value there and
it updates everywhere.

## Running locally

No build step. Open `index.html` directly in a browser, or serve the
folder for cleaner relative paths:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Credits

Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) and
[Inter](https://fonts.google.com/specimen/Inter) (body), both via Google
Fonts.
