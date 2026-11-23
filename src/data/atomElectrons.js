/**
 * Logo teknologi yang membentuk 3 jalur orbit pada DigitalAtom.
 * `orbit`: 0 / 1 / 2 mengacu pada orbit di DigitalAtom.
 * `angle`: posisi awal di orbit (derajat) — dua logo berlawanan tiap orbit.
 * `featured`: React & JavaScript sedikit lebih besar.
 * `glow`: glow ringan hanya pada beberapa logo.
 */
export const atomElectrons = [
  { id: 'react', label: 'React', logo: 'react', orbit: 0, angle: 0, featured: true, glow: true },
  { id: 'javascript', label: 'JavaScript', logo: 'javascript', orbit: 0, angle: 180, featured: true, glow: true },

  { id: 'html5', label: 'HTML5', logo: 'html5', orbit: 1, angle: 0, featured: false, glow: false },
  { id: 'css3', label: 'CSS3', logo: 'css3', orbit: 1, angle: 180, featured: false, glow: false },

  { id: 'nodejs', label: 'Node.js', logo: 'nodejs', orbit: 2, angle: 0, featured: false, glow: false },
  { id: 'tailwind', label: 'Tailwind CSS', logo: 'tailwind', orbit: 2, angle: 180, featured: false, glow: true },
]
