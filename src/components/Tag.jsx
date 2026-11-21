const COLORS = ['yellow', 'pink', 'green', 'purple']

export default function Tag({ children, index = 0 }) {
  const color = COLORS[index % COLORS.length]
  const rotate = index % 2 === 0 ? -2 : 1.5

  return (
    <span
      className="tag"
      style={{
        background: `var(--${color})`,
        color: 'var(--on-accent)',
        '--tr': `${rotate}deg`,
        '--td': `${index * 0.06}s`,
      }}
    >
      {children}
    </span>
  )
}
