import { lazy, Suspense } from "react";
import Footer from "../components/ui/footer/Footer.tsx";

const HeroSection = lazy(() => import("./homePage/HeroSection.tsx"));
const AboutMe = lazy(() => import("./aboutMe/AboutMe.tsx"));
const Skills = lazy(() => import("./skills/Skills.tsx"));
const ContactMe = lazy(() => import("./contactMe/ContactMe.tsx"));

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-start w-screen">
      <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection />
        <AboutMe />
        <Skills />
        <ContactMe />
        <Footer />
      </Suspense>
    </main>
  );
};

export default HomePage;
