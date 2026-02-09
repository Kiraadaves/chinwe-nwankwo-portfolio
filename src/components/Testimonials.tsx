import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { X } from 'lucide-react'

interface Testimonials {
  image: string
  alt: string
  name: string
  role: string
  content: string
}

const testimonials: Testimonials[] = [
  {
    image: '/images/eben.jpg',
    alt: 'image',
    name: 'Ebenezer Adedeji',
    role: 'Frontend Lead, Bounty-AI',
    content: `Chinwe is a resourceful frontend engineer, easy to work with and always goes above board. Her attitude to work is commendable, her skillfulness is spot on. She is an engineer I would always like to work with`,
  },
  {
    image: '/images/dominion.jpg',
    alt: 'image',
    name: 'Dominion Olorunfemi',
    role: 'Tech Lead, Padding Technologies',
    content: `Have you ever met an engineer who treats tests like documentation? Chinwe does.
You bring her onto your team and you get cleaner code. You get faster delivery. You get a teammate who lifts everyone around her.
I worked with Chinwe during her internship, and she made a mark from day one, identifying edge cases we missed and writing tests for them, contributing practical ideas in every stand-up and code review, and consistently welcoming feedback and growing with each sprint.`,
  },
  {
    image: '/images/dipo.jpg',
    alt: 'image',
    name: 'Adedipupo Jokanola',
    role: 'Engineering Lead, Padding Technologies',
    content: `I had the pleasure of working with Chinwe during her at Paddling with us as a Frontend Developer. Throughout their time with the team, Chinwe demonstrated a strong understanding of web development principles and consistently delivered quality work.
She was involved in developing and maintaining user-friendly interfaces, using different frontend technologies. Her attention to detail and ability to work efficiently under tight deadlines stood out. She also showcased a strong ability to learn new tools quickly and apply them in real-world projects.
Overall, Throughout her stay, she was a great asset to the team.`,
  },
  {
    image: '/images/mariam.jpg',
    alt: 'image',
    name: 'Mariam Morenikeji Jelili',
    role: 'Frontend Developer, Padding Technologies',
    content: `I had the pleasure of working alongside Chinwe on several projects and what sets her apart is her collaborative spirit, expertise, creativity, excellent communication skills and willingness to mentor others. She's an invaluable asset to any team. I highly recommend Chinwe for any frontend development project`,
  },
  {
    image: '/images/deolu.jpg',
    alt: 'image',
    name: 'Adeoluwa Adesola',
    role: 'Backend Developer, Padding Technologies',
    content: `Working with Chinwe has been a great experience. She has impressive front-end development skills, excels in creating user-friendly interfaces and is always ready to set up and collaborate with the team. Her technical expertise and teamwork are invaluable`,
  },
  {
    image: '/images/tomiwa.jpg',
    alt: 'image',
    name: 'Tomiwa Mariam',
    role: 'Product Designer',
    content: `I had the pleasure of collaborating with Chinwe on an hackerthon project . Her dedication, expertise, and proactive approach were key in our achievements. I highly recommend her for any future projects."`,
  },
  {
    image: '/images/akin.jpg',
    alt: 'image',
    name: 'Akinuliola Akinbobola Oluwafemi',
    role: 'Frontend Developer, Padding Technologies',
    content: `Working with Chinwe has been a remarkable experience, her diligence and unwavering commitment to excellence is truly inspiring.
Chinwe consistently completes assigned tasks with the highest standard and is always open to learning. Her hardwork and dedication is evident in the quality of her work and her ability to consistently meet and exceed expectations. It's a pleasure to collaborate with someone who is not only hardworking but also sets a positive mindset for the entire team.
"`,
  },
  {
    image: '/images/fredrick.jpg',
    alt: 'image',
    name: 'Fredrick Anyanwu',
    role: 'Backend Developer, Padding Technologies',
    content: `I had the pleasure of working alongside Chinwe at Padding Technologies, and I can confidently say she is one of the most passionate and hardworking individuals I’ve met. Her dedication to her work is truly inspiring—she approaches every task with enthusiasm, precision, and a relentless drive for excellence. Beyond her technical skills, she brings an incredible energy to the team, making collaboration both productive and enjoyable. Working with her was not just about getting the job done but also about learning, growing, and sharing great moments. She has a way of making even the most challenging tasks feel lighter with her positivity and team spirit. Anyone who gets the chance to work with her is in for an amazing experience!`,
  },
]

const ReadMore = ({
  content,
  onClose,
  isModalOpen,
}: {
  content: string
  onClose: () => void
  isModalOpen: boolean
}) => {
  const [animateContent, setAnimateContent] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setAnimateContent(true)
      }, 50)
    } else {
      setAnimateContent(false)
      const timer = setTimeout(() => {
        onClose()
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isModalOpen, onClose])

  if (!isModalOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-500 ease-in-out
            ${animateContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        className={`bg-[#ffffff] w-full md:w-125 relative rounded-[10px] p-8 text-center 
                  ${animateContent ? 'translate-y-0 transition-transform duration-300 ease-in-out' : '-translate-y-full'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-7 w-7 text-purple-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <p className=" relative text-sm mt-8 text-justify font-medium text-[#7C7C7C] leading-relaxed">
          {content}{' '}
          <span className="absolute -top-6 -left-7 text-purple-500 font-black text-5xl">
            "
          </span>{' '}
          <span className="absolute -bottom-8 -right-7 text-purple-500 font-black text-5xl">
            "
          </span>{' '}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { theme } = useTheme()
  const [activeTestimonial, setActiveTestimonial] =
    useState<Testimonials | null>(null)
  const [readMore, setReadMore] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const limit = 250

  const openReadMore = (activeTestimonial: Testimonials) => {
    setActiveTestimonial(activeTestimonial)
    setReadMore(true)
  }

  const closeReadMore = () => {
    setActiveTestimonial(null)
    setReadMore(false)
  }

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const isFirstSlide = current === 0
  const isLastSlide = current === testimonials.length - 1
  return (
    <section
      id="testimonials"
      className={`flex flex-col gap-7.5 lg:flex-row lg:items-center lg:gap-15 relative z-10 px-5 lg:px-15 py-32 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="lg:w-[35%]">
        <p
          className={`font-mono text-sm lg:text-base mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
        >
          SOCIAL PROOF
        </p>
        <h2
          className={`text-5xl font-black tracking-tighter ${theme === 'dark' ? '' : 'text-slate-950'}`}
        >
          What clients
          <span
            className={`block ${theme === 'dark' ? 'text-purple-500' : 'text-purple-500'}`}
          >
            are saying
          </span>
        </h2>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: false }}
        className="lg:space-y-5 lg:pl-3.75 lg:w-[65%] "
      >
        <CarouselContent className="md:-ml-10 md:pr-10">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:pl-10 basis-full md:basis-[70%] lg:basis-[80%]"
            >
              <div
                className={` h-full flex flex-col gap-5 lg:gap-8 justify-between border rounded-lg p-3 lg:p-8  transition-all  ${
                  theme === 'dark'
                    ? 'border-slate-800 hover:border-cyan-400/50 bg-slate-900/40'
                    : 'border-purple-300 hover:border-cyan-600/50 bg-slate-50/40'
                }`}
              >
                <div className="flex justify-center">
                  <img
                    src={testimonial.image}
                    alt="avatars"
                    className={`w-20 h-20 lg:w-25 lg:h-25  rounded-full border ${
                      theme === 'dark'
                        ? 'border-slate-800 hover:border-cyan-400/50 '
                        : 'border-purple-300 hover:border-cyan-600/50 '
                    }`}
                  />
                </div>
                <p
                  className={`leading-relaxed text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
                >
                  {testimonial.content.slice(0, limit)}
                  {testimonial.content.length > limit && (
                    <span>
                      ...
                      <button
                        onClick={() => openReadMore(testimonial)}
                        className="font-bold text-purple-500"
                      >
                        Read more
                      </button>
                    </span>
                  )}
                </p>
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                  <div>
                    <h3
                      className={`font-black text-lg ${theme === 'dark' ? '' : 'text-slate-950'}`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600 font-bold'}`}
                    >
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          theme === 'dark'
                            ? 'text-yellow-400'
                            : 'text-yellow-600'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-start pr-10 mt-5 ">
          <div className="w-full  flex justify-center lg:justify-between lg:items-center space-x-15">
            <div className="hidden lg:flex items-center gap-[18.75px]">
              <CarouselPrevious
                className={`cursor-pointer h-7.5 w-7.5 static translate-y-0 transition-all duration-200 border-none
    ${
      isFirstSlide
        ? theme === 'dark'
          ? 'bg-slate-800! text-slate-500!'
          : 'bg-slate-200! text-slate-400!'
        : theme === 'dark'
          ? 'bg-purple-400! text-black!'
          : 'bg-purple-600! text-white!'
    }`}
              />

              <CarouselNext
                className={`cursor-pointer h-7.5 w-7.5 static translate-y-0 transition-all duration-200 border-none
    ${
      isLastSlide
        ? theme === 'dark'
          ? 'bg-slate-800! text-slate-500!'
          : 'bg-slate-200! text-slate-400!'
        : theme === 'dark'
          ? 'bg-purple-400! text-black!'
          : 'bg-purple-600! text-white!'
    }`}
              />
            </div>

            <div className="flex gap-1.25 justify-end ">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1   rounded-full transition-colors duration-200 ${
                    current === index
                      ? 'w-10 bg-purple-600'
                      : 'w-3.75 bg-purple-300/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Carousel>
      {activeTestimonial && (
        <ReadMore
          content={activeTestimonial.content}
          onClose={closeReadMore}
          isModalOpen={readMore}
        />
      )}
    </section>
  )
}
