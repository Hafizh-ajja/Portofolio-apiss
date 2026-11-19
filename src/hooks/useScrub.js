import { useEffect, useRef } from 'react'

/**
 * Scroll-linked parallax ringan. Menulis offset ke CSS variable `--sy`
 * pada elemen, jadi animasinya tidak memicu render React.
 * Update hanya jalan saat elemen mendekati viewport.
 *
 * Pakai: const ref = useScrub(26)
 * CSS : transform / translate memakai var(--sy)
 */
export function useScrub(strength = 26) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(max-width: 900px)').matches) return

    let frame = 0
    let visible = false

    const update = () => {
      frame = 0
      if (!visible) return
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const offset = (rect.top + rect.height / 2 - vh / 2) / vh
      const clamped = Math.max(-1, Math.min(1, offset * 2))
      node.style.setProperty('--sy', `${(clamped * strength).toFixed(2)}px`)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) onScroll()
      },
      { rootMargin: '120px 0px' },
    )
    observer.observe(node)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [strength])

  return ref
}
