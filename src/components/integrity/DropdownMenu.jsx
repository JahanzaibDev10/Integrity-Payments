"use client";

import Link from "next/link";

export default function DropdownMenu({ item, open, onToggle }) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <Link className="integrity-nav-link" href={item.href}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="integrity-dropdown">
      <Link
        className="integrity-nav-link integrity-nav-link-dropdown"
        href={item.href}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <span aria-hidden="true" className="integrity-chevron">
          ▾
        </span>
      </Link>
      <button
        className="integrity-mobile-submenu-toggle"
        type="button"
        aria-label={`Toggle ${item.label} menu`}
        aria-expanded={open}
        onClick={onToggle}
      >
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="integrity-dropdown-panel" role="menu">
        {item.children.map((child) => (
          <Link key={child.href} className="integrity-dropdown-link" href={child.href} role="menuitem">
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
