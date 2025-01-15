import { useCallback, useRef } from "react";
import CustomInput from "../../components/ui/customInput/CustomInput";
import CustomTextArea from "../../components/ui/customTextArea/CustomTextArea";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  yourMessage: string;
}

const ContactMeForm = () => {
  const currentFormRef = useRef<HTMLFormElement>(null);
  const methods = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = useCallback(
    (data) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(data.email)) {
        methods.setError("email", { type: "custom", message: "Please enter a valid email" });
      }
    },
    [methods]
  );

  return (
    <FormProvider {...methods}>
      <form className="w-1/3 xs:w-full flex flex-col items-center justify-center gap-2 rounded-lg" onSubmit={methods.handleSubmit(onSubmit)} ref={currentFormRef}>
        <CustomInput placeholder={"Name"} width={"100%"} name="name" /> <CustomInput placeholder={"Email"} name="email" />
        <CustomTextArea placeholder="Your message" name={"message"} />
        <div className="flex items-center justify-end w-full">
          <button type="submit" className="py-2 px-4 bg-dessert text-black rounded-lg font-bold hover:opacity-55">
            Send
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactMeForm;
