import emailjs from "@emailjs/browser";

export type LoadingState = "loading" | "idle" | "error" | "success";

class EmailService {
  constructor() {
    if (EmailService.isInit) {
      throw new Error("This class cannot be called more than once!");
    } else {
      EmailService.isInit = true;
    }
  }

  static isInit = false;

  sendEmail(form: HTMLFormElement | null): Promise<void> {
    return new Promise((resolve, reject) => {
      if (form) {
        emailjs
          .sendForm("service_fvfdppe", "template_dluxwod", form, {
            publicKey: "6b0kJ0v18xFKiNPMM",
          })
          .then(() => resolve())
          .catch((error) => reject(error));
      }
    });
  }
}

const emailService = new EmailService();

export default emailService;
