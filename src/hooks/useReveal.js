import { useEffect, useRef, useState } from 'react'

/**
 * Hook reusable untuk animasi "muncul saat discroll".
 * Pakai: const [ref, isVisible] = useReveal()
 * lalu: <div ref={ref} className={`reveal ${isVisible ? 'in' : ''}`}>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
