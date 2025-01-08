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
}

export const mainStackSkills: ISkill[] = [
  {
    logo: htmlLogo,
    name: "HTML",
  },
  {
    logo: cssLogo,
    name: "CSS",
  },
  {
    logo: sassLogo,
    name: "SASS",
  },
  {
    logo: javascriptLogo,
    name: "JavaScript",
  },
  {
    logo: typescriptLogo,
    name: "TypeScript",
  },
  {
    logo: nodejsLogo,
    name: "Node.js",
  },
  {
    logo: reactLogo,
    name: "React.js",
  },
  {
    logo: nextjsLogo,
    name: "Next.js",
  },
  {
    logo: apolloLogo,
    name: "Apollo",
  },
  {
    logo: graphqlLogo,
    name: "GraphQL",
  },
  {
    logo: reduxLogo,
    name: "Redux",
  },
  {
    logo: tailwindcssLogo,
    name: "Tailwind CSS",
  },
  {
    logo: gsapLogo,
    name: "GSAP",
  },
  {
    logo: materialUiLogo,
    name: "Material-UI",
  },
  {
    logo: vitejsLogo,
    name: "Vite.js",
  },
  {
    logo: webpackLogo,
    name: "Webpack",
  },
];
