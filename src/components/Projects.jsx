import { projects } from '../data/content.js'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import AccordionGallery from './AccordionGallery.jsx'
import MediaCarousel from './MediaCarousel.jsx'
import { useReveal } from '../hooks/useReveal.js'

function ProjectCard({ p, index }) {
  const [ref, shown] = useReveal({ threshold: 0.1 })
  return (
    <article
      ref={ref}
      className={`pcard reveal ${shown ? 'in' : ''} pcard--${p.span}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="pcard__media">
        {p.images ? (
          p.gallery === 'accordion' ? (
            <AccordionGallery
              items={p.images.map((im) => ({ image: im.src, label: im.label, alt: im.alt }))}
              defaultIndex={p.galleryDefault ?? 1}
              accentColor="#f5c26b"
              overlayColor="#0b0b0e"
              expandRatio={0.42}
              height={380}
              radius={0}
              gap={0}
              trigger="hover"
            />
          ) : (
            <MediaCarousel images={p.images} />
          )
        ) : (
          <ImagePlaceholder label={p.imageLabel} tag={p.cat} icon="map" />
        )}
      </div>
      <div className="pcard__body">
        <div className="pcard__meta">
          <span className="pcard__cat">{p.cat}</span>
          <span className="pcard__period">{p.period}</span>
        </div>
        <h3 className="pcard__title">{p.title}</h3>
        <p className="pcard__role">{p.role}</p>
        <p className="pcard__desc">{p.desc}</p>
        <div className="pcard__tags">
          {p.tags.map((t) => (
            <span key={t} className="pcard__tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="shell">
        <div className="projects__head">
          <div>
            <span className="eyebrow">项目与实践</span>
            <h2 className="section-title">
              实习，实践与社团活动的<br />
              <span className="hl">真实切片</span>。
            </h2>
          </div>
          <p className="section-lead">
            从 TOD 片区研判到社区营造，从 0 到 1 搭建学术社团到服务学习课堂——
            每一段经历都对应一份可展示的成果。
          </p>
        </div>

        <div className="pcard__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
