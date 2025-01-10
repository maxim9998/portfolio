import HeroSection from "./homePage/HeroSection.tsx";
import AboutMe from "./aboutMe/AboutMe.tsx";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-start">
      <HeroSection />
      <AboutMe />
    </main>
  );
};

export default HomePage;
