import VuMeterScale from "./resources/vu-meter-narrow.svg";

const VuMeter = () => {
  // const followCursor = () => {};

  return (
    <div className="vu-meter">
      <img src={VuMeterScale} alt="VuMeter scale" className="vu-meter-scale" />
      <div className="vu-needle"></div>
    </div>
  );
};

export default VuMeter;
