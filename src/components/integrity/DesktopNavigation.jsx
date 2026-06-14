"use client";

import DropdownMenu from "./DropdownMenu";
import { navigation } from "@/data/integrityPayments";

export default function DesktopNavigation() {
  return (
    <nav className="integrity-desktop-nav" aria-label="Main navigation">
      {navigation.map((item) => (
        <DropdownMenu key={item.href} item={item} open={false} />
      ))}
    </nav>
  );
}
