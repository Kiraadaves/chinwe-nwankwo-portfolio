import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer>
      <div className={`relative h-30`}>
        <div
          className={` h-40.5 lg:h-60.5 px-5  lg:px-50 bg-transparent absolute left-0 right-0 bottom-0 translate-y-[40%] [@media(min-width:529px)]:translate-y-[12%] [@media(min-width:540px)]:translate-y-[25%] md:translate-y-[25%] lg:translate-y-[5%] z-10 `}
        >
          <div
            className={`rounded-lg h-full relative overflow-hidden ${theme === 'dark' ? 'bg-cyan-500' : 'bg-purple-400'}  py-10 px-5 `}
          >
            <div id="footer-card">
              <div
                className="flex justify-center"
                data-aos="fade-up"
                data-aos-anchor="#footer-card"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                <p
                  className="bg-[#465CBF] mt-7.5 rounded-[200px] py-3.75 px-8.75 text-[#ffffff] text-base border-3 border-transparent transition-all duration-300 ease-out 
             hover:bg-[#DB0580] hover:border-[#465CBF] hover:shadow-[0_0_2px_1px_rgba(0,0,0,0.05)]"
                >
                  Get started
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative space-y-30 border-t-2 ${theme === 'dark' ? 'border-cyan-400' : 'border-purple-500'}`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center mt-30">
          <p
            className={`mb-10 font-mono text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}
          >
            Chinwe Nwankwo. © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
