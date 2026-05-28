export default function PageHeader({ eyebrow = "Hello, Ferry", title, subtitle }) {
  return (
    <header className="mb-4">
      <p className="text-muted mb-1">{eyebrow}</p>
      <h3 className="fw-bold">{title}</h3>
      {subtitle ? <small className="text-muted">{subtitle}</small> : null}
    </header>
  );
}
