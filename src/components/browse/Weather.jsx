import line from "../../assets/Line.svg";
import temp from "../../assets/temp.svg";
import wind from "../../assets/wind.svg";
import humidity from "../../assets/humidity.svg";
import { useEffect, useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    const fetchWeatherData = async () => {
      await fetch(
        "https://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=India&aqi=no"
      )
        .then(async (response) => await response.json())
        .then((data) => setWeatherData(data));
    };
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  }, []);
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  }, []);
  return (
    <div className="w-[507px] h-[127px]    text-white">
      <div className="bg-mediumorchid h-[55px] rounded-t-lg flex items-center justify-around text-2xl font-semibold">
        <div> {date} </div>
        <div>{time} </div>
      </div>
      <div className="h-full bg-darkslateblue rounded-b-lg flex items-center justify-around ">
        <div className=" w-1/3 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <img
              src={weatherData?.current?.condition?.icon}
              alt="rain"
              className="h-[56.232px] w-[61.856px]"
            />
            <span>{weatherData?.current?.condition?.text}</span>
          </div>
          <div>
            <img src={line} alt="line" />
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <span className="text-3xl">{weatherData?.current?.temp_c}°C</span>

            <div className="flex item-center ">
              <img src={temp} alt="pressure" />

              <span className=" text-sm ml-2">
                {weatherData?.current?.pressure_mb} mbar <br /> Pressure{" "}
              </span>
            </div>
          </div>
          <div>
            <img src={line} alt="line" />
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-between text-sm">
          <div className="flex items-center mb-2 ">
            <img src={wind} alt="wind" />
            <span className="ml-2">
              {weatherData?.current?.wind_kph} km/h <br /> Wind
            </span>
          </div>

          <div className="flex items-center">
            <img src={humidity} alt="humidity" />
            <span className="ml-2">
              {weatherData?.current?.humidity}% <br /> Humidity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
