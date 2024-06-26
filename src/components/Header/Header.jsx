import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
function Header() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=d62d99fdb9f84c2a2e6b2e0de41f55a9"
        );
        setWeatherData(response.data);
      } catch (error) {
        setError("Error fetching weather data");
      }
    };
    fetchWeatherData();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  if (!weatherData) {
    return null;
  }
  const { temp } = weatherData.main;
  const currentDate = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <header className="container-xl d-sm-flex justify-content-between align-items-center p-2 text-center border-bottom border-dark">
      <div className="d-lg-flex">
        <div className="mx-3">
          <p>{formattedDate}</p>
        </div>
        <div className="mx-3">
          <p>{temp}°C,London</p>
        </div>
      </div>
      <div>
        <h1>World Vision</h1>
      </div>
      <div className="d-lg-flex align-items-center">
        <div className="mx-2">
          <p className="">English|Espanol</p>
        </div>
        <div className="mx-2 ">
          <ul className=" d-flex justify-content-center list-unstyled ">
            <li className="fs-4 mx-1">
              <AiFillLinkedin />
            </li>
            <li className="fs-4 mx-1">
              <AiFillFacebook />
            </li>
            <li className="fs-4 mx-1">
              <AiOutlineTwitter />
            </li>
            <li className="fs-4 mx-1">
              <AiFillInstagram />
            </li>
            <li className="fs-4 mx-1">
              <AiFillYoutube />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
