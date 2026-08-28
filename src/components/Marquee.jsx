export default function Marquee({ items = [] }) {
  // digandakan supaya loop scroll-nya mulus (seamless)
  const doubled = [...items, ...items]

  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>★ {item}</span>
        ))}
      </div>
    </div>
  )
}
