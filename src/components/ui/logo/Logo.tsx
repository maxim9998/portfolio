import { FC } from "react";

const Logo: FC<{ src: string; className?: string }> = ({ src, className }) => {
  return <img src={src} alt="logo" className={`h-16 ${className}`} />;
};

export default Logo;
