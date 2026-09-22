import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import { Icon } from './Icons.jsx'
import Folder from './Folder.jsx'
import { useReveal } from '../hooks/useReveal.js'

/* 荣誉奖项照片：自动滑动轮播 */
function HonorsCarousel() {
  const slides = [
    { src: './honors-1.jpg', alt: '杰出才能奖 · 思廷书院高桌晚宴' },
    { src: './honors-2.jpg', alt: '思廷阳光奖学金 · 高桌晚宴' },
  ]
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="honors-carousel">
      {slides.map((s, idx) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading="lazy"
          className={idx === i ? 'on' : ''}
        />
      ))}
      <div className="honors-carousel__dots">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            className={idx === i ? 'on' : ''}
            aria-label={`查看第 ${idx + 1} 张照片`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const [ref, shown] = useReveal()

  return (
    <section id="about" className="section about">
      <div className="shell">
        <div className="about__grid">
          {/* Left: avatar + contact */}
          <div className={`about__aside reveal ${shown ? 'in' : ''}`} ref={ref}>
            <div className="about__avatar">
              <img src="./avatar.jpg" alt={`${profile.name} 的照片`} />
            </div>
            <div className="about__contact">
              <a className="about__row" href={`mailto:${profile.email}`}>
                <Icon name="mail" size={18} />
                <span>{profile.email}</span>
              </a>
              <a className="about__row" href={`tel:${profile.phone}`}>
                <Icon name="phone" size={18} />
                <span>{profile.phone}</span>
              </a>
              <div className="about__row about__row--static">
                <Icon name="map" size={18} />
                <span>{profile.school}</span>
              </div>
            </div>
          </div>

          {/* Right: intro + education + honors */}
          <div className="about__main">
            <span className="eyebrow">关于我</span>
            <h2 className="section-title">
              比起「已经擅长什么」，<br />
              我更在意「<span className="hl">还能成为什么</span>」。
            </h2>
            <p className="about__summary">{profile.summary}</p>

            {/* 统一信息面板：教育背景 | 荣誉奖项 */}
            <div className="about__panel">
              <div className="about__panel-col">
                <h3>教育背景</h3>
                <p className="about__card-school">{profile.education.school}</p>
                <p className="about__card-sub">{profile.education.major}</p>
                <p className="about__card-meta">{profile.education.duration}</p>
                <div className="about__keys">
                  <span className="about__keys-label">在校园里，我同时是</span>
                  <div className="about__fold-tags">
                    {/* 标签顺序：中英主持 → 话剧演员 → 社团会长 */}
                    {[profile.campusIdentities[0], profile.campusIdentities[2], profile.campusIdentities[1]].map((item) => (
                      <span className="about__fold-tag" key={item.title}>
                        {item.short}
                      </span>
                    ))}
                  </div>
                  <div className="about__fold-folder about__keys-folder">
                    <Folder
                      size={2}
                      color="#f5c26b"
                      className="fold-folder-box"
                      items={profile.campusIdentities.map((item) => (
                        <img key={item.title} src={item.img} alt={item.title} loading="lazy" />
                      ))}
                    />
                  </div>
                  <p className="about__fold-hintline">点击文件夹，打开三张照片</p>
                </div>
              </div>

              <div className="about__panel-col">
                <h3>荣誉奖项</h3>
                <HonorsCarousel />
                <ul className="about__honors">
                  {profile.honors.map((h) => (
                    <li key={h}>
                      <span className="about__star">★</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
