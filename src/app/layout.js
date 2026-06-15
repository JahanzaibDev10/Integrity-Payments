import "./globals.css";
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";


export const metadata = {
  title: "Resilient Payments",
  description:
    "Resilient Payments helps businesses with payments, payroll, lending, web development, ATM machines, business insurance, and partner programs.",
  icons: {
    icon: "/images/integrity-payments/integrity-favicon.png",
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
