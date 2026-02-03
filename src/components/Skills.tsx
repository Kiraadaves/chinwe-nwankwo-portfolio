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
    image: '/nuxt',
  },
  {
    name: 'NodeJS',
    icon: <DiNodejs />,
    image: '/node',
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

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'D3.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
  },
]

export default function Skills() {
  const { theme } = useTheme()

  return (
    <section
      id="skills"
      className={`relative z-10 px-5 lg:px-15 py-32 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="mb-16">
        <p
          className={`font-mono text-sm mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
        >
          TOOLKIT
        </p>
        <h2
          className={`text-5xl font-black tracking-tighter ${theme === 'dark' ? '' : 'text-slate-950'}`}
        >
          Technologies I master
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className={`border rounded-lg p-8 transition-colors ${
              theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400/50'
                : 'border-slate-200 hover:border-cyan-600/50'
            }`}
          >
            <h3
              className={`text-lg font-black mb-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
            >
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}
                  />
                  <span
                    className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
