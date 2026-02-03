import { useTheme } from 'next-themes'

const testimonials = [
  {
    image: '/images/eben.jpg',
    alt: 'image',
    name: 'Ebenezer Adedeji',
    role: 'Frontend Lead, Bounty-AI',
    content: `"Chinwe is a resourceful frontend engineer, easy to work with and always goes above board. Her attitude to work is commendable, her skillfulness is spot on. She is an engineer I would always like to work with"`,
  },
  {
    image: '/images/dominion.jpg',
    alt: 'image',
    name: 'Dominion Olorunfemi',
    role: 'Tech Lead, Padding Technologies',
    content: `"Have you ever met an engineer who treats tests like documentation? Chinwe does.
You bring her onto your team and you get cleaner code. You get faster delivery. You get a teammate who lifts everyone around her.
I worked with Chinwe during her internship, and she made a mark from day one, identifying edge cases we missed and writing tests for them, contributing practical ideas in every stand-up and code review, and consistently welcoming feedback and growing with each sprint."`,
  },
  {
    image: '/images/dipo.jpg',
    alt: 'image',
    name: 'Adedipupo Jokanola',
    role: 'Engineering Lead, Padding Technologies',
    content: `"I had the pleasure of working with Chinwe during her at Paddling with us as a Frontend Developer. Throughout their time with the team, Chinwe demonstrated a strong understanding of web development principles and consistently delivered quality work.
She was involved in developing and maintaining user-friendly interfaces, using different frontend technologies. Her attention to detail and ability to work efficiently under tight deadlines stood out. She also showcased a strong ability to learn new tools quickly and apply them in real-world projects.
Overall, Throughout her stay, she was a great asset to the team."`,
  },
  {
    image: '/images/mariam.jpg',
    alt: 'image',
    name: 'Mariam Morenikeji Jelili',
    role: 'Frontend Developer, Padding Technologies',
    content: `"I had the pleasure of working alongside Chinwe on several projects and what sets her apart is her collaborative spirit, expertise, creativity, excellent communication skills and willingness to mentor others. She's an invaluable asset to any team. I highly recommend Chinwe for any frontend development project"`,
  },
  {
    image: '/images/deolu.jpg',
    alt: 'image',
    name: 'Adeoluwa Adesola',
    role: 'Backend Developer, Padding Technologies',
    content: `"Working with Chinwe has been a great experience. She has impressive front-end development skills, excels in creating user-friendly interfaces and is always ready to set up and collaborate with the team. Her technical expertise and teamwork are invaluable"`,
  },
  {
    image: '/images/tomiwa.jpg',
    alt: 'image',
    name: 'Tomiwa Mariam',
    role: 'Product Designer',
    content: `"I had the pleasure of collaborating with Chinwe on an hackerthon project . Her dedication, expertise, and proactive approach were key in our achievements. I highly recommend her for any future projects."`,
  },
  {
    image: '/images/akin.jpg',
    alt: 'image',
    name: 'Akinuliola Akinbobola Oluwafemi',
    role: 'Frontend Developer, Padding Technologies',
    content: `"Working with Chinwe has been a remarkable experience, her diligence and unwavering commitment to excellence is truly inspiring.
Chinwe consistently completes assigned tasks with the highest standard and is always open to learning. Her hardwork and dedication is evident in the quality of her work and her ability to consistently meet and exceed expectations. It's a pleasure to collaborate with someone who is not only hardworking but also sets a positive mindset for the entire team.
"`,
  },
  {
    image: '/images/fredrick.jpg',
    alt: 'image',
    name: 'Fredrick Anyanwu',
    role: 'Backend Developer, Padding Technologies',
    content: `"I had the pleasure of working alongside Chinwe at Padding Technologies, and I can confidently say she is one of the most passionate and hardworking individuals I’ve met. Her dedication to her work is truly inspiring—she approaches every task with enthusiasm, precision, and a relentless drive for excellence. Beyond her technical skills, she brings an incredible energy to the team, making collaboration both productive and enjoyable. Working with her was not just about getting the job done but also about learning, growing, and sharing great moments. She has a way of making even the most challenging tasks feel lighter with her positivity and team spirit. Anyone who gets the chance to work with her is in for an amazing experience!"`,
  },
]

export default function Testimonials() {
  const { theme } = useTheme()

  return (
    <section
      id="testimonials"
      className={`relative z-10 px-5 lg:px-15 py-32 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="mb-20">
        <p
          className={`font-mono text-sm mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
        >
          SOCIAL PROOF
        </p>
        <h2
          className={`text-5xl font-black tracking-tighter ${theme === 'dark' ? '' : 'text-slate-950'}`}
        >
          What clients
          <span
            className={`block ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}
          >
            are saying
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`border rounded-lg p-8 transition-all hover:scale-105 ${
              theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400/50 bg-slate-900/40'
                : 'border-slate-200 hover:border-cyan-600/50 bg-slate-50/40'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="">
                <img src={testimonial.image} alt="avatars" />
              </div>
              <div>
                <h3
                  className={`font-black text-lg ${theme === 'dark' ? '' : 'text-slate-950'}`}
                >
                  {testimonial.name}
                </h3>
                <p
                  className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p
              className={`leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
            >
              "{testimonial.content}"
            </p>
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
