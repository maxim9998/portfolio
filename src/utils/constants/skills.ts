import javascriptLogo from "@assets/images/logos/javascript.svg";
import htmlLogo from "@assets/images/logos/html.svg";
import cssLogo from "@assets/images/logos/css.svg";
import typescriptLogo from "@assets/images/logos/typescript.svg";
import graphqlLogo from "@assets/images/logos/graphql.svg";
import nodejsLogo from "@assets/images/logos/nodejs.svg";
import reactLogo from "@assets/images/logos/react.svg";
import apolloLogo from "@assets/images/logos/apollo.svg";
import gsapLogo from "@assets/images/logos/gsap.svg";
import materialUiLogo from "@assets/images/logos/materialUi.svg";
import nextjsLogo from "@assets/images/logos/nextjs.svg";
import reduxLogo from "@assets/images/logos/redux.svg";
import sassLogo from "@assets/images/logos/sass.svg";
import tailwindcssLogo from "@assets/images/logos/tailwindcss.svg";
import vitejsLogo from "@assets/images/logos/vitejs.svg";
import webpackLogo from "@assets/images/logos/webpack.svg";

export interface ISkill {
  logo: string;
  name: string;
  mastery: number; // Percentage of proficiency
  description: string;
}

export const mainStackSkills: ISkill[] = [
  {
    logo: htmlLogo,
    name: "HTML",
    mastery: 95,
    description: "Expert in semantic HTML, accessibility, and SEO best practices.",
  },
  {
    logo: cssLogo,
    name: "CSS",
    mastery: 90,
    description: "Strong knowledge of modern CSS techniques including Flexbox, Grid, and animations.",
  },
  {
    logo: sassLogo,
    name: "SASS",
    mastery: 85,
    description: "Experience with SASS for modular styling and maintaining scalable CSS architecture.",
  },
  {
    logo: javascriptLogo,
    name: "JavaScript",
    mastery: 95,
    description: "Highly proficient in ES6+ features, asynchronous programming, and performance optimizations.",
  },
  {
    logo: typescriptLogo,
    name: "TypeScript",
    mastery: 90,
    description: "Strong experience with TypeScript for scalable, type-safe JavaScript applications.",
  },
  {
    logo: nodejsLogo,
    name: "Node.js",
    mastery: 85,
    description: "Capable of building scalable backend services and APIs with Express.js and other frameworks.",
  },
  {
    logo: reactLogo,
    name: "React.js",
    mastery: 95,
    description: "Expert in React with deep knowledge of hooks, context, and state management techniques.",
  },
  {
    logo: nextjsLogo,
    name: "Next.js",
    mastery: 90,
    description: "Experience in SSR, SSG, and API routes for full-stack applications.",
  },
  {
    logo: apolloLogo,
    name: "Apollo",
    mastery: 85,
    description: "Well-versed in Apollo Client and Server for efficient GraphQL queries and caching.",
  },
  {
    logo: graphqlLogo,
    name: "GraphQL",
    mastery: 90,
    description: "Proficient in designing and consuming GraphQL APIs for flexible data fetching.",
  },
  {
    logo: reduxLogo,
    name: "Redux",
    mastery: 90,
    description: "Experience managing global state efficiently using Redux and Redux Toolkit.",
  },
  {
    logo: tailwindcssLogo,
    name: "Tailwind CSS",
    mastery: 85,
    description: "Proficient in utility-first styling with Tailwind CSS for rapid UI development.",
  },
  {
    logo: gsapLogo,
    name: "GSAP",
    mastery: 75,
    description: "Familiar with GSAP for high-performance animations and interactive UI elements.",
  },
  {
    logo: materialUiLogo,
    name: "Material-UI",
    mastery: 90,
    description: "Experienced in building modern UI components using Material-UI.",
  },
  {
    logo: vitejsLogo,
    name: "Vite.js",
    mastery: 85,
    description: "Proficient in Vite for fast development and optimized builds.",
  },
  {
    logo: webpackLogo,
    name: "Webpack",
    mastery: 80,
    description: "Good understanding of Webpack for bundling and optimizing web applications.",
  },
];
