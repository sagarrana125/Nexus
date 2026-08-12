/* ==========================================================================
   NEXUS — Resource Data
   Add, remove, or edit cards here. Nothing else needs to change.

   Fields:
     category    – small eyebrow label (e.g. "SQL")
     title       – card heading
     description – one or two sentence summary
     type        – badge text shown bottom-left of the card ("Course", "Book"…)
     url         – where clicking the card goes
     internal    – true if `url` is a local page (e.g. "chaicode.html")
                   false/omitted if `url` is an external link that should
                   open in a new tab
     icon        – inline SVG path/shape markup (viewBox is fixed at 0 0 24 24)
   ========================================================================== */

const RESOURCES = [
  {
    category: "SQL",
    title: "CS50's SQL Course",
    description:
      "Harvard's introduction to databases using SQL. Learn to create, read, update, and delete data with relational databases.",
    type: "Course",
    url: "https://cs50.harvard.edu/sql/",
    icon: `<ellipse cx="12" cy="6" rx="8" ry="3"/>
           <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
           <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>`
  },
  {
    category: "Data Science",
    title: "Chaicode Data Science",
    description:
      "Learn data science by watching it happen. Every method gets an animation that shows what actually moves — then you write the code yourself.",
    type: "Course",
    url: "chaicode.html",
    internal: true,
    icon: `<path d="M4 20V4"/>
           <path d="M4 20h16"/>
           <path d="M7 15l4-5 4 6 4-9"/>`
  },
  {
    category: "German Language",
    title: "Short Stories in German",
    description:
      "A beginner-friendly PDF book with short stories to help you learn German through reading. Perfect for building vocabulary and comprehension.",
    type: "Book",
    url:
      "https://github.com/Hazrat-Ali9/Deutschland-Story/blob/main/Short%20Stories%20in%20German%20for%20Beginners%20Book.pdf",
    icon: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
           <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`
  },
  {
    category: "Open Source",
    title: "Open Source Crash Course",
    description:
      "A comprehensive workspace covering open source fundamentals, contribution guidelines, version control, and best practices for beginners.",
    type: "Course",
    url: "https://app.eraser.io/workspace/PaI6tlInajtHXxgdKUiz",
    icon: `<polyline points="16 18 22 12 16 6"/>
           <polyline points="8 6 2 12 8 18"/>`
  },
  {
    category: "System Commands",
    title: "System Commands Reference",
    description:
      "A quick-reference notebook of essential system and terminal commands — handy for daily use, troubleshooting, and building command-line muscle memory.",
    type: "Notes",
    url: "https://rishi-2893.notion.site/System-Commands-3653481fd6ef4e7babe9cf223bd107bd",
    icon: `<rect x="3" y="4" width="18" height="16" rx="2"/>
           <path d="M7 9l3 3-3 3"/>
           <path d="M12 15h5"/>`
  },
  {
    category: "DSA",
    title: "Programming, Data Structures and Algorithms",
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
    category: "Naval",
    title: "Naval's Blog",
    description:
      "Naval Ravikant's philosophical takes on wealth, happiness, and life — curated wisdom from one of tech's sharpest minds. Read, reflect, and grow.",
    type: "Blog",
    url: "https://nav.al/",
    icon: `<circle cx="12" cy="8" r="4"/>
           <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`
  }
];
