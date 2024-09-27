'use client'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) lenis.scrollTo(0)
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothWheel: true,
        touchMultiplier: 0.5,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  )
}
