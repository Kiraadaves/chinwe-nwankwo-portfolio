import { Github, Mail } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Cta() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <section
      id="contact"
      className={`relative z-10 px-5 py-16 lg:px-15 lg:py-32 border-t ${mounted && theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className={`text-5xl font-black tracking-tighter mb-6 ${mounted && theme === 'dark' ? '' : 'text-slate-950'}`}
          >
            Ready to
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className={`block text-purple-500`}
            >
              collaborate?
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className={`text-base lg:text-lg mb-8 max-w-md leading-relaxed ${mounted && theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            I'm always interested in interesting projects and creative
            challenges. Let's build something extraordinary together.
          </p>
        </div>

        <div className="space-y-4">
          <a
            data-aos="fade-left"
            data-aos-delay="800"
            href="mailto:chukwuogorchinwe@gmail.com"
            className={`flex flex-col lg:flex-row items-center gap-4 p-3 lg:p-6 border rounded-lg transition-all group ${
              mounted && theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/5'
                : 'border-slate-200 hover:border-cyan-600 hover:bg-cyan-100'
            }`}
          >
            <Mail
              className={`w-6 h-6 ${mounted && theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
            />
            <div>
              <div
                className={`text-center lg:text-justify font-bold transition-colors group-hover:${mounted && theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                Email me
              </div>
              <div
                className={`text-center lg:text-justify text-sm ${mounted && theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
              >
                chukwuogorchinwe@gmail.com
              </div>
            </div>
          </a>

          <a
            data-aos="fade-left"
            data-aos-delay="1400"
            href="https://github.com/Kiraadaves"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col lg:flex-row items-center gap-4 p-3 lg:p-6 border rounded-lg transition-all group ${
              mounted && theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/5'
                : 'border-slate-200 hover:border-cyan-600 hover:bg-cyan-100'
            }`}
          >
            <Github
              className={`w-6 h-6 ${mounted && theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
            />
            <div>
              <div
                className={`text-center lg:text-justify font-bold transition-colors group-hover:${mounted && theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                GitHub
              </div>
              <div
                className={`text-center lg:text-justify text-sm ${mounted && theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
              >
                Chinwe Nwankwo
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
