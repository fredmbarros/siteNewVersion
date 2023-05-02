const RadioDisplay = () => {
  return (
    <div className="radio-display">
      <div className="fm-station-container">
        <div className="fm-station">
          <span className="fm-station-number">88</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">90</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">92</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">94</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">96</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">98</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">100</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">102</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">104</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">106</span>
        </div>
        <div className="fm-station">
          <span className="fm-station-number">108</span>
        </div>
      </div>
      <div className="horizontal-line-top"></div>
      <div className="horizontal-line-middle"></div>
      <div className="horizontal-line-bottom"></div>
      <div className="am-container">
        <div className="am-indicator">
          <span className="am-station-number"></span>
        </div>
        <div className="am-station-container">
          <div className="am-station">
            <span className="am-station-number">540</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">600</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">700</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">800</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">1000</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">1200</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">1400</span>
          </div>
          <div className="am-station">
            <span className="am-station-number">1600</span>
          </div>
          {/* <div className="am-station">
          <span className="am-station-number">108</span>
        </div> */}
        </div>
      </div>
      <div className="radio-pointer">
        <div className="radio-pointer-tip"></div>
      </div>
    </div>
  );
};

export default RadioDisplay;
