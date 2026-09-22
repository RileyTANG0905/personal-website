import { profile } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="./hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="shell hero__inner hero__inner--center">
        <p className="hero__kicker">香港中文大学（深圳）</p>

        <h1 className="hero__title">
          以<span className="hl">表达</span>连接人心，<br />
          以<span className="hl">实践</span>丈量世界。
        </h1>

        <p className="hero__sub">
          {profile.name} · {profile.enName}
          <br />
          城市规划 · 学术社团运营 · 双语主持 · 活动策划与接待
        </p>

        <div className="hero__actions">
          <a className="btn btn-primary" href="#contact">
            <Icon name="mail" size={17} /> 联系我
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="scroll">
        <span>向下浏览</span>
        <i className="hero__scroll-line" />
      </a>
    </section>
  )
}
