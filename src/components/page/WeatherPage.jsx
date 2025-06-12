import { useState } from "react";

export default function WeatherPage(params) {
    const {textValue,setTextValue} = useState()
    const handleChange = (e) => {
        console.log(e.target.value)
        setTextValue(e.target.value)
    }

    return (
        <>
        <input type="text" value={textValue} onChange={handleChange}/>
        <button onClick={() => setTextValue(d => d + 1)}>
            Forzar re-render
        </button>
        </>
    );
}