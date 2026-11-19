export default function Marquee({ items = [], reverse = false, alt = false }) {
  // digandakan supaya loop scroll-nya mulus (seamless)
  const doubled = [...items, ...items]

  return (
    <div className={`marquee-bar ${alt ? 'is-alt' : ''}`}>
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span key={i}>★ {item}</span>
        ))}
      </div>
    </div>
  )
}
