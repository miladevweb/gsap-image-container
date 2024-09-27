import Image from 'next/image'
import styles from './index.module.css'
import { GET_IMAGE } from '@/constants'

export default function Hero() {
  const { url, label } = GET_IMAGE(7)

  return (
    <section className="relative h-screen overflow-clip z-50">
      <div className="flex items-center size-full p-[8rem]">
        <div className="flex flex-wrap items-center h-max gap-8">
          <div className="mix-blend-overlay pl-[20rem]">
            <h1>We</h1>
          </div>

          <div style={{ flex: '0 0 15vw' }}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos nisi magni distinctio eveniet temporibus quisquam repellat necessitatibus ipsa blanditiis?</span>
          </div>

          <div className="mix-blend-overlay">
            <h1>Are</h1>
          </div>

          <div className="mix-blend-overlay">
            <h1>Digital</h1>
          </div>

          <div className="mix-blend-overlay pl-[20rem]">
            <h1>Makers</h1>
          </div>
        </div>

        <div className={`${styles.heroBackground} absolute top-0 left-0 size-full -z-10`}>
          <picture className="size-full">
            <Image
              src={url}
              alt={label}
              className="hue-rotate-30"
              //
              fill
              priority
              sizes="(max-width: 640px) 50vw, 75vw"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
