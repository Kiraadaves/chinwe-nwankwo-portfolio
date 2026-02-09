import { useTheme } from 'next-themes'

interface Project {
  title: string
  description: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
  imageUrl: string
}

const projects: Project[] = [
  {
    title: 'Shakkara',
    description:
      "Shakarra is a platform that allows you to shop from your favorite U.S. retailers and pay in naira. Simply browse, add items to your cart, and we'll handle the shipping and customs clearance for you.",
    liveUrl: 'https://www.shakarra.com/',
    githubUrl: 'https://github.com/Anora-dev/shakarra-fullfillment',
    technologies: [
      'ReactJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'Tanstack Query',
      'Tanstack Table',
    ],
    imageUrl: '/shakkara.png',
  },
  {
    title: "What's Hot in Lagos?",
    description:
      'Website with admin dashboard, allowing users to explore trending events, places, and activities in Lagos. Features include event listings, user reviews, and personalized recommendations. Currently undergoing testing phase and will be launched soon.',
    liveUrl: '/',
    githubUrl: 'https://gitlab.com/anora2/whattodolagos',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'Zustand',
      'Tanstack Query',
    ],
    imageUrl: '/whil.png',
  },
  {
    title: 'MySportskit',
    description:
      'MySportskit is a fully functional eCommerce website built with WordPress. I worked on the frontend part of this project, leveraging WordPress themes and plugins for functionality and design.',
    liveUrl: 'https://mysportskit.com.ng/',
    githubUrl: 'https://mysportskit.com.ng/',
    technologies: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'Responsive Design',
      'CSS',
      'Plugins',
    ],
    imageUrl: '/wordpress.png',
  },
  {
    title: 'ClassMate',
    description:
      'A work in progress. Also a student cgpa and resource management system',
    liveUrl: 'https://classmate-seven.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/classmate',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'AOS',
    ],
    imageUrl: '/classmate.png',
  },
  {
    title: 'Gasfleet',
    description:
      'Gasfleet is a website for for Gasfleet oil company which was built using NuxtJS.',
    liveUrl: 'https://www.gasfleeteng.com/',
    githubUrl: 'https://github.com/paddinghq/gasfleet-website-new',
    technologies: ['NuxtJS', 'TailwindCSS', 'Responsive Design'],
    imageUrl: '/gasfleet2.png',
  },
  {
    title: 'Multi-choice Test',
    description: 'A multi-choice test with drag and drop features',
    liveUrl: 'https://multi-choice-dragndrop.vercel.app',
    githubUrl: 'https://github.com/Kiraadaves/multi-choice-dragndrop',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'React DND',
    ],
    imageUrl: '/multichoice.png',
  },
  {
    title: 'HandyHub',
    description:
      'HandyHub is a personal app I designed and built using firebase auth and firestore. It has user and provider registration pages, a login feature as well as user and provider dashboards after respective logins.',
    liveUrl: 'https://handyhub-livid.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/handyhub',
    technologies: [
      'Firebase Auth',
      'Firestore',
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'AnimateCSS',
    ],
    imageUrl: '/handyhub.png',
  },
  {
    title: 'CNBank',
    description:
      'A responsive dashboard UI for a Fintech Savings & Investment App',
    liveUrl: 'https://cnbank.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/cnbank',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'AnimateCSS',
    ],
    imageUrl: '/cnbank2.png',
  },
  {
    title: 'Innova',
    description: 'Innova is a freelance landing page for a startup',
    liveUrl: 'https://innova-ivory-omega.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/innova',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'React Intersection Observer',
    ],
    imageUrl: '/innova.png',
  },

  {
    title: 'Alpharithm',
    description: 'A job assessment project for Alpharithm',
    liveUrl: 'https://alpharithm-one.vercel.app//',
    githubUrl: 'https://github.com/Kiraadaves/alpharithm/',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'AOS',
      'Swiper React',
    ],
    imageUrl: '/alpha.png',
  },
  {
    title: 'Officing',
    description: 'A company work application coming soon',
    liveUrl: 'https://officing.paddi.ng/',
    githubUrl: 'https://github.com/paddinghq/',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Redux',
      'Tanstack Query',
      'Shadcn UI',
      'Responsive Design',
    ],
    imageUrl: '/officing.png',
  },

  {
    title: 'Rise',
    description:
      'Rise was a job assessment project. This project required me to build desktop and mobile screen landing page to the designs provided. I used NextJS, AOS, Animate CSS and Tailwind CSS for the design and interactivity',
    liveUrl: 'https://risevest-nine.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/risevest',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'AOS',
      'AnimateCSS',
    ],
    imageUrl: '/rise.png',
  },
  {
    title: 'Ticket Generator',
    description:
      "A simple ticket generator app implemented using frontend mentor's multi-step form challenge design",
    liveUrl: 'https://ticket-generator-mu-silk.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/ticket-generator',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'AOS',
    ],
    imageUrl: '/ticket.png',
  },
  {
    title: 'Snaarp-Todo',
    description:
      'A functional To-Do application using localStorage as a mock backend, TanStack Query (React Query) for data management, and Tailwind CSS for styling for Snaarp test.',
    liveUrl: 'https://snaarp-todo.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/snaarp-todo',
    technologies: [
      'NextJS 15',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'ShadCN UI',
      'TanStack Query',
      'AOS',
      'LocalStorage',
      'CRUD Operations',
    ],
    imageUrl: '/snaarp.png',
  },
  {
    title: 'AceHelp',
    description:
      'A job assessment project that required me to build desktop, tablet and mobile responsive page with API integration and several features',
    liveUrl: 'https://acehelp-m.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/acehelp-m',
    technologies: [
      'ReactJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'API integration',
      'Pagination',
      'Keyboard Event',
      'AnimateCSS',
    ],
    imageUrl: '/acehelp.png',
  },
  {
    title: 'Foodie-Land',
    description:
      'Foodie land is a mini website that was created as a job interview challenge.This project required me to build desktop pages to the designs provided. I used NextJS and Tailwind CSS for the design and interactivity',
    liveUrl: 'https://foodieland-seven.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/foodieland',
    technologies: ['NextJS', 'TailwindCSS', 'TypeScript'],
    imageUrl: '/foodieland.png',
  },
  {
    title: 'Rest Countries',
    description:
      'Rest Countries is a frontend challenge that required integrating the Rest Countries API to pull country data and display it like in the designs on Frontend Mentor. It has a search, filter, light/dark toggle them features and a details page .',
    liveUrl: 'https://rest-countries-beige-five.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/rest-countries',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'Tanstack Query',
      'Redux',
      'TypeScript',
      'Responsive Design',
    ],
    imageUrl: '/countries.png',
  },
  {
    title: 'Recipe',
    description:
      'Recipe app displays data from meal DB and features a cart order functionality where users can add, remove or update cart items. ',
    liveUrl: 'https://recipe-oe71103ck-kiraadaves-projects.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/recipe',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'Tanstack Query',
      'TypeScript',
      'Responsive Design',
    ],
    imageUrl: '/recipe.png',
  },
  {
    title: 'Advice Generator',
    description:
      "This project was a frontend challenge that involved using the Advice Slip API to create an advice generator app. Users can view the optimal layout for the app depending on their device's screen size, see hover states for all interactive elements on the page and generate a new piece of advice by clicking the dice button.",
    liveUrl: 'https://advice-generator-phi-beryl.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/Advice-generator',
    technologies: [
      'ReactJS',
      'TailwindCSS',
      'axios',
      'Vite',
      'Responsive Design',
      'Advice Slip',
    ],
    imageUrl: '/advice.png',
  },
  {
    title: 'Drag and Drop',
    description:
      'This is an image gallery using images from the Pexels API with a drag and drop feature using react-beautiful-dnd. A sign in feature was added using firebase. Users can sign in using `user@example.com` as email and `1Password` as password. Animate.css and AOS were used for animations.',
    liveUrl: 'https://dragn-drop-orpin.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/DragnDrop',
    technologies: [
      'ReactJS',
      'TailwindCSS',
      'Bootstrap',
      'Firebase',
      'Responsive Design',
      'Formik',
      'Yup',
      'React/router',
      'React-Hook-Form',
      'React-beautiful-dnd',
      'Pexels',
    ],
    imageUrl: '/drag.png',
  },
  {
    title: 'Movies',
    description:
      'This app was created as a requirement for my HNGX internship. It was created using ReactJS, MaterialUI/Material icons and Tailwind CSS. The API used was TMDB.',
    liveUrl: 'https://movie-discovery-drab.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/movie_discovery',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'Axios',
      'React/router',
      'MaterialUI icons',
      'TMDB',
    ],
    imageUrl: '/movie.png',
  },
  {
    title: 'Newsletter Subscription',
    description:
      'This project is a frontend mentor challenge which is meant to enhance skills with basic form structure, validation, submission and success states.',
    liveUrl: 'https://newsletter-subscription-git-main-kiraadaves.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/Newsletter_subscription',
    technologies: [
      'ReactJS',
      'React-Router',
      'Vite',
      'TailwindCSS',
      'Responsive Design',
    ],
    imageUrl: '/newsletter.png',
  },
  {
    title: 'Remote',
    description:
      "Remote was another frontend mentor challenge, meant to test one's ability to create dropdown navigation menus which is a common pattern for larger sites. Users can view the relevant dropdown menus on desktop and mobile when interacting with the navigation links, view the optimal layout for the content depending on their device's screen size and see hover states for all interactive elements on the page",
    liveUrl: 'https://drop-down-nav.vercel.app',
    githubUrl: 'https://github.com/Kiraadaves/drop-down-nav',
    technologies: [
      'ReactJS',
      'TailwindCSS',
      'Vite',
      'Responsive Design',
      'Animate CSS',
    ],
    imageUrl: '/ui.png',
  },
  {
    title: 'The Future',
    description:
      "This is a simple frontend mentor homepage meant to test one's skills in CSS Grid. Users can view the optimal layout for the interface depending on their device's screen size and also see hover and focus states for all interactive elements on the page",
    liveUrl: 'https://ui-remake.vercel.app',
    githubUrl: 'https://github.com/Kiraadaves/UI_remake',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'Tanstack Query',
      'Redux',
      'TypeScript',
    ],
    imageUrl: '/ui2.png',
  },
  {
    title: 'Code Estate',
    description:
      'Code estate is an ongoing project for Enyata Hackerton. It is a real estate app being created with the sole aim of bridging the gap between tenants, landlords and agents.',
    liveUrl: 'https://code-estate-frontend.vercel.app',
    githubUrl: 'https://github.com/phemmyblaze/code-estate-frontend',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'Tanstack Query',
      'Redux',
      'TypeScript',
      'Fomik',
      'React-Hook-Form',
    ],
    imageUrl: '/code-estate.png',
  },
  {
    title: 'Previous Portfolio',
    description:
      'This was my previous portfolio created with ReactJS and tailwind CSS.',
    liveUrl: 'https://portfolio-kiraadaves.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/portfolio',
    technologies: ['ReactJS', 'TailwindCSS', 'Responsive Design'],
    imageUrl: '/portfolio.png',
  },
]
export default function Projects() {
  const { theme } = useTheme()
  return (
    <section id="work" className="relative">
      <section className="block md:hidden space-y-5 px-5 py-16">
        <div className="w-full mb-8 lg:hidden">
          <p
            className={`font-mono text-sm mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          >
            FEATURED WORK
          </p>

          <h2
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
          <div className="relative overflow-hidden h-80 border border-slate-400 rounded-[10px]">
            <img
              src="/images/wil.jpg"
              className="rounded-[10px] object-cover h-full w-full"
            />
          </div>
          <div className="relative overflow-hidden h-80 border border-slate-400 rounded-[10px]">
            <img
              src="/images/qart.png"
              className="rounded-[10px] object-cover h-full w-full"
            />
          </div>{' '}
          <div className="relative overflow-hidden h-80 border border-slate-400 rounded-[10px]">
            <img
              src="/images/mainshak.jpg"
              className="rounded-[10px] object-cover h-full w-full"
            />
          </div>
          <div className="flex justify-center">
            <button className="py-3 px-6 text-white bg-purple-500 rounded-full">
              View All
            </button>
          </div>
        </div>
      </section>
      <section id="sectionPin" className="hidden md:block">
        <div className={`pin-wrap-sticky `}>
          <div className="pin-wrap">
            <div className="w-[40vw] shrink-0 ">
              <p
                className={`font-mono text-sm lg:text-base mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                FEATURED WORK
              </p>
              <h2
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
            <div
              className="card "
              style={{
                backgroundImage: `url('/images/wil.jpg')`,
                backgroundColor: 'lightgray',
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage: `url('/images/qart.png')`,
                backgroundColor: 'lightgray',
              }}
            ></div>

            <div
              className="card "
              style={{
                backgroundImage: `url('/images/mainshak.jpg')`,
                backgroundColor: 'lightgray',
              }}
            ></div>

            <div className="">
              <button className="py-3 px-6 text-white bg-purple-500 rounded-full">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
