import { Link } from 'react-router-dom'
import { life } from '../data/content.js'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import MediaCarousel from './MediaCarousel.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function Life() {
  return (
    <section id="life" className="section life">
      <div className="shell">
        <div className="life__head">
          <div>
            <span className="eyebrow">生活与爱好</span>
            <h2 className="section-title">
              台下的我，也在<span className="hl">认真地生活</span>。
            </h2>
          </div>
        </div>

        <div className="life__grid">
          {life.map((item, i) => {
            const [ref, shown] = useReveal({ threshold: 0.12 })
            const inner = (
              <>
                <div className="lcard__media">
                  {item.images ? (
                    <MediaCarousel images={item.images} />
                  ) : item.cover ? (
                    <img
                      src={item.cover}
                      alt={item.title}
                      style={item.coverPos ? { objectPosition: item.coverPos } : undefined}
                    />
                  ) : (
                    <ImagePlaceholder label={item.imageLabel} tag={item.tag} icon="team" />
                  )}
                </div>
                <div className="lcard__body">
                  <h3>
                    {item.title}
                    {item.link && <span className="lcard__more">了解这段经历 →</span>}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </>
            )
            const cls = `lcard reveal ${shown ? 'in' : ''} ${item.link ? 'lcard--link' : ''}`
            return item.link ? (
              <Link
                key={item.id}
                to={item.link}
                ref={ref}
                className={cls}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {inner}
              </Link>
            ) : (
              <article
                key={item.id}
                ref={ref}
                className={cls}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {inner}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
