import pageContents from "./pages/testPage1.js";

const PageContents = () => {
  return (
    <div className="page-contents-wrapper">
      {pageContents.map((paragraph, index) => (
        <p className="page-contents" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default PageContents;
