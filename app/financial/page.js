import AppShell from "../components/AppShell";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const transactions = [
  {
    label: "Wholesale order",
    date: "16 Feb",
    type: "Income",
    amount: "Rp 18.500.000",
  },
  {
    label: "Packaging supplies",
    date: "15 Feb",
    type: "Expense",
    amount: "Rp 3.200.000",
  },
  {
    label: "Retail sales",
    date: "14 Feb",
    type: "Income",
    amount: "Rp 9.700.000",
  },
];

export default function FinancialPage() {
  return (
    <AppShell>
      <PageHeader
        title="Financial"
        subtitle="Track revenue, expenses, and recent activity"
      />

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <StatCard
            label="Revenue"
            value="Rp 53M"
            icon="bi-cash-stack"
            color="bg-success"
          />
        </div>
        <div className="col-md-4">
          <StatCard
            label="Expenses"
            value="Rp 32M"
            icon="bi-receipt"
            color="bg-danger"
          />
        </div>
        <div className="col-md-4">
          <StatCard
            label="Net Income"
            value="Rp 21M"
            icon="bi-graph-up-arrow"
            color="bg-primary"
          />
        </div>
      </div>

      <div className="card-box">
        <h6 className="mb-3">Recent Transactions</h6>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Date</th>
                <th>Type</th>
                <th className="text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.label}>
                  <td>{transaction.label}</td>
                  <td>{transaction.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        transaction.type === "Income"
                          ? "text-bg-success"
                          : "text-bg-danger"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                  <td className="text-end">{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
