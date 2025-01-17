import ContactMeForm from "./ContactMeForm";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { getHref, ROUTE_NAMES } from "../../utils/constants/sections";

const ContactMe = () => {
  useGSAP(() => {
    gsap.to("#contact_me_header", {
      opacity: 1,
      duration: 2,
      ease: "none",
    });
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-start xs:text-center px-10 gap-10 min-h-[74vh] pt-24 xs:pt-4" id={getHref(ROUTE_NAMES["CONTACT_ME"])}>
      <h2 className="text-4xl xs:text-3xl text-green opacity-0" id="contact_me_header">
        Reach Out and Let’s Build
      </h2>
      <ContactMeForm />
    </section>
  );
};

export default ContactMe;
