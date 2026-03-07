import Project from './Project'

const projects = [
  {
    name: 'Paraguay Supermarket Products Dataset',
    desc: 'A dataset of 40,000+ supermarket products from Paraguay with names, prices (in Guaraníes), and image URLs — collected via a custom Go-powered web scraper.',
    project_url: 'https://www.kaggle.com/datasets/nikihellmers/paraguay-supermarket-products',
    img_url: '/dataset-cover.jpeg',
    tags: ['Go', 'Python', 'Docker', 'Data'],
  },
  {
    name: 'Connect with your Peers',
    desc: 'A Chrome extension that streamlines networking with classmates on Canvas LMS, making it easier to find and connect with peers across courses.',
    project_url: 'https://chromewebstore.google.com/detail/connect-with-your-peers/cefoneomgidhcbjohhnbfffdeikjopbj',
    img_url: '/unnamed.png',
    tags: ['Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-14">
      <div className="animate-fadeInUp delay-100 text-center">
        <span className="section-heading">Projects</span>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={project.name} className={`animate-fadeInUp delay-${(i + 2) * 100}`}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}
