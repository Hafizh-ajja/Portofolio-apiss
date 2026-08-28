export default function Sticker({ color = 'yellow', rotate = 0, style = {}, children }) {
  return (
    <div
      className="sticker"
      style={{
        background: `var(--${color})`,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
