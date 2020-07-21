import React, { useEffect, useState } from "react";
import {
  PauseButton,
  CountDown,
  TimerInput,
  HalfwayText,
  GroupedButtons,
} from "components";

function App() {
  const [activeSpeed, speedUpdater] = useState(1000);
  const [pause, pauseUpdater] = useState(true);
  const [second, secondUpdate] = useState(0);
  const [minute, minuteUpdate] = useState(0);
  const [timer, setTimer] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const onStart = () => {
    setTimer(true);
  };

  useEffect(() => {
    let intervalId;
    if (second <= 0 && minute > 0) {
      secondUpdate(59);
      minuteUpdate((min) => min - 1);
    }
    if (timer && pause) {
      intervalId = setInterval(
        () => secondUpdate((sec) => sec - 1),
        activeSpeed
      );
    }
    if (minute <= 0 && second <= 0) {
      setTimer(false);
    }
    return () => clearInterval(intervalId);
  }, [second, minute, timer, activeSpeed, pause]);

  const onChange = (e) => {
    if (
      parseInt(e.target.value) == e.target.value &&
      parseInt(e.target.value) > 0
    ) {
      setStartTime(e.target.value);
      minuteUpdate(parseInt(e.target.value - 1));
      secondUpdate(60);
    } else {
      setStartTime(0);
      minuteUpdate(0);
      secondUpdate(0);
    }
    setTimer(false);
  };

  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
      <div>
        <TimerInput onChange={onChange} onStart={onStart} />
        <HalfwayText startTime={startTime} second={second} minute={minute} />
        <div className="d-flex align-items-center pl-5">
          <CountDown sec={second} min={minute} />
          <PauseButton pause={pause} pauseUpdater={pauseUpdater} />
        </div>
        <GroupedButtons activeSpeed={activeSpeed} speedUpdater={speedUpdater} />
      </div>
    </div>
  );
}

export default App;
