import React from "react";
import Blink from "react-blink-text";
const CountDown = (props) => {
  let min = props.min < 10 ? "0" + props.min : props.min;
  let sec = props.sec < 10 ? "0" + props.sec : props.sec;
  let text = min + ":" + sec;
  let mystyle = {
    color: min < 1 && sec < 21 ? "red" : "black",
  };

  if (min == 0 && sec == 0) {
    text = min + ":" + sec;
  } else if (min < 1 && sec < 11) {
    text = <Blink color="red" fontSize="20" text={text} />;
  }

  return (
    <div className="display-1 font-weight-bold text-center mr-3">
      <div style={mystyle} className="d-flex justify-content-center">
        {text}
      </div>
    </div>
  );
};

export default CountDown;
