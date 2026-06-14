import Link from "next/link";
import Image from "next/image";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { site } from "@/data/integrityPayments";

export default function Header() {
  return (
    <header className="integrity-header">
      <div className="integrity-header-inner">
        <Link className="integrity-logo-link" href="/" aria-label="Integrity Payments home">
          <Image
            className="integrity-logo"
            src={site.logo}
            alt="Integrity Payments"
            width={248}
            height={57}
            priority
          />
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
