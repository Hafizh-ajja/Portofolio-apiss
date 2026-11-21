export default function CertificateCard({ certificate, index = 0, onOpen }) {
  const { title, issuer, year, category, color, image } = certificate
  const tilt = index % 2 === 0 ? '-1.2deg' : '1.2deg'

  return (
    <button
      type="button"
      className="certificate-card"
      style={{ '--tilt': tilt }}
      onClick={(event) => onOpen(certificate, event.currentTarget)}
      aria-label={`Lihat preview sertifikat demo: ${title} dari ${issuer}`}
    >
      <span className="certificate-card__preview">
        <img src={image} alt={`Preview sertifikat demo: ${title}`} loading="lazy" />
      </span>

      <span className="certificate-card__body">
        <span className={`cert-badge cert-badge--${color}`}>{category}</span>
        <span className="certificate-card__title">{title}</span>
        <span className="certificate-card__meta">
          <span className="certificate-card__issuer">{issuer}</span>
          <span className="certificate-card__year">{year}</span>
        </span>
      </span>
    </button>
  )
}
