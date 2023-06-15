import { useState, useContext } from "react";

import { StoreContext } from "./store/Store";
import availableViews from "./resources/availableViews";

// TODO: make code more DRY by extracting a component that is fed either with languages or views

const ChangeView = () => {
  const { view, setView } = useContext(StoreContext);
  const [showViewsBox, setShowViewsBox] = useState(false);

  const chooseView = (chosenView) => {
    // TODO: add clickOutside function to close the ViewsBox; find way of avoiding that the ViewsBox keeps floating if user opens it and then scrolls (best way is possibly that the clickOutside event also responds to scrolling, closing the box in this case too). That said, it's expected that when the user clicks on the new View it immediately starts reloading the page, not making it necessary to close the ViewsBox
    if (view === chosenView) return;
    setView(chosenView);
    console.log(chosenView);
    localStorage.setItem("view", chosenView);
    setShowViewsBox(false);
  };

  const changeViewWorkflow = () => {
    setShowViewsBox(!showViewsBox);
    // clickOutside function needs to be implemented here
  };

  return (
    <div className="views-langs-container left">
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
          {availableViews.map((v) => (
            <button
              onClick={() => chooseView(v)}
              key={v}
              type="button"
              name={v}
              value={v}
              className={`view-btn ${v === view && "selected-view-btn"}`}
            >
              {(v.charAt(0).toUpperCase() + v.slice(1)).replace(/-/g, " ")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeView;
