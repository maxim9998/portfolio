import AboutThisPage from "./aboutThisPage/AboutThisPage.tsx";
import HeroSection from "./hero/HeroSection.tsx";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-start">
      <HeroSection />
      <AboutThisPage />
    </main>
  );
};

export default HomePage;
