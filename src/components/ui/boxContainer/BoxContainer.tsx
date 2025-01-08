import { FC, ReactNode } from "react";

const BoxContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-[20%] border border-silver/45 rounded-lg backdrop-blur-lg bg-black/75">{children}</div>;
};

export default BoxContainer;
