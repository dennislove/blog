import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import CSS

export const PDFViewer = () => {
  return (
    <div style={{ height: '750px', marginTop: '40px' }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl="/Cv_Resume_Tran_Van_Tinh.pdf" />
      </Worker>
    </div>
  );
};
