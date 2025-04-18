import { FC } from "react";

const ProgressBar: FC<{ percent: number; customPercentTitle?: string }> = ({ percent, customPercentTitle }) => {
  return (
    <div className={"flex items-center justify-center gap-2 w-full"}>
      <div className="rounded-lg w-3/4 h-2 overflow-hidden border-2 border-green flex items-center justify-start">
        <div
          style={{
            height: "100%",
            width: percent + "%",
          }}
          className="bg-green"
        />
      </div>
      <p className="text-sm">{customPercentTitle || percent + "%"}</p>
    </div>
  );
};

export default ProgressBar;
