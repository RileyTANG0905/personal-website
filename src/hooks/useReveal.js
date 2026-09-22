import { useEffect, useRef, useState } from 'react'

// Adds .in class when element scrolls into view (IntersectionObserver).
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        io.unobserve(el)
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, shown]
}
