import RevenueChart from "./components/RevenueChart";
import AppShell from "./components/AppShell";
import PageHeader from "./components/PageHeader";
import StatCard from "./components/StatCard";

const summaryCards = [
  {
    label: "Total Products",
    value: "100",
    icon: "bi-box",
    color: "bg-primary",
  },
  {
    label: "Low Stock Alerts",
    value: "14",
    icon: "bi-exclamation-triangle",
    color: "bg-warning",
  },
  {
    label: "Out of Stock",
    value: "7",
    icon: "bi-x-circle",
    color: "bg-danger",
  },
];

const financeCards = [
  {
    label: "Net Income",
    value: "Rp 21.000.000",
    icon: "bi-currency-dollar",
    color: "bg-warning",
  },
  {
    label: "Total Revenue",
    value: "Rp 53.000.000",
    icon: "bi-currency-dollar",
    color: "bg-success",
  },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow={
          <>
            Hello, Ferry{" "}
            <span className="muted-chinese">
              {"\u00b7 \u4f60\u597d\uff0cFerry"}
            </span>
          </>
        }
        title={<>Dashboard {"\u4eea\u8868\u677f"}</>}
        subtitle="Overview of your business performance"
      />

      <div className="row g-3 mb-4">
        {summaryCards.map((card) => (
          <div className="col-md-4" key={card.label}>
            <StatCard {...card} />
          </div>
        ))}
      </div>

      <div className="row g-3">
        <div className="col-md-8">
          <div className="card-box chart-card">
            <h6>Revenue Overview</h6>
            <RevenueChart />
          </div>
        </div>

        <div className="col-md-4">
          {financeCards.map((card, index) => (
            <div
              className={`card-box d-flex justify-content-between align-items-center ${
                index === 0 ? "mb-3" : ""
              }`}
              key={card.label}
            >
              <div>
                <p>{card.label}</p>
                <h5>{card.value}</h5>
              </div>
              <div className={`icon-box ${card.color}`}>
                <i className={`bi ${card.icon}`} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
