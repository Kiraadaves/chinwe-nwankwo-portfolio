import { Link } from '@tanstack/react-router'
import { useTheme } from 'next-themes'

export default function Projects() {
  const { theme } = useTheme()
  return (
    <section id="projects" className="relative">
      <section className="block md:hidden space-y-5 px-5 py-16">
        <div className="w-full mb-8 lg:hidden">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className={`font-mono text-sm mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          >
            FEATURED WORK
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            className={`text-4xl font-black tracking-tighter leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}
          >
            Projects that{' '}
            <span
              className={`block ${theme === 'dark' ? 'text-slate-500' : 'text-purple-500'}`}
            >
              moved the needle
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div
            data-aos="zoom-in-up"
            className="relative overflow-hidden h-80 border border-slate-400 rounded-[10px]"
          >
            <img
              src="/images/wil.jpg"
              className="rounded-[10px] object-cover h-full w-full"
            />
          </div>
          <div
            data-aos="zoom-in-up"
            className="relative overflow-hidden h-80 border border-slate-400 rounded-[10px]"
          >
            <img
              src="/images/qart.png"
              className="rounded-[10px] object-cover h-full w-full"
            />
          </div>{' '}
          <div
            data-aos="zoom-in-up"
            className="relative overflow-hidden h-80 border border-slate-400 rounded-[10px]"
          >
            <img
              src="/images/mainshak.jpg"
              className="rounded-[10px] object-cover h-full w-full"
            />
          </div>
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="py-3 px-6 text-white bg-purple-500 rounded-full"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
      <section id="sectionPin" className="hidden md:block">
        <div className={`pin-wrap-sticky `}>
          <div className="pin-wrap">
            <div className="w-[40vw] shrink-0 ">
              <p
                data-aos="fade-up"
                className={`font-mono text-sm lg:text-base mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                FEATURED WORK
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                className={`text-5xl  font-black tracking-tighter ${theme === 'dark' ? '' : 'text-slate-950'}`}
              >
                Projects that
                <span
                  className={`block ${theme === 'dark' ? 'text-slate-500' : 'text-purple-500'}`}
                >
                  moved the needle
                </span>
              </h2>
            </div>
            <div data-aos="zoom-in-down" className="card ">
              <img
                src="/images/wil.jpg"
                className="rounded-[10px]  h-full w-full"
              />
            </div>
            <div data-aos="zoom-in-up" className="card">
              <img
                src="/images/qart.png"
                className="rounded-[10px]  h-full w-full"
              />
            </div>

            <div data-aos="zoom-in-up" className="card ">
              <img
                src="/images/mainshak.jpg"
                className="rounded-[10px]  h-full w-full"
              />
            </div>

            <div className="">
              <Link
                to="/projects"
                className="py-3 px-6 text-white bg-purple-500 rounded-full"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
