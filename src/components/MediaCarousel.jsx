import { useEffect, useState } from 'react'

/* 通用照片自动轮播（3.8s 切换 + 指示点 + Ken Burns） */
export default function MediaCarousel({ images }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), 3800)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div className="media-carousel">
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={idx === i ? 'on' : ''}
          style={img.pos ? { objectPosition: img.pos } : undefined}
        />
      ))}
      <div className="media-carousel__dots">
        {images.map((img, idx) => (
          <button
            key={img.src}
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
