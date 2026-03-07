/**
 * Canonical language colors — sourced from GitHub Linguist.
 * Frameworks are mapped to their parent language's color.
 * Tools have their own brand colors.
 */
export const languageColors: Record<string, string> = {
    // ── Languages (GitHub Linguist colors) ──────────────────────────────
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Go: '#00ADD8',
    Python: '#3572A5',
    Rust: '#dea584',
    Java: '#b07219',
    Scala: '#c22d40',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563D7C',
    Shell: '#89e051',
    'Jupyter Notebook': '#DA5B0B',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Ruby: '#701516',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Dart: '#00B4AB',
    R: '#198CE7',
    Lua: '#000080',
    Haskell: '#5e5086',
    Clojure: '#db5855',
    TeX: '#3D6117',
    SQL: '#e38c00',

    // ── Frameworks → same color as parent language ───────────────────────
    'React': '#f1e05a', // JavaScript
    'Next.js': '#3178c6', // TypeScript
    'PostgreSQL': '#e38c00', // SQL
    'MySQL': '#e38c00', // SQL

    // ── Tools (brand colors) ─────────────────────────────────────────────
    'Docker': '#2496ED',
    'MongoDB': '#47A248',
    'Git': '#F05033',

    // ── Project tag extras ───────────────────────────────────────────────
    'Data': '#a78bfa', // generic purple for data/datasets
    'Chrome Extension': '#4285F4', // Google blue
}
