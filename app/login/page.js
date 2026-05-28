import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-panel">
        <p className="text-muted mb-1">Welcome back</p>
        <h3 className="fw-bold mb-4">Sunflower</h3>

        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              placeholder="ferry@example.com"
              type="email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>

          <Link className="btn btn-success w-100" href="/">
            Log In
          </Link>
        </form>
      </div>

      <div className="grass" aria-hidden="true" />
    </main>
  );
}
