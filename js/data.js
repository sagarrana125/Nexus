/* ==========================================================================
   NEXUS — Resource Data
   Add, remove, or edit books on the shelf here. Nothing else needs to change.

   Fields:
     id          – unique slug, used for the #hash deep link (no spaces)
     category    – small eyebrow label (e.g. "SQL")
     title       – full title, shown on the reading panel
     spineLabel  – short label printed on the spine (2–4 words fits best)
     description – one or two sentences, shown on the reading panel
     type        – badge text ("Course", "Book", "Notes", "Blog"…)
     url         – single destination link (used unless `links` is set)
     links       – OPTIONAL array of {title, url} for a resource that has
                   more than one place to go (see "Chaicode" below).
                   When present, this replaces the single CTA button with
                   a short list of link rows.
     featured    – OPTIONAL true to render this spine in graphite (use
                   sparingly — at most one at a time)
     icon        – inline SVG markup, 24x24 viewBox
   ========================================================================== */

const RESOURCES = [
  {
    id: "cs50-sql",
    category: "SQL",
    title: "CS50's SQL Course",
    spineLabel: "CS50 SQL",
    description:
      "Harvard's introduction to databases using SQL. Learn to create, read, update, and delete data with relational databases.",
    type: "Course",
    url: "https://cs50.harvard.edu/sql/",
    icon: `<ellipse cx="12" cy="6" rx="8" ry="3"/>
           <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
           <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>`
  },
  {
    id: "chaicode-data-science",
    category: "Data Science",
    title: "Chaicode Data Science",
    spineLabel: "Chaicode",
    description:
      "Learn data science by watching it happen. Every method gets an animation that shows what actually moves — then you write the code yourself.",
    type: "Course",
    featured: true,
    links: [
      { title: "Chaicode Products", url: "https://chaicode.com/products" },
      { title: "Chaicode Labs", url: "https://labs.chaicode.com/" },
      { title: "Chaicode Data Science Course", url: "https://datascience.chaicode.com/" }
    ],
    icon: `<path d="M4 20V4"/>
           <path d="M4 20h16"/>
           <path d="M7 15l4-5 4 6 4-9"/>`
  },
  {
    id: "german-short-stories",
    category: "German Language",
    title: "Short Stories in German",
    spineLabel: "Deutsch",
    description:
      "A beginner-friendly PDF book with short stories to help you learn German through reading. Perfect for building vocabulary and comprehension.",
    type: "Book",
    url:
      "https://github.com/Hazrat-Ali9/Deutschland-Story/blob/main/Short%20Stories%20in%20German%20for%20Beginners%20Book.pdf",
    icon: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
           <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`
  },
  {
    id: "open-source-crash-course",
    category: "Open Source",
    title: "Open Source Crash Course",
    spineLabel: "Open Source",
    description:
      "A comprehensive workspace covering open source fundamentals, contribution guidelines, version control, and best practices for beginners.",
    type: "Course",
    url: "https://app.eraser.io/workspace/PaI6tlInajtHXxgdKUiz",
    icon: `<polyline points="16 18 22 12 16 6"/>
           <polyline points="8 6 2 12 8 18"/>`
  },
  {
    id: "system-commands",
    category: "System Commands",
    title: "System Commands Reference",
    spineLabel: "Commands",
    description:
      "A quick-reference notebook of essential system and terminal commands — handy for daily use, troubleshooting, and building command-line muscle memory.",
    type: "Notes",
    url: "https://rishi-2893.notion.site/System-Commands-3653481fd6ef4e7babe9cf223bd107bd",
    icon: `<rect x="3" y="4" width="18" height="16" rx="2"/>
           <path d="M7 9l3 3-3 3"/>
           <path d="M12 15h5"/>`
  },
  {
    id: "programming-dsa",
    category: "DSA",
    title: "Programming, Data Structures and Algorithms",
    spineLabel: "DSA",
    description:
      "A structured course covering programming fundamentals, core data structures, and algorithms — the essential toolkit for problem solving and interviews.",
    type: "Course",
    url: "https://pdsaiitm.github.io/",
    icon: `<circle cx="6" cy="6" r="3"/>
           <circle cx="6" cy="18" r="3"/>
           <path d="M6 9v6"/>
           <path d="M18 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
           <path d="M6 6h6a3 3 0 0 1 3 3v3"/>`
  },
  {
    id: "navals-blog",
    category: "Naval",
    title: "Naval's Blog",
    spineLabel: "Naval",
    description:
      "Naval Ravikant's philosophical takes on wealth, happiness, and life — curated wisdom from one of tech's sharpest minds. Read, reflect, and grow.",
    type: "Blog",
    url: "https://nav.al/",
    icon: `<circle cx="12" cy="8" r="4"/>
           <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`
  }
];
