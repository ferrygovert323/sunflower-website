import AppShell from "../components/AppShell";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const users = [
  {
    name: "Ferry Govert",
    role: "Owner",
    status: "Active",
  },
  {
    name: "Marsela Govert",
    role: "Finance",
    status: "Active",
  },
  {
    name: "Warehouse Staff",
    role: "Inventory",
    status: "Pending",
  },
];

export default function UserManagementPage() {
  return (
    <AppShell>
      <PageHeader
        title="User Management"
        subtitle="Manage access and team responsibilities"
      />

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <StatCard
            label="Active Users"
            value="12"
            icon="bi-people"
            color="bg-success"
          />
        </div>
        <div className="col-md-4">
          <StatCard
            label="Pending Invites"
            value="3"
            icon="bi-person-plus"
            color="bg-warning"
          />
        </div>
        <div className="col-md-4">
          <StatCard
            label="Roles"
            value="4"
            icon="bi-shield-check"
            color="bg-primary"
          />
        </div>
      </div>

      <div className="card-box">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">Team Members</h6>
          <button className="btn btn-success btn-sm" type="button">
            Invite User
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active"
                          ? "text-bg-success"
                          : "text-bg-warning"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-outline-secondary btn-sm" type="button">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
