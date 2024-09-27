'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TITLE = ['Unlock', 'Brand', 'Success', 'Through', 'Tailwind CSS', 'React.js', 'Next.js']

export default function Caption() {
  const captionContainer = useRef<HTMLElement>(null!)
  const captionBackground = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      const array = gsap.utils.toArray('.title__text')
      const splice = array.splice(1, array.length)

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: captionContainer.current,
          start: 'top top',
          end: '+=3000 bottom',
          scrub: true,
          pin: true,
          pinSpacing: false,
          /* When we give a specific number of pixels to END property, thos pixels minus the height of the trigger give a padding bottom, with pinSpacing in false, we can remove this padding bottom. */

          /* In this example is required because the grid section has 100% downward offset */
          /* A Full Vertical Offset */
        },
      })

      gsap.set(captionBackground.current, { width: 0 })
      gsap.set(splice, { display: 'none' })

      tl1
        .to(captionBackground.current, { width: 'calc(100% - 4rem)' }, 0)

        .to(splice, { display: 'inline-block', stagger: 0.15 }, 0)

        .to(captionBackground.current, { scale: 1.2 }, 0.5)
    },
    { dependencies: [] },
  )

  return (
    <section
      ref={captionContainer}
      className="relative w-full h-screen overflow-clip"
    >
      <div className="size-full">
        <div className="flex justify-center mix-blend-difference items-center size-full px-[4rem]">
          <div className="inline-flex flex-wrap justify-center gap-x-[1rem] gap-y-[3rem] [&>span]:text-[4rem]">
            {TITLE.map((text, i) => (
              <span
                key={i}
                className="title__text text-foreground"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={captionBackground}
          className="absolute left-8 top-8 w-0 h-full rounded-[3.2rem] -z-10 bg-foreground"
        ></div>
      </div>
    </section>
  )
}
