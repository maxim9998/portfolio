import BoxContainer from "../../../components/ui/boxContainer/BoxContainer";
import { HOME_PAGE_SECTIONS } from "../../../utils/constants/HomePageSections";
import styles from "../styles.module.scss";
import AboutThisPageHeader from "./aboutThisPageHeader/AboutThisPageHeader.tsx";

const AboutThisPage = () => {
  return (
    <section className={["w-full h-screen flex flex-col items-start justify-between", styles["about_this_page"]].join(" ")} id="aboutThisPage">
      <AboutThisPageHeader />
      <div className="h-full w-full flex items-center justify-around flex-wrap gap-3">
        {HOME_PAGE_SECTIONS.map((section) => (
          <BoxContainer key={section.title}>{section.data}</BoxContainer>
        ))}
      </div>
    </section>
  );
};

export default AboutThisPage;
