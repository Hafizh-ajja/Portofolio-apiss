import { useCallback, useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CertificateCard from './CertificateCard'
import CertificateModal from './CertificateModal'
import { certificates } from '../data/certificates'
import './Certificates.css'

export default function Certificates() {
  const [active, setActive] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const closeTimer = useRef(0)
  const openFrame = useRef(0)
  const triggerRef = useRef(null)

  useEffect(
    () => () => {
      window.clearTimeout(closeTimer.current)
      window.cancelAnimationFrame(openFrame.current)
    },
    [],
  )

  const openModal = useCallback((certificate, trigger) => {
    window.clearTimeout(closeTimer.current)
    window.cancelAnimationFrame(openFrame.current)
    triggerRef.current = trigger
    setActive(certificate)
    openFrame.current = window.requestAnimationFrame(() => setIsOpen(true))
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setActive(null)
      triggerRef.current?.focus()
    }, 260)
  }, [])

  return (
    <section id="sertifikat" className="certificates">
      <div className="certificates__doodles" aria-hidden="true">
        <span className="certificates__doodle certificates__doodle--a">✦</span>
        <span className="certificates__doodle certificates__doodle--b">✳</span>
        <span className="certificates__doodle certificates__doodle--c">★</span>
      </div>

      <div className="wrap">
        <SectionHeading tag="achievement unlocked" title="SERTIFIKAT & PENCAPAIAN" />

        <div className="certificates__grid">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.id} style={{ transitionDelay: `${index * 80}ms` }}>
              <CertificateCard certificate={certificate} index={index} onOpen={openModal} />
            </Reveal>
          ))}
        </div>
      </div>

      <CertificateModal certificate={active} isOpen={isOpen} onClose={closeModal} />
    </section>
  )
}
