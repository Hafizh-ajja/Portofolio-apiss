import Reveal from './Reveal'

const links = [
  { label: 'hhafizh662@gmail.com', href: 'mailto:hhafizh662@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Hafizh-ajja' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hafizh-09ab5937a/' },
  { label: 'Instagram', href: 'https://www.instagram.com/_avizz_27/' },
  { label: 'WhatsApp', href: 'https://wa.me/6281356561035' },
]

export default function Contact() {
  return (
    <section id="kontak">
      <div className="wrap">
        <Reveal className="contact-box">
          <div className="halftone" style={{ opacity: 0.15 }} />
          <span className="contact-orb" aria-hidden="true" />
          <h2>Yuk, ngobrol!</h2>
          <p>Terbuka untuk kerja freelance, kontrak, maupun full-time.</p>
          <div className="contact-links">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
