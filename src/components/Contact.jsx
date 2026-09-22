import { profile } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__mesh" />
      </div>
      <div className="shell contact__inner">
        <span className="eyebrow contact__eyebrow">保持联系</span>
        <h2 className="contact__title">
          聊天或合作，<br />
          <span className="hl">请联系我</span>。
        </h2>

        <div className="contact__rows">
          <a className="contact__row" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={20} />
            <span>{profile.email}</span>
          </a>
          <a className="contact__row" href={`tel:${profile.phone}`}>
            <Icon name="phone" size={20} />
            <span>{profile.phone}</span>
          </a>
        </div>

        <div className="contact__actions">
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={17} /> 写封邮件
          </a>
        </div>

        <footer className="contact__foot">
          <span>© {new Date().getFullYear()} {profile.name} · {profile.enName}</span>
          <span>香港中文大学（深圳）</span>
        </footer>
      </div>
    </section>
  )
}
