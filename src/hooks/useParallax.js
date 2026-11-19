import { useEffect, useRef } from 'react'

/**
 * Hook untuk efek parallax halus mengikuti posisi mouse.
 * Menyimpan nilai ke CSS variable pada elemen:
 *   --mx / --my  -> offset dalam px (dipakai untuk translate)
 *   --px / --py  -> posisi dalam persen (dipakai untuk gradient)
 *
 * Pakai: const ref = useParallax(18)
 * lalu:  <section ref={ref}> ... <div style={{transform:'translate(var(--mx), var(--my))'}}/>
 */
export function useParallax(strength = 16) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(max-width: 900px)').matches) return

    let frame = 0

    const onMove = (event) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const x = event.clientX / window.innerWidth
        const y = event.clientY / window.innerHeight
        node.style.setProperty('--px', `${(x * 100).toFixed(2)}%`)
        node.style.setProperty('--py', `${(y * 100).toFixed(2)}%`)
        node.style.setProperty('--mx', `${((x - 0.5) * strength).toFixed(2)}px`)
        node.style.setProperty('--my', `${((y - 0.5) * strength).toFixed(2)}px`)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [strength])

  return ref
}
