import "./globals.css";
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/custom_fixes.css";


export const metadata = {
  title: {
    default: "Resilient Payments",
    template: "%s",
  },
  applicationName: "Resilient Payments",
  description:
    "Resilient Payments helps businesses with payments, payroll, lending, web development, ATM machines, business insurance, and partner programs.",
  icons: {
    icon: [
      { url: "/images/integrity-payments/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/integrity-payments/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/integrity-payments/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: { url: "/images/integrity-payments/favicon-180.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='index-one'>

        {children}



      </body>
    </html>
  );
}

