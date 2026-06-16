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

  const handleMainLinkClick = (e) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <div className="integrity-dropdown">
      <button
        className="integrity-nav-link integrity-nav-link-dropdown"
        onClick={handleMainLinkClick}
        aria-haspopup="true"
        aria-expanded={open}
        type="button"
      >
        {item.label}
        <span aria-hidden="true" className="integrity-chevron">
          ▾
        </span>
      </button>
      <div className="integrity-dropdown-panel" role="menu" hidden={!open}>
        {item.children.map((child) => (
          <Link key={child.href} className="integrity-dropdown-link" href={child.href} role="menuitem">
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
