import { useCallback } from "react";

import { downloadPDFfromUrl } from "../../../../utils/helpers/downloadFile";

import myCv from "@assets/pdfs/Resume --Maksim Harutyunyan (2024).pdf";

const DownloadCv = () => {
  const downloadMyCV = useCallback(() => {
    downloadPDFfromUrl(myCv, "Resume --Maksim Harutyunyan (2024)");
  }, []);

  return (
    <button onClick={downloadMyCV} className="rounded-lg text-dessert p-3 xs:px-1 xs:py-4 bg-glass/50 backdrop-blur-md hover:opacity-80 fixed right-4 xs:text-xs">
      Download CV
    </button>
  );
};

export default DownloadCv;
