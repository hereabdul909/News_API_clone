import React, { useEffect, useState } from "react";
import axios from "axios";
import { TopContent } from "./StyledHeader";
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
    <header className="container ">
      <TopContent>
        <div>
          <p>{formattedDate}</p>
        </div>
        <div>
          <p>{temp}°C,London</p>
        </div>
        <div>
          <h1>World Vision</h1>
        </div>
        <div className="d-flex align-items-center">
          <p className="mx-1">English|Espanol</p>
          <ul className="d-flex list-unstyled">
            <li className="mx-2 fs-4">
              <AiFillLinkedin />
            </li>
            <li className="mx-2 fs-4">
              <AiFillFacebook />
            </li>
            <li className="mx-2 fs-4">
              <AiOutlineTwitter />
            </li>
            <li className="mx-2 fs-4">
              <AiFillInstagram />
            </li>
            <li className="mx-2 fs-4">
              <AiFillYoutube />
            </li>
          </ul>
        </div>
      </TopContent>
    </header>
  );
}

export default Header;
