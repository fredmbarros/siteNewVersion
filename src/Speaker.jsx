import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Teaching from "./pages/Teaching.jsx";
import Research from "./pages/Research.jsx";
import Art from "./pages/Art.jsx";
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
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/research" element={<Research />} />
            <Route path="/art" element={<Art />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/undergrad" element={<Undergrad />} />
            <Route path="/grad" element={<Grad />} />
            <Route path="/mbp" element={<MBP />} />
            <Route path="/interlocution" element={<Interlocution />} />
            <Route path="/music" element={<Music />} />
            <Route path="/illustration" element={<Illustration />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Speaker;
