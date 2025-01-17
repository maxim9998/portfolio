import { FC, useMemo } from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

interface ICustomInput {
  placeholder: string;
  width?: string | number;
  name: string;
  isRequired?: boolean;
  type?: string;
}

const CustomInput: FC<ICustomInput> = ({ placeholder, width = "100%", name, isRequired = true, type = "text" }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isEmail = useMemo(() => name === "email", [name]);

  const registerData = useMemo(() => {
    const data: RegisterOptions<FieldValues, string> = {
      required: isRequired,
    };

    if (isEmail) {
      data.pattern = {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email",
      };
    }

    return data;
  }, [isEmail, isRequired]);

  const errorText = useMemo(() => typeof errors[name]?.message === "string" && errors[name]?.message, [errors, name]);

  return (
    <div style={{ width }}>
      <p className={`text-sm mb-1 ml-1 ${errors[name] && isRequired ? "text-errorRed" : "text-silver"}`}>
        {placeholder}
        {isRequired && <span className="text-errorRed text-xs ml-1">*</span>}
      </p>
      <input type={type} id={name} className="focus:outline-none rounded-lg text-black py-1 px-2 border-2 border-transparent w-full" placeholder={"Enter " + placeholder.toLowerCase()} {...register(name, registerData)} />
      <p className="text-errorRed text-xs mt-1">{errorText}</p>
    </div>
  );
};

export default CustomInput;
