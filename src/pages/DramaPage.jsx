import { Link } from 'react-router-dom'
import { dramaExperiences } from '../data/content.js'
import { Icon } from '../components/Icons.jsx'
import MediaCarousel from '../components/MediaCarousel.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import '../styles/drama.css'

export default function DramaPage() {
  return (
    <div className="drama-page">
      <header className="hosting-top">
        <Link to="/" className="hosting-back">
          <Icon name="arrow" size={16} />
          返回主页
        </Link>
        <span className="hosting-mark">TRL</span>
      </header>

      <main className="hosting-shell">
        <span className="eyebrow">戏剧经历</span>
        <h1 className="hosting-title">
          灯光亮起的时候，<br />
          我就成了<span className="hl">另一个人</span>。
        </h1>
        <p className="hosting-lead">
          两段舞台经历，两份落笔纪念——排练厅里的夜晚，都写进了这些文字里。
        </p>

        {dramaExperiences.map((exp) => (
          <section className="drama-exp" key={exp.id}>
            <div className="drama-exp__head">
              <span className="drama-exp__year">{exp.year}</span>
              <div>
                <h2 className="drama-exp__title">{exp.title}</h2>
                <span className="drama-exp__role">{exp.role}</span>
              </div>
            </div>

            <div className="drama-exp__media">
              {exp.images.length > 1 ? (
                <MediaCarousel images={exp.images} />
              ) : exp.images.length === 1 ? (
                <img src={exp.images[0].src} alt={exp.images[0].alt} />
              ) : (
                <ImagePlaceholder label="剧照待补" tag={exp.year} icon="team" />
              )}
            </div>

            <div className="drama-exp__note">
              {exp.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="drama-exp__date">{exp.date}</p>
            </div>
          </section>
        ))}
      </main>

      <footer className="hosting-foot">
        <span>© {new Date().getFullYear()} 唐睿霖 · Riley Tang</span>
        <Link to="/">返回个人主页</Link>
      </footer>
    </div>
  )
}
