import { useEffect, useState } from 'react'

const WORD = 'HAFIZH'

export default function IntroLoader({ duration = 1100 }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      root.classList.remove('is-loading')
      setDone(true)
      return
    }

    document.body.style.overflow = 'hidden'

    // jaring pengaman kalau komponen berhenti di tengah jalan
    const failSafe = window.setTimeout(() => root.classList.remove('is-loading'), 4000)

    const start = performance.now()
    let frame = 0
    let exitTimer = 0
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      cancelAnimationFrame(frame)
      setProgress(100)
      setLeaving(true)
      document.body.style.overflow = ''
      root.classList.remove('is-loading')
      exitTimer = window.setTimeout(() => setDone(true), 720)
    }

    const tick = (now) => {
      const ratio = Math.min((now - start) / duration, 1)
      setProgress(Math.round(ratio * 100))
      if (ratio < 1) frame = requestAnimationFrame(tick)
      else finish()
    }

    frame = requestAnimationFrame(tick)

    // timer tetap memastikan loader selesai walau rAF ditahan browser
    const exitAt = window.setTimeout(finish, duration + 80)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(exitAt)
      window.clearTimeout(exitTimer)
      window.clearTimeout(failSafe)
      document.body.style.overflow = ''
    }
  }, [duration])

  if (done) return null

  return (
    <div
      className={`intro ${leaving ? 'is-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
    >
      <div className="intro-grain" aria-hidden="true" />
      <span className="intro-star" aria-hidden="true">
        ✦
      </span>

      <div className="intro-inner">
        <span className="intro-badge">Portfolio</span>

        <div className="intro-word" aria-hidden="true">
          {WORD.split('').map((char, i) => (
            <span key={i} style={{ '--i': i }}>
              {char}
            </span>
          ))}
          <span className="intro-dot" style={{ '--i': WORD.length }}>
            .
          </span>
        </div>

        <p className="intro-sub">Web Developer &amp; Visual Thinker</p>

        <div className="intro-bar" aria-hidden="true">
          <span className="intro-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="intro-meta" aria-hidden="true">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  )
}
