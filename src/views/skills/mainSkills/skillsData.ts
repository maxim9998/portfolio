import apolloLogo from "@assets/images/logos/apollo.svg";
import cssLogo from "@assets/images/logos/css.svg";
import expressLogo from "@assets/images/logos/express.svg";
import graphqlLogo from "@assets/images/logos/graphql.svg";
import gsapLogo from "@assets/images/logos/gsap.svg";
import htmlLogo from "@assets/images/logos/html.svg";
import javascriptLogo from "@assets/images/logos/javascript.svg";
import materialUiLogo from "@assets/images/logos/materialUi.svg";
import nextjsLogo from "@assets/images/logos/nextjs.svg";
import nodejsLogo from "@assets/images/logos/nodejs.svg";
import reactLogo from "@assets/images/logos/react.svg";
import reduxLogo from "@assets/images/logos/redux.svg";
import sassLogo from "@assets/images/logos/sass.svg";
import tailwindcssLogo from "@assets/images/logos/tailwindcss.svg";
import typescriptLogo from "@assets/images/logos/typescript.svg";
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
    description: "Expert in semantic HTML, accessibility, and SEO-focused best practices.",
  },
  {
    logo: cssLogo,
    name: "CSS",
    mastery: 90,
    description: "Strong knowledge of modern CSS, including Flexbox, Grid, and animations.",
  },
  {
    logo: sassLogo,
    name: "SASS",
    mastery: 90,
    description: "Skilled in SASS for modular styling and maintaining scalable architectures.",
  },
  {
    logo: javascriptLogo,
    name: "JavaScript",
    mastery: 95,
    description: "Proficient in ES6+ features, asynchronous programming, and code performance.",
  },
  {
    logo: typescriptLogo,
    name: "TypeScript",
    mastery: 85,
    description: "Experienced in building scalable and type-safe apps with TypeScript.",
  },
  {
    logo: nodejsLogo,
    name: "Node.js",
    mastery: 70,
    description: "Capable of building scalable backends and APIs using Node.js and Express.",
  },
  {
    logo: reactLogo,
    name: "React.js",
    mastery: 95,
    description: "Expert in React with deep knowledge of hooks, context, and state management.",
  },
  {
    logo: nextjsLogo,
    name: "Next.js",
    mastery: 85,
    description: "Skilled in SSR, SSG, and building APIs for full-stack web applications.",
  },
  {
    logo: expressLogo,
    name: "Express.js",
    mastery: 85,
    description: "Skilled in building RESTful APIs, middleware, and authentication with JWT & OAuth.",
  },
  {
    logo: apolloLogo,
    name: "Apollo",
    mastery: 85,
    description: "Experienced in Apollo Client and Server for GraphQL queries and caching.",
  },
  {
    logo: graphqlLogo,
    name: "GraphQL",
    mastery: 90,
    description: "Proficient in designing and using GraphQL APIs for versatile data fetching.",
  },
  {
    logo: reduxLogo,
    name: "Redux",
    mastery: 90,
    description: "Skilled in managing global state with Redux and Redux Toolkit efficiently.",
  },
  {
    logo: tailwindcssLogo,
    name: "Tailwind CSS",
    mastery: 95,
    description: "Proficient in Tailwind CSS for utility-first styling and rapid UI creation.",
  },
  {
    logo: gsapLogo,
    name: "GSAP",
    mastery: 75,
    description: "Familiar with GSAP for creating animations and interactive UI elements.",
  },
  {
    logo: materialUiLogo,
    name: "Material-UI",
    mastery: 90,
    description: "Experienced in building modern UI components with Material-UI.",
  },
  {
    logo: vitejsLogo,
    name: "Vite.js",
    mastery: 95,
    description: "Skilled in using Vite for fast project development and optimized builds.",
  },
  {
    logo: webpackLogo,
    name: "Webpack",
    mastery: 80,
    description: "Good understanding of Webpack for efficient bundling and web optimization.",
  },
];
