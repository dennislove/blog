import { useState, CSSProperties, lazy, Suspense } from 'react';
import HashLoader from 'react-spinners/ClipLoader';
import { Title } from '../Title';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto'
};
const PDFViewer = lazy(() => import('../MyCV/PDFViewer'));

export const MyCV = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#A7E6FF');

  return (
    <div className="mt-20">
      <Title name="MyCV" />
      <Suspense
        fallback={
          <HashLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <PDFViewer />
      </Suspense>
    </div>
  );
};
