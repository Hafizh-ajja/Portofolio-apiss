import { useEffect, useRef } from 'react'

export default function CertificateModal({ certificate, isOpen = false, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!certificate) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [certificate, onClose])

  useEffect(() => {
    if (certificate && isOpen) closeButtonRef.current?.focus()
  }, [certificate, isOpen])

  if (!certificate) return null

  const { title, issuer, year, category, color, image } = certificate

  return (
    <div
      className={`cert-modal ${isOpen ? 'is-open' : ''}`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="cert-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="cert-modal__close"
          onClick={onClose}
          aria-label="Tutup preview sertifikat"
        >
          ×
        </button>

        <div className="cert-modal__preview">
          <img src={image} alt={`Preview sertifikat demo: ${title}`} />
        </div>

        <div className="cert-modal__info">
          <span className={`cert-badge cert-badge--${color}`}>{category}</span>
          <h3 id="certificate-modal-title">{title}</h3>
          <p>
            {issuer} <span aria-hidden="true">•</span> {year}
          </p>
        </div>
      </div>
    </div>
  )
}
