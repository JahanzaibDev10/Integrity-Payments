import { redirect } from "next/navigation";

export const metadata = {
  title: "401 K",
  description:
    "Resilient Payments retirement plan support including traditional 401(k), Roth 401(k), Safe Harbor, and profit-sharing options.",
};

export default function Page() {
  redirect("/401-k");
}

