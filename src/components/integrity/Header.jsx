import Link from "next/link";
import Image from "next/image";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { site } from "@/data/integrityPayments";

export default function Header() {
  return (
    <header className="integrity-header">
      <div className="integrity-header-inner">
        <Link className="integrity-logo-link" href="/" aria-label="Resilient Payments home">
          <Image
            className="integrity-logo"
            src={site.logo}
            alt="Resilient Payments"
            width={320}
            height={80}
            priority
          />
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
