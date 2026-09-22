import { Link } from 'react-router-dom'
import { skills } from '../data/content.js'
import { Icon } from './Icons.jsx'
import WarpText from './WarpText.jsx'
import { useReveal } from '../hooks/useReveal.js'

function SkillCard({ s, index }) {
  const [ref, shown] = useReveal({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`scard reveal ${shown ? 'in' : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="scard__icon"><Icon name={s.icon} size={22} /></span>
      <h3 className="scard__name">{s.name}</h3>
      <p className="scard__desc">{s.desc}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <span className="eyebrow">能力图谱</span>
        <h2 className="section-title">
          硬技能打底，<span className="hl">软技能</span>出彩。
        </h2>

        <div className="skills__group">
          <h3 className="skills__label">专业硬技能</h3>
          <div className="scard__grid">
            {skills.hard.map((s, i) => (
              <SkillCard key={s.name} s={s} index={i} />
            ))}
          </div>
        </div>

        <div className="skills__group">
          <h3 className="skills__label">统筹 · 表达等软技能</h3>
          <div className="scard__grid">
            {skills.soft.map((s, i) => (
              <SkillCard key={s.name} s={s} index={i} />
            ))}
          </div>
        </div>

        <div className="skills__host">
          <div className="skills__host-photo">
            <img src="/skills-host.jpg" alt="主持现场" loading="lazy" />
          </div>
          <div className="skills__host-info">
            <span className="eyebrow">双语主持 / 礼仪</span>
            <WarpText
              text="10+ 场校内外活动主持"
              color="#f5c26b"
              fontSize="clamp(2rem, 3.2vw, 3rem)"
              fontWeight={700}
              speed={0.5}
              warpStrength={0.06}
              style={{ height: '108px', width: 'min(440px, 100%)', margin: '2px 0 0' }}
            />
            <Link className="skills__host-link" to="/hosting">
              点击了解详细
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
