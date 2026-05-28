import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  return (
    <main className="dashboard-shell d-flex">
      <Sidebar />

      <section className="content flex-grow-1 p-4">
        <div className="page-wrapper">{children}</div>
      </section>

      <div className="grass" aria-hidden="true" />
    </main>
  );
}
