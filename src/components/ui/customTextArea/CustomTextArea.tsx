import gsap from "gsap";
import { FC, useCallback } from "react";
import { useFormContext } from "react-hook-form";

const CustomTextArea: FC<{ placeholder: string; name: string; isRequired?: boolean }> = ({ placeholder, name, isRequired = true }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const onFocus = useCallback((input: HTMLTextAreaElement) => {
    gsap.to(input, {
      borderColor: "#86C232",
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  const onBlur = useCallback((input: HTMLTextAreaElement) => {
    gsap.to(input, {
      borderColor: "transparent",
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="w-full">
      <p className={`text-sm mb-1 ml-1 ${errors[name] && isRequired ? "text-errorRed" : "text-silver"}`}>
        {placeholder}
        {isRequired && <span className="text-errorRed text-xs ml-1">*</span>}
      </p>
      <textarea id={name} className="focus:outline-none rounded-lg text-black py-1 px-2 border-2 border-transparent w-full h-64" placeholder={"Enter " + placeholder.toLowerCase()} onFocus={(e) => onFocus(e.target)} {...register(name, { required: isRequired, onBlur: (e) => onBlur(e.target) })} />
    </div>
  );
};

export default CustomTextArea;
