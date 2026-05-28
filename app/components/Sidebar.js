"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: "bi-grid",
  },
  {
    href: "/inventory",
    label: "Inventory",
    icon: "bi-box-seam",
  },
  {
    href: "/financial",
    label: "Financial",
    icon: "bi-cash-stack",
  },
  {
    href: "/usermanagement",
    label: "User Management",
    icon: "bi-people",
  },
  {
    href: "/personal",
    label: "Personal",
    icon: "bi-person",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar p-3">
      <h4 className="fw-bold mb-4">{"\ud83c\udf3b"} Sunflower</h4>

      <ul className="nav flex-column">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li className="nav-item" key={item.href}>
              <Link
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <i className={`bi ${item.icon} me-2`} aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}

        <li className="nav-item mt-4">
          <Link href="/login" className="nav-link logout">
            <i className="bi bi-box-arrow-right me-2" aria-hidden="true" />
            Log Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}
