import { lazy, Suspense } from "react";
import Footer from "../components/ui/footer/Footer.tsx";
import LoadingPage from "../components/ui/loadingPage/LoadingPage.tsx";

const HeroSection = lazy(() => import("./homePage/HeroSection.tsx"));
const AboutMe = lazy(() => import("./aboutMe/AboutMe.tsx"));
const Skills = lazy(() => import("./skills/Skills.tsx"));
const ContactMe = lazy(() => import("./contactMe/ContactMe.tsx"));

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <Suspense fallback={<LoadingPage />}>
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
