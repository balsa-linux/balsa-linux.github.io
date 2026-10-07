import { type ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import './FeatureRow.css'

interface FeatureRowProps {
  headline: ReactNode
  body: ReactNode
  visual?: ReactNode
}

export function FeatureRow({ headline, body, visual }: FeatureRowProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="feature-section">
      <div
        ref={ref}
        className={`feature-row fade-up${inView ? ' visible' : ''}`}
      >
        <div className="feature-row-text">
          <h2 className="feature-row-headline">{headline}</h2>
          <p className="feature-row-body">{body}</p>
        </div>
        {visual && (
          <div className="feature-row-visual">
            {visual}
          </div>
        )}
      </div>
    </section>
  )
}
