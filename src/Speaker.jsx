import { lazy, Suspense } from "react";

import PageContents from "./PageContents";

const pageToLoad = lazy(() => import(`./pages/${pageToLoad}.js`));

const Speaker = () => {
  return (
    <div className="speaker">
      <div className="grille">
        <Suspense fallback={<p>Loading...</p>}>
          <PageContents pageToLoad={pageToLoad} />
        </Suspense>
      </div>
    </div>
  );
};

export default Speaker;
