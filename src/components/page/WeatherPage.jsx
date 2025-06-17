import { useState } from "react";
import { mockWeatherData } from "../../../public/weather-places";

export default function WeatherPage(params) {
    const [textValue, setTextValue] = useState("")

    function handleChange(e) {
        setTextValue(e.target.value)
    }

    function search() {
        console.log(mockWeatherData);
        
        console.log(mockWeatherData[textValue])
    }

    return (
        <div>
            <input type="text" value={textValue} onChange={handleChange}/>
            <button onClick={search}>
                Search
            </button>
            
            {
                (textValue === "") && <>
                <label htmlFor="city">{ textValue }</label>
                {mockWeatherData[textValue].map((elem, index) => {
                    return (<div><span>{{index}}: </span><span>{{elem}}</span></div>);
                })}
                </>
            }
            
        </div>
    );
}