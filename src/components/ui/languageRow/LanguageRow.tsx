import { FC } from "react";
import ProgressBar from "../progressBar/ProgressBar";
import { ILanguage } from "../../../utils/constants/languages";

const LanguageRow: FC<ILanguage> = ({ flag, name, proficiency, level }) => {
  return (
    <div className="w-full border rounded-lg px-2 py-4 flex items-center justify-between">
      <div className="flex items-center justify-start gap-4 w-1/2">
        <img src={flag} alt="flag" className="h-10" />
        <h4 className="text-lg text-dessert">{name}</h4>
      </div>
      <div className="w-1/4">
        <ProgressBar percent={proficiency} customPercentTitle={level} />
      </div>
    </div>
  );
};

export default LanguageRow;
