import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "src/app/(home-pages)/**",
      "src/app/(inner-page)/**",
      "src/app/(one-pages)/**",
      "src/components/about/**",
      "src/components/banner/**",
      "src/components/blog/**",
      "src/components/brand/**",
      "src/components/businesscase/**",
      "src/components/businessgoal/**",
      "src/components/calltoaction/**",
      "src/components/contactform/**",
      "src/components/counterup/**",
      "src/components/faq/**",
      "src/components/feature/**",
      "src/components/footer/**",
      "src/components/gallery/**",
      "src/components/header/**",
      "src/components/map/**",
      "src/components/pricing/**",
      "src/components/service/**",
      "src/components/team/**",
      "src/components/testimonials/**",
      "src/components/video/**",
      "src/components/whychooseus/**",
      "src/components/workingprocess/**",
      "src/components/BackToTop.jsx",
      "src/components/BlogGridMain.jsx",
      "src/components/BlogListMain.jsx",
      "src/components/Breadcrumb.jsx",
      "src/components/ErrorBoundary.jsx",
    ],
  },
  ...nextVitals,
];

export default eslintConfig;
