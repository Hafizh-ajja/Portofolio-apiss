const COLORS = ['yellow', 'pink', 'green', 'purple']

export default function Tag({ children, index = 0, floatIndex = index }) {
  const color = COLORS[index % COLORS.length]
  const rotate = index % 2 === 0 ? -2 : 1.5

  // Variasi floating: durasi 3,2s–4,8s, delay berurutan, dan sebagian badges melenceng diagonal.
  const floatDuration = 3.2 + (floatIndex % 5) * 0.4
  const floatDelay = 0.65 + floatIndex * 0.07
  const floatY = 5 + (floatIndex % 3)
  const diagonal = floatIndex % 4 === 1 ? 4 : floatIndex % 4 === 3 ? -4 : 0
  const hoverRotate = floatIndex % 2 === 0 ? -2.5 : 2.5

  return (
    <span
      className="tag-float"
      style={{
        '--float-duration': `${floatDuration}s`,
        '--float-delay': `${floatDelay}s`,
        '--float-x': `${diagonal}px`,
        '--float-up': `-${floatY}px`,
      }}
    >
      <span
        className={`tag tag--${color}`}
        style={{
          background: `var(--${color})`,
          color: 'var(--on-accent)',
          '--tr': `${rotate}deg`,
          '--td': `${index * 0.06}s`,
          '--hover-r': `${hoverRotate}deg`,
        }}
      >
        {children}
      </span>
    </span>
  )
}
