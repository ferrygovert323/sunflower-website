export default function StatCard({ label, value, icon, color = "bg-primary" }) {
  return (
    <div className="card-box d-flex justify-content-between align-items-center">
      <div>
        <p>{label}</p>
        <h4>{value}</h4>
      </div>
      <div className={`icon-box ${color}`}>
        <i className={`bi ${icon}`} aria-hidden="true" />
      </div>
    </div>
  );
}
