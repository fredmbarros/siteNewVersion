import VuMeterScale from "./resources/vu-meter.svg";

const VuMeter = () => {
  return (
    <div className="vu-meter">
      <img src={VuMeterScale} alt="VuMeter scale" className="vu-meter-scale" />
      {/* <div className="vu-meter-scale"></div> */}
      {/* <div className="vu-meter-scale-red"></div> */}
    </div>
  );
};

export default VuMeter;
