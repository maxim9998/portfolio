import { useCallback } from "react";

import { downloadPDFfromUrl } from "../../../../utils/helpers/downloadFile";

import myCv from "@assets/pdfs/Resume --Maksim Harutyunyan (2024).pdf";

const DownloadCv = () => {
  const downloadMyCV = useCallback(() => {
    downloadPDFfromUrl(myCv, "Resume --Maksim Harutyunyan (2024)");
  }, []);

  return (
    <label className="group fixed right-0 pr-4">
      <button onClick={downloadMyCV} className="rounded-lg text-dessert border border-dessert/60 bg-glass backdrop-blur h-12 px-2">
        Download CV
      </button>
    </label>
  );
};

export default DownloadCv;
