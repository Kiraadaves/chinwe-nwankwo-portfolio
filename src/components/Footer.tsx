import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const texts = [
  'an epic',
  'a badass',
  'a firstclass',
  'an amazing',
  'a terrific',
  'an awesome',
  'a sensational',
]

const SlidingText = ({
  day,
  theme,
}: {
  day: string
  theme: string | undefined
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const nextIndex = (index + 1) % texts.length

  return (
    <div className="flex items-start gap-2 text-3xl lg:text-4xl font-bold text-white/90 flex-wrap">
      <span>Have</span>

      <span className="relative inline-flex h-[1.2em] overflow-hidden">
        <div
          key={index}
          className="flex flex-col animate-slide-up transition-transform duration-500"
        >
          {/* Current Item */}
          <span
            className={`font-black h-[1.2em] ${theme === 'dark' ? 'text-purple-500' : 'text-cyan-400'}`}
          >
            {texts[index]}
          </span>
          <span
            className={`font-black h-[1.2em] ${theme === 'dark' ? 'text-purple-500' : 'text-cyan-400'}`}
          >
            {texts[nextIndex]}
          </span>
        </div>
      </span>

      <span>{day}!</span>
    </div>
  )
}

export default function Footer() {
  const { theme } = useTheme()
  const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <footer>
      <div className={`relative h-50 md:h-30`}>
        <div
          className={` px-5  lg:px-50 bg-transparent absolute left-0 right-0 bottom-0 translate-y-[40%] [@media(min-width:529px)]:translate-y-[12%] [@media(min-width:540px)]:translate-y-[25%] md:translate-y-[25%] lg:translate-y-[5%] z-10 `}
        >
          <div
            className={`rounded-lg h-full relative overflow-hidden ${theme === 'dark' ? 'bg-cyan-500' : 'bg-purple-400'}  py-10 px-5 `}
          >
            <div id="footer-card">
              <div
                className="flex flex-col gap-3"
                data-aos="fade-up"
                data-aos-anchor="#footer-card"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                <p className="  md:text-center text-3xl lg:text-4xl font-bold text-white/90">
                  Looking forward to hearing from you.
                </p>

                <div className="flex justify-start md:justify-center ">
                  <SlidingText day={dayName} theme={theme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative border-t-2 ${theme === 'dark' ? 'border-cyan-400' : 'border-purple-500'}`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center mt-40 md:mt-30 lg:mt-20">
          <p
            className={`mb-10 font-mono text-sm lg:text-base font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}
          >
            Chinwe Nwankwo. © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
