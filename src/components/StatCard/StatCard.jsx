import './StatCard.css';

function StatCard({ label, value, icon: Icon, color, bgColor }) {
  return (
    <article className="stat-card">
      <div className="stat-card__icon" style={{ backgroundColor: bgColor }}>
        <Icon size={22} color={color} />
      </div>
      <div className="stat-card__info">
        <span className="stat-card__value" style={{ color }}>{value}</span>
        <span className="stat-card__label">{label}</span>
      </div>
    </article>
  );
}

export default StatCard;
