import { NextResponse } from "next/server";

const legacyTemplateRoutes = [
  "/404",
  "/appoinment",
  "/blog-details",
  "/blog-details-default",
  "/blog-grid",
  "/blog-list",
  "/home-eight",
  "/home-five",
  "/home-four",
  "/home-nine",
  "/home-seven",
  "/home-six",
  "/home-ten",
  "/home-three",
  "/home-two",
  "/onepage-eight",
  "/onepage-five",
  "/onepage-four",
  "/onepage-nine",
  "/onepage-one",
  "/onepage-seven",
  "/onepage-six",
  "/onepage-ten",
  "/onepage-three",
  "/onepage-two",
  "/our-service",
  "/portfolio-style-2",
  "/portfolio-style-3",
  "/portfolio-style-4",
  "/portfolio-style-5",
  "/pricing-plane",
  "/project",
  "/project-details",
  "/service-2",
  "/service-3",
  "/service-details",
  "/team",
  "/team-details",
  "/team-style-2",
  "/team-style-3",
  "/team-style-4",
  "/team-style-5",
  "/testimonial-style-1",
];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const shouldRedirect = legacyTemplateRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/404/:path*",
    "/appoinment/:path*",
    "/blog-details/:path*",
    "/blog-details-default/:path*",
    "/blog-grid/:path*",
    "/blog-list/:path*",
    "/home-eight/:path*",
    "/home-five/:path*",
    "/home-four/:path*",
    "/home-nine/:path*",
    "/home-seven/:path*",
    "/home-six/:path*",
    "/home-ten/:path*",
    "/home-three/:path*",
    "/home-two/:path*",
    "/onepage-eight/:path*",
    "/onepage-five/:path*",
    "/onepage-four/:path*",
    "/onepage-nine/:path*",
    "/onepage-one/:path*",
    "/onepage-seven/:path*",
    "/onepage-six/:path*",
    "/onepage-ten/:path*",
    "/onepage-three/:path*",
    "/onepage-two/:path*",
    "/our-service/:path*",
    "/portfolio-style-2/:path*",
    "/portfolio-style-3/:path*",
    "/portfolio-style-4/:path*",
    "/portfolio-style-5/:path*",
    "/pricing-plane/:path*",
    "/project/:path*",
    "/project-details/:path*",
    "/service-2/:path*",
    "/service-3/:path*",
    "/service-details/:path*",
    "/team/:path*",
    "/team-details/:path*",
    "/team-style-2/:path*",
    "/team-style-3/:path*",
    "/team-style-4/:path*",
    "/team-style-5/:path*",
    "/testimonial-style-1/:path*",
  ],
};
