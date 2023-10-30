import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);

  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const increaseMinutes = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };

  const decreaseMinutes = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };

  const increaseHours = () => {
    setHours((hour) => hour + 1);
  };
  const decreaseHours = () => {
    if (hours == 0) return;
    setHours((hour) => hour - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="bg-deepBlue w-[1038px] h-[333px] flex items-center justify-around rounded-lg  text-white">
      <div className="w-[282px] h-[282px] relative bg-circleColor flex items-center justify-center rounded-[282px]">
        {/* <img src={Ellipse} alt="ellipse" /> */}
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          size={220}
        >
          {({ remainingTime }) => (
            <span className="absolute text-5xl">
              {toHoursAndMinutes(remainingTime)}{" "}
            </span>
          )}
        </CountdownCircleTimer>
      </div>

      <div className=" w-1/2 flex flex-col  justify-between h-[282px]">
        <div className="  flex justify-around  items-center ">
          <div className="flex flex-col items-center justify-between h-48 ">
            <span className="text-2xl text-gray-400 ">Hours</span>
            <img
              src={upArrow}
              alt="up"
              className="w-[27px] h-[17.221px] cursor-pointer"
              onClick={() => increaseHours()}
            />
            <span className="text-4xl ">{hours}</span>
            <img
              src={downArrow}
              alt="down"
              className="w-[27px] h-[17.221px] cursor-pointer"
              onClick={() => decreaseHours()}
            />
          </div>
          <span className="text-lg font-bold mt-8">:</span>
          <div className="flex flex-col items-center  justify-between h-48 ">
            <span className="text-2xl text-gray-400 ">Minutes</span>
            <img
              src={upArrow}
              alt="up"
              className="w-[27px] h-[17.221px] cursor-pointer"
              onClick={() => increaseMinutes()}
            />
            <span className="text-4xl">{minutes}</span>
            <img
              src={downArrow}
              alt="down"
              className="w-[27px] h-[17.221px] cursor-pointer"
              onClick={() => decreaseMinutes()}
            />
          </div>

          <span className="text-lg font-bold mt-8">:</span>
          <div className="flex flex-col items-center  justify-between h-48 ">
            <span className="text-2xl text-gray-400 ">Seconds</span>
            <img
              src={upArrow}
              alt="up"
              className="w-[27px] h-[17.221px] cursor-pointer"
              onClick={() => increaseSecond()}
            />
            <span className="text-4xl">{seconds}</span>
            <img
              src={downArrow}
              alt="down"
              className="w-[27px] h-[17.221px] cursor-pointer"
              onClick={() => decreaseSecond()}
            />
          </div>
        </div>

        <div
          className="h-[47px] bg-salmon rounded-[20px] text-center text-2xl cursor-pointer"
          onClick={() => setPlaying((prev) => !prev)}
        >
          <button className="mt-1"> {playing ? "STOP" : "START"} </button>
        </div>
      </div>
    </div>
  );
}
