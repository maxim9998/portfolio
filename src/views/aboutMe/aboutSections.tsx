import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";

export const aboutSections = [
  {
    title: "Location & Background",
    content: "Based in Yerevan, Armenia. Passionate front-end developer focused on performance, clean architecture, and seamless user experience.",
    icon: <FaMapMarkerAlt className="text-yellow-500 text-2xl" />,
  },
  {
    title: "Education",
    content: "Bachelor’s in International Relations from the Russian-Armenian (Slavonic) University. Completed advanced JavaScript training at Armenian Code Academy and TECH 42.",
    icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
  },
  {
    title: "Military Experience",
    content: "Served 2 Years in the Armenian Military (2019-2021). Developed resilience, teamwork, and problem-solving skills.",
    icon: <FaUserShield className="text-red-500 text-2xl" />,
  },
  {
    title: "Front-End Development Career",
    content: "Over 3 years of experience as a Front-End Developer, specializing in React, TypeScript, GraphQL, and Redux Toolkit. Focused on building scalable, high-performance applications with modern UI/UX practices.",
    icon: <FaLaptopCode className="text-green-500 text-2xl" />,
  },
  {
    title: "React Developer at DataESG Solutions",
    content: "Built the client-side of a semantic search platform for investment research in the Private Equity and Tech sectors. Integrated ML-powered search results into a user-friendly React interface and implemented Redux Toolkit to manage complex state logic efficiently.",
    icon: <FaBriefcase className="text-purple-500 text-2xl" />,
  },
  {
    title: "React Developer at Cretrix",
    content: "Worked on a large-scale construction management platform, collaborating with UI/UX designers to transform Figma designs into intuitive and responsive interfaces. Integrated GraphQL for flexible data handling and optimized performance using Vite, lazy loading, and code splitting. Contributed to a clean Git workflow within a cross-functional development team. Worked closely with UI/UX designers to develop intuitive web applications using Figma. Integrated GraphQL for efficient data fetching and improved client-server communication. Managed version control and collaborated with a team using Git.",
    icon: <FaBriefcase className="text-purple-500 text-2xl" />,
  },
];
