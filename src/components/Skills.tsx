import { useTheme } from 'next-themes'
import { DiNodejs } from 'react-icons/di'
import {
  FaBootstrap,
  FaReact,
  FaSquareGithub,
  FaWordpress,
} from 'react-icons/fa6'
import { RiNextjsLine, RiVuejsLine } from 'react-icons/ri'
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiGitlab,
} from 'react-icons/si'

const stack = [
  {
    name: 'ReactJS',
    icon: <FaReact className="text-cyan-400 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'NextJS',
    icon: <RiNextjsLine className="text-blue-950 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'VueJS',
    icon: <RiVuejsLine className="text-[#ef6a5bf5] h-24 w-24" />,
    image: '/images/nuxt.png',
  },
  {
    name: 'NodeJS',
    icon: <DiNodejs />,
    image: '/images/node.png',
  },
  {
    name: 'Express',
    icon: <SiExpress className="text-blue-950 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'MongoDb',
    icon: <SiMongodb className="text-green-600 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'GitHub',
    icon: <FaSquareGithub className="text-blue-950 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'GitLab',
    icon: <SiGitlab className="text-orange-500 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-400 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'Wordpress',
    icon: <FaWordpress className="text-blue-950 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-blue-950 h-24 w-24" />,

    image: '/node',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-purple-600 h-24 w-24" />,

    image: '/node',
  },
]

export default function Skills() {
  const { theme } = useTheme()

  return (
    <section
      id="skills"
      className={`relative z-10 px-5 py-16 lg:px-15 lg:py-32 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="mb-12">
        <p
          className={`font-mono text-sm lg:text-base mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
        >
          TOOLKIT
        </p>
        <h2
          className={`text-5xl font-black tracking-tighter ${theme === 'dark' ? '' : 'text-purple-500'}`}
        >
          Technologies I master
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-4  ">
        {stack.map((stacks, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 100}
            className={`border rounded-lg items-center py-8 flex flex-col gap-8  transition-all duration-500 ease-in-out ${
              theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400/50'
                : 'border-slate-200 hover:border-cyan-600/50'
            }`}
          >
            <div className="">
              {stacks.name === 'VueJS' || stacks.name === 'NodeJS' ? (
                <img
                  alt={`${stacks.name} logo`}
                  src={stacks.image}
                  width={100}
                  height={100}
                  className={`${
                    stacks.name === 'VueJS' ? 'h-24 w-28' : 'w-28'
                  }`}
                />
              ) : (
                stacks.icon
              )}
            </div>
            <h3
              className={`text-lg font-black mb-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
            >
              {stacks.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
