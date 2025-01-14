import gsap from "gsap";
import { FC, useCallback } from "react";
import { useFormContext } from "react-hook-form";

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

  const onFocus = useCallback((input: HTMLInputElement) => {
    gsap.to(input, {
      borderColor: "#86C232",
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  const onBlur = useCallback((input: HTMLInputElement) => {
    gsap.to(input, {
      borderColor: "transparent",
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div style={{ width }}>
      <p className={`text-sm mb-1 ml-1 ${errors[name] && isRequired ? "text-errorRed" : "text-silver"}`}>
        {placeholder}
        {isRequired && <span className="text-errorRed text-xs ml-1">*</span>}
      </p>
      <input type={type} id={name} className="focus:outline-none rounded-lg text-black py-1 px-2 border-2 border-transparent w-full" placeholder={"Enter " + placeholder.toLowerCase()} onFocus={(e) => onFocus(e.target)} {...register(name, { required: isRequired, onBlur: (e) => onBlur(e.target) })} />
      <p className="text-errorRed text-xs mt-1">{typeof errors[name]?.message === "string" && errors[name]?.message}</p>
    </div>
  );
};

export default CustomInput;
