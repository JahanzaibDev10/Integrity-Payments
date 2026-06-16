"use client";

import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { navigation } from "@/data/integrityPayments";

export default function DesktopNavigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (href) => {
    setOpenDropdown(openDropdown === href ? null : href);
  };

  return (
    <nav className="integrity-desktop-nav" aria-label="Main navigation">
      {navigation.map((item) => (
        <DropdownMenu
          key={item.href}
          item={item}
          open={openDropdown === item.href}
          onToggle={() => toggleDropdown(item.href)}
        />
      ))}
    </nav>
  );
}
