import { useState } from "react";
import { mockWeatherData } from "../../../public/weather-places";

export default function WeatherPage(params) {
    const [textValue, setTextValue] = useState("")

    function handleChange(e) {
        setTextValue(e.target.value)
    }

    function search() {
        console.log(mockWeatherData.find((elem, index) => index === value))
    }

    return (
        <>
            <input type="text" value={textValue} onChange={handleChange}/>
            <button onClick={search}>
                Search
            </button>
        </>
    );
}