import { FC } from "react";
import { useFormContext } from "react-hook-form";

const CustomTextArea: FC<{ placeholder: string; name: string; isRequired?: boolean }> = ({ placeholder, name, isRequired = true }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <p className={`text-sm mb-1 ml-1 ${errors[name] && isRequired ? "text-errorRed" : "text-silver"}`}>
        {placeholder}
        {isRequired && <span className="text-errorRed text-xs ml-1">*</span>}
      </p>
      <textarea id={name} className="focus:outline-none rounded-lg text-black py-1 px-2 border-2 border-transparent w-full h-64" placeholder={"Enter " + placeholder.toLowerCase()} {...register(name, { required: isRequired })} />
    </div>
  );
};

export default CustomTextArea;
