import { PDFViewer } from './PDFViewer';
import { Title } from '../Title';

export const MyCV = () => {
  return (
    <div className="mt-20">
      <Title name="MyCV" />
      <PDFViewer />
    </div>
  );
};
