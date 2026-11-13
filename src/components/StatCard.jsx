/**
 * Reusable StatCard component.
 * Displays a single statistic figure.
 */
export default function StatCard({ stat }) {
  return (
    <div className="stat-card">
      <p className="stat-card__value">{stat.value}</p>
      <p className="stat-card__label">{stat.label}</p>
    </div>
  )
}

