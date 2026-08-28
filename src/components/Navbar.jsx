import { useState } from 'react'

export default function Navbar({ links = [] }) {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo">
          HAFIZH<span>FAQOT</span>
        </div>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#kontak" className="nav-cta">
          Hubungi Saya
        </a>

        <button className="burger" aria-label="Buka menu" onClick={() => setOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
