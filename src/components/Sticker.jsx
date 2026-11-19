export default function Sticker({ color = 'yellow', rotate = 0, delay = 0, style = {}, children }) {
  return (
    <div
      className="sticker"
      style={{
        background: `var(--${color})`,
        '--r': `${rotate}deg`,
        '--delay': `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
