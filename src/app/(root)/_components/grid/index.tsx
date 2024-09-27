'use client'
import Image from 'next/image'
import { GET_IMAGE } from '@/constants'
import { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const { label, url } = GET_IMAGE(6)

export default function Grid() {
  const gridContainer = useRef<HTMLElement>(null!)
  const gridWrapper = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridContainer.current,
          start: 'top top',
          end: '+=5000 bottom',
          scrub: true,
          pin: true,
        },
      })

      gsap.set(gridWrapper.current, { yPercent: 100, autoAlpha: 0 })

      tl.to(gridWrapper.current, { yPercent: 0, autoAlpha: 1 }, 0.2).to(gridWrapper.current, { scale: 3.5 }, 0.5)
    },
    { dependencies: [] },
  )

  return (
    <section
      ref={gridContainer}
      className="w-full h-screen overflow-clip z-[200] relative"
    >
      <div ref={gridWrapper}>
        <div className="flex flex-wrap justify-center gap-[1rem]">
          {Array.from({ length: 9 }, (_, i) => (
            <picture
              key={i}
              className="w-[calc((100vw/3)-5rem)] h-[32vh]"
            >
              <Image
                key={i}
                src={url}
                alt={label}
                //
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 75vw"
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  )
}
