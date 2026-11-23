/**
 * Logo teknologi inline SVG — tidak menambah dependency/library baru.
 * Bentuk disederhanakan tapi tetap memakai warna & ciri khas masing-masing logo.
 */
const LOGOS = {
  react: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="#61DAFB" strokeWidth="4">
        <ellipse cx="50" cy="50" rx="45" ry="17" />
        <ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="8" fill="#61DAFB" />
    </svg>
  ),

  javascript: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="6" fill="#F7DF1E" />
      <text
        x="50" y="72" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontSize="46" fontWeight="900"
        fill="#0B1020"
      >
        JS
      </text>
    </svg>
  ),

  html5: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 4 92 16 84 82 50 96 16 82 8 16Z" fill="#E44D26" />
      <path d="M50 4 92 16 84 82 50 96Z" fill="#F16529" />
      <text
        x="50" y="78" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontSize="56" fontWeight="900"
        fill="#FFFFFF"
      >
        5
      </text>
    </svg>
  ),

  css3: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 4 92 16 84 82 50 96 16 82 8 16Z" fill="#1572B6" />
      <path d="M50 4 92 16 84 82 50 96Z" fill="#33A9DC" />
      <text
        x="50" y="78" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontSize="56" fontWeight="900"
        fill="#FFFFFF"
      >
        3
      </text>
    </svg>
  ),

  nodejs: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 4 89 26 89 74 50 96 11 74 11 26Z" fill="#3C873A" />
      <path d="M50 4 89 26 89 74 50 96Z" fill="#68A063" />
      <text
        x="50" y="62" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontSize="27" fontWeight="900"
        fill="#FFFFFF"
      >
        node
      </text>
    </svg>
  ),

  tailwind: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#38BDF8"
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.41.65 2.08 1.15.88.66 1.87 1.4 3.42 1.4 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.41-.65-2.08-1.15C14.44 6.66 13.45 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.41.65 2.08 1.15.88.66 1.87 1.4 3.42 1.4 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.41-.65-2.08-1.15C9.44 12.66 8.45 12 7 12zm5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.41.65 2.08 1.15.88.66 1.87 1.4 3.42 1.4 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.41-.65-2.08-1.15C14.44 18.66 13.45 18 12 18z"
      />
    </svg>
  ),
}

export default function TechLogo({ name }) {
  return LOGOS[name] ?? null
}
