import DescriptionSection from "./DescriptionSection";
import styles from "../../styles.module.scss";

const AboutThisPageHeader = () => {
  return (
    <div className={["w-full pt-28 pl-20 p-4 border-b flex items-center justify-start gap-20 h-[1000px] overflow-hidden home_about_header", styles["home_about_header"]].join(" ")}>
      <DescriptionSection />
    </div>
  );
};

export default AboutThisPageHeader;
