import { useState } from "react";

import availableViews from "./resources/availableViews";

const ChangeView = ({ view, setView }) => {
  const [showViewsBox, setShowViewsBox] = useState(false);

  const chooseView = (currentView) => {
    // TODO: add clickOutside function to close the ViewsBox; find way of avoiding that the ViewsBox keeps floating if user opens it and then scrolls (best way is possibly that the clickOutside event also responds to scrolling, closing the box in this case too). That said, it's expected that when the user clicks on the new View it immediately starts reloading the page, not making it necessary to close the ViewsBox
    if (view === currentView) return;
    setView(currentView);
    // setShowViewsBox(false);
  };

  const changeViewWorkflow = () => {
    setShowViewsBox(!showViewsBox);
    // clickOutside function needs to be implemented here
  };

  return (
    <div>
      <button
        onClick={() => changeViewWorkflow()}
        type="button"
        name="change-view"
        className="cab-upper-frame-script"
      >
        Change View
      </button>
      {showViewsBox && (
        <div className="views-box">
          <button
            onClick={() => setShowViewsBox(false)}
            type="button"
            name="close"
            className="view-btn"
          >
            X
          </button>
          {availableViews.map((currentView) => (
            <button
              onClick={() => chooseView(currentView)}
              key={currentView}
              type="button"
              name={currentView}
              value={currentView}
              className={`view-btn ${
                currentView === view && "selected-view-btn"
              }`}
            >
              {currentView}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeView;
