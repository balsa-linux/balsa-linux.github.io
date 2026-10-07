import { useInView } from '../../hooks/useInView'
import './FeatureGrid.css'

const features = [
  { title: 'balsa-pkg', body: 'fzf-powered fuzzy package search. Find any package in seconds.', badge: null},
  { title: 'OpenZFS', body: 'Advanced storage with snapshots, checksums, and pooling built in.', badge: null},
  { title: 'Custom Kernels', body: 'Zen and Xanmod kernels available at install time.', badge: 'CachyOS Kernel coming soon'},
  { title: 'LibreWolf', body: 'Privacy-respecting Firefox fork. No telemetry, strong defaults.', badge: null},
  { title: 'H-Balsa', body: 'Hardened security configuration set for high-assurance environments.', badge: 'Coming soon'},
  { title: 'zsh + Oh My Zsh', body: 'Autosuggestions, syntax highlighting, and a sane prompt out of the box.', badge: null},
]

export function FeatureGrid() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`feature-grid-section fade-up${inView ? ' visible' : ''}`}
    >
      <div className="feature-grid">
        {features.map(({ title, body, badge }) => (
          <div key={title} className="feature-card">
            <div className="feature-card-title">{title}</div>
            <p className="feature-card-body">{body}</p>
            {badge && <span className="feature-card-badge">{badge}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
