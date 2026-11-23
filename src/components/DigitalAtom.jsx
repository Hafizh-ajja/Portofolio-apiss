import { useState } from 'react'
import { atomElectrons } from '../data/atomElectrons'
import TechLogo from './TechLogo'
import './DigitalAtom.css'

/**
 * Tiap orbit hanya berupa bidang 3D tak terlihat. Lintasan dibentuk semata-mata
 * oleh posisi logo yang berputar, sehingga tidak ada garis/ring orbit sama sekali.
 */
const ORBITS = [
  { id: 'orbit-a', tiltZ: 0, tiltX: 68, duration: 12, direction: 'normal', color: 'rgba(94,231,255,.75)' },
  { id: 'orbit-b', tiltZ: 60, tiltX: 72, duration: 16, direction: 'reverse', color: 'rgba(255,111,156,.6)' },
  { id: 'orbit-c', tiltZ: 120, tiltX: 64, duration: 10, direction: 'normal', color: 'rgba(58,166,255,.55)' },
]

export default function DigitalAtom() {
  const [pausedOrbit, setPausedOrbit] = useState(null)

  return (
    <div
      className="digital-atom"
      role="img"
      aria-label="Atom digital dengan inti H dan logo React, JavaScript, HTML5, CSS3, Node.js, serta Tailwind CSS yang mengorbit tanpa garis lintasan"
    >
      <div className="digital-atom__backdrop" aria-hidden="true">
        <span className="digital-atom__halftone" />
      </div>
      <span className="digital-atom__glow" aria-hidden="true" />
      <span className="digital-atom__spark digital-atom__spark--a" aria-hidden="true">
        ✦
      </span>
      <span className="digital-atom__spark digital-atom__spark--b" aria-hidden="true">
        ✳
      </span>

      <div className="digital-atom__scene">
        {ORBITS.map((orbit, index) => {
          const isPaused = pausedOrbit === index
          const counterDirection = orbit.direction === 'normal' ? 'reverse' : 'normal'

          return (
            <div
              key={orbit.id}
              className={`atom-orbit ${isPaused ? 'is-paused' : ''}`}
              style={{
                '--tilt-z': `${orbit.tiltZ}deg`,
                '--tilt-x': `${orbit.tiltX}deg`,
                '--orbit-duration': `${orbit.duration}s`,
                '--orbit-color': orbit.color,
                '--spin-direction': orbit.direction,
                '--counter-direction': counterDirection,
              }}
            >
              {/* Spinner tidak memiliki border/background: hanya menggerakkan posisi logo */}
              <div className="atom-orbit__spinner">
                {atomElectrons
                  .filter((electron) => electron.orbit === index)
                  .map((electron) => (
                    <span
                      key={electron.id}
                      className="atom-electron"
                      style={{
                        '--angle': `${electron.angle}deg`,
                        '--logo-size': electron.featured ? 'var(--logo-featured)' : 'var(--logo-base)',
                      }}
                    >
                      {/* 1. lawan rotasi spinner */}
                      <span className="atom-electron__counter">
                        {/* 2. lawan kemiringan bidang orbit agar logo tetap tegak & tidak gepeng */}
                        <span className="atom-electron__upright">
                          <span
                            className={`atom-logo atom-logo--${electron.angle === 0 ? 'depth-a' : 'depth-b'} ${electron.glow ? 'atom-logo--glow' : ''}`}
                            data-label={electron.label}
                            aria-hidden="true"
                            onMouseEnter={() => setPausedOrbit(index)}
                            onMouseLeave={() => setPausedOrbit(null)}
                          >
                            <TechLogo name={electron.logo} />
                          </span>
                        </span>
                      </span>
                    </span>
                  ))}
              </div>
            </div>
          )
        })}

        <div className="atom-nucleus" aria-hidden="true">
          <span className="atom-nucleus__core">H</span>
        </div>
      </div>
    </div>
  )
}
