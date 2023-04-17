import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import PageContents from "./PageContents";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Undergrad from "./pages/Undergrad.jsx";
import Grad from "./pages/Grad.jsx";
import MBP from "./pages/MBP.jsx";
import Interlocution from "./pages/Interlocution.jsx";
import Music from "./pages/Music.jsx";
import Illustration from "./pages/Illustration.jsx";

const pageToLoad = lazy(() => import(`./pages/${pageToLoad}.js`));

const Speaker = () => {
  return (
    <div className="speaker">
      <div className="grille">
        <Suspense fallback={<p>Loading...</p>}>
          <BrowserRouter>
            <Routes>
              <Route path="/home/about" element={<About />} />
              <Route path="/home/contact" element={<Contact />} />
              <Route path="/teaching/undergrad" element={<Undergrad />} />
              <Route path="/teaching/grad" element={<Grad />} />
              <Route path="/research/mbp" element={<MBP />} />
              <Route
                path="/research/interlocution"
                element={<Interlocution />}
              />
              <Route path="/art/music" element={<Music />} />
              <Route path="/art/illustration" element={<Illustration />} />
            </Routes>
          </BrowserRouter>
          {/* <PageContents pageToLoad={pageToLoad} /> */}
        </Suspense>
      </div>
    </div>
  );
};

export default Speaker;
