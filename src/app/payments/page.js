import IntegrityPage from "@/components/integrity/IntegrityPage";

export const metadata = {
  title: "Credit Card Processing",
  description: "Credit card processing, eCommerce, invoicing, subscription billing, PCI compliance, and customer support from Resilient Payments.",
};

export default function Page() {
  return <IntegrityPage slug="payments" />;
}
