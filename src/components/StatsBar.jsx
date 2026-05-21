export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-number">200+</div>
          <div className="stat-label">Eventos producidos</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Cobertura integral</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-number">0</div>
          <div className="stat-label">Preocupaciones para vos</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">Posibilidades creativas</div>
        </div>
      </div>
    </div>
  )
}
