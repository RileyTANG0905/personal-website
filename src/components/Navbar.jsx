import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'
import { Icon } from './Icons.jsx'
import JellyRadio from './JellyRadio.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const ids = nav.map((n) => n.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="shell nav__inner">
        <button className="nav__brand" onClick={() => go('hero')}>
          <span className="nav__mark">TRL</span>
          <span className="nav__name">
            唐睿霖 <i>Riley Tang</i>
          </span>
        </button>

        <nav className={`nav__links ${open ? 'open' : ''}`}>
          <JellyRadio
            items={nav.map((n) => ({ value: n.id, label: n.label }))}
            value={active}
            onChange={(value) => go(value)}
            chipColor="rgba(255, 255, 255, 0.05)"
            activeColor="#f5c26b"
            textColor="#b6b4bd"
            activeTextColor="#1a1206"
            size="md"
            gap={4}
            radius={18}
            swell={0.14}
            barge={4}
            shrink={0.04}
            jelly={0.8}
            bounce={0.22}
            stagger={18}
            stiffness={560}
            ariaLabel="页面导航"
          />
        </nav>

        <div className="nav__cta">
          <button className="btn btn-primary" onClick={() => go('contact')}>
            联系我
          </button>
          <button
            className="nav__burger"
            aria-label="menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
