import { useCallback } from "react";

import { downloadPDFfromUrl } from "../../../../utils/helpers/downloadFile";

import myCv from "@assets/pdfs/Resume --Maksim Harutyunyan (2025).pdf";

const DownloadCv = () => {
  const downloadMyCV = useCallback(() => {
    downloadPDFfromUrl(myCv, "Resume --Maksim Harutyunyan (2025)");
  }, []);

  return (
    <button onClick={downloadMyCV} className="rounded-lg text-green bg-glass/50 backdrop-blur-md hover:opacity-80 text-xs md:text-base p-2">
      Download CV
    </button>
  );
};

export default DownloadCv;
