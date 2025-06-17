import { useState } from "react";
import { mockWeatherData } from "../../../public/weather-places";

export default function WeatherPage() {
    const [textValue, setTextValue] = useState("");
    const [cityData, setCityData] = useState(null);

    function handleChange(e) {
        setTextValue(e.target.value);
    }

    function search() {
        const data = mockWeatherData[textValue];
        setCityData(data || null);
    }

    function clean(){
        setCityData({})
        setTextValue("")
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city name"
                value={textValue}
                onChange={handleChange}
            />
            <button onClick={search}>Search</button>
            <button onClick={clean}>Clean</button>

            {cityData && (
                <>
                <h2>{textValue}</h2>
                {Object.entries(cityData).map(([index, value]) => (
                    <div key={index}>
                    <strong>{index}</strong>: {value}
                    </div>
                ))}
                </>
            )}
        </div>
    );
}
