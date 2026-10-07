import { useState } from 'react'
import './ProfileSelector.css'

type Profile = 'Gaming' | 'Development' | 'Balanced'

const profiles: Record<Profile, { title: string; metrics: { label: string; value: string }[] }> = {
  Gaming: {
    title: 'Gaming Profile',
    metrics: [
      { label: 'Kernel', value: 'linux-cachyos (Coming Soon)' },
      { label: 'CPU Governor', value: 'performance' },
      { label: 'Scheduler', value: 'BORE' },
      { label: 'Hugepages', value: 'always' },
    ],
  },
  Development: {
    title: 'Development Profile',
    metrics: [
      { label: 'Kernel', value: 'linux-zen' },
      { label: 'CPU Governor', value: 'schedutil' },
      { label: 'inotify limit', value: '524288' },
      { label: 'Swappiness', value: '10' },
    ],
  },
  Balanced: {
    title: 'Balanced Profile',
    metrics: [
      { label: 'Kernel', value: 'linux' },
      { label: 'CPU Governor', value: 'powersave' },
      { label: 'Scheduler', value: 'CFS' },
      { label: 'TDP', value: 'auto' },
    ],
  },
}

export function ProfileSelector() {
  const [active, setActive] = useState<Profile>('Gaming')
  const { title, metrics } = profiles[active]

  return (
    <div className="profile-selector">
      <div className="profile-tabs" role="tablist">
        {(Object.keys(profiles) as Profile[]).map((p) => (
          <button
            key={p}
            role="tab"
            aria-selected={active === p}
            className={`profile-tab${active === p ? ' active' : ''}`}
            onClick={() => setActive(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="profile-card" role="tabpanel">
        <div className="profile-card-title">{title}</div>
        {metrics.map(({ label, value }) => (
          <div key={label} className="profile-metric">
            <span className="profile-metric-label">{label}</span>
            <span className="profile-metric-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
