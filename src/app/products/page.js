import IntegrityPage from "@/components/integrity/IntegrityPage";

export const metadata = {
  title: "Services",
  description: "Integrity Payments services for payments, payroll, lending, text messaging, web development, ATM machines, and business insurance.",
};

export default function Page() {
  return <IntegrityPage slug="products" />;
}
