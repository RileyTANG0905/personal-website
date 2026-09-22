import { Icon } from './Icons.jsx'

// Reusable placeholder. Swap with a real <img> later by replacing {children}.
export default function ImagePlaceholder({ label = '图片占位', tag, icon = 'doc' }) {
  return (
    <div className="ph">
      {tag && <span className="ph-tag">{tag}</span>}
      <div className="ph-label">
        <span className="ph-icon"><Icon name={icon} size={20} /></span>
        <span>{label}</span>
      </div>
    </div>
  )
}
