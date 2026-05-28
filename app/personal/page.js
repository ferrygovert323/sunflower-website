import AppShell from "../components/AppShell";
import PageHeader from "../components/PageHeader";

export default function PersonalPage() {
  return (
    <AppShell>
      <PageHeader
        title="Personal"
        subtitle="Your profile and account preferences"
      />

      <div className="row g-3">
        <div className="col-lg-5">
          <div className="card-box profile-panel">
            <div className="avatar-circle mb-3">FG</div>
            <h5 className="mb-1">Ferry Govert</h5>
            <p className="text-muted mb-3">Business Owner</p>
            <button className="btn btn-success btn-sm" type="button">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card-box">
            <h6 className="mb-3">Account Details</h6>

            <div className="detail-row">
              <span>Email</span>
              <strong>ferry@example.com</strong>
            </div>
            <div className="detail-row">
              <span>Language</span>
              <strong>English / Chinese</strong>
            </div>
            <div className="detail-row">
              <span>Timezone</span>
              <strong>Asia/Bangkok</strong>
            </div>
            <div className="detail-row">
              <span>Notifications</span>
              <strong>Enabled</strong>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
