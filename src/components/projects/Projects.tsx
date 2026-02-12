import { useTheme } from 'next-themes'
import { FaGithub } from 'react-icons/fa6'

interface Project {
  title: string
  description: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
  imageUrl: string
}
//
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
    imageUrl: '/images/mainshak.jpg',
  },
  {
    title: "What's Hot in Lagos?",
    description:
      'Website, allowing users to explore trending events, places, and activities in Lagos. Features include event listings, user reviews, and personalized recommendations.',
    liveUrl: 'https://www.whatshotinlagos.com/',
    githubUrl: 'https://gitlab.com/anora2/whattodolagos',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'Zustand',
      'Tanstack Query',
    ],
    imageUrl: '/images/wil.jpg',
  },
  {
    title: "Admin Dashboard for What's Hot in Lagos",
    description: 'Website with admin dashboard for Whats hot in lagos website',
    liveUrl: 'https://cms.whatshotinlagos.com/',
    githubUrl: 'https://gitlab.com/anora2/whattodolagos-cms',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'Zustand',
      'Tanstack Query',
    ],
    imageUrl: '/images/dashboard.png',
  },
  {
    title: 'Qartt Admin Dashboard',
    description: 'Admin dashboard for the Qartt website',
    liveUrl: 'https://staging-dashboard.qartt.me/',
    githubUrl: 'https://gitlab.com/qartt/qartt-dashboard/-/merge_requests/74',
    technologies: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'Responsive Design',
      'Zustand',
      'Tanstack Query',
    ],
    imageUrl: '/images/qart.png',
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
    imageUrl: '/images/wordpress.png',
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
    imageUrl: '/images/classmate.png',
  },
  {
    title: 'Gasfleet',
    description:
      'Gasfleet is a website for for Gasfleet oil company which was built using NuxtJS.',
    liveUrl: 'https://www.gasfleeteng.com/',
    githubUrl: 'https://github.com/paddinghq/gasfleet-website-new',
    technologies: ['NuxtJS', 'TailwindCSS', 'Responsive Design'],
    imageUrl: '/images/gasfleet2.png',
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
    imageUrl: '/images/multichoice.png',
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
    imageUrl: '/images/handyhub.png',
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
    imageUrl: '/images/cnbank2.png',
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
    imageUrl: '/images/innova.png',
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
    imageUrl: '/images/alpha.png',
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
    imageUrl: '/images/officing.png',
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
    imageUrl: '/images/rise.png',
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
    imageUrl: '/images/ticket.png',
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
    imageUrl: '/images/snaarp.png',
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
    imageUrl: '/images/acehelp.png',
  },
  {
    title: 'Foodie-Land',
    description:
      'Foodie land is a mini website that was created as a job interview challenge.This project required me to build desktop pages to the designs provided. I used NextJS and Tailwind CSS for the design and interactivity',
    liveUrl: 'https://foodieland-seven.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/foodieland',
    technologies: ['NextJS', 'TailwindCSS', 'TypeScript'],
    imageUrl: '/images/foodieland.png',
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
    imageUrl: '/images/countries.png',
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
    imageUrl: '/images/recipe.png',
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
    imageUrl: '/images/advice.png',
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
    imageUrl: '/images/drag.png',
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
    imageUrl: '/images/movie.png',
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
    imageUrl: '/images/newsletter.png',
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
    imageUrl: '/images/ui.png',
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
    imageUrl: '/images/ui2.png',
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
    imageUrl: '/images/code-estate.png',
  },
  {
    title: 'Previous Portfolio',
    description:
      'This was my previous portfolio created with ReactJS and tailwind CSS.',
    liveUrl: 'https://portfolio-kiraadaves.vercel.app/',
    githubUrl: 'https://github.com/Kiraadaves/portfolio',
    technologies: ['ReactJS', 'TailwindCSS', 'Responsive Design'],
    imageUrl: '/images/portfolio.png',
  },
]
const Projects = () => {
  const { theme } = useTheme()
  return (
    <section
      className={`relative z-10 px-5 py-16 lg:px-15  border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="space-y-20 lg:space-y-30 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex w-full flex-col gap-7.5 lg:flex-row lg:gap-15 lg:items-stretch ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-[10px] shadow-lg border border-slate-300 w-full lg:w-1/2  relative overflow-hidden h-87.5 lg:h-112.5 "
            >
              <img
                className="w-full h-full rounded-[10px]"
                src={project.imageUrl}
                alt={`${project.title}'s image`}
              />
            </div>
            <div className="py-5  w-full lg:w-1/2 flex flex-col">
              <div className="h-full flex flex-col">
                <div className="flex flex-col gap-10 lg:gap-0  lg:justify-between lg:grow">
                  <div className="space-y-7.5">
                    <div className="space-y-2.5">
                      <h2
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-once="true"
                        className={`${theme === 'dark' ? 'text-white' : 'text-purple-500'} font-jakarta font-bold text-[30px] lg:text-[40px]`}
                      >
                        {project.title}
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-once="true"
                        className={`${theme === 'dark' ? '' : 'text-slate-950'} leading-6.5 text-sm lg:leading-7.5 text-justify lg:text-base`}
                      >
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-6 justify-start">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border ${theme === 'dark' ? 'bg-slate-300/20 hover:border-white text-white' : 'hover:border-purple-500 text-purple-500'}  shadow   hover:shadow-lg rounded-md py-1 px-9 transition-all duration-300 ease-in-out`}
                      >
                        <FaGithub className="md:w-8 w-6 md:h-8 h-6  mx-auto" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-purple-500 hover:border hover:bg-[#ffffff] text-[#ffffff] ${theme === 'dark' ? 'hover:text-black' : 'hover:text-purple-500'} hover:shadow-lg  py-2 px-9 font-bold text-xs md:text-base rounded-md text-center  transition-all duration-300 ease-in-out`}
                      >
                        View
                      </a>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-once="true"
                    className="flex items-center gap-2.5 flex-wrap"
                  >
                    {project.technologies.map((item, index) => (
                      <span
                        key={index}
                        className={`py-0.5 px-3.5 rounded-[200px] border ${theme === 'dark' ? 'bg-slate-300/20 border-white text-white' : 'border-purple-700 text-purple-700'}  font-medium font-manrope text-xs lg:text-sm leading-7.5`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
