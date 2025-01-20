import { useCallback, useRef } from "react";
import CustomInput from "../../components/ui/customInput/CustomInput";
import CustomTextArea from "../../components/ui/customTextArea/CustomTextArea";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import emailService from "../../utils/services/emailService";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Loader from "../../components/ui/loader/Loader";

interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  yourMessage: string;
}

const ContactMeForm = () => {
  const currentFormRef = useRef<HTMLFormElement>(null);
  const methods = useForm<IInputs>();

  const { mutate: onSendEmail, isPending: isLoading } = useMutation({
    mutationFn: () => {
      return emailService.sendEmail(currentFormRef.current);
    },
    onSuccess: async () => {
      const { toast } = await import("react-toastify");
      toast.success("Your email was sent successfully");

      methods.reset();
    },
    onError: async () => {
      const { toast } = await import("react-toastify");

      toast.error("Something went wrong please try again later");
    },
  });

  const onSubmit: SubmitHandler<IInputs> = useCallback(async () => {
    onSendEmail();
  }, [onSendEmail]);

  return (
    <FormProvider {...methods}>
      <form className="xl:w-2/3 2xl:w-1/3 w-full flex flex-col items-center justify-center gap-2 rounded-lg" onSubmit={methods.handleSubmit(onSubmit)} ref={currentFormRef}>
        <ToastContainer />
        <CustomInput placeholder={"Name"} width={"100%"} name="name" />
        <CustomInput placeholder={"Email"} name="email" />
        <CustomTextArea placeholder="Your message" name={"message"} />
        <div className="flex items-center justify-end w-full">
          {isLoading ? (
            <div className="h-10 w-20 bg-green text-black rounded-lg font-bold flex items-center justify-center">
              <Loader width="20px" color="black" />
            </div>
          ) : (
            <button type="submit" className="h-10 w-20 bg-green text-black rounded-lg font-bold hover:opacity-55">
              Send
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactMeForm;
