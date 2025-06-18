import React from 'react';
import {Button} from "../atoms/Button"
import "./MoleculesStyles.css"

export const Buttons = () => {
  return (
    <div className = "buttons" >
        <Button color = {"white"} >  add</Button>
        <Button color = {"white"}> substract</Button>
        <Button color = {"white"}> multiply</Button>
        <Button color = {"white"}> divide</Button>
        <Button color = {"orange"}> resetInput</Button>
        <Button color = {"orange"}> resetResult</Button>
    </div>
  )
}
