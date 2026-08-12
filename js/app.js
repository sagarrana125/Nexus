const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const tagline = ref('My personal learning zone');

        const resources = ref([
            {
                category: 'SQL',
                title: "CS50's SQL Course",
                description: "Harvard's introduction to databases using SQL. Learn to create, read, update, and delete data with relational databases.",
                type: 'Course',
                url: 'https://cs50.harvard.edu/sql/',
                isGoal: false,
                svg: `<ellipse cx="24" cy="12" rx="16" ry="6" />
                      <path d="M8 12 L8 36 C8 39.314 15.163 42 24 42 C32.837 42 40 39.314 40 36 L40 12" />
                      <path d="M8 24 C8 27.314 15.163 30 24 30 C32.837 30 40 27.314 40 24" />
                      <rect x="18" y="16" width="4" height="4" rx="1" fill="#0a192f" />
                      <rect x="26" y="16" width="4" height="4" rx="1" fill="#0a192f" />`
            },
            {
                category: 'Data Science',
                title: 'Chaicode Data Science',
                description: 'Learn data science by watching it happen. Every method gets an animation that shows what actually moves — then you write the code yourself.',
                type: 'Course',
                url: 'https://datascience.chaicode.com/',
                isGoal: false,
                svg: `<path d="M8 40 L40 40" />
                      <path d="M8 40 L8 8" />
                      <path d="M12 28 L20 20 L28 32 L36 14 L40 24" stroke-width="2.5" />
                      <circle cx="12" cy="28" r="2.5" fill="#0a192f" />
                      <circle cx="20" cy="20" r="2.5" fill="#0a192f" />
                      <circle cx="28" cy="32" r="2.5" fill="#0a192f" />
                      <circle cx="36" cy="14" r="2.5" fill="#0a192f" />`
            },
            {
                category: 'German Language',
                title: 'Short Stories in German',
                description: 'A beginner-friendly PDF book with short stories to help you learn German through reading. Perfect for building vocabulary and comprehension.',
                type: 'Book',
                url: 'https://github.com/Hazrat-Ali9/Deutschland-Story/blob/main/Short%20Stories%20in%20German%20for%20Beginners%20Book.pdf',
                isGoal: false,
                svg: `<path d="M12 8 L36 8 L36 40 L12 40 Z" />
                      <path d="M12 8 L24 16 L36 8" />
                      <path d="M18 20 L30 20" />
                      <path d="M18 26 L28 26" />
                      <path d="M18 32 L30 32" />`
            },
            {
                category: 'Open Source',
                title: 'Open Source Crash Course',
                description: 'A comprehensive workspace covering open source fundamentals, contribution guidelines, version control, and best practices for beginners.',
                type: 'Course',
                url: 'https://app.eraser.io/workspace/PaI6tlInajtHXxgdKUiz',
                isGoal: false,
                svg: `<circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="1.8" fill="none"/>
                      <circle cx="24" cy="24" r="13" stroke="currentColor" stroke-width="1.5" fill="none"/>
                      <path d="M24 13 L24 22" stroke="currentColor" stroke-width="1.8"/>
                      <circle cx="24" cy="26" r="3.5" stroke="currentColor" stroke-width="1.8" fill="none"/>`
            },
            {
                category: 'System Commands',
                title: 'System Commands Reference',
                description: 'A quick-reference notebook of essential system and terminal commands — handy for daily use, troubleshooting, and building command-line muscle memory.',
                type: 'Notes',
                url: 'https://rishi-2893.notion.site/System-Commands-3653481fd6ef4e7babe9cf223bd107bd',
                isGoal: false,
                svg: `<rect x="6" y="8" width="36" height="32" rx="3" />
                      <path d="M12 18 L18 24 L12 30" stroke-width="2.2" />
                      <path d="M22 30 L32 30" stroke-width="2.2" />`
            },
            {
                category: 'DSA',
                title: 'Programming, Data Structures and Algorithms',
                description: 'A structured course covering programming fundamentals, core data structures, and algorithms — the essential toolkit for problem solving and interviews.',
                type: 'Course',
                url: 'https://pdsaiitm.github.io/',
                isGoal: false,
                svg: `<circle cx="24" cy="10" r="4.5" />
                      <circle cx="10" cy="34" r="4.5" />
                      <circle cx="38" cy="34" r="4.5" />
                      <path d="M21.5 13.5 L12 30" />
                      <path d="M26.5 13.5 L36 30" />
                      <path d="M14.5 34 L33.5 34" />`
            },
            {
                category: 'Naval',
                title: "Naval's Blog",
                description: "Naval Ravikant's philosophical takes on wealth, happiness, and life — curated wisdom from one of tech's sharpest minds. Read, reflect, and grow.",
                type: 'Blog',
                url: 'https://nav.al/',
                isGoal: true,
                svg: `<circle cx="24" cy="24" r="18" />
                      <circle cx="24" cy="24" r="10" />
                      <circle cx="24" cy="24" r="4" />
                      <path d="M24 6 L24 14" />
                      <path d="M24 34 L24 42" />
                      <path d="M6 24 L14 24" />
                      <path d="M34 24 L42 24" />
                      <path d="M9 9 L15 15" />
                      <path d="M33 33 L39 39" />
                      <path d="M39 9 L33 15" />
                      <path d="M15 33 L9 39" />`
            }
        ]);

        const visitLink = (url) => {
            window.open(url, '_blank');
        };

        return { tagline, resources, visitLink };
    }
});

app.mount('#app');
