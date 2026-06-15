"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import { navigation, site } from "@/data/integrityPayments";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  return (
    <>
      <button
        className="integrity-menu-button"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`integrity-mobile-panel ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="integrity-mobile-panel-header">
          <Link href="/" className="integrity-mobile-logo" onClick={() => setIsOpen(false)}>
            <Image src={site.logo} width={300} height={75} alt="Resilient Payments" priority />
          </Link>
          <button
            className="integrity-mobile-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="integrity-mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.href} className={openMenu === item.href ? "is-open" : ""} onClick={() => undefined}>
              <DropdownMenu
                item={item}
                open={openMenu === item.href}
                onToggle={() => setOpenMenu((current) => (current === item.href ? "" : item.href))}
              />
            </div>
          ))}
        </nav>
      </div>
      {isOpen && <button className="integrity-mobile-scrim" type="button" aria-label="Close menu" onClick={() => setIsOpen(false)} />}
    </>
  );
}
