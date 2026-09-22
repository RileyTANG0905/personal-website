// Minimal inline icon set (stroke-based, inherits currentColor)
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, size = 22 }) {
  const p = { ...base, width: size, height: size }
  switch (name) {
    case 'map':
      return (
        <svg {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" /></svg>
      )
    case 'doc':
      return (
        <svg {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M8 13h8M8 17h6" /></svg>
      )
    case 'chart':
      return (
        <svg {...p}><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6M20 16v-9" /></svg>
      )
    case 'lang':
      return (
        <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
      )
    case 'mic':
      return (
        <svg {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
      )
    case 'plan':
      return (
        <svg {...p}><path d="M4 5h16v6H4zM4 15h16v4H4zM8 8h.01M8 17h.01" /></svg>
      )
    case 'team':
      return (
        <svg {...p}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 7a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" /></svg>
      )
    case 'news':
      return (
        <svg {...p}><path d="M4 5h13v14H6a2 2 0 0 1-2-2V5Z" /><path d="M17 8h3v9a2 2 0 0 1-2 2M7 9h7M7 13h7M7 17h4" /></svg>
      )
    case 'download':
      return (
        <svg {...p}><path d="M12 3v12M7 11l5 5 5-5M5 21h14" /></svg>
      )
    case 'mail':
      return (
        <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      )
    case 'phone':
      return (
        <svg {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
      )
    case 'arrow':
      return (
        <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      )
    default:
      return <svg {...p}><circle cx="12" cy="12" r="9" /></svg>
  }
}
