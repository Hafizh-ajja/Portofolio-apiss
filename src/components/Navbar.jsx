import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ links = [] }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
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

        <div className="nav-actions">
          <ThemeToggle />

          <a href="#kontak" className="nav-cta">
            Hubungi Saya
          </a>
        </div>

        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
