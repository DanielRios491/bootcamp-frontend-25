import Text from "../atoms/Text"
import { Input } from "../atoms/Input"
import { Buttons } from "../molecules/Buttons"
import "./CalculatorStyles.css"
import { useState } from "react"

export default function Calculator() {
  const [inputNumber, setInputNumber] = useState()

  function handleChange(event){
    setInputNumber(event.target.value)
  }
  
  return (
  <div className="calculator">
    <Text value={"Calculator"}/>
    <Input placeholder="Type a number" type="number" id={1} onChange={handleChange} value={inputNumber} style={""}/>
    <Buttons/>
  </div>
  )
}