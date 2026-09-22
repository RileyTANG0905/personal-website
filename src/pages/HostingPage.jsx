import { Link } from 'react-router-dom'
import { hostingTimeline } from '../data/content.js'
import { Icon } from '../components/Icons.jsx'
import MediaCarousel from '../components/MediaCarousel.jsx'
import '../styles/hosting.css'

export default function HostingPage() {
  return (
    <div className="hosting-page">
      <header className="hosting-top">
        <Link to="/" className="hosting-back">
          <Icon name="arrow" size={16} />
          返回主页
        </Link>
        <span className="hosting-mark">TRL</span>
      </header>

      <main className="hosting-shell">
        <span className="eyebrow">主持经历</span>
        <h1 className="hosting-title">
          话筒前后，<br />
          我在练习把话说给<span className="hl">更多人</span>听。
        </h1>
        <p className="hosting-lead">
          10+ 场校内外活动的中英文主持人，按时间排序的现场记录如下。
        </p>

        {hostingTimeline.map((group) => (
          <section className="hosting-year" key={group.year}>
            <div className="hosting-year-head">
              <span className="hosting-year-num">{group.year}</span>
              <span className="hosting-year-line" />
              <span className="hosting-year-count">{group.events.length} 场</span>
            </div>
            <div className="hosting-grid">
              {group.events.map((ev) => (
                <article className="host-card" key={ev.title}>
                  <div className="host-card__media">
                    {ev.images.length > 1 ? (
                      <MediaCarousel images={ev.images} />
                    ) : (
                      <img src={ev.images[0].src} alt={ev.images[0].alt} loading="lazy" />
                    )}
                  </div>
                  <div className="host-card__body">
                    <span className="host-card__year">{group.year}</span>
                    <h3 className="host-card__title">{ev.title}</h3>
                  </div>
                </article>
              ))}
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
