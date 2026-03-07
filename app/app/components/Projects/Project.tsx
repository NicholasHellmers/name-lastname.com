import Image from "next/image"
import { languageColors } from '@/util/languageColors'

type ProjectProps = {
  name: string
  desc: string
  project_url: string
  img_url: string
  tags?: string[]
}

export default function Project({ name, desc, project_url, img_url, tags = [] }: ProjectProps) {
  return (
    <a
      href={project_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card flex flex-col overflow-hidden group block"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={img_url}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-[var(--text-primary)] text-base leading-snug">{name}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{desc}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map(tag => {
              const color = languageColors[tag] ?? 'var(--accent)'
              return (
                <span
                  key={tag}
                  className="skill-badge text-xs"
                  style={{
                    color,
                    borderColor: `${color}55`,
                    background: `${color}18`,
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-[var(--accent)] text-xs font-medium mt-1">
          <span>View project</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  )
}
