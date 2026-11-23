import Sticker from './Sticker'
import Button from './Button'
import { useParallax } from '../hooks/useParallax'

const titleWords = [
  { text: 'Welcome', color: 'c1' },
  { text: 'to', color: 'c2' },
  { text: 'My', color: 'c3' },
  { text: 'Portfolio', color: 'c3' },
]

export default function Hero({ photoSrc = null }) {
  const parallaxRef = useParallax(18)

  return (
    <section className="hero" ref={parallaxRef}>
      <div className="halftone" />
      <div className="doodles" aria-hidden="true">
        <span className="doodle d1">✦</span>
        <span className="doodle d2">✳</span>
        <span className="doodle d3">✺</span>
        <span className="doodle d4">✚</span>
      </div>

      <Sticker color="yellow" rotate={9} delay={0.2} style={{ top: '6%', right: '6%' }}>
        Open to work
      </Sticker>
      <Sticker color="green" rotate={-7} delay={0.9} style={{ bottom: '4%', left: '2%' }}>
        Est. 2023
      </Sticker>

      <div className="wrap hero-inner">
        <div>
          <h1>
            <span className="line">
              {titleWords.slice(0, 2).map((word, i) => (
                <span
                  key={word.text}
                  className={`word ${word.color}`}
                  style={{ '--d': `${0.08 + i * 0.1}s` }}
                >
                  {word.text}
                </span>
              ))}
              <span className="word comma" style={{ '--d': '0.28s' }}>
                ,
              </span>
            </span>
            <br />
            <span className="line">
              {titleWords.slice(2).map((word, i) => (
                <span
                  key={word.text}
                  className={`word ${word.color}`}
                  style={{ '--d': `${0.38 + i * 0.1}s` }}
                >
                  {word.text}
                </span>
              ))}=
              <span className="word period" style={{ '--d': '0.58s' }}>
                .
              </span>
            </span>
          </h1>

          <p className="lead fade-up" style={{ '--d': '0.55s' }}>
            Halo! Saya Hafizh, seorang siswa dari sekolah developer indonesia. saya web developer yang suka mengemas kode jadi pengalaman visual
            yang hidup — bukan sekadar tampilan kaku di layar.
          </p>

          <div className="hero-actions fade-up" style={{ '--d': '0.7s' }}>
            <Button href="#proyek" variant="primary">
              Lihat Proyek
            </Button>
            <Button href="#kontak" variant="ghost">
              Hubungi Saya
            </Button>
          </div>
        </div>

        <div className="hero-photo">
          <div className="tape" />
          <div className="frame">
            <div className="photo-slot">
              {photoSrc ? (
                <img src={photoSrc} alt="Foto Hafizh" />
              ) : (
                <div className="photo-placeholder" aria-hidden="true" />
              )}
            </div>
            <div className="cap">— this me! —</div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#tentang" aria-label="Gulir ke bagian tentang">
        scroll
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
